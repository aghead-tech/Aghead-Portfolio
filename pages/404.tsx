import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { SEO } from "@/components/layout/SEO";

/*--====-- 404 Page Component --====--*/
export default function Custom404() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/*--====-- 404 Code & Glitch Effect --====--*/}
          <div className="relative">
            <h1
              className="text-[150px] font-black leading-none tracking-tighter select-none
                         bg-linear-to-r from-primary/20 via-primary/40 to-primary/20 bg-clip-text text-transparent
                         animate-pulse"
            >
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <span className="text-2xl font-bold uppercase tracking-[1em] text-primary/40">
                Not Found
              </span>
            </div>
          </div>

          {/*--====-- Error Message --====--*/}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Page Disconnected</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The link you clicked may be broken or the page may have been
              removed. Verify the URL or try navigating back to the homepage.
            </p>
          </div>

          {/*--====-- Action Buttons --====--*/}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/"
              className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-full
                       font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
              />
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </div>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-full border border-border hover:bg-secondary/50
                       transition-colors font-medium flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>

          {/*--====-- Search Suggestion --====--*/}
          <div className="pt-12 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            <span>Try searching for the page in our sitemap</span>
          </div>
        </div>
      </div>
    </>
  );
}
