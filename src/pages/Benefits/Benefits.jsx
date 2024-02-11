import { Fragment } from "react";
import Banner from "../../components/Banner/Banner.jsx";
import IconCardLinear from "../../components/IconCardLinear/IconCardLinear.jsx";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import styles from "./Benefits.module.scss";

export default function Benefits() {
  return (
    <Fragment>
      <NavigationBar />
      <Banner
        img="/assets/images/benefits/banner.webp"
        title="Benefits and Assistance for PhilHealth Members"
      />
      <InPatientBenefits />
      <OutPatientBenefits />
      <ZBenefits />
      <SpecialHealthPrograms />
      <OverseasWorkerProgram />
      <HealthInsuranceForInsurance />
    </Fragment>
  );
}

function InPatientBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Inpatient Benefits</h1>
            <p>
              Covers expenses incurred during hospitalization, including room
              and board, medicines, doctor's fees, and laboratory tests.
            </p>
          </div>
          <div className={styles.content}>
            <IconCardLinear
              title="Room and Board"
              description="Covers the cost of accommodation and meals during hospitalization."
            />
            <IconCardLinear
              title="Medicine and Supplies"
              description="Covers the cost of prescribed medications and medical supplies."
            />
            <IconCardLinear
              title="Operating Room Fees"
              description="Covers fees associated with surgical procedures performed in the operating room."
            />
            <IconCardLinear
              title="Doctor's Professional Fees"
              description="Covers fees charged by physicians for medical services rendered during hospitalization."
            />
            <IconCardLinear
              title="Laboratory Tests and Examinations"
              description="Covers the cost of diagnostic tests and examinations conducted to assess a patient's health condition."
            />
            <IconCardLinear
              title="Use of Equipment and Facilities"
              description="Covers charges for the use of medical equipment and facilities, such as MRI machines or intensive care units."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OutPatientBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Outpatient Benefits</h1>
            <p>
              Covers consultations, basic diagnostic procedures (e.g., X-rays,
              ultrasound), emergency care services, and preventive healthcare
              services (e.g., vaccinations, screenings).
            </p>
          </div>
          <div className={styles.content}>
            <IconCardLinear
              title="Consultations with Primary Care Physicians"
              description="Covers visits to primary care physicians for general medical advice, check-ups, and treatment of common illnesses or health concerns."
            />
            <IconCardLinear
              title="Basic Diagnostic Procedures (e.g., X-rays, ultrasound)"
              description="Includes essential diagnostic tests such as X-rays and ultrasounds to identify and diagnose medical conditions or injuries."
            />
            <IconCardLinear
              title="Operating Room Fees"
              description="Covers fees associated with surgical procedures performed in the operating room."
            />
            <IconCardLinear
              title="Emergency Care Services"
              description="Provides coverage for emergency medical treatments and services required for sudden and severe illnesses, injuries, or life-threatening conditions."
            />
            <IconCardLinear
              title="Preventive Healthcare Services (e.g., vaccinations, screenings)"
              description=" Includes preventive measures such as vaccinations to prevent diseases, as well as screenings and tests to detect health issues early and promote overall wellness."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ZBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Z Benefits</h1>
            <p>
              Offers treatment packages for serious illnesses like cancer,
              leukemia, and kidney transplantation, as well as coverage for
              dialysis sessions.
            </p>
          </div>
          <div className={styles.content}>
            <IconCardLinear
              title="Treatment Packages for Catastrophic Illness"
              description="Treatment packages for certain catastrophic illnesses such as cancer, leukemia, and kidney transplantation."
            />
            <IconCardLinear
              title="Special Packages"
              description="Special packages for selected conditions requiring costly treatments"
            />
            <IconCardLinear
              title="Coverage for Dialysis Sessions"
              description=" Provides financial assistance or insurance coverage for the regular dialysis treatments required by individuals with kidney failure or other renal conditions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialHealthPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Special Health Program</h1>
            <p>
              Includes primary care benefits for the indigent, sponsored
              programs for specific groups, and point-of-care enrollment for
              immediate access to PhilHealth benefits.
            </p>
          </div>
          <div className={styles.content}>
            <IconCardLinear
              title="Primary Care Benefit Package"
              description="This package provides essential healthcare services to indigent individuals, including consultations, diagnostic tests, medications, and preventive care, aiming to address their basic healthcare needs and improve their overall health outcomes."
            />
            <IconCardLinear
              title="Sponsored Program"
              description="This program extends healthcare coverage to specific vulnerable groups, such as indigent families, senior citizens, and persons with disabilities, ensuring they have access to essential medical services and treatments without financial burden."
            />
            <IconCardLinear
              title="Point-of-Care Enrollment"
              description="This initiative allows individuals to enroll in PhilHealth and gain immediate access to healthcare benefits at the point of care, ensuring that they receive necessary medical services without delays or barriers, particularly in emergency situations."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OverseasWorkerProgram() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Overseas Worker Program</h1>
            <p>
              Provides health coverage for overseas Filipino workers (OFWs) and
              their dependents, both in the Philippines and abroad.
            </p>
          </div>
          <div className={styles.content}>
            <IconCardLinear
              title="Health Coverage for OFWs and Dependents"
              description="This provision offers health insurance coverage for Overseas Filipino Workers (OFWs) and their dependents, ensuring that they have access to essential healthcare services, including medical consultations, treatments, and hospitalization support, both in the Philippines and abroad."
            />
            <IconCardLinear
              title="Access to Healthcare Services Both in the Philippines and Abroad"
              description="This feature ensures that OFWs and their dependents can access healthcare services not only within the Philippines but also in other countries where they may be working or residing. It provides peace of mind knowing that they can receive necessary medical care regardless of their location."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HealthInsuranceForInsurance() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Overseas Worker Program</h1>
            <p>
              Offers free health insurance coverage for qualified indigent
              families, ensuring access to basic healthcare services without
              financial burden.
            </p>
          </div>
          <div className={styles.content}>
            <IconCardLinear
              title="Free Health Insurance Coverage for Qualified Indigent Families"
              description="This program provides complimentary health insurance coverage to families who meet the criteria for indigence, ensuring that they have access to essential healthcare services without having to bear the financial burden of medical expenses. It aims to improve the health and well-being of economically disadvantaged families by removing barriers to healthcare access."
            />
            <IconCardLinear
              title="Access to Basic Healthcare Services Without Financial Burden"
              description="This initiative ensures that indigent families and individuals can avail themselves of basic healthcare services, including consultations, medications, diagnostic tests, and preventive care, without facing financial constraints. It aims to promote equity in healthcare by guaranteeing that even the most economically vulnerable members of society can access essential medical treatments and services."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
