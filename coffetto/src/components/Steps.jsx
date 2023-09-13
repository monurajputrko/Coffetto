

export const Steps = () => {
  return (
   <section class="steps" id="steps">
  <div class="steps--bg section">
    <h2 class="section--title contianer">
      Steps of manufacturing our products
    </h2>

    <div class="steps--container container grid">
      <img
        src="https://gilded-froyo-cad2e5.netlify.app/assets/img/coffee-beans-bg.png"
        alt=""
        class="steps--bg--img"
      />
      <div
        class="steps--content"
        data-sr-id="3"
        // style="
        //         visibility: visible;
        //         opacity: 0;
        //         transform: matrix3d(
        //           1,
        //           0,
        //           0,
        //           0,
        //           0,
        //           1,
        //           0,
        //           0,
        //           0,
        //           0,
        //           1,
        //           0,
        //           0,
        //           -60,
        //           0,
        //           1
        //         );
        //       "
      >
        <img
          src="https://gilded-froyo-cad2e5.netlify.app/assets/img/steps-curve-line.svg"
          alt=""
          class="steps--border"
        />

        <div class="steps--card">
          <div class="steps--circle">
            <div class="steps--subcircle">01</div>

            <img
              src="https://gilded-froyo-cad2e5.netlify.app/assets/img/steps-green-coffee.png"
              alt=""
              class="steps--img"
            />
          </div>
          <p class="steps--description">
            Harvest occurs annually when the coffee beans reach maurity and are
            collected for processing.
          </p>
        </div>

        <div class="steps--card steps--card--move">
          <div class="steps--circle">
            <div class="steps--subcircle">02</div>

            <img
              src="https://gilded-froyo-cad2e5.netlify.app/assets/img/steps-coffee-beans.png"
              alt=""
              class="steps--img"
            />
          </div>
          <p class="steps--description">
            the beans are dried using a wet or dry technique, depending on the
            taste we want to obtain.
          </p>
        </div>

        <div class="steps--card">
          <div class="steps--circle">
            <div class="steps--subcircle">03</div>

            <img
              src="https://gilded-froyo-cad2e5.netlify.app/assets/img/steps-ground-coffee.png"
              alt=""
              class="steps--img"
            />
          </div>
          <p class="steps--description">
            The coffee is roasted and acquires its flavour by processing the
            grain in ovens
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
