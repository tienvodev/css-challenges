import { Metadata } from "next";
import styles from "./Challenge01.module.css";
import {
  YoutubeLogo,
  InstagramLogo,
  FacebookLogo,
  ThreadsLogo,
  XLogo,
  BehanceLogo,
  SlackLogo,
  DiscordLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Challenge 01 | Responsive Grid of Squares | Style Siblings on Hover",
  description: "A responsive grid of squares that change color on hover.",
};

export default function Challenge01() {
  return (
    <body className={styles.body}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <YoutubeLogo className={styles.icon} />
        </div>

        <div className={styles.card}>
          <InstagramLogo className={styles.icon} />
        </div>
        <div className={styles.card}>
          <FacebookLogo className={styles.icon} />
        </div>
        <div className={styles.card}>
          <ThreadsLogo className={styles.icon} />
        </div>
        <div className={styles.card}>
          <XLogo className={styles.icon} />
        </div>
        <div className={styles.card}>
          <BehanceLogo className={styles.icon} />
        </div>
        <div className={styles.card}>
          <SlackLogo className={styles.icon} />
        </div>
        <div className={styles.card}>
          <DiscordLogo className={styles.icon} />
        </div>
      </div>
    </body>
  );
}
