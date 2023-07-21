import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const user = (
    <>
      <p className="mx-4">Abdul Hossain</p>
    </>
  );
  const navItems = (
    <>
      <li className="md:hidden underline underline-offset-4 cursor-pointer py-3">{user}</li>
      <li className="mx-4">Home</li>
      <li className="mx-4">Admission</li>
      <li className="mx-4">My College</li>
      <li className="hidden md:block underline underline-offset-4 cursor-pointer">{user}</li>
    </>
  );
  return (
    <div>
      <div>
        <div className="h-16 md:h-28 px-2 flex justify-between items-center shadow-md">
          <p>Your College Guide</p>
          <ul className="hidden md:flex gap-16">{navItems}</ul>
          {showMenu ? (
            <AiOutlineMenuUnfold
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-3xl"
            />
          ) : (
            <AiOutlineMenuFold
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-3xl"
            />
          )}
          {/* AiOutlineMenuUnfold */}
        </div>
      </div>
      <div
        className={`h-0 w-2/3 md:hidden transition-all ease-in-out delay-300 duration-300 ${
          showMenu ? "translate-x-0 " : "-translate-x-full"
        } `}
      >
        <ul className="bg-white shadow-2xl h-screen py-8 ">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
