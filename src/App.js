
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Shared/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './components/Shared/Footer/Footer';
import ContactUs from './Pages/ContactUs';
import BannerSection from './Pages/AdminSection/BannerSection';
import Admin from './Pages/AdminSection/Admin';
import OrderNow from './Pages/OrderNow';
import TotalOrders from './Pages/AdminSection/TotalOrders';
import AddItem from './Pages/AdminSection/AddItem';
import UserDashboard from './Pages/UserDashboard';
import AboutSection from './Pages/AdminSection/AboutSection';
import VideoSection from './Pages/AdminSection/VideoSection';
import ServicesSection from './Pages/AdminSection/ServicesSection';
import UpdateAboutSection from './Pages/AdminSection/UpdateAboutSection';
import Setting from './Pages/AdminSection/Setting';
import UpdateVideoSection from './Pages/AdminSection/UpdateVideoSection';
import EditService from './Pages/AdminSection/EditService';
import StepSection from './Pages/AdminSection/StepSection';
import EditStep from './Pages/AdminSection/EditStep';
import Logo from './Pages/AdminSection/Logo';
import ContactPage from './Pages/AdminSection/ContactPage';
import Subscribers from './Pages/AdminSection/Subscribers';
import Messages from './Pages/AdminSection/Messages';
import ViewMessage from './Pages/AdminSection/ViewMessage';
import PendingOrder from './Pages/PendingOrder';
import UpdateBannerSection from './Pages/AdminSection/UpdateBannerSection';
import PaymentStatus from './Pages/AdminSection/PaymentStatus';
import FooterAbout from './Pages/AdminSection/FooterAbout';
import FooterContact from './Pages/AdminSection/FooterContact';
import FooterSocial from './Pages/AdminSection/FooterSocial';
import EditFooterabout from './Pages/AdminSection/EditFooterabout';
import EditFooterContact from './Pages/AdminSection/EditFooterContact';
import EditFooterSocial from './Pages/AdminSection/EditFooterSocial';
import EditLogo from './Pages/AdminSection/EditLogo';
import EditContactPage from './Pages/AdminSection/EditContactPage';
import EditServicestext from './Pages/AdminSection/EditServicestext';
import FooterCopyright from './Pages/AdminSection/FooterCopyright';
import EditFooterCopyright from './Pages/AdminSection/EditFooterCopyright';
import PaypalEmail from './Pages/AdminSection/PaypalEmail';
import PayNow from './Pages/AdminSection/PayNow';
import CancelledPayment from './Pages/AdminSection/CancelledPayment';
import Counter from './Pages/AdminSection/Counter';
import UpdateCounter from './Pages/AdminSection/UpdateCounter';
import EditVideoText from './Pages/AdminSection/EditVideoText';
import CallToActionSection from './Pages/AdminSection/CallToActionSection';
import EditCallToActionSection from './Pages/AdminSection/EditCallToActionSection';
import EditPricing from './Pages/AdminSection/EditPricing';
import Pricing from './Pages/AdminSection/Pricing';
import PricingPage from './components/HomePage/PricingPage';
import ServicePage from './components/HomePage/ServicePage';
import MyOrder from './Pages/MyOrder';
import AddPaypalEmail from './Pages/AdminSection/AddPaypalEmail';
import RequireAuth from './components/Shared/RequireAuth';
import AddUser from './Pages/AdminSection/AddUser';
import UpdateUser from './Pages/AdminSection/UpdateUser';
import AddFAQs from './Pages/AdminSection/AddFAQs';
import FAQtextEdit from './Pages/AdminSection/FAQtextEdit';
import EditFAQitem from './Pages/AdminSection/EditFAQitem';
import AddTestimonial from './Pages/AdminSection/AddTestimonial';
import EditTestimonial from './Pages/AdminSection/EditTestimonial';
import EditTestimonialtext from './Pages/AdminSection/EditTestimonialtext';
import WorkStep from './Pages/AdminSection/WorkStep';
import EditWorkStep from './Pages/AdminSection/EditWorkStep';
import FeaturesServicesAdd from './components/HomePage/FeaturesServicesAdd';
import EditFeaturesServicesText from './components/HomePage/EditFeaturesServicesText';
import EditFeaturesServicesItem from './Pages/AdminSection/EditFeaturesServicesItem';
import AddTeamMembers from './Pages/AdminSection/AddTeamMembers';
import EditTeamMemberText from './Pages/AdminSection/EditTeamMemberText';
import EditTeamMembersItem from './Pages/AdminSection/EditTeamMembersItem';
import AddExperience from './Pages/AdminSection/AddExperience';
import EditExperience from './Pages/AdminSection/EditExperience';
import EditMainService from './Pages/AdminSection/EditMainService';
import ThanksPage from './components/HomePage/ThanksPage';
import AddEmployee from './Pages/AdminSection/AddEmployee';
import Employees from './Pages/AdminSection/Employees';
import EditEmployee from './Pages/AdminSection/EditEmployee';
import AddProjects from './Pages/AdminSection/AddProjects';
import EditProject from './Pages/AdminSection/EditProject';
import Projects from './Pages/AdminSection/Projects';
import VideoTemplate from './Pages/VideoTemplate';
import EmailTemplate from './Pages/EmailTemplate';
import CanvaTemplate from './Pages/CanvaTemplate';
import VideoTutorial from './Pages/VideoTutorial';
import AddSubscribtion from './Pages/AdminSection/AddSubscribtion';
import ResetPassword from './Pages/ResetPassword';
import ReceivedPayment from './Pages/AdminSection/ReceivedPayment';
import { Toaster } from 'react-hot-toast';
import ChatBoard from './components/HomePage/ChatBoard';
import CreateSupport from './components/HomePage/CreateSupport';
import TicketStatus from './Pages/AdminSection/TicketStatus';
import MessageNow from './components/HomePage/MessageNow';
import AdminSupport from './components/HomePage/AdminSupport';
import AdminReply from './Pages/AdminSection/AdminReply';
import UpdateProfile from './components/Shared/UpdateProfile';
import ErrorPage from './components/Shared/ErrorPage';
import AllReports from './Pages/AllReports';
import SEOReport from './components/HomePage/SEOReport';
import ViewReport from './Pages/ViewReport';
import AuditThanks from './Pages/AuditThanks';
import RealEstateDatabse from './Pages/RealEstateDatabse';
import SettingeCommerce from './Pages/AdminSection/SettingeCommerce';
import RealestateSetting from './Pages/AdminSection/RealestateSetting';
import BannerSectionRealestate from './Pages/AdminSection/BannerSectionRealestate';
import RealEstateServiceSection from './Pages/AdminSection/RealEstateServiceSection';
import EditServiceRealEstate from './Pages/AdminSection/EditServiceRealEstate';
import UpdateBannerReal from './Pages/AdminSection/UpdateBannerReal';
import UpdateAboutReal from './Pages/AdminSection/UpdateAboutReal';
import AboutSectionReal from './Pages/AdminSection/AboutSectionReal';
import PricingReal from './Pages/AdminSection/PricingReal';
import EditPricingReal from './Pages/AdminSection/EditPricingReal';
import AddFAQReal from './Pages/AdminSection/AddFAQReal';
import FAQeditReal from './Pages/AdminSection/FAQeditReal';
import EditFaqitemReal from './Pages/AdminSection/EditFaqitemReal';
import EditTestimonialTextReal from './Pages/AdminSection/EditTestimonialTextReal';
import AddTestimonialReal from './Pages/AdminSection/AddTestimonialReal';
import EditTestimonialitemReal from './Pages/AdminSection/EditTestimonialitemReal';
import VideoSectionReal from './Pages/AdminSection/VideoSectionReal';
import EditVideoTextReal from './Pages/AdminSection/EditVideoTextReal';
import WorkStepReal from './Pages/AdminSection/WorkStepReal';
import EditWorkReal from './Pages/AdminSection/EditWorkReal';
import OrderNowReal from './Pages/OrderNowReal';
import ScrollUp from './components/Shared/ScrollUp';
import ScrollUpButton from './components/Shared/ScrollComponent';
import ScrollComponent from './components/Shared/ScrollComponent';
import ScrollToTopButton from './Pages/ScrollToTopButton';
import LoginGeneral from './Pages/LoginGeneral';
import RequireAuthPendingOrder from './Pages/RequireAuthPendingOrder';
import RegisterGeneral from './Pages/RegisterGeneral';
import LineChart from './Pages/AdminSection/LineChart';
import OrderChart from './Pages/AdminSection/OrderChart';
import Blog from './Pages/Blog';
import AddPost from './Pages/AddPost';
import AllPosts from './Pages/AllPosts';
import BlogPostDetails from './Pages/BlogPostDetails';
import EditPost from './Pages/EditPost';
import AddCategory from './Pages/AdminSection/AddCategory';
import EditCategory from './Pages/AdminSection/EditCategory';
import Category from './Pages/AdminSection/Category';
import AuthorManagementPost from './Pages/AdminSection/AuthorManagementPost';
import EditAuthor from './Pages/AdminSection/EditAuthor';









function App() {
  return (
    <div>
      <Toaster />
      <NavBar></NavBar>
      <Routes>

        <Route path='/thanks' element={<ThanksPage></ThanksPage>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/add-post' element={<AddPost></AddPost>}></Route>
        <Route path='/add-author' element={<AuthorManagementPost></AuthorManagementPost>}></Route>
        <Route path='/author/:id' element={<EditAuthor></EditAuthor>}></Route>
        <Route path='/admin/add-category' element={<AddCategory></AddCategory>}></Route>
        <Route path='/admin/category' element={<Category></Category>}></Route>
        <Route path='/add-author' element={<AuthorManagementPost></AuthorManagementPost>}></Route>
        <Route path='/edit-category/:categorySlug' element={<EditCategory></EditCategory>}></Route>
        <Route path='/all-post' element={<AllPosts></AllPosts>}></Route>
        <Route path='/blog/:titleSlug' element={<BlogPostDetails></BlogPostDetails>}></Route>
        <Route path='/edit-post/:titleSlug' element={<EditPost></EditPost>}></Route>
        <Route path='/thanks-for-submit' element={<AuditThanks></AuditThanks>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/real-estate-database' element={<RealEstateDatabse></RealEstateDatabse>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/login-general' element={<LoginGeneral></LoginGeneral>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/register-general' element={<RegisterGeneral></RegisterGeneral>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/pricing/' element={<PricingPage></PricingPage>}></Route>
        <Route path='/update-profile/:id' element={<RequireAuth><UpdateProfile></UpdateProfile></RequireAuth>}></Route>
        <Route path='/order-now/:id' element={<OrderNow></OrderNow>}></Route>
        <Route path='/order-now-real/:id' element={<RequireAuth><OrderNowReal></OrderNowReal></RequireAuth>}></Route>
        <Route path='/my-order' element={<RequireAuth><MyOrder></MyOrder></RequireAuth>}></Route>
        <Route path='/pending-order' element={<RequireAuthPendingOrder><PendingOrder></PendingOrder></RequireAuthPendingOrder>}></Route>
        <Route path='/dashboard' element={<RequireAuth><UserDashboard></UserDashboard></RequireAuth>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/add-user' element={<RequireAuth><AddUser></AddUser></RequireAuth>}></Route>
        <Route path='/add-subscribtion' element={<AddSubscribtion></AddSubscribtion>}></Route>
        <Route path='/message-now/:id' element={<RequireAuth><MessageNow></MessageNow></RequireAuth>}></Route>
        <Route path='/admin-support/' element={<RequireAuth><AdminSupport></AdminSupport></RequireAuth>}></Route>
        <Route path='/admin-message-now/:id' element={<RequireAuth><AdminReply></AdminReply></RequireAuth>}></Route>
        <Route path="/received-payment/:id/:paymentId" element={<RequireAuth><ReceivedPayment /></RequireAuth>} />
        <Route path="/order-cancelled/:id/:paymentId" element={<RequireAuth><CancelledPayment></CancelledPayment></RequireAuth>}></Route>
        <Route path='/support' element={<RequireAuth><ChatBoard></ChatBoard></RequireAuth>}></Route>
        <Route path='/create-ticket' element={<RequireAuth><CreateSupport></CreateSupport></RequireAuth>}></Route>
        <Route path='/ticket-status/:id' element={<RequireAuth><TicketStatus></TicketStatus></RequireAuth>}></Route>
        <Route path='/video-template' element={<RequireAuth><VideoTemplate></VideoTemplate></RequireAuth>}></Route>
        <Route path='/email-template' element={<RequireAuth><EmailTemplate></EmailTemplate></RequireAuth>}></Route>
        <Route path='/graphic-template' element={<RequireAuth><CanvaTemplate></CanvaTemplate></RequireAuth>}></Route>
        <Route path='/video-tutorial' element={<RequireAuth><VideoTutorial></VideoTutorial></RequireAuth>}></Route>
        <Route path='/add-employee' element={<RequireAuth><AddEmployee></AddEmployee></RequireAuth>}></Route>
        <Route path='/add-project/:id' element={<RequireAuth><AddProjects></AddProjects></RequireAuth>}></Route>
        <Route path='/project/:id' element={<RequireAuth><Projects></Projects></RequireAuth>}></Route>
        <Route path='/employees' element={<RequireAuth><Employees></Employees></RequireAuth>}></Route>
        <Route path='/edit-employee/:id' element={<RequireAuth><EditEmployee></EditEmployee></RequireAuth>}></Route>
        <Route path='/edit-project/:id' element={<RequireAuth><EditProject></EditProject></RequireAuth>}></Route>
        <Route path='/admin-user/:id' element={<RequireAuth><UpdateUser></UpdateUser></RequireAuth>}></Route>
        <Route path='/admin' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
        <Route path='/edit-faq' element={<RequireAuth><AddFAQs></AddFAQs></RequireAuth>}></Route>
        <Route path='/faqtext-edit/:id' element={<RequireAuth><FAQtextEdit></FAQtextEdit></RequireAuth>}></Route>
        <Route path='/edit-faq-real' element={<RequireAuth><AddFAQReal></AddFAQReal></RequireAuth>}></Route>
        <Route path='/faqtext-edit-real/:id' element={<RequireAuth><FAQeditReal></FAQeditReal></RequireAuth>}></Route>
        <Route path='faq-edit/:id' element={<RequireAuth><EditFAQitem></EditFAQitem></RequireAuth>}></Route>
        <Route path='faq-edit-real/:id' element={<RequireAuth><EditFaqitemReal></EditFaqitemReal></RequireAuth>}></Route>
        <Route path='/admin/payment-status/:id' element={<RequireAuth><PaymentStatus></PaymentStatus></RequireAuth>}></Route>
        <Route path='/edit-banner' element={<RequireAuth><BannerSection></BannerSection></RequireAuth>}></Route>
        <Route path='/edit-banner-realestate' element={<RequireAuth><BannerSectionRealestate></BannerSectionRealestate></RequireAuth>}></Route>
        <Route path='/banner/:id' element={<RequireAuth><UpdateBannerSection></UpdateBannerSection></RequireAuth>}></Route>
        <Route path='/banner-real/:id' element={<RequireAuth><UpdateBannerReal></UpdateBannerReal></RequireAuth>}></Route>
        <Route path='/update-calltoaction' element={<RequireAuth><CallToActionSection></CallToActionSection></RequireAuth>}></Route>
        <Route path='/edit-work' element={<RequireAuth><WorkStep></WorkStep></RequireAuth>}></Route>
        <Route path='/edit-work/:id' element={<RequireAuth><EditWorkStep></EditWorkStep></RequireAuth>}></Route>
        <Route path='/edit-work-real' element={<RequireAuth><WorkStepReal></WorkStepReal></RequireAuth>}></Route>
        <Route path='/edit-work-real/:id' element={<RequireAuth><EditWorkReal></EditWorkReal></RequireAuth>}></Route>
        <Route path='/edit-counter' element={<RequireAuth><Counter></Counter></RequireAuth>}></Route>
        <Route path='/edit-call/:id' element={<RequireAuth><EditCallToActionSection></EditCallToActionSection></RequireAuth>}></Route>
        <Route path='/counters/:id' element={<RequireAuth><UpdateCounter></UpdateCounter></RequireAuth>}></Route>
        <Route path='/add-logo' element={<RequireAuth><Logo></Logo></RequireAuth>}></Route>
        <Route path='/edit-logo/:id' element={<RequireAuth><EditLogo></EditLogo></RequireAuth>}></Route>
        <Route path='/edit-experience/:id' element={<RequireAuth><EditExperience></EditExperience></RequireAuth>}></Route>
        <Route path='/edit-about' element={<RequireAuth><AboutSection></AboutSection></RequireAuth>}></Route>
        <Route path='/edit-about-real' element={<RequireAuth><AboutSectionReal></AboutSectionReal></RequireAuth>}></Route>
        <Route path='/about/:id' element={<RequireAuth><UpdateAboutSection></UpdateAboutSection></RequireAuth>}></Route>
        <Route path='/about-real/:id' element={<RequireAuth><UpdateAboutReal></UpdateAboutReal></RequireAuth>}></Route>
        <Route path='/edit-video' element={<RequireAuth><VideoSection></VideoSection></RequireAuth>}></Route>
        <Route path='/edit-video-real' element={<RequireAuth><VideoSectionReal></VideoSectionReal></RequireAuth>}></Route>
        <Route path='/video/:id' element={<RequireAuth><UpdateVideoSection></UpdateVideoSection></RequireAuth>}></Route>
        <Route path='/videotext-edit-real/:id' element={<RequireAuth><EditVideoTextReal></EditVideoTextReal></RequireAuth>}></Route>
        <Route path='/main-service-edit/:id' element={<RequireAuth><EditMainService></EditMainService></RequireAuth>}></Route>
        <Route path='/servicetext-edit/:id' element={<RequireAuth><EditServicestext></EditServicestext></RequireAuth>}></Route>
        <Route path='/edit-service' element={<RequireAuth><ServicesSection></ServicesSection></RequireAuth>}></Route>
        <Route path='/service-edit/:id' element={<RequireAuth><EditService></EditService></RequireAuth>}></Route>
        <Route path='/edit-service-real-estate' element={<RequireAuth><RealEstateServiceSection></RealEstateServiceSection></RequireAuth>}></Route>
        <Route path='/real-estate-service-edit/:id' element={<RequireAuth><EditServiceRealEstate></EditServiceRealEstate></RequireAuth>}></Route>
        <Route path='/step-section' element={<RequireAuth><StepSection></StepSection></RequireAuth>}></Route>
        <Route path='/edit-step/:id' element={<RequireAuth><EditStep></EditStep></RequireAuth>}></Route>
        <Route path='/total-orders' element={<RequireAuth><TotalOrders></TotalOrders></RequireAuth>}></Route>
        <Route path='/add-item' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/setting' element={<RequireAuth><Setting></Setting></RequireAuth>}></Route>
        <Route path='/setting-ecommerce' element={<RequireAuth><SettingeCommerce></SettingeCommerce></RequireAuth>}></Route>
        <Route path='/setting-realestate' element={<RequireAuth><RealestateSetting></RealestateSetting></RequireAuth>}></Route>
        <Route path='/add-pricing/' element={<RequireAuth><Pricing></Pricing></RequireAuth>}></Route>
        <Route path='/add-pricing-real/' element={<RequireAuth><PricingReal></PricingReal></RequireAuth>}></Route>
        <Route path='/package-edit/:id' element={<RequireAuth><EditPricing></EditPricing></RequireAuth>}></Route>
        <Route path='/package-edit-real/:id' element={<RequireAuth><EditPricingReal></EditPricingReal></RequireAuth>}></Route>
        <Route path='/service/' element={<ServicePage></ServicePage>}></Route>
        <Route path='/edit-testimonial/' element={<RequireAuth><AddTestimonial></AddTestimonial></RequireAuth>}></Route>
        <Route path='/edit-testimonial-real/' element={<RequireAuth><AddTestimonialReal></AddTestimonialReal></RequireAuth>}></Route>
        <Route path='/testimonialtext-edit/:id' element={<RequireAuth><EditTestimonialtext></EditTestimonialtext></RequireAuth>}></Route>
        <Route path='/testimonialtext-edit-real/:id' element={<RequireAuth><EditTestimonialTextReal></EditTestimonialTextReal></RequireAuth>}></Route>
        <Route path='/edit-testimonial/:id/' element={<RequireAuth><EditTestimonial></EditTestimonial></RequireAuth>}></Route>
        <Route path='/edit-testimonial-real/:id/' element={<RequireAuth><EditTestimonialitemReal></EditTestimonialitemReal></RequireAuth>}></Route>
        <Route path='/edit-services-features/' element={<RequireAuth><FeaturesServicesAdd></FeaturesServicesAdd></RequireAuth>}></Route>
        <Route path='/edit-team-text/' element={<RequireAuth><AddTeamMembers></AddTeamMembers></RequireAuth>}></Route>
        <Route path='/edit-experience/' element={<RequireAuth><AddExperience></AddExperience></RequireAuth>}></Route>
        <Route path='/team-text-edit/:id/' element={<RequireAuth><EditTeamMemberText></EditTeamMemberText></RequireAuth>}></Route>
        <Route path='/edit-feature-items/:id/' element={<RequireAuth><EditFeaturesServicesItem></EditFeaturesServicesItem></RequireAuth>}></Route>
        <Route path='/edit-team-items/:id/' element={<RequireAuth><EditTeamMembersItem></EditTeamMembersItem></RequireAuth>}></Route>
        <Route path='/featurestext-edit/:id' element={<RequireAuth><EditFeaturesServicesText></EditFeaturesServicesText></RequireAuth>}></Route>
        <Route path='/add-contact/' element={<RequireAuth><ContactPage></ContactPage></RequireAuth>}></Route>
        <Route path='/edit-contact-page/:id' element={<RequireAuth><EditContactPage></EditContactPage></RequireAuth>}></Route>
        <Route path='/add-about-footer/' element={<RequireAuth><FooterAbout></FooterAbout></RequireAuth>}></Route>
        <Route path='/edit-about-footer/:id' element={<RequireAuth><EditFooterabout></EditFooterabout></RequireAuth>}></Route>
        <Route path='/add-address-footer/' element={<RequireAuth><FooterContact></FooterContact></RequireAuth>}></Route>
        <Route path='/edit-address-footer/:id' element={<RequireAuth><EditFooterContact></EditFooterContact></RequireAuth>}></Route>
        <Route path='/add-social-footer/' element={<RequireAuth><FooterSocial></FooterSocial></RequireAuth>}></Route>
        <Route path='/edit-social-footer/:id' element={<RequireAuth><EditFooterSocial></EditFooterSocial></RequireAuth>}></Route>
        <Route path='/all-messages/' element={<RequireAuth><Messages></Messages></RequireAuth>}></Route>
        <Route path='/all-reports/' element={<RequireAuth><AllReports></AllReports></RequireAuth>}></Route>
        <Route path='/seo-reports/:id' element={<RequireAuth><SEOReport></SEOReport></RequireAuth>}></Route>
        <Route path='/view/:id' element={<RequireAuth><ViewMessage></ViewMessage></RequireAuth>}></Route>
        <Route path='/view-report/:id' element={<RequireAuth><ViewReport></ViewReport></RequireAuth>}></Route>
        <Route path='/all-subscriber/' element={<RequireAuth><Subscribers></Subscribers></RequireAuth>}></Route>
        <Route path='/add-copyright' element={<RequireAuth><FooterCopyright></FooterCopyright></RequireAuth>}></Route>
        <Route path='/edit-copyright/:id' element={<RequireAuth><EditFooterCopyright></EditFooterCopyright></RequireAuth>}></Route>
        <Route path='/paypal-email/:id' element={<RequireAuth><PaypalEmail></PaypalEmail></RequireAuth>}></Route>
        <Route path='/pay-now/:id' element={<RequireAuth><PayNow></PayNow></RequireAuth>}></Route>
        <Route path='/add-paypal-Email' element={<AddPaypalEmail></AddPaypalEmail>}></Route>
        <Route path='/order-cancelled/:id' element={<RequireAuth><CancelledPayment></CancelledPayment></RequireAuth>}></Route>
        <Route path='oderchat' element={<OrderChart></OrderChart>}></Route>

      

       
      </Routes>

      
    

      <ScrollToTopButton></ScrollToTopButton>
  
      <Footer></Footer>
    </div>
  );
}

export default App;
