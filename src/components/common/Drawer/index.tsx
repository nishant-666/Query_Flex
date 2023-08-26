import React from "react";
import styles from "./Drawer.module.scss";
import { AiOutlineMenu } from "react-icons/ai";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen, children }: Drawer) => {
  return (
    <div
      className={
        isDrawerOpen ? styles.queryDrawerOpen : styles.queryDrawerClose
      }
    >
      <AiOutlineMenu
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className={styles.menuIcon}
        size={30}
      />

      {children}
    </div>
  );
};

export default Drawer;
