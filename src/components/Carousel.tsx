import { useState } from "react";

interface Props {
  slides: string[];
}

function Carousel({ slides }: Props) {
  const maxslide = slides.length - 1;
  const minslide = 0;
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((item, index) => (
            <div
              className={"carousel-item " + (index == count ? "active" : "")}
            >
              <img src={item} className="d-block w-100" key={index} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          onClick={() =>
            count == minslide ? setCount(maxslide) : setCount(count - 1)
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          onClick={() =>
            count == maxslide ? setCount(minslide) : setCount(count + 1)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
