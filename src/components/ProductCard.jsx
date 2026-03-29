import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {product.isNew && (
          <span className="product-card__badge">NEW PRODUCT</span>
        )}

        {product.outOfStock && (
          <div className="product-card__stock">OUT OF STOCK</div>
        )}

        <img
          src={product.image}
          alt={product.alt}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <h3>{product.name}</h3>

        <div className="product-card__bottom">
          <p>
            <a href="#">Sign in</a> or Create an account to see pricing
          </p>

          <button
            type="button"
            className={`product-card__heart ${
              product.liked ? "product-card__heart--active" : ""
            }`}
            aria-label="Add to wishlist"
          >
            <Heart
              size={20}
              strokeWidth={1.8}
              fill={product.liked ? "#EB4C6B" : "none"}
            />
          </button>
        </div>
      </div>
    </article>
  );
}