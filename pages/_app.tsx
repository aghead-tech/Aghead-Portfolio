import type { AppProps } from "next/app";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import { PreloadProvider } from "@/hooks/usePreloadContext";
import { Main } from "@/components/layout/Main";
import { Preloader } from "@/components/ui/Preloader";
import "@/styles/globals.css";
import "@/styles/animations.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={outfit.variable}>
      <ThemeProvider>
        <PreloadProvider>
          <div className="font-sans antialiased selection:bg-primary/20 selection:text-primary">
            <Preloader />
            <Main>
            <Component {...pageProps} />
          </Main>
        </div>
      </PreloadProvider>
    </ThemeProvider>
    </div>
  );
}
