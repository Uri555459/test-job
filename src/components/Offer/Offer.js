import { Header } from "../Header/Header";

import "./offer.scss";

export const Offer = () => {
  return (
    <section className="offer">
      <div className="offer__left">
        <div className="offer__img">
          <img src="/images/offer/offer.jpg" alt="Offer images" />
        </div>
      </div>

      <div className="offer__right">
        <Header />
        <div className="offer__content">
          <div className="offer__date">1878-1927</div>
          <div className="offer__text">
            <h1 className="offer__title">борис кустодиев</h1>
            <p className="offer__desc">
              Художник, запечатлевший на своих ярких и жизнерадостных полотнах
              сцены русских будней и праздников. Обладал редким безграничным
              талантом, которому, в первую очередь, было присуще особое чувство
              и восприятие родной природы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
