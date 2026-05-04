import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

// const productsss = [
//   {
//     img: lipikar,
//     name: "Lipikar surgras soap bar - LA ROCHE",
//     price: "€7.20",
//     rating: 5,
//     reviews: 2,
//   },
//   {
//     img: polanine,
//     name: "Polanine cream - GENTLE CARE",
//     price: "€12.50",
//     rating: 4,
//     reviews: 7,
//   },
//   {
//     img: prorhinel,
//     name: "Prorhinel nasal spray - DAILY USE",
//     price: "€9.90",
//     rating: 5,
//     reviews: 3,
//   },
// ];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ))}
  </div>
);

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //method 1
    // fetch(getProducts).then((res) => {
    //   return res.json().then((data) => {
    //     return setProducts(data);
    //   });
    // });
    //method 2
    getProducts()
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
    //method 3
    // fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: error</div>;

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight text-center mt-20">
        Our Products
      </h1>
      <div className="flex flex-wrap gap-6 justify-center p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-56 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            {/* Image */}
            <div className="bg-gray-50 flex items-center justify-center p-4 h-52">
              <img
                src={product.img}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-sm text-gray-700 leading-snug mb-2">
                {product.name}
              </p>
              <p className="text-base font-bold text-gray-900 mb-1">
                {product.price}
              </p>
              <div className="flex items-center gap-1">
                <StarRating rating={product.rating} />
                <span className="text-xs text-gray-500">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <h1>Products fetched from mint backend:-</h1>
        {products &&
          products.map((product) => {
            return <p key={product.id}>{product.name}</p>;
            // <p>{product.price}</p>
          })}
      </div> */}
    </>
  );
};

export default Product;
