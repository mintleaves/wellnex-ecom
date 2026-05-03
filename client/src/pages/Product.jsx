import lipikar from "../assets/lipikar.jpg";
import polanine from "../assets/polanine.jpg";
import prorhinel from "../assets/prorhinel.jpg";

const products = [
  {
    img: lipikar,
    name: "Lipikar surgras soap bar - LA ROCHE POSAY",
    price: "€7.20",
    rating: 5,
    reviews: 2,
  },
  {
    img: polanine,
    name: "Polanine cream - GENTLE CARE",
    price: "€12.50",
    rating: 4,
    reviews: 7,
  },
  {
    img: prorhinel,
    name: "Prorhinel nasal spray - DAILY USE",
    price: "€9.90",
    rating: 5,
    reviews: 3,
  },
];

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
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight text-center mt-20">
        Our Products
      </h1>
      <div className="flex flex-wrap gap-6 justify-center p-8">
        {products.map((product, index) => (
          <div
            key={index}
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
    </>
  );
};

export default Product;
