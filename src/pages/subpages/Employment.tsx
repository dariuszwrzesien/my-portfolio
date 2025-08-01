import TextBlock from "../../components/TextBlock";
import employment from "../../data/employment.html?raw";
import { useScrollTo } from "../../hooks/use-scrollTo";

const Employment = () => {
  const { ref } = useScrollTo();
  return (
    <div className="flex flex-col overflow-auto custom-scrollbar w-full">
      <TextBlock ref={ref} text={employment} />
    </div>
  );
};

export default Employment;
