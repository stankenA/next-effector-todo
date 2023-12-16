import { FC } from "react";
import styles from "./MainPage.module.scss";
import Todos from "@/components/Todos/Todos";
import DateInfo from "@/components/DateInfo/DateInfo";

const MainPage: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.firstColumn}>
        <Todos />
      </div>
      <div className={styles.secondColumn}>
        <DateInfo />
      </div>
    </div>
  );
};

export default MainPage;
