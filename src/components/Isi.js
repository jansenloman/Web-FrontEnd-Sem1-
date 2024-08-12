import "../style/Isi.css";
import Cardku from "./Card";
import SlideShow from "./Slideshow";

const Isi = () => {
  return (
    <div>
      <SlideShow />
      <div className="kontenerongoing">
        <h2>TRENDING</h2>
      </div>
      <div className="kontenertotalcard">
        <Cardku />
      </div>
      <div className="kontenerongoing pluspad">
        <h2>UPDATE</h2>
      </div>
      <div className="kontenertotalcard">
        <Cardku />
      </div>
    </div>
  );
};
export default Isi;
