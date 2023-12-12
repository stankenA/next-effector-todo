import { FC } from "react";
import styles from "./MainPage.module.scss";
import Tasks from "@/components/Tasks/Tasks";

const MainPage: FC = () => {
  return (
    <div className={styles.content}>
      <Tasks />
    </div>
  );
};

export default MainPage;
