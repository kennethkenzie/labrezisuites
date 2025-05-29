import "./global.css"

import Header from "@/components/sections/header";


export const metadata = {
  title: "Robert Muyanja",
  description: "Portfolio of Robert Muyanja, a Digital Marketing and Market Intelligence Consultant based in Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* <BootstrapForBrowser /> */}
       
        <Header />
        {children}
        {/* <CallToAction />
        <Footer /> */}


        <script src="C:\Users\KEN\Documents\GitHub\labrezisuites\node_modules\flowbite\dist\flowbite.min.js"></script>

      </body>
    </html>
  );
}
