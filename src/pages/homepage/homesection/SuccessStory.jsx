import SectionTitle from "../../../components/Sectiontitle";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SuccessStory = () => {
    return (
        <div>
            <div>
                <SectionTitle title="success story"/>
                <div className="w-3/4 mx-auto">
                    <AwesomeSlider>
                        <div><img src="https://i.ibb.co/3RTzQ7Y/commencement-setup.webp" alt="" /></div>
                        <div><img src="https://i.ibb.co/CVwsTKv/FU3-S7-QBUAAEAOr3.jpg" alt="" /></div>
                        <div className="">
                           
                        <iframe width="1280" height="720"  src="https://www.youtube.com/embed/tU2yz6KbKfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                        
                        ></iframe>
                        </div>
                        <div><img src="https://i.ibb.co/Xp8tHdy/IMG-7449-1800-0-v1.jpg" className="" alt="" /></div>
                        <div><img src="https://i.ibb.co/FYtkpxS/D8ey5-Wr-Xk-AEOk-TI.jpg" alt="" /></div>
                    </AwesomeSlider>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;