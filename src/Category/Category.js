import "./category.css";
import Movies from "../Films/Films";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import foto from "../img/mainportbeta.png";
function Category() {
  const [movie, setFilms] = useState(Movies);
  const [remove, setRemove] = useState(true);
  const [showLink, setShowLink] = useState(true);

  const handleClick = () => {
    setShowLink(false);
    localStorage.setItem("showLink", false);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("showLink");
    if (storedValue === "false") {
      setShowLink(false);
    }
  }, []);
  const filterItem = (categItem) => {
    const updatedItems = Movies.filter((curEl) => {
      return curEl.category === categItem;
    });
    setFilms(updatedItems);
  };

  return (
    <>
      <section className="category">
        <div className="category-name">
          <button className="button-style" onClick={() => setFilms(Movies)}>
            All
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Commercial")}
          >
            Commercial
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Music videos")}
          >
            Music videos
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Corporate")}
          >
            Corporate
          </button>
          <button className="button-style" onClick={() => filterItem("Event")}>
            Event
          </button>
          <button className="button-style" onClick={() => filterItem("3D")}>
            3D
          </button>
          <button
            className="button-style"
            onClick={() => filterItem("Documentary")}
          >
            Documentary
          </button>
        </div>
      </section>
      <div onClick={handleClick} className="foto-beta">
        {showLink && (
          <a
            href="https://www.youtube.com/watch?v=E_wNW3RE67Y&fbclid=IwAR25yg40m5BPbuIQNnb5NuFCq1XnKH8Dkvm9bI-9Gek9ACk-C4xUTTpSLfA"
            target="_blank"
          >
            <img src={foto} alt="link to youtube" className="main-foto-beta" />
          </a>
        )}
      </div>
      <motion.div className="movies-box">
        {movie.map((elem) => {
          const { iframes } = elem;
          return <div className="movies-f">{iframes}</div>;
        })}
      </motion.div>
    </>
  );
}
export default Category;
