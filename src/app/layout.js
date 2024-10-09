//Fonts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

//Styles
import "./globals.css";

//Components
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark overflow-x-hidden bg-almostWhite antialiased transition-colors duration-200 dark:bg-almostBlack`}
      >
        {children}
      </body>
    </html>
  );
}
