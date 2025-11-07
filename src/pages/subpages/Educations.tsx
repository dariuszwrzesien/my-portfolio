import TextBlock from '../../components/TextBlock';
import educations from '../../data/educations.html?raw';
import { useScrollTo } from '../../hooks/use-scrollTo';

const Educations = () => {
  const { ref } = useScrollTo();
  return (
    <div className="flex flex-col overflow-auto custom-scrollbar w-full z-1">
      <TextBlock ref={ref} text={educations} />
    </div>
  );
};

export default Educations;
