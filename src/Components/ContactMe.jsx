import {HiMail} from "react-icons/hi"



export default function ContactMe() {
  return (<section className="w-4/5 mx-auto h-[100vh] flex items-center">
<div>
<p className="text-8xl text-center text-white">Contact</p>
<p className="text-center text-lg text-white my-6 px-28">Shoot me an Email if you want to connect! You can also find me on 
<span className="text-hotmag"> LinkedIn </span>
 or <span className="text-hotmag">Twitter</span> if tha's more of your speed.</p>
 <div>
  <a href="mailto:shikhar0895@gmail.com">
    <div className="flex flex-row text-2xl text-white justify-center gap-3 items-center">
     <HiMail/>
     <span>shikhar0895@gmail.com</span>
    </div>
  </a>
 </div>
</div>

  </section>
  )
}
