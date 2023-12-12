import Header from "@/components/Header";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
