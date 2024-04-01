export const Products = () => {
  return (
    <section class="products">
      <div class="products--bg section">
        <div class="products--container container grid">
          <div
            class="products--data"
            data-sr-id="2"
            id="dataM"
          >
            <a href="#about" class="products--button">
              Scroll Down <i class="ri-arrow-down-s-line"></i>
            </a>

            <p class="products--description">
              We strive to from deep partnerships with farmers from all over the
              world to create perspective together and form healthy working
              relationships built on trust and respect.
            </p>
          </div>

          <div class="products--content">
            <article
              class="products--card"
              data-sr-id="7"
            >
              <img
                src="https://gilded-froyo-cad2e5.netlify.app/assets/img/product-coffee-1.png"
                alt=""
                class="products--img"
              />
              <h3 class="products--name">Classic Coffee</h3>
              <span class="products--price">$17.90</span>
            </article>

            <article
              class="products--card"
              data-sr-id="8"
            >
              <img
                src="https://gilded-froyo-cad2e5.netlify.app/assets/img/product-coffee-2.png"
                alt=""
                class="products--img"
              />
              <h3 class="products--name">Black Coffee</h3>
              <span class="products--price">$24.90</span>
            </article>

            <article
              class="products--card"
                          data-sr-id="9"
                          id="prodCard"
            >
              <img
                src="https://gilded-froyo-cad2e5.netlify.app/assets/img/product-coffee-3.png"
                alt=""
                class="products--img"
              />
              <h3 class="products--name">Strong Coffee</h3>
              <span class="products--price">$32.90</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
