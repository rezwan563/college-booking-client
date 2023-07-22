import SectionTitle from "../../../components/Sectiontitle";

const FeaturedIn = () => {
    const url = ["https://i.ibb.co/NjgYBTg/1200px-Financial-Times-corporate-logo-svg.png", "https://i.ibb.co/CwYj4ph/devex-Logo-original-df84a0a05ce91e324e8eda914ad32460.jpg", "https://i.ibb.co/ygPqbFB/Unicef-ds.jpg", "https://i.ibb.co/1QqWtS9/the-guardian-logo-vector.png", "https://i.ibb.co/KKX1CSm/Reuters-logo.jpg"]
    return (
        <div className="mt-8 md:mt-20">
            <div>
                <SectionTitle title="as seen in"/>
                <div className="flex justify-evenly">
                    {
                        url.map((pic, index) => (
                            <>
                            <img key={index} src={pic} className="w-16 md:w-56" alt="" />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedIn;