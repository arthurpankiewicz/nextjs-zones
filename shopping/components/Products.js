import Link from "next/link";

function Products() {
  return (
    <div className="products">
      <Link href="/products1">
        <a>
          <div className="product">
            <h2>Product 1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </a>
      </Link>
      <Link href="/products2">
        <a>
          <div className="product">
            <h2>Product 2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Products;
