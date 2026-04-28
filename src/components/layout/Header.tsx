import { env } from "../../lib/env";
import { Button } from "../ui/button";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-xl border-b border-[#f1ddc9] shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-12 w-12 rounded-full shadow-md border-4 border-[#ff6b4a] bg-gradient-to-br from-[#ff6b4a] via-[#d94828] to-[#b32e18] justify-center items-center">
              <svg viewBox="0 0 44 44" width={30} height={30} aria-hidden="true" focusable="false">
                <ellipse cx="22" cy="22" rx="15" ry="13" fill="#fff6f4" />
                <ellipse cx="22" cy="22" rx="13" ry="11" fill="#ff6b4a" />
                <ellipse cx="22" cy="22" rx="6.5" ry="6" fill="#fff6f4" />
              </svg>
            </span>
            <span className="font-extrabold text-2xl tracking-tight text-[#d94828] drop-shadow-sm select-none">
              {env.appName || "The Gourmet Kitchen"}
            </span>
          </div>
        </div>
        {/* Navigation + CTA */}
        <div className="flex items-center gap-3">
          <Navbar />
          <Button
            asChild
            size="lg"
            className="ml-2 bg-[#ff6b4a] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#d94828] focus:bg-[#d94828] focus:ring-2 focus:ring-[#ffad84] transition hidden md:inline-flex"
          >
            <a href="#menu" tabIndex={0}>
              Book a Table
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}