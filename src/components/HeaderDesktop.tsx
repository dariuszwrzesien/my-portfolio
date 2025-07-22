import { FC } from "react";
// import styles from "./HeaderDesktop.module.css";

const HeaderDesktop: FC = () => {
  return (
    <header className="w-full bg-background text-foreground p-4">
      <nav className="flex justify-between items-center border-b border-stroke">
        <div className="flex gap-8">
          <div className="text-md p-4">dariusz-wrzesien</div>
          {/* <div className={styles.navLink}>_hello</div>
          <div className={styles.navLink}>_about-me</div>
          <div className={styles.navLink}>_projects</div>
          <div className={styles.navLink}>_cv</div> */}
        </div>
        <div>{/* <div className={styles.navLink}>_contact-me</div> */}</div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
