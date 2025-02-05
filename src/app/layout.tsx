import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/Provider";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Script from 'next/script'; // Import Script component from Next.js
// import { ClerkProvider } from "@clerk/nextjs";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton
} from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comforty-By-UmmeHabiba",
  description: "Comforty-By-UmmeHabiba. Where comfort meets craftsmanship. Elevate your space with thoughtfully designed chairs that blend elegance, quality, and relaxation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        <CartProvider>
          <Header />
          <main className="max-w-screen-2xl mx-auto">{children}</main>
          <Footer />
          
          <ToastContainer />
         
          <Script
            src="//code.tidio.co/dqiyveddgadpjdnga3hztbwam9k21tld.js"
            strategy="afterInteractive" // Load the script after the page becomes interactive
          />
        </CartProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}

















// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CartProvider from "@/components/Provider";
// import { ToastContainer } from 'react-toastify'; // Import ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Comforty-By-UmmeHabiba",
//   description: "Comforty-By-UmmeHabiba. Where comfort meets craftsmanship. Elevate your space with thoughtfully designed chairs that blend elegance, quality, and relaxation.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* Wrap everything inside CartProvider to share the cart state */}
//         <CartProvider>
//           <Header />
//           <main className="max-w-screen-2xl mx-auto">{children}</main>
//           <Footer />
//           {/* Add ToastContainer here */}
//           <ToastContainer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }
