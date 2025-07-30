import { RiArrowRightSLine } from "@remixicon/react";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      {/* Hello Section */}
      <section className="col-span-6 h-[calc(100vh-16rem)] flex items-center justify-center">
        <div className="flex flex-col justify-center p-8">
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
        </div>
      </section>

      {/* Game Section */}
      <section className="col-span-6 h-[calc(100vh-16rem)] flex items-center justify-center">
        <div className="flex flex-col justify-center p-4 max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, dolor
          minus totam corrupti harum itaque reiciendis deserunt quibusdam aut
          blanditiis dolores eum vitae voluptatibus at nulla magni, beatae,
          pariatur sequi.
        </div>
      </section>
    </div>
  );
};
export default Home;
