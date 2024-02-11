import { Fragment, useEffect, useState } from "react";
import IconCard from "../../components/IconCards/IconCards.jsx";
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
      <ARTA />
      <UniversalHealthCare />
      <Contact />
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
          <h1 data-aos="fade-up">Discover More About PhilHealth</h1>

          <div className={styles.cards}>
            <LinkImageCard
              dataAos="fade-right"
              href="/members"
              image="/assets/images/discover/members.png"
              alt="members"
              title="Members"
              description="This section features the different membership categories, premium payment, data amendment and other procedures that each type of member must know. We have custom-fit the information to ensure that we address the specific concerns of each of our member types."
            />
            <LinkImageCard
              dataAos="fade-up"
              href="/benefits"
              image="/assets/images/discover/benefits.png"
              alt="benefits"
              title="Benefits"
              description="This section features a variety of comprehensive health care services -from basic primary care to catastrophic packages to provide members and their families with the information they need on benefits and benefits availment. It includes eligibility requirements, coverage, general guidelines for specific diseases and selections criteria among others."
            />
            <LinkImageCard
              dataAos="fade-up"
              href="/services"
              image="/assets/images/discover/services.png"
              alt="online services"
              title="Online Services"
              description="Considered the newest addition to our menu of electronic services, this section features the different access points that our stakeholders can tap to transact with us online. It includes registration, premium payment and reporting and even locating our offices nationwide."
            />
            <LinkImageCard
              dataAos="fade-left"
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
              data-aos="fade-right"
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

function UniversalHealthCare() {
  return (
    <div id={styles.universalHealthCare}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1>Universal Health Care</h1>
            <p>
              LIBRE NA BA ANG LAHAT NG SERBISYONG PANGKALUSUGAN - MA OSPITAL MAN
              O OUTPATIENT?
            </p>
            <p>
              Ang lahat ng pasyente ay wala nang co-payment/ co-insurance kung
              sila ay ma-confine sa basic o ward accommodation ng ospital.
            </p>
            <p>
              Ayon sa Batas, hindi bababa sa 90% ng mga kama sa government
              hospitals; 70% sa specialty hospitals; at 10% sa mga pribadong
              ospital ay dapat basic o ward accommodation.
            </p>
            <p>
              Upang ito ay maisakatuparan ay kasalukuyan nang isinasagawa ang
              mga konsultasyon para sa kaukulang guidelines nito.
            </p>
          </div>
          <div className={styles.right}>
            <img
              data-aos="fade-left"
              src="/assets/images/universal-health-care/universal-health-care.webp"
              alt="consultation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ARTA() {
  return (
    <div id={styles.arta} data-aos="flip-up">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>
            PhilHealth Steps Up for the Ease of Doing Business and Efficient
            Government Service Delivery
          </h1>
          <a href="https://www.officialgazette.gov.ph/2007/06/02/republic-act-no-9485/">
            Learn more about Anti-Red Tape Act
          </a>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id={styles.contact}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Reach Us</h1>
            <p>
              Callback schedule is from 8 am - 8 pm, 12 hours by 7 days,
              including weekends and holidays. Ask agent for details to make
              sure the callback is from PhilHealth.
            </p>
          </div>
          <div className={styles.cards}>
            <IconCard
              icon="fas fa-phone"
              title="Hotline"
              description="(02) 866-225-88. Available 24/7 including weekends and holidays."
            />
            <IconCard
              icon="fas fa-map-marker"
              title="Address"
              description="Citystate Centre, 709 Shaw Boulevard 1603 Pasig City"
            />
            <IconCard
              icon="fas fa-mobile"
              title="Contacts"
              description="Call and text is available 24/7 to 0998-857-2957 (SMART) or 0917-127-5987 (Globe)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
