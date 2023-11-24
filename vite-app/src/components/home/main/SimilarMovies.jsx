import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { useState } from "react";

import { Carousel } from "primereact/carousel";

function SimilarMovies() {
  const [products, setProducts] = useState([
    { id: "1", title: "title 1" },
    { id: "1", title: "title 1" },
    { id: "1", title: "title 1" },
    { id: "1", title: "title 1" },
  ]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card mt-3">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </>
  );
}

export default SimilarMovies;
