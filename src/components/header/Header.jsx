import { Racing_Sans_One } from "next/font/google";
import style from "./Header.module.css";
import { SubHeader } from "../icons/SubHeader";

const Racing = Racing_Sans_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const Header = () => {
  return (
    <div>
      <div className={`${Racing.className} ${style.title}`}>- TO-DO NOW -</div>
      <div className={style.subHeader}>
        <div></div>
        <SubHeader />
        <div></div>
      </div>
    </div>
  );
};
