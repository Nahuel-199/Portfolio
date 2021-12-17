import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Mis Proyectos</h1>
        <p className="pl-desc">
         Estos son algunos proyectos que he realizado hasta ahora, en la mayoria de ellos
         utilice las tecnologías de React, Redux, PostgreSQL, NodeJS, Express, JavaScript,
         HTML, CSS, MongoDB.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;