import { FC } from "react";
import styles from "./MainPage.module.scss";
import Button from "@/ui-kit/Button/Button";
import { Icons } from "@/ui-kit/Icons";

const MainPage: FC = () => {
  const tasks = ["Приготовить вкусный ужин", "Чет ещё"];
  return (
    <div className={styles.content}>
      <div className={styles.tasks}>
        <div className={styles.tasks__head}>
          <h2 className={styles.tasks__title}>Активные задачи</h2>
          <Button
            className={styles.tasks__more}
            type='button'
            icon={<Icons.Dots />}
            isTransparent
          />
        </div>
        <ul className={styles.list}>
          {tasks.map((item, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.item__container}>
                <p className={styles.item__txt}>{item}</p>
              </div>
              <div className={styles.item__container}>
                <Button type='button' icon={<Icons.Edit />} isTransparent />
                <Button type='button' icon={<Icons.Trash />} isTransparent />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
