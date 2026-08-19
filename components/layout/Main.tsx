import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { ThemeControls } from "@/components/ui/ThemeControls";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-clip">
      <SmoothScroll />
      {/* Header */}
      <Header />

      {/* Theme Controls */}
      <ThemeControls />

      {/* Main Content */}
      <main className="grow w-full max-w-[100vw] ">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Mobile Navigation */}
      <NavigationBar />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
