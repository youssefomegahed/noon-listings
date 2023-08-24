import React from "react";
import Link from "next/link";
import styles from "./desktopNavBar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faHeartCircleCheck,
  faHouseCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faImage as faHomeRegular,
//   faHeart as faHeartRegular,
// } from "@fortawesome/free-regular-svg-icons"; // faHome in this package is not free, so I used a placeholder
const DesktopNavBar = () => {
  const [liked, setLiked] = React.useState(false);

 

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
            console.log("Home clicked");
            setLiked(false);
          }}
        >
          <FontAwesomeIcon
            icon={liked ? faHome : faHouseCircleCheck}
            style={{ color: "black", marginRight: "5px", fontSize: "1.1rem" }}
          />
          <span className={styles["nav-link-text"]}>Home</span>
        </Link>
        <Link
          href={"/"}
          className={styles["nav-link"]}
          onClick={() => {
            console.log("Liked clicked");
            setLiked(true);
          }}
        >
          <FontAwesomeIcon
            icon={liked ? faHeartCircleCheck : faHeart}
            style={{ color: "black", marginRight: "5px", fontSize: "1.1rem" }}
          />
          <span className={styles["nav-link-text"]}>Liked</span>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
