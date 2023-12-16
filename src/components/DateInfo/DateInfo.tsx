import { FC, useEffect, useState } from "react";
import styles from "./DateInfo.module.scss";
import CommonCard from "../CommonCard/CommonCard";
import { Icons } from "@/ui-kit/Icons";

const DateInfo: FC = () => {
  const date = new Date();
  const today = date.toDateString().split(" ");

  const [isHydrated, setIsHydrated] = useState(false);

  const [time, setTime] = useState({
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    if (!isHydrated) return;

    function setFreshTime() {
      const newDate = new Date();
      setTime({
        hour: newDate.getHours(),
        minutes: newDate.getMinutes(),
        seconds: newDate.getSeconds(),
      });
    }

    const interval = setInterval(() => setFreshTime(), 1000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <CommonCard title='Date info'>
      <div className={styles.content}>
        <div className={styles.block}>
          <p className={styles.block__title}>Current time is</p>
          <div className={styles.block__container}>
            <Icons.Clock />
            <p className={styles.block__value}>
              {isHydrated &&
                `${time.hour > 10 ? time.hour : "0" + time.hour}:${
                  time.minutes > 10 ? time.minutes : "0" + time.minutes
                }:${time.seconds > 10 ? time.seconds : "0" + time.seconds}`}
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <p className={styles.block__title}>Today is</p>
          <div className={styles.block__container}>
            <Icons.Calendar />
            <p
              className={styles.block__value}
            >{`${today[2]} ${today[1]} ${today[3]}`}</p>
          </div>
        </div>
      </div>
    </CommonCard>
  );
};

export default DateInfo;
