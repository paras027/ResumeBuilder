import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.heading}>
          Making Your Own <span>Resume</span> Easy
        </p>
      </div>
    </div>
  );
}

export default Header;
