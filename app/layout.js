import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Code Roadmap",
  description: "A beginner roadmap for learning web programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">Made for IT 415 • Next.js Activity</footer>
      </body>
    </html>
  );
}