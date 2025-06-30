// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./style/pages.css";
import CoursesPage from "./pages/CoursesPage";
import Contactpage from "./pages/ContactPage";
import Header from "./components/header/header";
import ChatbotComponent from "./components/chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup";
import { useState } from "react";
import HomePage from "./pages/Homepage";
import AdmissionsPage from "./pages/AdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";

function App() {
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Paras Rajaram Patil"
          studentPhotoUrl="/Images/paras.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <div className="main-layout" style={{backgroundColor:'#52d2d2'}}>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<Contactpage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/admissions" element={<AdmissionsPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
        <ChatbotComponent/>
        <Footer/>
        
      </div>
    </Router>
    </>
  );
}
export default App;

