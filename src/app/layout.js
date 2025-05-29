import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Robert Muyanja",
  description: "Portfolio of Robert Muyanja, a Digital Marketing and Market Intelligence Consultant based in Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* <BootstrapForBrowser /> */}
        <Preloader />
        <Header />
        {children}
        {/* <CallToAction />
        <Footer /> */}
      </body>
    </html>
  );
}
