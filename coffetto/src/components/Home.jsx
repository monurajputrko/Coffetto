

export const Home = () => {
  return (
    <section class="home section" id="home">
      <div class="home--container container grid">
        <div
          class="home--data"
                  data-sr-id="0"
                  id="dataM"
        >
          <h3 class="home--subtitle">EXCEPTIONAL QUALITY</h3>

          <h1 class="home--title">
            It's time for a <br />
            good coffee
            <img src="https://gilded-froyo-cad2e5.netlify.app//assets/img/home-coffee-title.png" alt="" />
          </h1>

          <p class="home--description">
            Each select coffee bean reflects our commitment to peruvian coffee
            growers. who bring the best select coffee to your table.
          </p>

          <a href="#" class="button">
            Get Started <i class="ri-arrow-right-s-line"></i>
          </a>
        </div>
        <img
          src="https://gilded-froyo-cad2e5.netlify.app//assets/img/home-coffee.png"
          alt=""
          class="home--img"
                  data-sr-id="5"
                  id="homeM"
        />
      </div>
    </section>
  );
};




