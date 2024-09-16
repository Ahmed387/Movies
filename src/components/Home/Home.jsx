import Mainslider from "../Mainslider/Mainslider";
import Movies from "../Movies/Movies";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Mainslider />
      <div className="ms-10 text-white  text-3xl  mb-14 font-bold mt-12">
        POPULAR :
      </div>
      <Movies />
    </>
  );
}
