import style from "./NotFound.module.css";
import Not from "../../assets/404.jpg";
export default function NotFound() {
  return (
    <>
      <img className="mx-auto" src={Not} alt="Notfoundpage" />
    </>
  );
}
