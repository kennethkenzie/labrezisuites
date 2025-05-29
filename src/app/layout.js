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


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>


        <script src="C:\Users\KEN\Documents\GitHub\labrezisuites\node_modules\flowbite\dist\flowbite.min.js"></script>

      </body>
    </html>
  );
}
