import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { env } from "../lib/env";
import { useState, useEffect } from "react";

export function Home() {
  // Error state for 502 Bad Gateway
  const [gatewayError, setGatewayError] = useState(false);

  // Demo logic: detect 502 via a flag in localStorage or query param
  // (In real use, error would be set on failed fetch or context)
  useEffect(() => {
    // Example: listen for a flag in location.hash or window for demo purposes
    if (
      typeof window !== "undefined" &&
      (window.location.search.includes("error=502") ||
        window.location.hash.includes("error=502"))
    ) {
      setGatewayError(true);
    }
  }, []);

  if (gatewayError) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#fff7ec] to-[#fff3ef] px-4">
        <section className="mx-auto w-full max-w-lg rounded-2xl border border-red-200 bg-white p-10 shadow text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff4453]/10 shadow">
              <svg width={42} height={42} viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#ff4453" opacity="0.08"/>
                <path d="M20 13v8m0 4h.01" stroke="#ff4453" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h1 className="text-2xl font-bold text-[#b1001a] mt-2">502: Bad Gateway</h1>
            <p className="text-[#5b262b] mt-2 mb-3">
              The service is temporarily unreachable. This is usually a backend or network issue.
            </p>
            <div className="flex flex-col items-center gap-2 w-full">
              <Button
                variant="outline"
                className="border-[#ff4453] text-[#b1001a] hover:bg-[#ffe8e8] font-semibold px-6"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
              <Button
                asChild
                className="bg-[#ff4453] px-6 text-white font-semibold hover:bg-[#b1001a]"
              >
                <Link to="/">Back Home</Link>
              </Button>
            </div>
            <p className="text-xs text-[#df979f] mt-4">
              <span>If the problem persists:</span>
              <br />
              <span>
                1. Check your Internet connection.<br/>
                2. Contact support or try again later.
              </span>
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7ec] to-[#fff3ef] flex flex-col">
      {/* HERO */}
      <header
        className="relative w-full text-center px-4 pt-16 pb-28 md:pt-24 md:pb-36 flex flex-col items-center justify-center bg-gradient-to-b from-[#ff4453] to-[#fff7ec] transition"
        aria-label="Restaurant landing hero"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant hero dish"
              className="rounded-xl shadow-2xl w-[340px] h-[160px] sm:w-[400px] sm:h-[200px] md:w-[480px] md:h-[240px] object-cover border-[6px] border-[#fff3ef] mb-4"
              loading="eager"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#b1001a] mb-2 bg-[#fff2f3] px-2 py-1 rounded-full inline-block drop-shadow">
              Modern Dining in Red
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[#b1001a] mb-6 drop-shadow-lg leading-tight">
            Welcome to {env.appName || "Crimson Table"}
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-2xl font-medium leading-relaxed text-[#5b262b] mb-10">
            A celebration of vibrant flavor and hospitality.<br />
            Taste the passion—locally sourced, globally inspired food in a space as warm as it is memorable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#ff4453] px-8 text-white hover:bg-[#b1001a] focus:bg-[#b1001a] focus:ring-2 focus:ring-[#ff8c8c] shadow-lg font-semibold text-base transition"
            >
              <Link to="#">Book a Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#ffcfcf] bg-[#fff7f7] px-8 text-[#b1001a] hover:bg-[#ffe8e8] border-2 focus:ring-2 focus:ring-[#ff8c8c] font-semibold text-base transition"
            >
              <Link to="#menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* SOCIAL PROOF */}
      <section
        className="w-full px-4 py-8 bg-[#fff6f6] border-b border-[#ffd8d8]"
        aria-label="Awards and Social Proof"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ff9393] shadow">
              <svg width={22} height={22} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="white"/><path d="M14.24 6.82 8.95 12.1l-3.18-3.18-.8.8 3.99 3.98 6.09-6.09-.81-.79Z" fill="#b1001a"/></svg>
            </span>
            <span className="font-medium text-[#951530] text-sm">Best New Restaurant 2024</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ff9393] shadow">
              <svg width={22} height={22} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="white"/><path d="m10 4 1.908 5.73H18L12.546 9.552 14.454 15.27 10 12.222 5.546 15.27l1.908-5.718L2 9.73h6.092L10 4Z" fill="#b1001a"/></svg>
            </span>
            <span className="font-medium text-[#951530] text-sm">Michelin-Inspired Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ff9393] shadow">
              <svg width={22} height={22} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="white"/><path d="M6.8 12v-2.06H6V10c0-1.2.98-2.18 2.18-2.18h3.08A2.18 2.18 0 0 1 13.44 10v.28h-.8V12H6.8Zm6.36-2.46L10 5l-3.16 4.53a3.005 3.005 0 0 0-1.14 2.34v1.13C5.7 13.08 7.12 14.5 8.94 14.5h2.12c1.82 0 3.24-1.42 3.24-3.19v-1.13c0-.93-.43-1.79-1.14-2.34Z" fill="#b1001a"/></svg>
            </span>
            <span className="font-medium text-[#951530] text-sm">Sustainable Local Produce</span>
          </div>
        </div>
      </section>

      {/* FEATURE BLOCKS */}
      <section
        className="py-16 px-4 w-full bg-[#fff4f4] border-b border-[#ffd8d8]"
        aria-labelledby="features"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-[#ffd8d8] rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff4453]">
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M8 12l2 2l4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <CardTitle className="text-[#b1001a] font-bold">Signature Dishes</CardTitle>
              </div>
              <CardDescription>Our award-winning menu is crafted by chefs who love what they do.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 ml-1 text-[#723955] space-y-1 text-sm">
                <li>🍷 Locally sourced ingredients</li>
                <li>🔥 Open kitchen show</li>
                <li>🌱 Dietary-friendly options</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white border-[#ffd8d8] rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b1001a]">
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <CardTitle className="text-[#b1001a] font-bold">Relaxed Vibe</CardTitle>
              </div>
              <CardDescription>
                Contemporary ambiance, warm lighting, and a welcoming team so you can unwind & savor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 ml-1 text-[#723955] space-y-1 text-sm">
                <li>🎶 Curated music</li>
                <li>🪴 Sun-soaked patio</li>
                <li>🧒 Family friendly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white border-[#ffd8d8] rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ff4453]">
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <CardTitle className="text-[#b1001a] font-bold">Easy Reservations</CardTitle>
              </div>
              <CardDescription>
                Seamless booking and walk-ins always welcome. We're here for your next special moment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 ml-1 text-[#723955] space-y-1 text-sm">
                <li>📲 Online & phone booking</li>
                <li>✨ Event/private dining</li>
                <li>🚗 Free parking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section
        id="menu"
        className="py-14 px-4 w-full bg-[#fff7ec] border-b border-[#ffd8d8]"
        aria-labelledby="menu-highlight"
      >
        <div className="max-w-5xl mx-auto">
          <h2 id="menu-highlight" className="text-3xl sm:text-4xl font-bold mb-2 text-center text-[#b1001a]">
            Signature Menu Favorites
          </h2>
          <p className="mb-8 text-center text-[#723955] text-lg">
            A taste journey for every palate. Highlights from our seasonal menu:
          </p>
          <ul className="grid gap-10 md:grid-cols-2">
            <li className="flex gap-5 items-start p-3 rounded-xl transition hover:bg-[#fff2f3]">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=300&q=80"
                  alt="Truffle Risotto"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#ffd8d8] bg-white"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#ff4453] text-lg flex items-center gap-2">
                  Truffle Wild Mushroom Risotto
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff4453]"></span>
                </h3>
                <p className="text-[#7e3242] text-sm mt-1">
                  Creamy arborio rice, wild mushrooms, black truffle, parmesan crisp.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start p-3 rounded-xl transition hover:bg-[#fff2f3]">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=300&q=80"
                  alt="Citrus Seared Salmon"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#ffd8d8] bg-white"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#ff4453] text-lg flex items-center gap-2">
                  Citrus Seared Salmon
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff4453]"></span>
                </h3>
                <p className="text-[#7e3242] text-sm mt-1">
                  Atlantic salmon, blood orange, asparagus, fennel salad.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start p-3 rounded-xl transition hover:bg-[#fff2f3]">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80"
                  alt="Handmade Ravioli"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#ffd8d8] bg-white"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#ff4453] text-lg flex items-center gap-2">
                  Handmade Ricotta Ravioli
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff4453]"></span>
                </h3>
                <p className="text-[#7e3242] text-sm mt-1">
                  House-made ricotta, local herbs, brown butter sage sauce.
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start p-3 rounded-xl transition hover:bg-[#fff2f3]">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1514512364185-4c2b678271aa?auto=format&fit=crop&w=300&q=80"
                  alt="Molten Chocolate Lava Cake"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#ffd8d8] bg-white"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#ff4453] text-lg flex items-center gap-2">
                  Molten Chocolate Lava Cake
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff4453]"></span>
                </h3>
                <p className="text-[#7e3242] text-sm mt-1">
                  Warm chocolate cake, oozy center, vanilla bean gelato.
                </p>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-[#ff4453] px-10 text-white hover:bg-[#b1001a] focus:bg-[#b1001a] focus:ring-2 focus:ring-[#ff8c8c] shadow-lg transition"
            >
              <Link to="#">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CHEF/ABOUT SECTION */}
      <section
        className="w-full py-16 px-4 border-b border-[#ffd8d8] bg-[#fff7ec]"
        aria-labelledby="about-chef"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 id="about-chef" className="text-2xl font-bold text-[#ff4453] mb-4">
              Meet Our Chef
            </h2>
            <p className="text-[#723955] text-base mb-4">
              Chef Maria blends culinary artistry with a love of fresh, bright ingredients and modern twists on comfort classics. Her vision: every meal at {env.appName || "Crimson Table"} should feel like a celebration.
            </p>
            <div className="mt-3">
              <p className="text-[#b1001a] text-base font-semibold">Maria Romano, Executive Chef</p>
              <p className="text-[#df979f] text-xs">25+ years of creative fine dining</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
              alt="Chef Maria"
              className="rounded-xl shadow-lg w-64 h-56 object-cover border-4 border-[#ffd8d8] bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS/TESTIMONIALS */}
      <section
        className="w-full py-14 bg-gradient-to-r from-[#fff2f2] to-[#fff7ec]"
        aria-labelledby="testimonials"
      >
        <div className="max-w-5xl px-4 mx-auto">
          <h2 id="testimonials" className="text-center text-2xl font-bold tracking-tight text-[#ff4453] mb-10">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-7">
            <Card className="border-[#ffd8d8] bg-white/80 shadow transition-shadow hover:shadow-lg">
              <CardContent className="py-8 flex flex-col items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/64.jpg"
                  alt="Anna G."
                  className="mb-3 w-14 h-14 rounded-full border-2 border-[#ffd8d8] object-cover"
                  loading="lazy"
                />
                <p className="italic text-[#7e3242]">&ldquo;Every course was exceptional—cozy, fun, and memorable night!&rdquo;</p>
                <span className="mt-3 font-semibold text-[#b1001a]">Anna G.</span>
              </CardContent>
            </Card>
            <Card className="border-[#ffd8d8] bg-white/80 shadow transition-shadow hover:shadow-lg">
              <CardContent className="py-8 flex flex-col items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                  alt="Michael T."
                  className="mb-3 w-14 h-14 rounded-full border-2 border-[#ffd8d8] object-cover"
                  loading="lazy"
                />
                <p className="italic text-[#7e3242]">&ldquo;From the wine list to desserts, simply outstanding.
                  Will be back soon!&rdquo;</p>
                <span className="mt-3 font-semibold text-[#b1001a]">Michael T.</span>
              </CardContent>
            </Card>
            <Card className="border-[#ffd8d8] bg-white/80 shadow transition-shadow hover:shadow-lg">
              <CardContent className="py-8 flex flex-col items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/92.jpg"
                  alt="Priya R."
                  className="mb-3 w-14 h-14 rounded-full border-2 border-[#ffd8d8] object-cover"
                  loading="lazy"
                />
                <p className="italic text-[#7e3242]">&ldquo;Fresh, flavorful food and the staff are lovely. Daughter loved the kids’ menu!&rdquo;</p>
                <span className="mt-3 font-semibold text-[#b1001a]">Priya R.</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BIG CTA SECTION */}
      <section
        className="py-14 px-4 w-full bg-gradient-to-r from-[#ff4453]/90 to-[#fff7ec] border-t border-[#ffd8d8] text-center"
        aria-label="Reserve Call to Action"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-5 text-[#b1001a]">Make Your Reservation Now</h2>
          <p className="text-lg text-[#7e3242] mb-8">
            Ready for unforgettable evenings of bold flavors and hospitality? <br />
            Secure your seat—walk-ins welcome, but early reservations highly recommended!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#ff4453] px-12 py-6 rounded-full text-xl font-semibold shadow-lg hover:bg-[#b1001a] focus:bg-[#b1001a] focus:ring-2 focus:ring-[#ff8c8c] transition"
          >
            <Link to="#">Book a Table</Link>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#b1001a] text-[#fff6f6] pt-12 pb-8 mt-auto" aria-label="Footer">
        <div className="max-w-6xl px-4 mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="font-bold text-lg mb-2 tracking-tight">{env.appName || "Crimson Table"}</h4>
            <p className="text-[#ffd8d8] text-sm">
              123 Main Street<br />
              Springfield, CA 90210
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-1">Contact</h5>
            <a href="tel:+1234567890" className="text-[#fff6f6] hover:underline focus:underline block text-sm">
              (123) 456-7890
            </a>
            <a
              href="mailto:hello@crimsontable.com"
              className="text-[#fff6f6] hover:underline focus:underline text-sm"
            >
              hello@crimsontable.com
            </a>
          </div>
          <div>
            <h5 className="font-semibold mb-1">Hours</h5>
            <p className="text-[#ffd8d8] text-sm">Mon–Sat: 5pm–11pm</p>
            <p className="text-[#ffd8d8] text-sm">Sun: Closed</p>
          </div>
          <div>
            <h5 className="font-semibold mb-1">Follow</h5>
            <div className="flex space-x-3 mt-1">
              <a href="https://instagram.com/" aria-label="Instagram" className="hover:opacity-80 focus:opacity-80">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ff9393"/><g><circle cx="12" cy="12" r="4.5" stroke="#b1001a" strokeWidth="1.4"/><circle cx="18" cy="6" r="1.2" fill="#b1001a"/></g></svg>
              </a>
              <a href="https://facebook.com/" aria-label="Facebook" className="hover:opacity-80 focus:opacity-80">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ff9393"/><path d="M16 8.834c0-.46-.374-.834-.834-.834h-1.333A1.833 1.833 0 0 0 12 9.833v1.334H11a.334.334 0 0 0-.334.333v1.334c0 .185.149.333.334.333h1V16c0 .185.149.334.334.334h1.334a.334.334 0 0 0 .333-.334v-2.167h1.083a.334.334 0 0 0 .333-.333l.001-1.334a.334.334 0 0 0-.334-.333H14.334v-1.001c0-.185.149-.333.334-.333h1.166A.834.834 0 0 0 16 8.834Z" fill="#b1001a"/></svg>
              </a>
              <a href="https://twitter.com/" aria-label="Twitter" className="hover:opacity-80 focus:opacity-80">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#ff9393"/><path d="M18.239 8.643c.009.133.009.267.009.4 0 4.074-3.098 8.772-8.772 8.772A8.72 8.72 0 0 1 4 16.419c.204.024.4.032.607.032a6.186 6.186 0 0 0 3.833-1.321 3.08 3.08 0 0 1-2.877-2.138 3.131 3.131 0 0 0 1.387-.053 3.08 3.08 0 0 1-2.468-3.02v-.04c.414.23.89.364 1.395.381a3.078 3.078 0 0 1-1.369-2.564c0-.566.152-1.1.416-1.557A8.746 8.746 0 0 0 12.075 8.98c-.049-.227-.073-.461-.073-.703A3.079 3.079 0 0 1 16.003 6.7a6.125 6.125 0 0 0 1.956-.748 3.09 3.09 0 0 1-1.353 1.701A6.19 6.19 0 0 0 18.841 7.4a6.62 6.62 0 0 1-1.553 1.243Z" fill="#b1001a"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-[#ffd8d8]">
          &copy; {new Date().getFullYear()} {env.appName || "Crimson Table"}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default Home;