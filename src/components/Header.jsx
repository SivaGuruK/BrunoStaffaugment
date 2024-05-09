
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 mt-6 ml-8 mr-8 rounded-full flex items-center justify-between border border-gray-250">
      <div className="flex items-center ml-12">
        <span className="text-4xl font-bold font-manrope">Brunel</span>
      </div>
      <div className="flex items-center justify-end">
        <div className="w-40 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center relative border border-gray-250">
          <Link
            to="/getproject"
            className="w-full h-full flex items-center justify-center"
          >
            <button className="text-lg cursor-pointer">Get Projects</button>
          </Link>
        </div>
        <div className="bg-black text-white w-40 h-12 rounded-full flex items-center justify-center relative ml-3 mr-10 border border-gray-350">
          <button className="text-lg pointer-cursor">Onboard Talent</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
