import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { IoMdContact } from 'react-icons/io'
import imgcil from "../assets/images/cantikituluka.jpg";
import Comment from "../components/Comment";
import "../style/Deskripsi.css";
import "../style/Rating.css";

const CantikItuLuka = () => {
  const [rating, setRating] = useState("0");
  const handleRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <div className="kontenerdeskripsi">
        <div className="imgcil">
          <img draggable="false" alt="" src={imgcil}></img>
          <div className="ratingku">
            <span className="spanrating">
              <div className="nilairating">&nbsp;&emsp;({rating})</div>
              <form class="rating">
                <label>
                  <input
                    type="radio"
                    name="stars"
                    value="1"
                    onClick={handleRating}
                  />
                  <span className="icon">★</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="stars"
                    value="2"
                    onClick={handleRating}
                  />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="stars"
                    value="3"
                    onClick={handleRating}
                  />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="stars"
                    value="4"
                    onClick={handleRating}
                  />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="stars"
                    value="5"
                    onClick={handleRating}
                  />
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                  <span className="icon">★</span>
                </label>
              </form>
            </span>
            <span className="ikonmata">
              <FaEye /> 398
            </span>
          </div>
        </div>
        <div className="isideskripsi">
          <h2>Cantik Itu Luka</h2>
          <h3>Eka Kurniawan</h3>
          <p>
            &emsp;&emsp;&emsp;Novel ini menceritakan tentang masa kolonial atau
            penjajahan, saat seorang perempuan tersebut memiliki wajah yang
            buruk rupa. Akhirnya anak terakhir lahir seperti yang di harapkan,
            dan diberikan nama Cantik.
            <br />
            &emsp;&emsp;&emsp;Novel Cantik Itu Luka bercerita tentang alur hidup
            Dewi Ayu, pelacur cantik di zaman kolonial. Garis hidup dan
            keturunan Dewi Ayu sangat unik, mulai dari sisilah ayah-ibu hingga
            anak-anaknya yang kelak banyak membawa pengaruh di Halimunda,
            wilayah rekaan Eka Kurniawan. Sejak kecil, Dewi Ayu tumbuh tanpa
            asuhan ayah dan ibu yang terusir karena kawin sedarah (perkawinan
            saudara tiri). Dewi Ayu diasuh oleh kakek-neneknya. Ia tumbuh
            menjadi gadis kuat dan pemberani.
            <br />
            &emsp;&emsp;&emsp;Salah satu bukti keberaniannya adalah ketegarannya
            hidup di penjara saat Jepang menyerang Hindia Belanda. Di tempat
            penahanan itulah Dewi Ayu menyerahkan kesuciannya demi membantu
            rekannya di barak penampungan.................................
          </p>
        </div>
      </div>
      <div className="divlinkbaca">
        <Link to='/bacacantikituluka' className="linkbaca">Klik Di Sini Untuk Membaca Cantik Itu Luka</Link>
      </div>

        <Comment />

    </div>
  );
};

export default CantikItuLuka;
