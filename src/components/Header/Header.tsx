import { FC } from "react";
import { Icons } from "@/ui-kit/Icons";
import Button from "@/ui-kit/Button/Button";
import styles from "./Header.module.scss";
import avatar from "@/assets/avatar.png";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Button type='button' icon={<Icons.PlusCircle />}>
        Новая задача
      </Button>
      <Button type='button' icon={<Icons.Sun />} isTransparent />
      <div className={styles.profile}>
        <p className={styles.profile__txt}>Greetings, username</p>
        <div className={styles.profile__container}>
          <Image className={styles.profile__img} src={avatar} alt='avatar' />
          <Button
            className={styles.profile__btn}
            type='button'
            icon={<Icons.Profile />}
            isTransparent
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
