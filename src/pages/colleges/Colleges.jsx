import useColleges from "../../hooks/useColleges";
import CollegeCard from "../homepage/homesection/CollegeCard";

const Colleges = () => {
    const [college] = useColleges()
    
  console.log(college);
    return (
        <div className="mx-4 md:mx-20">
          <div className="grid md:flex  md:flex-wrap justify-around">
          {
            college ? college.map(col => (
                <CollegeCard key={col._id} college={col}/>
            )) : ''
          }
          </div>
        </div>
    );
};

export default Colleges;