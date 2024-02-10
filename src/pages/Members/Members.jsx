import { Fragment } from "react";
import NavigationBar from "../../components/NavigationBars/NavigationBar.jsx";
import TwoColumnImageText from "../../components/TwoColumnImageText/TwoColumnImageText.jsx";
import styles from "./Members.module.scss";

export default function Members() {
  return (
    <Fragment>
      <NavigationBar />
      <Banner />
      <DirectContributors />
      <IndirectContributors />
      <Tagline />
    </Fragment>
  );
}

function Banner() {
  return (
    <div id={styles.members}>
      <div className={styles.wrapper}>
        <h1>Meet our beloved members!</h1>
      </div>
    </div>
  );
}

function DirectContributors() {
  return (
    <TwoColumnImageText
      img="/assets/images/members/direct-contributors.jpg"
      reversed>
      <h1>Direct Contributors</h1>
      <p>
        Direct contributors are individuals or entities that directly contribute
        to a particular cause, project, or initiative through their actions,
        resources, or expertise. They play a crucial role in advancing
        objectives, whether through financial donations, volunteer work,
        intellectual input, or other forms of tangible support. Direct
        contributors are essential for driving progress and making meaningful
        impacts within various fields, ranging from charitable endeavors to
        scientific research and creative endeavors.
      </p>
      <ol>
        <li>Employees with formal employment</li>
        <li>Kasambahays</li>
        <li>Self-earning individuals; Professional practitioners</li>
        <li>Overseas Filipino Workers</li>
        <li>Filipinos living abroad and those with dual citizenship</li>
        <li>Lifetime members</li>
        <li>All Filipinos aged 21 years old and above with capacity to pay</li>
      </ol>
    </TwoColumnImageText>
  );
}

function IndirectContributors() {
  return (
    <TwoColumnImageText img="/assets/images/members/indirect-contributors.jpg">
      <h1>Indirect Contributors</h1>
      <p>
        Indirect contributors refer to individuals or entities whose actions or
        support indirectly contribute to a cause, project, or initiative, often
        through secondary or supportive means rather than direct involvement.
        This contribution can manifest in various forms, such as spreading
        awareness, providing logistical support, offering expertise or advice,
        or creating ancillary products or services that complement the primary
        effort. While their impact may not be as immediately tangible as that of
        direct contributors, indirect contributors nonetheless play a vital role
        in amplifying the overall effectiveness and reach of endeavors across
        diverse domains, from advocacy campaigns to business ventures.
      </p>
      <ol>
        <li>Indigents identified by the DSWD</li>
        <li>Beneficiaries of Pantawid Pamilyang Pilipino Program</li>
        <li>Senior citizens</li>
        <li>Persons with disability</li>
        <li>Sangguniang Kabataan officials</li>
        <li>Previously identified at point-of-service / sponsored by LGUs</li>
        <li>
          Filipinos aged 21 years old and above without capacity to pay premiums
        </li>
      </ol>
    </TwoColumnImageText>
  );
}

function Tagline() {
  return (
    <div id={styles.tagline}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Become a part of PhilHealth</h1>
          <p>Your Partner in Health</p>
        </div>
      </div>
    </div>
  );
}
