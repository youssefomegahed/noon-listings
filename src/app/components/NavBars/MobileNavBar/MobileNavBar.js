import React from "react";
import Link from "next/link";
import styles from "./mobileNavBar.module.scss";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
const MobileNavBar = ({ likedSelected, setLikedSelected }) => {
  return (
    <nav className={styles["mobile-nav"]}>
      <Link
        href={"/"}
        className={styles["nav-link"]}
        onClick={() => {
          setLikedSelected(false);
        }}
      >
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
      </Link>
      <Link
        href={"/"}
        className={styles["nav-link"]}
        onClick={() => {
          setLikedSelected(true);
        }}
      >
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
      </Link>
    </nav>
  );
};

export default MobileNavBar;
