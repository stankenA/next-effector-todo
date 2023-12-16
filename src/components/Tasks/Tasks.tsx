import Button from "@/ui-kit/Button/Button";
import { Icons } from "@/ui-kit/Icons";
import { FC } from "react";
import styles from "./Tasks.module.scss";
import { $todos, removeTodo } from "@/stores/todos/todos";
import { useUnit } from "effector-react";

const Tasks: FC = () => {
  const [todos, removeTodoFn] = useUnit([$todos, removeTodo]);

  return (
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
        {todos.map((item, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.item__container}>
              <p className={styles.item__txt}>{item}</p>
            </div>
            <div className={styles.item__container}>
              <Button type='button' icon={<Icons.Edit />} isTransparent />
              <Button
                type='button'
                icon={<Icons.Trash />}
                isTransparent
                onClick={() => removeTodoFn(item)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
