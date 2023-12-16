import { FC, PropsWithChildren } from "react";
import styles from "./CommonCard.module.scss";

type CommonCardProps = PropsWithChildren & {
  button?: React.ReactNode;
};

const CommonCard: FC<CommonCardProps> = ({ children, button }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__head}>
        <h2 className={styles.card__title}>Активные задачи</h2>
        {button ?? button}
      </div>
      {children}
    </div>
  );
};

export default CommonCard;
