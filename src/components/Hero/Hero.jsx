import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* Progranda da melhor rs */}
        <div className="the-best-ad">
          <div></div>
          <span>A melhor academia de todos os tempos</span>
        </div>

        {/* Texto do hero */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Hora </span>
            <span>De</span>
          </div>
          <div>
            <span>Meter o shape</span>
          </div>
          <div>
            <span>
              "Eu não tive culpa, eu não disse nada. O shape mais uma vez disse
              por mim" - <i>Toguro</i>
            </span>
          </div>
        </div>

        {/*Estatisticas*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>coachs especialistas</span>
          </div>
          <div>
            <span>+785</span>
            <span>membros fieis</span>
          </div>
          <div>
            <span>+50</span>
            <span>programas fitness</span>
          </div>
        </div>

        {/*Botoes*/}
        <div className="hero-buttons">
          <button className="btn">Comece agora!</button>
          <button className="btn">Leia mais.</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Faça parte!</button>

        <div className="heart-rate">
          <img src={Heart} alt="Coracao"></img>
          <span>Avalie seu coração</span>
          <span>116 bpm</span>
        </div>

        {/* images do hero*/}
        <img src={hero_image} alt="imagem hero" className="hero-image" />
        <img
          src={hero_image_back}
          alt="imagem hero costa"
          className="hero-image-back"
        />

        {/*Calorias*/}
        <div className="calories">
          <img src={Calories} alt="Calorias" />
          <div>
            <span>Calorias queimadas</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
