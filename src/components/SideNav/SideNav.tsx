import { FC } from "react";
import styles from "./SideNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "@/assets/icons/logo.svg";
import homeIcon from "@/assets/icons/home.svg";
import loginIcon from "@/assets/icons/log-in.svg";

const SideNav: FC = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.logo}>
          <span className={styles.logo__container}>
            <Image src={logoIcon} alt='logo icon' />
          </span>
          <h1 className={styles.logo__title}>Tasks Book</h1>
        </Link>
        <div className={styles.block}>
          <h2 className={styles.subtitle}>Categories</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.item__link} href={"/"}>
                <Image
                  className={styles.item__icon}
                  src={homeIcon}
                  alt='home icon'
                />
                <p className={styles.item__txt}>Home</p>
                <span className={styles.item__active}></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h2 className={styles.subtitle}>Data</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.item__link} href={"/"}>
                <Image
                  className={styles.item__icon}
                  src={homeIcon}
                  alt='home icon'
                />
                <p className={styles.item__txt}>Statistics</p>
                <span className={styles.item__active}></span>
              </Link>
            </li>
          </ul>
        </div>
        <button className={styles.button}>
          <Image
            className={styles.button__icon}
            src={loginIcon}
            alt='login icon'
          ></Image>
          <p className={styles.button__txt}>Выйти</p>
        </button>
      </nav>
    </aside>
  );
};

export default SideNav;
