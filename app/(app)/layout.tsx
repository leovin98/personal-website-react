import React from "react";
import Footer from "@/components/ui/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="text-gray-1200 mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 leading-relaxed antialiased sm:py-16 md:overflow-x-visible">
        {children}
      </main>
      <Footer />
    </>
  );
}
