import { Fragment, useEffect, useState } from "react";
import LinkImageCard from "../../components/LinkImageCards/LinkImageCards.jsx";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <Fragment>
      <NavigationBar />
      <BannerCarousel />
      <DiscoverSection />
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

function DiscoverSection() {
  return (
    <div id={styles.discover}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Discover More About PhilHealth</h1>

          <div className={styles.cards}>
            <LinkImageCard
              href="/members"
              image="/assets/images/discover/members.png"
              alt="members"
              title="Members"
              description="This section features the different membership categories, premium payment, data amendment and other procedures that each type of member must know. We have custom-fit the information to ensure that we address the specific concerns of each of our member types."
            />
            <LinkImageCard
              href="/benefits"
              image="/assets/images/discover/benefits.png"
              alt="benefits"
              title="Benefits"
              description="This section features a variety of comprehensive health care services -from basic primary care to catastrophic packages to provide members and their families with the information they need on benefits and benefits availment. It includes eligibility requirements, coverage, general guidelines for specific diseases and selections criteria among others."
            />
            <LinkImageCard
              href="/services"
              image="/assets/images/discover/services.png"
              alt="online services"
              title="Online Services"
              description="Considered the newest addition to our menu of electronic services, this section features the different access points that our stakeholders can tap to transact with us online. It includes registration, premium payment and reporting and even locating our offices nationwide."
            />
            <LinkImageCard
              href="/services"
              image="/assets/images/discover/partners.png"
              alt="partners"
              title="Our Partners"
              description="We forge partnerships with only the best in the industry to fulfill our mandate of providing all Filipinos with accessible, available, acceptable and affordable health care services that will lead to better health outcomes and improved quality of life."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
