import TextBlock from '../../components/TextBlock';
import bio from '../../data/bio.html?raw';
import { useScrollTo } from '../../hooks/use-scrollTo';

const Bio = () => {
  const { ref } = useScrollTo();
  return (
    <div className="flex flex-col overflow-auto custom-scrollbar w-full z-1">
      <TextBlock ref={ref} text={bio} />
    </div>
  );
};

export default Bio;
