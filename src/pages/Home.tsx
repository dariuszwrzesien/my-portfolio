import { RiArrowRightSLine } from "@remixicon/react";
import GameField from "../components/GameField";
import SnakeGame from "../components/SnakeGame";

const Home = () => {
  return (
    <div className="custom-sidebar-margin-left flex gap-4 h-full">
      {/* Hello Section */}
      <section className="flex flex-col justify-center w-full">
        <p className="text-foreground text-lg">Hi all. I am</p>
        <h1 className="text-heading-foreground">Dariusz Wrzesień</h1>
        <h4 className="flex items-center text-indigo-500">
          <RiArrowRightSLine /> Fullstack developer
        </h4>
        <p className="text-foreground text-md pt-16">
          // find my profile on LinkedIn
        </p>
        <p>
          <span className="text-indigo-500">const</span>{" "}
          <span className="text-teal-400">linkedinProfile</span> ={" "}
          <a
            className="text-link-foreground hover:text-link-hover-foreground"
            href="https://www.linkedin.com/in/dariusz-wrzesie%C5%84-605a2b63"
          >
            "https://www.linkedin.com/in/dariusz-wrzesień"
          </a>
        </p>
      </section>

      {/* Game Section */}
      <section className="flex flex-col items-center justify-center w-full p-4">
        <GameField>
          <SnakeGame width={460} height={410} />
        </GameField>
      </section>
    </div>
  );
};
export default Home;
