
const SearchResult = () => {
    return (
        <div className="border-b-2">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/nwYWqH7/7-1-scaled.webp"
              className="w-12 h-12 object-cover"
              alt=""
            />
            <p>Standford University</p>
          </div>
          <p>Global Ranking: #3</p>
        </div>
        <div className="py-2 grid grid-cols-3">
          <p>Established: 1886</p>
          <p>Students: 17,000+</p>
          <p>Faculty: 2000+</p>
        </div>
      </div>
    );
};

export default SearchResult;