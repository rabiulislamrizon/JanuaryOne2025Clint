import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const OrderDashboard = () => {
  const [orderData, setOrderData] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    totalOrders: 0,
    totalSales: 0,
    pendingOrders: 0,
  });

  // Fetch data dynamically (e.g., from your API or database)
  useEffect(() => {
    fetch('http://localhost:5000/orders') // Change this URL to your actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        // Extracting summary data
        const totalOrders = data.length;
        const totalSales = data.reduce((acc, order) => acc + parseFloat(order.packagePrice), 0);
        const pendingOrders = data.filter(order => order.orderStatus === 'Pending').length;

        setOrderSummary({
          totalOrders,
          totalSales,
          pendingOrders,
        });

        // Storing the order data for table and chart
        setOrderData(data);
      })
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  // Grouping sales by month
  const groupByMonth = (data) => {
    const monthlySales = {};
    data.forEach((order) => {
      const month = new Date(order.orderDate).toLocaleString('default', { month: 'short' }); // Get short month name
      if (!monthlySales[month]) {
        monthlySales[month] = 0;
      }
      monthlySales[month] += parseFloat(order.packagePrice);
    });
    return monthlySales;
  };

  const totalSellItems = orderData.length; // Total items sold (orders count)
  const monthlySalesData = groupByMonth(orderData); // Sales by month

  // Prepare the chart data
  const dataChartOptions = {
    labels: orderData.map(order => order.paymentId), // Order ID or Customer Name as x-axis
    datasets: [
      {
        label: 'Package Price',
        data: orderData.map(order => parseFloat(order.packagePrice)),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: 'Sales by Package',
        data: orderData.map(order => parseFloat(order.packagePrice)),
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: 'Total Sell Item',
        data: Array(orderData.length).fill(totalSellItems), // Show total sell items
        fill: false,
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: 'Monthly Sales',
        data: Object.values(monthlySalesData),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
        borderWidth: 2,
      }
    ],
  };

  const optionsChartOptions = {
    scales: {
      x: {
        ticks: {
          color: '#4285F4',
        },
        title: {
          display: true,
          text: 'Order ID',
        },
      },
      y: {
        ticks: {
          color: '#f44242',
        },
        title: {
          display: true,
          text: 'Price/Status',
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
  };

  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center mb-4">Order Dashboard</h2>

      {/* Order Summary */}
      <div className="row mb-4">
        <div className="col-md-4 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">{orderSummary.totalOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text">${orderSummary.totalSales.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text">{orderSummary.pendingOrders}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <Line data={dataChartOptions} options={optionsChartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Order People Names */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Customer Names</h5>
              <ul className="list-group">
                {orderData.map((order, index) => (
                  <li key={index} className="list-group-item">{order.customerName}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Details</h5>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Package Name</th>
                    <th>Payment Status</th>
                    <th>Order Status</th>
                    <th>Order Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order, index) => (
                    <tr key={index}>
                      <td>{order.paymentId}</td>
                      <td>{order.customerName}</td>
                      <td>{order.packageName}</td>
                      <td>{order.paymentStatus}</td>
                      <td>{order.orderStatus}</td>
                      <td>{order.orderDate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
