import { Fragment, useEffect, useState } from "react";
import IconButton from "../IconButtons/IconButtons.jsx";
import styles from "./NavigationBar.module.scss";

const links = [
  { link: "/about", name: "About Us" },
  { link: "/members", name: "Members" },
  { link: "/partners", name: "Partners" },
  { link: "/services", name: "Online Services" },
  { link: "/downloads", name: "Downloads" }
];

export default function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <a className={styles.logo} href="/">
            <img src="/assets/images/logos/logo.png" alt="PhilHealth" />
            <h1>PhilHealth</h1>
          </a>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

function NavLinks() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth < 768) {
    return <Bars />;
  }

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <a key={link.name} href={link.link}>
          {link.name}
        </a>
      ))}
    </div>
  );
}

function Bars() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleBarsClick = () => {
    setIsSidePanelOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <IconButton
        className="bg-primary text-slate"
        fontAwesomeIcon="fas fa-bars"
        onClick={handleBarsClick}
      />
      {isSidePanelOpen && <SidePanel toggleSidePanel={handleBarsClick} />}
    </Fragment>
  );
}

function SidePanel({ toggleSidePanel }) {
  return (
    <div id={styles.sidePanel}>
      <div className={styles.header}>
        <IconButton
          onClick={toggleSidePanel}
          className="bg-slate text-primary"
          fontAwesomeIcon="fas fa-caret-right"
        />
      </div>
      <div className={styles.sidePanelLinks}>
        {links.map((link) => (
          <a key={link.name} href={link.link}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
