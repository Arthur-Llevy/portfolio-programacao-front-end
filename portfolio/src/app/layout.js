import { Biryani } from "next/font/google";
import "./globals.css";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

const biryani = Biryani({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${biryani.className} antialiased`}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
