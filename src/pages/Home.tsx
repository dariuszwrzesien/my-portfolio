import { useState } from "react";
import { Button } from "../components/ui";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background text-foreground p-6">
      <h1>Home</h1>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default Home;
