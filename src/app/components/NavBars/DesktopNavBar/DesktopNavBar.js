import React from "react";
import Link from "next/link";
import styles from "./desktopNavBar.module.scss";
import Image from "next/image";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
const DesktopNavBar = ({ likedSelected, setLikedSelected }) => {
  return (
    <nav className={styles["desktop-nav"]}>
      <div className={styles["nav-logo"]}>
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
      </div>
      <div className={styles["nav-links"]}>
        <Link
          href={"/"}
          className={styles["nav-link"]}
          onClick={() => {
            setLikedSelected(false);
          }}
        >
          <div className={styles["icon-text-wrapper"]}>
            {likedSelected ? (
              <AiOutlineHome
                style={{
                  color: "black",
                  marginRight: "5px",
                  fontSize: "1.5rem",
                }}
              />
            ) : (
              <AiFillHome
                style={{
                  color: "black",
                  marginRight: "5px",
                  fontSize: "1.5rem",
                }}
              />
            )}
            <span className={styles["nav-link-text"]}>Home</span>
          </div>
        </Link>
        <Link
          href={"/"}
          className={styles["nav-link"]}
          onClick={() => {
            setLikedSelected(true);
          }}
        >
          <div className={styles["icon-text-wrapper"]}>
            {likedSelected ? (
              <AiFillHeart
                style={{
                  color: "black",
                  marginRight: "5px",
                  fontSize: "1.5rem",
                }}
              />
            ) : (
              <AiOutlineHeart
                style={{
                  color: "black",
                  marginRight: "5px",
                  fontSize: "1.5rem",
                }}
              />
            )}
            <span className={styles["nav-link-text"]}>Liked</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
