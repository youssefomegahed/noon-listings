import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faHeartCircleCheck,
  faHouseCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./mobileNavBar.module.scss";

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
        <FontAwesomeIcon
          icon={likedSelected ? faHome : faHouseCircleCheck}
          className={styles["nav-icon"]}
          style={{ color: "black" }}
        />
      </Link>
      <Link href={"/"} className={styles["nav-link"]}>
        <FontAwesomeIcon
          icon={likedSelected ? faHeartCircleCheck : faHeart}
          className={styles["nav-icon"]}
          style={{ color: "black" }}
          onClick={() => {
            setLikedSelected(true);
          }}
        />
      </Link>
    </nav>
  );
};

export default MobileNavBar;
