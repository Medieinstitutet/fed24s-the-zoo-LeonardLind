import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { useAnimalContext } from "../context/AnimalContext";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const { animals } = useAnimalContext();
  const [index, setIndex] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleCanvasClick = (e: React.MouseEvent) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    const fwd = document.getElementById("track-zone-forward");
    const back = document.getElementById("track-zone-backward");

    const isInside = (el: HTMLElement | null) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return clickX >= r.left && clickX <= r.right && clickY >= r.top && clickY <= r.bottom;
    };

    if (isInside(fwd)) {
      setIndex((i) => (i + 1) % animals.length);
    } else if (isInside(back)) {
      setIndex((i) => (i - 1 + animals.length) % animals.length);
    }
  };

  if (!animals.length) {
    return <p style={{ color: "red", textAlign: "center" }}>Kunde inte hämta djurdata.</p>;
  }

  const animal = animals[index] ?? animals[0];

  return (
    <div className="homePage" onClick={handleCanvasClick}>
      {!splineLoaded && <LoadingSpinner />}

      <div style={{ visibility: splineLoaded ? "visible" : "hidden" }}>
        <div className="absolute top-15 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="text-5xl font-bold">{animal.name}</h2>
        <p className="text-xl pt-2">{animal.shortDescription}</p>
      </div>
        <div id="track-zone-forward" className="tracking-zone forward" />
        <div id="track-zone-backward" className="tracking-zone backward" />
      </div>

      <Spline
        className="removeLogo"
        scene="https://prod.spline.design/kIYIB66IXKvxf7U2/scene.splinecode"
        onLoad={() => {
          setTimeout(() => {
            setSplineLoaded(true);
          }, 1000); //1 second delay 
}}
        onError={() => setSplineLoaded(true)}
      />
    </div>
  );
};

export default HomePage;