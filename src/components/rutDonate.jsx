import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const RutDonate = () => {
  return (
    <Link to="/donate" className="bg-orange-500 text-white px-4 py-2 rounded flex items-center gap-2 shadow-md hover:bg-orange-600 transition">
      <FaHeart /> Donar
    </Link>
  );
};

export default RutDonate;