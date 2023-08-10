import "../globals.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { mainFont } from "../fonts";
import styles from "./styles.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Life learner tips blog 😉</title>
      </head>
      <body className={mainFont.className}>
        <div className={styles.siteContainer}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
