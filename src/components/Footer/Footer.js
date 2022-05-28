import { Navigation } from "../Navigation/Navigation";
import { Social } from "../Social/Social";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Navigation />
          <Social white="white" />
        </div>
      </div>
    </footer>
  );
};
