import "./Products.css";

const products = [
//   {
//     id: 1,
//     name: "Sleepy Owl 100g Intense Java Xpresso Coffee ",
//     href: "#",
//     price: "₹299",
//     brand: "Sleepy Owl",
//     imageSrc:
//       "https://m.media-amazon.com/images/I/51V2cb0XNjL._AC_UL480_FMwebp_QL65_.jpg",
//   },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Nescafe Classic Instant Coffee Powder",
    href: "#",
    price: "₹564",
    brand: "Nescafe",
    imageSrc:
      "https://m.media-amazon.com/images/I/71MJU7tRXYL._AC_UL480_FMwebp_QL65_.jpg",
  },
];

export default function Products() {
  return (
    <section>
      <h4 class="section-subtitle">The Drop</h4>
      <h2 class="section-title">Best Selling Products</h2>
      <div class="bestSelling-beers">
        {products.map((e) => (
          <div key={e.id} class="bs-card">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} class="bs-card-img" id="bs-img-1">
              <img
                style={{ width: "130px" }}
                src={e.imageSrc}
                alt={e.name}
              />
            </div>
            <div class="bs-card-body">
              <div class="bs-card-header">
                <a href="#" class="bs-card-title">
                  {e.name}
                </a>
              </div>
              <div class="bs-beer-data">
                        <span class="bs-card-brewery para-font">{e.brand}</span>
                <span class="bs-card-brewery para-font">100% Verified</span>
              </div>
              <div class="bs-beer-footer">
                <span class="price">{e.price}</span>
                <span class="bs-card-btn">ORDER</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
