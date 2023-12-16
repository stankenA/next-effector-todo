import Button from "@/ui-kit/Button/Button";
import { Icons } from "@/ui-kit/Icons";
import { FC } from "react";
import styles from "./Tasks.module.scss";
import { $todos, removeTodo } from "@/stores/todos/todos";
import { useUnit } from "effector-react";
import CommonCard from "../CommonCard/CommonCard";

const Tasks: FC = () => {
  const [todos, removeTodoFn] = useUnit([$todos, removeTodo]);

  return (
    <CommonCard
      button={
        <Button
          className={styles.more}
          type='button'
          icon={<Icons.Dots />}
          isTransparent
        />
      }
    >
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
    </CommonCard>
  );
};

export default Tasks;
