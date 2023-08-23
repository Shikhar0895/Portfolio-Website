const HeroSection = () => {
    return <>
    <section className="bg-black text-aqua h-[80vh]">
   <div className="w-4/5 mx-auto py-14 flex">
        <div className="w-4/6">
            <p className="font-bold text-8xl my-4">Hey, I'm Shikhar<span className="text-8xl text-hotmag">.</span> </p>

       <p className="font-medium text-4xl">Im a <span className="text-hotmag">FrontEnd developer</span></p>      
        <p className="font-light text-lg my-6">
      I <span className="text-hotmag ">develop, create, design</span> the web, the front end of
      websites, user experiences, user interfaces, digital experiences, etc.
    </p>
<button className="px-6 py-3 text-lg bg-aqua text-black rounded-md">Contact Me</button>

</div>
<div className="imgWrapper bg-aqua  grow h-[inherit]">
  <p className="text-dkblue text-2xl">Img</p>
</div>
</div>
</section>
<div className="gradient"></div>
</>
}

export default HeroSection