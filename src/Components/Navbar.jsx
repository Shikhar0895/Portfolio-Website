import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

 
 const Navbar =() => {
    return <section className="sticky z-20 top-0">
       <nav className="bg-black text-white flex flex-row flex-wrap justify-between h-20 items-center">
      <ul className="flex space-x-6 mr-5">
      <li><a href="#"><span className="text-aqua text-3xl hover:text-hotmag"><FaTwitter/></span></a></li>
      <li><a href="#"><span className="text-aqua text-3xl hover:text-hotmag"><FaInstagram/></span></a></li>
      <li><a href="#"><span className="text-aqua text-3xl hover:text-hotmag"><FaLinkedin/></span></a></li>
      <li><a href="#"><span className="text-aqua text-3xl hover:text-hotmag"><FaGithub/></span></a></li>
      
     </ul>
     <button className="px-7 py-3 text-xl border-2 border-hotmag text-white rounded-md">Resume</button>
     
     {/* <li className="list-none"><a href="#" className="px-4 py-2 border-2 border-hotmag rounded text-white ml-1 text-xl ">Resume</a></li> */}
  </nav>
  </section>
}

export default Navbar