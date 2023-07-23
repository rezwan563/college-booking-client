
const Footer = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return (
        <footer className="w-full  bg-gray-100 p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
          <p className="text-2xl cursor-pointer">CollegeService</p>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li className="cursor-pointer">
             
                About Us
            </li>
            <li className="cursor-pointer">
              
                License
            </li>
            <li className="cursor-pointer">
              
                Contribute
            </li>
            <li className="cursor-pointer">
              
                Contact Us
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
       
          &copy; {year} CollegeService
        
      </footer>
    
    );
};

export default Footer;