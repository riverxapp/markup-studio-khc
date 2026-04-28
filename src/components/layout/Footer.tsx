import { env } from "../../lib/env";
import { Button } from "../ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#26170e] text-[#fff7ec] pt-12 pb-8 mt-auto"
      aria-label="Footer"
    >
      <div className="max-w-6xl px-4 mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h4 className="font-bold text-lg mb-2">{env.appName || "The Gourmet Kitchen"}</h4>
          <p className="text-[#f6e0c6] text-sm">
            123 Main Street<br />
            Springfield, CA 90210
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-1">Contact</h5>
          <a href="tel:+1234567890" className="text-[#fff7ec] hover:underline focus:underline block text-sm">
            (123) 456-7890
          </a>
          <a
            href="mailto:hello@gourmetkitchen.com"
            className="text-[#fff7ec] hover:underline focus:underline text-sm"
          >
            hello@gourmetkitchen.com
          </a>
        </div>
        <div>
          <h5 className="font-semibold mb-1">Hours</h5>
          <p className="text-[#f6e0c6] text-sm">Mon–Sat: 5pm–11pm</p>
          <p className="text-[#f6e0c6] text-sm">Sun: Closed</p>
        </div>
        <div>
          <h5 className="font-semibold mb-1">Follow</h5>
          <div className="flex space-x-3 mt-1">
            <a href="https://instagram.com/" aria-label="Instagram" className="hover:opacity-80 focus:opacity-80">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ffad84"/><g><circle cx="12" cy="12" r="4.5" stroke="#26170e" strokeWidth="1.4"/><circle cx="18" cy="6" r="1.2" fill="#26170e"/></g></svg>
            </a>
            <a href="https://facebook.com/" aria-label="Facebook" className="hover:opacity-80 focus:opacity-80">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ffad84"/><path d="M16 8.834c0-.46-.374-.834-.834-.834h-1.333A1.833 1.833 0 0 0 12 9.833v1.334H11a.334.334 0 0 0-.334.333v1.334c0 .185.149.333.334.333h1V16c0 .185.149.334.334.334h1.334a.334.334 0 0 0 .333-.334v-2.167h1.083a.334.334 0 0 0 .333-.333l.001-1.334a.334.334 0 0 0-.334-.333H14.334v-1.001c0-.185.149-.333.334-.333h1.166A.834.834 0 0 0 16 8.834Z" fill="#26170e"/></svg>
            </a>
            <a href="https://twitter.com/" aria-label="Twitter" className="hover:opacity-80 focus:opacity-80">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ffad84"/><path d="M18.239 8.643c.009.133.009.267.009.4 0 4.074-3.098 8.772-8.772 8.772A8.72 8.72 0 0 1 4 16.419c.204.024.4.032.607.032a6.186 6.186 0 0 0 3.833-1.321 3.08 3.08 0 0 1-2.877-2.138 3.131 3.131 0 0 0 1.387-.053 3.08 3.08 0 0 1-2.468-3.02v-.04c.414.23.89.364 1.395.381a3.078 3.078 0 0 1-1.369-2.564c0-.566.152-1.1.416-1.557A8.746 8.746 0 0 0 12.075 8.98c-.049-.227-.073-.461-.073-.703A3.079 3.079 0 0 1 16.003 6.7a6.125 6.125 0 0 0 1.956-.748 3.09 3.09 0 0 1-1.353 1.701A6.19 6.19 0 0 0 18.841 7.4a6.62 6.62 0 0 1-1.553 1.243Z" fill="#26170e"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <Button
          asChild
          size="lg"
          className="bg-[#ff6b4a] px-10 text-white hover:bg-[#d94828] focus:bg-[#d94828] focus:ring-2 focus:ring-[#ffad84] shadow-lg text-base font-semibold transition rounded-full"
        >
          {/* Replace #reservation with actual reservation link/route if available */}
          <a href="#reservation">Book a Table</a>
        </Button>
      </div>
      <div className="mt-8 text-center text-xs text-[#f6e0c6]">
        &copy; {year} {env.appName || "The Gourmet Kitchen"}. All rights reserved.
      </div>
    </footer>
  );
}