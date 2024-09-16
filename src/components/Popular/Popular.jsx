import Movies from "../Movies/Movies";
import style from "./Popular.module.css";
export default function Popular() {
  return (
    <>
      <div className="ms-10 text-white  text-3xl mt-8 mb-14 font-bold">
        POPULAR :
      </div>
      <Movies />
    </>
  );
}
