import { FC } from "react";
import styles from "./SideNav.module.scss";
import Link from "next/link";
import { Icons } from "@/ui-kit/Icons";
import { categoriesItems, dataItems } from "./template";

const SideNav: FC = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.logo}>
          <span className={styles.logo__container}>
            <Icons.Logo />
          </span>
          <h1 className={styles.logo__title}>Tasks Book</h1>
        </Link>
        <div className={styles.block}>
          <h2 className={styles.subtitle}>Categories</h2>
          <ul className={styles.list}>
            {categoriesItems.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link className={styles.item__link} href={item.link}>
                  {<item.Icon />}
                  <p className={styles.item__txt}>{item.txt}</p>
                  {index === 0 && <span className={styles.item__active}></span>}
                </Link>
              </li>
            ))}
            <li className={styles.item}>
              <button className={styles.item__button}>
                <Icons.PlusSquare />
                Add
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.block}>
          <h2 className={styles.subtitle}>Data</h2>
          <ul className={styles.list}>
            {dataItems.map((item, index) => (
              <li className={styles.item} key={index}>
                <Link className={styles.item__link} href={item.link}>
                  {<item.Icon />}
                  <p className={styles.item__txt}>{item.txt}</p>
                  {index === 0 && <span className={styles.item__active}></span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.button}>
          <Icons.Login />
          <p className={styles.button__txt}>Выйти</p>
        </button>
      </nav>
    </aside>
  );
};

export default SideNav;
