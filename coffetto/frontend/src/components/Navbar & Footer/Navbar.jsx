import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <header class="header" id="header">

      <nav class="nav container">
        <a href="#" class="nav--logo" >
          <img
            src="https://gilded-froyo-cad2e5.netlify.app//assets/img/logo.png"
            alt="logo"
          />
          Coffetto
        </a>
        <div class="nav--menu">
          <ul class="nav--list">
            <li class="nav--item">
              <Link to="/" class="nav--link active-link">
                <i class="ri-home-5-fill"></i>
                <span>Home</span>
              </Link>
            </li>

            <li class="nav--item">
              <Link to={"/products"} class="nav--link">
                <i class="ri-award-fill"></i>
                <span>Products</span>
              </Link>
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
