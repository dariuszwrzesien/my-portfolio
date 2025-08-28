import React from "react";
import { Link } from "react-router";
import notFound from "../data/404.html?raw";
import TextBlock from "../components/TextBlock";

const NotFoundPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full h-full text-foreground z-1">
    <div className="flex flex-col">
      <h6 className="text-6xl text-center font-bold mb-4">404</h6>
      <TextBlock text={notFound} />
    </div>
  </div>
);

export default NotFoundPage;
