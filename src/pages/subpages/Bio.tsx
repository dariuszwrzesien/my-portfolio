import TextBlock from "../../components/TextBlock";
import bio from "../../data/bio.txt?raw";

const Bio = () => {
  return (
    <>
      <TextBlock text={bio} />
    </>
  );
};

export default Bio;
