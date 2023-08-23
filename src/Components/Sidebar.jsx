import { HiCode } from "react-icons/hi";

const Sidebar = () => {
    return (
        <nav  className=" h-screen w-16 bg-black fixed top-0 left-0  text-aqua flex justify-center ">
            <div className="flex flex-col items-center justify-center gap-12 fixed top-44">
            <a href="#" className="fixed top-6"><span className="text-aqua text-3xl hover:text-hotmag"><HiCode/></span></a>
            <a href="#about" className="writing-vertical text-lg"  >About</a>
            <a href="#about" className="writing-vertical text-lg"  >Projects</a>
            <a href="#about" className="writing-vertical text-lg"  >Experience</a>
            <a href="#about" className="writing-vertical text-lg"  >Contact</a>
            </div>
            {/* <a href="#projects"  className="rotate-90 "  >Projects</a>
            <a href="#Exp"  className=" rotate-90"  >Experience</a>
            <a href="#Contact"  className="rotate-90"  >Contacts</a> */}
            
        </nav>
    )
}
export default Sidebar