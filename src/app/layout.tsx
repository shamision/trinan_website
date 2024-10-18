import "../styles/globals.scss";
import { Roboto } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { options } from "../app/api/auth/[...nextauth]/options";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Sections/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"], // Correct subset
  weight: ["400", "700"], // Specify the weights you want to use
});

export const metadata = {
  title: "CLINAN",
  description: "An engineering materials supplier application",
};

export default async function RootLayout({ children }) {
  // Retrieve the session here
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* Pass session to NavBar and Footer */}
        <NavBar session={session} />
        <main>{children}</main>
        <Footer session={session} />
      </body>
    </html>
  );
}
