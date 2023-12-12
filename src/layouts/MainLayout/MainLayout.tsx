import Header from "@/components/Header/Header";
import SideNav from "@/components/SideNav/SideNav";
import { FC, PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.page}>
      <SideNav />
      <div className={styles.content}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
