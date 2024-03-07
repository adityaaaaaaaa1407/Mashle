import { heroCards } from "@/root/DB/data";

import { Link } from "react-router-dom";

const HeroCards = () => {
  return (
    <div className="grid sm:grid-cols-2">
      {heroCards.map((card) => (
        <div key={card.id}>
          <Link to="/products">
            <img id={card.id} src={card.src} className="p-2 rounded-3xl " />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroCards;
