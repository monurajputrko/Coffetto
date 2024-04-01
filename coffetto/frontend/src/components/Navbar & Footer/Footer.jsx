
import { FiArrowUpCircle } from "react-icons/fi";

export const Footer = () => {
    return (
      <>
        <footer class="footer">
          <div class="footer--bg">
            <img
              src="https://gilded-froyo-cad2e5.netlify.app/assets/img/coffee-beans-bg.png"
              alt=""
              class="footer--bg--img"
            />
            <div class="footer--container container grid" data-sr-id="4">
              <div class="footer--data grid">
                <div>
                  <a href="#" class="footer--logo">
                    <img
                      src="https://gilded-froyo-cad2e5.netlify.app/assets/img/logo.png"
                      alt=""
                    />
                    Coffetto
                  </a>

                  <h3 class="footer--title">Sign up for our newsletter</h3>
                </div>

                <form
                  action="https://formspree.io/f/xvojqbkb"
                  method="POST"
                  class="footer--form grid"
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    class="footer--input"
                  />

                  <button class="button footer--button" type="submit">
                    Subscribe <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <p class="footer--description">
                    We care about your data. Read our
                    <a href="#" class="footer--privacy">
                      {" "}
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>

              <div class="footer--content grid">
                <div class="footer--social">
                  <a
                    href="www.facebook.com"
                    target="_blank"
                    class="footer--social--link"
                  >
                    <i class="ri-facebook-fill"></i>
                  </a>
                  <a
                    href="www.instagram.com"
                    target="_blank"
                    class="footer--social--link"
                  >
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a
                    href="www.twitter.com"
                    target="_blank"
                    class="footer--social--link"
                  >
                    <i class="ri-twitter-fill"></i>
                  </a>
                </div>

                <span class="footer--copy">
                  {" "}
                  © Copyright Coffetto. All rights reserved
                </span>
              </div>
            </div>
          </div>
        </footer>
        <a href="#" class="scrollup show-scroll" id="scroll-up">
          <FiArrowUpCircle />
        </a>
      </>
    );
};
