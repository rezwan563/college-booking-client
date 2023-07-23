/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

const CollegeCard = ({college}) => {
  const {_id, name, img, ad, established, students, history, sports} = college
  const adDate = ad.slice(0, 9);

  return (
    <div className="w-full md:w-1/4 my-12 md:mt-36 flex flex-col bg-white border shadow-sm rounded-xl border-l-8 border-b-4">
      <img
        className="w-full h-48 rounded-t-xl"
        src={img ? img : ''}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-bold">{name ? name : ''}</h3>
          {/* <span className="text-2xl font-semibold ">#3</span> */}
        </div>
        <div className="">
          <p className="font-bold text-lg animate-pulse">
            Addmission Date: {adDate ? adDate : ''}
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3">
            <p className="font-semibold">Established: {established ? established : ''}</p>
            <p className="font-semibold">Students: {students ? students: ''}</p>
            {/* <p className="font-semibold">Faculty: 2000+</p> */}
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
             {history ? history : ''}
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Sports</p>
             <ul className="grid grid-cols-2 list-inside list-disc">
              {
                sports ? sports.map((sport, index) => (
                  <li key={index}>{sport}</li> 
                )) : ''
              }
             </ul>
            </div>
          </div>
        </div>
        <button className="text-yellow-700 underline underline-offset-2 my-4 cursor-pointer hover:text-yellow-600">
         <Link to ={`/${_id}/${name}`}> More Details...</Link>
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
