import Banner from "../homesection/Banner";
import CollegeSection from "../homesection/CollegeSection";
import FeaturedIn from "../homesection/FeaturedIn";
import ResearchOutlook from "../homesection/ResearchOutlook";
import Reviews from "../homesection/Reviews";
import SuccessStory from "../homesection/SuccessStory";

// import wave from '../../../assets/wave-haikei.svg'
const Homepage = () => {
  return (
    <div className="">
     <Banner/>
     <FeaturedIn/>
     <CollegeSection/>
     <SuccessStory/>
     <ResearchOutlook/>
     <Reviews/>
    </div>
  );
}; 

export default Homepage;
