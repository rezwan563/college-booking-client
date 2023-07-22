const CollegeCard = () => {
  return (
    <div className="w-full md:w-1/4 my-12 md:mt-36 flex flex-col bg-white border shadow-sm rounded-xl border-l-8 border-b-4">
      <img
        className="w-full h-auto rounded-t-xl"
        src="https://i.ibb.co/nwYWqH7/7-1-scaled.webp"
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-bold">Standford University</h3>
          <span className="text-2xl font-semibold ">#3</span>
        </div>
        <div className="">
          <p className="font-bold text-lg animate-pulse">
            Addmission Date: 22 August, 2023
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3">
            <p className="font-semibold">Established: 1886</p>
            <p className="font-semibold">Students: 17,000+</p>
            <p className="font-semibold">Faculty: 2000+</p>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div>
              <p className="text-lg font-semibold">Events</p>
              <ul className="grid grid-cols-2 gap-2 list-inside list-disc">
                <li>Graduation of class 2019</li>
                <li>Sports Competition</li>
                <li>Freshmen BizzComp</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold">Research</p>
              <p className="">
                Stanford University, founded in 1885, has a rich research
                history. It played a vital role in World War II, birthed Silicon
                Valley, and excelled in medical breakthroughs and space
                exploration. Known for Nobel laureates and an entrepreneurial
                spirit, it continues to be a leading force in diverse fields.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Sports</p>
              <p>
                Stanford excels in sports with 126 NCAA team championships and
                24 consecutive Directors Cups for overall excellence, showcasing
                its athletic prowess and commitment to success.
              </p>
            </div>
          </div>
        </div>
        <button className="text-yellow-700 underline underline-offset-2 my-4 cursor-pointer hover:text-yellow-600">
          More Details...
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
