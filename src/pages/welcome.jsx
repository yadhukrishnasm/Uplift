import { useNavigate } from "react-router-dom";
import WaterMark from "../components/WaterMark";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="px-11 pt-40 flex flex-col py-20 gap-10 h-screen justify-between items-center font-poppins text-[#2D3136]">
      {/* <WaterMark /> */}
      <div className="gap-10 flex flex-col">
        <h1 className="text-3xl font-extralight">
          Welcome to <br /> <span className="font-black">Uplift</span>
        </h1>
        <p className="font-light">Together we can make a difference</p>
      </div>
      <button
        className="bg-[#ACD293] shadow-[-1px_4px_0_0_rgba(0,0,0,.5)] text-black font-light py-[.4rem] px-6 rounded-full w-fit border border-black"
        onClick={() => navigate("/signin")}
      >
        sign up
      </button>
    </div>
  );
}
