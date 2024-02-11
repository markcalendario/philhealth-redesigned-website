import { Fragment } from "react";
import Banner from "../../components/Banner/Banner.jsx";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import TwoColumnImageText from "../../components/TwoColumnImageText/TwoColumnImageText.jsx";

export default function Partners() {
  return (
    <Fragment>
      <NavigationBar />
      <Banner
        img="/assets/images/partners/banner.png"
        title="Introducing our trusted partners!"
      />
      <HealthcareProviders />
      <Employers />
      <CollectingPartners />
      <ServiceProviders />
    </Fragment>
  );
}

function HealthcareProviders() {
  return (
    <TwoColumnImageText
      img="/assets/images/partners/healthcare-providers.jpg"
      alt="healthcare providers"
      reversed>
      <h1>Healthcare Providers</h1>
      <p>
        Our commitment to revolutionizing healthcare in the Philippines is
        underpinned by our strategic alliances with top-tier industry players.
        By selectively forging partnerships with the foremost experts and
        organizations, we ensure the realization of our mission: to deliver
        accessible, available, acceptable, and affordable healthcare services to
        every Filipino. Through these collaborations, we aim to catalyze
        transformative changes in healthcare delivery, ultimately fostering
        better health outcomes and enhancing the overall quality of life for all
        individuals across the nation.
      </p>
    </TwoColumnImageText>
  );
}

function Employers() {
  return (
    <TwoColumnImageText
      img="/assets/images/partners/employers.jpg"
      alt="employers">
      <h1>Employers</h1>
      <p>
        Collaborating closely with employers in both the public and private
        sectors, we diligently uphold the legal mandate to extend social health
        insurance coverage to all their employees. Through these strategic
        partnerships, we facilitate seamless integration of healthcare benefits
        into the workplace, ensuring comprehensive protection for employees
        against health-related risks. By fulfilling this statutory obligation
        alongside our esteemed employer partners, we contribute to fostering a
        healthier, more secure workforce while promoting compliance with
        regulatory requirements.
      </p>
    </TwoColumnImageText>
  );
}

function CollectingPartners() {
  return (
    <TwoColumnImageText
      img="/assets/images/partners/collecting-partners.jpg"
      alt="healthcare providers"
      reversed>
      <h1>Collecting Partners</h1>
      <p>
        We have tapped the services and networks of bank and non-bank
        institutions to make premium remittance more convenient for our members
        and employers. This section provides a complete list of these partners
        and their branch locations, and also includes basic information for
        collecting agencies that might be interested to partner with us in
        premium remittance.
      </p>
    </TwoColumnImageText>
  );
}

function ServiceProviders() {
  return (
    <TwoColumnImageText
      img="/assets/images/partners/service-providers.jpg"
      alt="service providers">
      <h1>Collecting Partners</h1>
      <p>
        In our commitment to modernize healthcare transactions, we're embracing
        electronic methods, and to facilitate this transition, we've
        strategically aligned with top-tier Health IT Providers. These
        partnerships are instrumental in our pursuit of streamlining processes
        such as e-claims submission and management. By harnessing cutting-edge
        technology and expertise from our partners, we're poised to
        revolutionize how healthcare transactions are conducted. Through
        electronic platforms, we aim to optimize efficiency, accuracy, and
        accessibility, ultimately improving the overall experience for all
        stakeholders involved.
      </p>
    </TwoColumnImageText>
  );
}
