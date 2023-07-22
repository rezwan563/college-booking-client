import SectionTitle from "../../../components/Sectiontitle";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SuccessStory = () => {
  return (
    <div>
      <div>
        <SectionTitle title="success story" />
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 mx-auto my-8 md:my-20">
          <div>
            <AwesomeSlider>
              <div>
                <img
                  src="https://i.ibb.co/3RTzQ7Y/commencement-setup.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/CVwsTKv/FU3-S7-QBUAAEAOr3.jpg" className="object-scale-down"
                  alt=""
                />
              </div>
              <div className="">
                <iframe
                  width="1280"
                  height="540"
                  src="https://www.youtube.com/embed/tU2yz6KbKfk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/Xp8tHdy/IMG-7449-1800-0-v1.jpg"
                  className=""
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/FYtkpxS/D8ey5-Wr-Xk-AEOk-TI.jpg"
                  alt=""
                />
              </div>
            </AwesomeSlider>
          </div>
          <div className="bg-slate-200">
            <p className="text-2xl md:text-5xl ">
              Rooted in Love, Soaring to New Heights: Celebrating Our Graduates
            </p>
            <p className="mt-8 md:mt-16 text-center text-clip transition-opacity">
              Through hardships and doubts, a determined graduate pushed
              forward, supported by loved ones. With tears of triumph, they
              received their diploma, knowing that unwavering love was the
              foundation of their success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
