import SectionTitle from "../../../components/Sectiontitle";
import CollegeCard from "./CollegeCard";

const CollegeSection = () => {
  return (
    <div className="my-8 md:my-20">
      <div>
        <SectionTitle title="top colleges" />
       <div className="flex justify-evenly">
<CollegeCard/>
<CollegeCard/>
<CollegeCard/>
       </div>
      </div>
    </div>
  );
};

export default CollegeSection;
