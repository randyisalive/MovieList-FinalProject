import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { useEffect, useState } from "react";

function CorouselSelf() {
  const [products, setProducts] = useState([
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
    {
      name: "hello",
      price: "120$",
      inventoryStatus: "INSTOCK",
    },
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
      <div className="border-1 surface-border border-round m-2 d-flex justify-content-center align-items-center text-center">
        <div className="mb-3">
          <img
            src={`https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI`}
            alt={product.name}
            className="img shadow-2"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };
  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

export default CorouselSelf;
