export default function Footer()
{return <footer className="bg-black">
    <ul>
      <li id="Top"><h2>Shikhar Sahu &middot; Frontend Developer</h2></li>
      <li id="middle">
        <a href="#">
          <span className="fa-brands fa-linkedin" aria-hidden="true"></span
          ><span className="sr-only">LinkedIn</span></a
        >
        -
        <a href="#"
          ><span className="fa-brands fa-github" aria-hidden="true"></span
          ><span className="sr-only">GitHub</span></a
        >
        -
        <a href="#"
          ><span className="fa-solid fa-envelope" aria-hidden="true"></span
          ><span className="sr-only">Email</span></a
        >
      </li>
      <li id="bottom">
        <small>&copy; 2023 Shikhar Sahu. All rights reserved.</small>
      </li>
    </ul>
  </footer>
}