import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import { PreloadProvider } from "@/hooks/usePreloadContext";
import { Main } from "@/components/layout/Main";
import { Preloader } from "@/components/ui/Preloader";
import "@/styles/globals.css";
import "@/styles/animations.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
