import data from "./CardData";
import "../style/Card.css";

const Cardku = () => {
  return (
    <section className="py-4 container">
      <div className="row justify-content-ecnter">
        {data.cardData.slice(0, 10).map((item, index) => {
          return (
            <div className="kontenercard">
              <a href={item.link}>
                <img src={item.img} alt=""></img>
                <div>
                  <h5 className="judulcard">{item.title}</h5>
                  <span></span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cardku;
