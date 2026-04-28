import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "rounded-full px-5 py-2 text-base font-semibold tracking-tight transition-colors",
    isActive
      ? "bg-[#ff6b4a] text-white shadow-md" // active: bold red pill
      : "text-[#d94828] hover:bg-[#ffe7cf] hover:text-[#26170e]"
  );
}

export function Navbar() {
  return (
    <nav className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-xl shadow-sm border border-[#ffe7cf]">
      <NavLink to="#menu" className={navLinkClass} end>
        Menu
      </NavLink>
      <NavLink to="#about-history" className={navLinkClass}>
        About
      </NavLink>
      <NavLink to="#testimonials" className={navLinkClass}>
        Reviews
      </NavLink>
      <NavLink to="/" className={navLinkClass}>
        Reservation
      </NavLink>
    </nav>
  );
}