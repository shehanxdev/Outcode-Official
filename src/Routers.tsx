import { Route, Routes } from "react-router-dom";
import Home8 from "./pages/homePages/Home8";

// Inner Pages
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import TeamPage from "./pages/innerPages/TeamPage";
import TeamDetailsPage from "./pages/innerPages/TeamDetailsPage";
import ProjectPage from "./pages/innerPages/ProjectPage";
import ProjectDetailsPage from "./pages/innerPages/ProjectDetailsPage";
import ContactUsPage from "./pages/innerPages/ContactUsPage";
import FaqPage from "./pages/innerPages/FaqPage";

// Services
import ServicesPage from "./pages/servicesPages/ServicesPage";
import ServiceDetailsPage from "./pages/servicesPages/ServiceDetailsPage";

// Blog
import BlogStandardPage from "./pages/blogPages/BlogStandardPage";
import BlogSinglePage from "./pages/blogPages/BlogSinglePage";

import NotFoundPage from "./pages/innerPages/NotFoundPage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home8 />} />

                {/* Pages */}
                <Route path='/about-us' element={<AboutUsPage />} />
                <Route path='/team' element={<TeamPage />} />
                <Route path='/team-details/:id' element={<TeamDetailsPage />} />
                <Route path='/portfolio' element={<ProjectPage />} />
                <Route path='/portfolio-details/:id' element={<ProjectDetailsPage />} />
                <Route path='/contact' element={<ContactUsPage />} />
                <Route path='/faq' element={<FaqPage />} />

                {/* Services */}
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/service-details/:id' element={<ServiceDetailsPage />} />

                {/* Blog */}
                <Route path='/blog' element={<BlogStandardPage />} />
                <Route path='/blog/:id' element={<BlogSinglePage />} />

                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Routers;