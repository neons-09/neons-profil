import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header";
import TopLefImg from "./components/Utilities/TopLefImg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DavaProfil",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"page bg-site text-white bg-cover bg-no-repeat"}>
          <TopLefImg />
          <Header />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
