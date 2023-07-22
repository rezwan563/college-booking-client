import Banner from "../homesection/Banner";
import CollegeSection from "../homesection/CollegeSection";
import FeaturedIn from "../homesection/FeaturedIn";
import SuccessStory from "../homesection/SuccessStory";

// import wave from '../../../assets/wave-haikei.svg'
const Homepage = () => {
  return (
    <div className="">
     <Banner/>
     <FeaturedIn/>
     <CollegeSection/>
     <SuccessStory/>
    </div>
  );
}; 

export default Homepage;
