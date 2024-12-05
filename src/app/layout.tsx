import { AuthContextProvider } from "@/context/AuthContext";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for the application
export const metadata = {
  title: "Digify",
  description: "Template to use Next.js with Firebase",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {/*
        The <head /> component will contain the components returned by the nearest parent
        head.js. It can be used to define the document head for SEO, metadata, and other purposes.
        Learn more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        {/* Wrap the children with the AuthContextProvider to provide authentication context */}
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
