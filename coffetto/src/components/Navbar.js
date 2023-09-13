import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <header class="header" id="header">
      {/* <div class="header--border"></div> */}

      <nav class="nav container">
        <a href="#" class="nav--logo">
        {/* <Link></Link> */}
        {/* <Link to="#"> */}
          <img
            src="https://gilded-froyo-cad2e5.netlify.app//assets/img/logo.png"
            alt="logo"
          />
          Coffetto
        {/* </Link> */}
        </a>
        <div class="nav--menu">
          <ul class="nav--list">
            <li class="nav--item">
              <a href="#home" class="nav--link active-link">
                <i class="ri-home-5-fill"></i>
                <span>Home</span>
              </a>
            </li>

            <li class="nav--item">
              <a href="#about" class="nav--link">
                <i class="ri-award-fill"></i>
                <span>About</span>
              </a>
            </li>

            <li class="nav--item">
              <a href="#steps" class="nav--link">
                <i class="ri-compass-fill"></i>
                <span>Steps</span>
              </a>
            </li>

            <li class="nav--item">
              <a href="#testimonial" class="nav--link">
                <i class="ri-message-3-fill"></i>
                <span>Testimonial</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
