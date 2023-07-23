import SectionTitle from "../../../components/Sectiontitle";
import useColleges from "../../../hooks/useColleges";
import CollegeCard from "./CollegeCard";

const CollegeSection = () => {
  const  [colleges] = useColleges()
  console.log(colleges);
  return (
    <div className="my-8 md:my-20">
      <div>
        <SectionTitle title="top colleges" />
        <div className="grid md:flex justify-evenly">
          
          {
            colleges.slice(1, 4).map(c => <CollegeCard college={c} key={c._id}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default CollegeSection;
