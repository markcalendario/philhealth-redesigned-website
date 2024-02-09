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
      <EKonsulta />
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

function EKonsulta() {
  return (
    <div id={styles.ekonsulta}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img
              src="/assets/images/e-konsulta/consultation.jpg"
              alt="consultation"
            />
          </div>
          <div className={styles.right}>
            <h1>PhilHealth E-Konsulta</h1>
            <p>
              PhilHealth Konsultasyong Sulit Tama (Konsulta) is a comprehensive
              outpatient benefits as mandated by the Universal Health Care Law.
            </p>
            <p>
              UHC ensures that all Filipinos are guaranteed equitable access to
              quality and affordable health care goods and services, and
              protected against financial risks.
            </p>
            <p>PhilHealth Konsulta aims to:</p>
            <div className={styles.check}>
              <i className="fas fa-check-circle" />{" "}
              <p>
                Protect the health of every Filipinos against chronic illnesses
              </p>
            </div>
            <div className={styles.check}>
              <i className="fas fa-check-circle" />{" "}
              <p>Avoid complications through early detection</p>
            </div>
            <div className={styles.check}>
              <i className="fas fa-check-circle" />{" "}
              <p>To provide affordable drugs and medicines</p>
            </div>
            <p>
              Under the PhilHealth Konsulta, all Filipinos shall be registered
              with an accredited PhilHealth Konsulta Provider of their choice
              and be eligible to avail of the following:
            </p>
            <div className={styles.check}>
              <i className="fas fa-check-circle" /> <p>Consultation</p>
            </div>
            <div className={styles.check}>
              <i className="fas fa-check-circle" /> <p>Consultation</p>
            </div>
            <div className={styles.check}>
              <i className="fas fa-check-circle" />{" "}
              <p>Health Risk Screening and Assessment</p>
            </div>
            <div className={styles.check}>
              <i className="fas fa-check-circle" />{" "}
              <p>Selected Laboratory and Diagnostic Test</p>
            </div>
            <div className={styles.check}>
              <i className="fas fa-check-circle" />{" "}
              <p>Selected Drugs and medicines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
