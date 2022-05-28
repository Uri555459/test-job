import { useState } from "react";
import "./biography.scss";

// import data from "./DB.json";

export const Biography = () => {
  const [biographyText, setBiographyText] = useState();

  const readMoreHandler = async () => {
    const res = await fetch("./DB.json");
    const data = await res.json();
    setBiographyText(data);
    console.log(biographyText);
  };

  return (
    <section className="biography">
      <div className="container">
        <div className="biography__inner">
          <div className="biography__left">
            <h2 className="section-title">биография</h2>
          </div>

          <div className="biography__right">
            <div className="biography__info">
              <span></span>
              <p>
                Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца,
                преподавателя духовной семинарии, не стало, когда мальчику было
                чуть больше года. Мать осталась вдовой в 25 лет и содержала
                четверых детей.
              </p>
            </div>

            <div className="biography__info">
              <span>1887</span>
              <p>
                Борис сначала учился в церковно-приходской школе, потом в
                гимназии. Когда ему было девять лет, в город привезли выставку
                художников-передвижников. Мальчика настолько впечатлила
                живопись, что он твердо решил научиться рисовать так же искусно.
                Мать нашла деньги, чтобы Борис смог брать уроки у известного в
                Астрахани художника Павла Власова.{" "}
              </p>
            </div>

            <div className="biography__info">
              <span>1896</span>
              <p>
                Окончив семинарию, в 1896 году Кустодиев отправился учиться в
                Москву, но в художественную школу его не приняли: Борису уже
                исполнилось 18 и он был слишком взрослым. Тогда Кустодиев поехал
                в Петербург, где подал документы в Высшее художественное училище
                при Академии художеств.
              </p>
            </div>
          </div>
        </div>

        <div className="biography__bottm">
          <div className="social">
            <a className="social__link" target="_blank" href="#">
              <img src="images/vk.svg" alt="" />
              <span>105</span>
            </a>
            <a className="social__link" target="_blank" href="#">
              <img src="images/twit.svg" alt="" />
              <span>96</span>
            </a>
            <a className="social__link" target="_blank" href="#">
              <img src="images/fb.svg" alt="" />
            </a>
          </div>

          <button onClick={readMoreHandler} className="read-more">
            <span>читать больше</span>
            <img src="images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};
