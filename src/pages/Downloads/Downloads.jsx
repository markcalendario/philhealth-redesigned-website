import { Fragment } from "react";
import Banner from "../../components/Banner/Banner.jsx";
import DownloadCard from "../../components/DownloadCard/DownloadCard.jsx";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import styles from "./Downloads.module.scss";

export default function Downloads() {
  return (
    <Fragment>
      <NavigationBar />
      <Banner
        img="/assets/images/downloads/banner.svg"
        title="Form and Files Available for Download"
      />
      <DownloadList />
    </Fragment>
  );
}

function DownloadList() {
  return (
    <div className={styles.downloadList}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <DownloadCard
              highlight
              icon="fas fa-id-badge"
              title="Membership Form"
              description="This form contains a document for membership application"
              downloadLink="/assets/downloadables/documents/application-form.pdf"
            />
            <DownloadCard
              icon="fas fa-pen"
              title="Claim Signature Form"
              description="Form to authenticate and verify a claim's unique identifier and details."
              downloadLink="/assets/downloadables/documents/claim-signature-form.pdf"
            />
            <DownloadCard
              icon="fas fa-capsules"
              title="Konsulta Drugs"
              description="Comprehensive checklist detailing PhilHealth Konsulta-approved drugs and their preparations."
              downloadLink="/assets/downloadables/documents/konsulta-drugs.pdf"
            />
            <DownloadCard
              icon="fas fa-vials"
              title="Konsulta Labs"
              description="Checklist of PhilHealth Konsulta Laboratories and Diagnostic Services"
              downloadLink="/assets/downloadables/documents/konsulta-laboratories.pdf"
            />
            <DownloadCard
              icon="fas fa-paperclip"
              title="Accreditation Survey"
              description=" Self-Assessment/Accreditation Survey Tool for PhilHealth Konsulta Provider"
              downloadLink="/assets/downloadables/documents/accreditation-survey.pdf"
            />
            <DownloadCard
              icon="fas fa-check-circle"
              title="Accreditation Requirements"
              description="Minimum Requirements for Accreditation of PhilHealth Konsulta Providers"
              downloadLink="/assets/downloadables/documents/accreditation-requirements.pdf"
            />
            <DownloadCard
              icon="fas fa-user-tie"
              title="Employer Data Record"
              description="Comprehensive information about an employer's workforce."
              downloadLink="/assets/downloadables/documents/employer-data-record.pdf"
            />
            <DownloadCard
              icon="fas fa-house-user"
              title="Household Employer"
              description="Consolidated document for household employer registration."
              downloadLink="/assets/downloadables/documents/household-employer.pdf"
            />
            <DownloadCard
              icon="fas fa-users"
              title="Employee-Members Report"
              description="Document summarizing employee-member information and activities."
              downloadLink="/assets/downloadables/documents/employee-members-report.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
