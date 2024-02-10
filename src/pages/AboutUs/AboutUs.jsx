import { Fragment } from "react";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import TwoColumnImageText from "../../components/TwoColumnImageText/TwoColumnImageText.jsx";
import styles from "./AboutUs.module.scss";

export default function AboutUs() {
  return (
    <Fragment>
      <NavigationBar />
      <Banner />
      <History />
      <MandateAndFunction />
      <VisionMission />
      <OrganizationalStructure />
      <ISOCertification />
    </Fragment>
  );
}

function Banner() {
  return (
    <div id={styles.banner}>
      <div className={styles.wrapper}>
        <h1>The Philippine Health Insurance Corporation</h1>
      </div>
    </div>
  );
}

function History() {
  return (
    <TwoColumnImageText img="/assets/images/about-us/history.jpg" alt="history">
      <h1>Our History</h1>
      <p>
        THE call to serve the rural indigents echoed since the early '60s when
        the Philippine Medical Association introduced the MARIA Project which
        prioritized aid to communities in need of medical assistance. The
        Project would then be considered a valuable precursor to the Medicare
        program, from which a medical care plan for the entire Philippines was
        created. On August 4, 1969, Republic Act 6111 or the Philippine Medical
        Care Act of 1969 was signed by President Ferdinand E. Marcos which was
        eventually implemented in August 1971.
      </p>

      <p>
        The Philippine Medical Care Commission (PMCC) was tasked to oversee the
        implementation of the program which went for almost a quarter of a
        century.
      </p>

      <p>
        In the 1990s, a vision for a better, more responsive government health
        care program was prompted by the passage of several bills that had
        significant implications on health financing. The public's clamor for a
        health insurance that is more comprehensive in terms of covered
        population and benefits led to the development of House Bill 14225 and
        Senate Bill 01738 which became The National Health Insurance Act of 1995
        or Republic Act 7875, signed by President Fidel V. Ramos on February 14,
        1995. The law paved the way for the creation of the Philippine Health
        Insurance Corporation (PhilHealth), mandated to provide social health
        insurance coverage to all Filipinos in 15 years' time.
      </p>

      <p>
        PhilHealth assumed the responsibility of administering the former
        Medicare program for government and private sector employees from the
        Government Service Insurance System in October 1997, from the Social
        Security System in April 1998, and from the Overseas Workers Welfare
        Administration in March 2005.
      </p>
    </TwoColumnImageText>
  );
}

function MandateAndFunction() {
  return (
    <TwoColumnImageText
      img="/assets/images/about-us/mandate.jpg"
      alt="mandate"
      reversed>
      <h1>Agency's Mandate and Function</h1>
      <p>
        The National Health Insurance Program was established to provide health
        insurance coverage and ensure affordable, acceptable, available and
        accessible health care services for all citizens of the Philippines. It
        shall serve as the means for the healthy to help pay for the care of the
        sick and for those who can afford medical care to subsidize those who
        cannot. It shall initially consist of Programs I and II or Medicare and
        be expanded progressively to constitute one universal health insurance
        program for the entire population. The program shall include a
        sustainable system of funds constitution, collection, management and
        disbursement for financing the availment of a basic minimum package and
        other supplementary packages of health insurance benefits by a
        progressively expanding proportion of the population. The program shall
        be limited to paying for the utilization of health services by covered
        beneficiaries. It shall be prohibited from providing health care
        directly, from buying and dispensing drugs and pharmaceuticals, from
        employing physicians and other professionals for the purpose of directly
        rendering care, and from owning or investing in health care facilities.
        (Article III, Section 5 of RA 7875 as amended)
      </p>
    </TwoColumnImageText>
  );
}

function VisionMission() {
  return (
    <TwoColumnImageText img="/assets/images/about-us/vision.webp" alt="vision">
      <h1>Vision, Mission, Core Values</h1>
      <p>
        Explore our vision, mission, and core values. We envision every Filipino
        as a member, protected, and secure in their health. Our mission is to
        provide sufficient and quality health benefits for all. Upholding core
        values like integrity, innovation, prompt service, heartfelt service,
        compassion, appropriate benefits, and social solidarity, we are
        committed to safeguarding the health and well-being of all Filipinos.
        Join us in our journey towards accessible and secure healthcare for
        everyone.
      </p>
      <h1>Vision</h1>
      <p>
        "Bawat Filipino, Miyembro, Bawat Miyembro, Protektado, Kalusugan ng
        Lahat, Segurado"
      </p>
      <h1>Mission</h1>
      <p>"Benepisyong Pangkalusugang Sapat at De-kalidad para sa Lahat"</p>
      <h1>Core Values</h1>
      <p>
        Integridad, Inobasyon, Agarang, Serbisyo, Taos-Pusong Paglilingkod,
        Pagmamalasakit, Angkop na Benepisyo, Panlipunang Pagkakabuklod
      </p>
    </TwoColumnImageText>
  );
}

function OrganizationalStructure() {
  return (
    <TwoColumnImageText
      img="/assets/images/about-us/org-structure.jpg"
      alt="structure"
      reversed>
      <h1>Organization Structure</h1>
      <p>
        Discover our organizational structure! Click the link below to download
        the PDF and explore how the National Health Insurance Program in the
        Philippines is structured to provide affordable and accessible health
        insurance coverage for all citizens. Click here to download the PDF
        file.
        <a href="https://www.philhealth.gov.ph/about_us/PhilHealth'sOrganizationalStructure.pdf">
          Click here to visit.
        </a>
      </p>
      <p>
        <p>
          At the onset, the PhilHealth Board issued the PhilHealth Board
          Resolution (PBR) No. 527, s. 2003, setting the general policy on the
          adoption and implementation of the reorganization structure of
          PhilHealth. The Reengineered PhilHealth Organization was approved by
          the PhilHealth Board effective January 1, 2006 through PBR No. 842, s.
          2005. Thereafter, there were changes to this organizational structure
          that were approved by the PhilHealth Board prior the creation of GCG,
          these includes the creation of the following organizational units:
        </p>
        <ol>
          <li>
            Organization and Systems Development Office (PBR No. 1318, s. 2009);
          </li>
          <li>
            Office of the Chairman of the PhilHealth Board (PBR No. 1431, s.
            2010);
          </li>
          <li>
            Task Force on Corporate Center and Offices (TFCCO) (OO No. 0068, s.
            2011);
          </li>
          <li>
            PhilHealth Identity Management System (PMO-PIMS) (OO No. 0094, s.
            2012);
          </li>
          <li>
            Changes in the Corporate Affairs Group’s Structure, Function,
            Staffing and Other Support (Special Order No. 1251, s. 2012);
          </li>
          <li>
            Information Management Sector (IMS) and the establishment of the
            Office of the Senior Vice President – Chief Information Officer
            (OSVP-CIO) (PBR No. 1614, s. 2012);
          </li>
          <li>
            Corporate Information Security Department (PBR No. 1615, s. 2012);
            and
          </li>
          <li>
            Overseas Filipino Program, Formal Sector and Non-Formal Sector under
            the Member Management Group (PBR No. 1823, s. 2013).
          </li>
        </ol>
      </p>
    </TwoColumnImageText>
  );
}

function ISOCertification() {
  return (
    <TwoColumnImageText img="/assets/images/logos/logo.png" alt="PhilHealth">
      <h1>ISO Certification</h1>
      <p>
        Discover our ISO Certification and our unwavering commitment to
        excellence in providing health insurance coverage for all citizens of
        the Philippines. Visit the "ISO Certification" page to explore how our
        certification reinforces our dedication to delivering accessible and
        high-quality services. Click here to visit the full page.{" "}
        <a href="https://www.philhealth.gov.ph/news/2021/iso_certification.pdf">
          Click here to visit.
        </a>
      </p>
    </TwoColumnImageText>
  );
}
