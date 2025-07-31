import TextBlock from "../../components/TextBlock";
import bio from "../../data/bio.html?raw";

const Bio = () => {
  return (
    <div className="flex flex-col overflow-auto custom-scrollbar w-full">
      <TextBlock text={bio} />
    </div>
  );
};

export default Bio;
