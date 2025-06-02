import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"; 
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter=Inter({subsets:["latin"]});

export const metadata = {
  title: "Billo",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s11.png" sizes="any"/>
      </head>
      <body
        className={`${inter.className} `}
      >
        <ClerkProvider>
        <ConvexClientProvider>

          <Header />
        <main className="min-h-screen">
          {children}
          <Toaster richColors/>
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
