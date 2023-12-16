import { FC } from "react";
import styles from "./MainPage.module.scss";
import Tasks from "@/components/Tasks/Tasks";

const MainPage: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.firstColumn}>
        <Tasks />
      </div>
    </div>
  );
};

export default MainPage;
