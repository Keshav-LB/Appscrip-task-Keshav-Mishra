import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="product-grid-section">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}