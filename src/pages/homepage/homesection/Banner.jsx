
const Banner = () => {
    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-2">
        <div className="grid gap-5 md:grid-cols-2">
          <p className="w-2/3 text-left px-5">
            <span className="text-2xl md:text-5xl ">
              CollegeServiceHub: Your Ultimate College Booking Service
            </span>
            <br />
            <br />
            <span className='text-md md:text-lg'>
              {" "}
              Welcome to CollegeServiceHub, your go-to website for booking
              college services and facilities hassle-free! Our platform is
              designed to empower visitors like you to easily browse, compare,
              and book a wide array of college offerings, from event venues and
              state-of-the-art equipment to catering services and campus
              resources.
            </span>
            <br />
            <br />
            <input type="search" name="" placeholder='Search college' id="" className="w-full border-4 border-gray-200 rounded-full p-2 placeholder:text-gray-500 placeholder:text-lg text-lg outline-none" />
          </p>
          <img
            src="https://plus.unsplash.com/premium_photo-1661954193886-5dc154beaba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhbXB1cyUyMGxpZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="place-self-auto md:place-self-center order-first"
          />

        </div>
      </div>
    );
};

export default Banner;