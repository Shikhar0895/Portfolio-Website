import Sidebar from "./Sidebar";
import Contacts from './ContactMe'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import ProjectListing from './ProjectListing'
import ContactMe from "./ContactMe";
import About from "./About";
import Experience from "./Experience";

const AppWrapper = () => {
    return (
        <div className="flex font-mono">
            <Sidebar/>
            <MainBodyWrapper/>
        </div>
    )
}

const MainBodyWrapper = () => {
    return (
        <div className="flex flex-col grow font-mono ml-16 px-5 bg-black">
       <Navbar/>
      <HeroSection/>
      <About/>
      <ProjectListing/>
      <Experience/>
      <ContactMe/>
      </div>
    )
}


export default AppWrapper;