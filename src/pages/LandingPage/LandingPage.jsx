import { Fragment, useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <Fragment>
      <NavigationBar />
      <BannerCarousel />
    </Fragment>
  );
}

function BannerCarousel() {
  const [bannerIdx, setBannerIdx] = useState(0);

  const banners = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.png",
    "banner4.jpg",
    "banner5.jpg",
    "banner6.png"
  ];

  const handleCaretLeftClick = () => {
    if (bannerIdx === 0) {
      setBannerIdx(banners.length - 1);
      return;
    }

    setBannerIdx((prev) => prev - 1);
  };

  const handleCaretRightClick = () => {
    if (bannerIdx === banners.length - 1) {
      setBannerIdx(0);
      return;
    }

    setBannerIdx((prev) => prev + 1);
  };

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerIdx((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(bannerInterval);
  }, []);

  return (
    <div
      id={styles.carousel}
      style={{
        backgroundImage: `url('/assets/images/banners/${banners[bannerIdx]}')`
      }}>
      <div className={styles.buttons}>
        <button onClick={handleCaretLeftClick}>
          <i className="fas fa-caret-left" />
        </button>
        <button onClick={handleCaretRightClick}>
          <i className="fas fa-caret-right" />
        </button>
      </div>
    </div>
  );
}
