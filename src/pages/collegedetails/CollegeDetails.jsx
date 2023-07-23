import useOneCollege from "../../hooks/useOneCollege";

const CollegeDetails = () => {
    const [singleCollege] = useOneCollege()
    console.log(singleCollege);
    const {name, rating, research, history, img, process, students, established, sports} = singleCollege
  return (
    <div className="">
      <div className="max-w-7xl mx-auto bg-slate-100 p-4 my-8 rounded-sm grid grid-cols-2">
        <img src={img ? img : ''} alt="" />
        <div className="self-center grid grid-cols-2 text-left mx-8 md:mx-20 gap-8">
          <p>{name ? name : ''}</p>
          <p>Established: {established ? established : ''}</p>
          <p>Total Students: {students ? students : ''}</p>
          <p>Rating : {rating ? rating : ''}</p>
        </div>
       
      </div>
      <div className="my-8 md:mx-52 grid grid-cols-2 gap-8 bg-slate-100 p-4 shadow-md">
        <p className="my-5 md:my-12">History : {history ? history : ''}</p>
        <p className="my5 md:my-12">Admission Process: {process ? process : ''}</p>
        <div>
            <p>Research</p>
            <ul className="list-disc list-inside indent-4">
                {
                    research ? research.map((n, index) =>(
                        <li key={index}><a href={n} className="text-yellow-700 underline hover:text-yellow-600">{n}</a></li>
                    )) : ''
                }
            </ul>
        </div>
        <div>
          <p>Sports</p>
          <ul className="list-disc list-inside indent-4">
                {
                    sports ? sports.map((n, index) =>(
                        <li key={index}>{n}</li>
                    )) : ''
                }
            </ul>
        </div>

      </div>
    </div>
  );
};

export default CollegeDetails;
