import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#fff7ec] text-[#26170e]">
      {/* Decorative large soft red gradients for restaurant atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(1200px_42rem_at_60%_-12%,rgba(255,107,74,0.11)_0%,_rgba(255,173,132,0.18)_32%,_transparent_92%),radial-gradient(900px_35rem_at_-20%_5%,rgba(255,173,132,0.10)_0%,_rgba(255,107,74,0.09)_22%,_transparent_90%)]" />
      <Header />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-0">
        {/* Consistent containment for hero and landing sections */}
        <div className="w-full flex flex-col min-h-screen">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}