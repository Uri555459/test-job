import { Offer } from "./components/Offer/Offer";
import { Biography } from "./components/Biography/Biography";
import { Creativity } from "./components/Creativity/Creativity";
import { Museums } from "./components/Museums/Museums";
import { Footer } from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Offer />
      <Biography />

      <Creativity />
      <Museums />
      <Footer />
    </div>
  );
}

export default App;
