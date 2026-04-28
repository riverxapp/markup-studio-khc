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
// Optionally import Header and Footer from layout if available
// import { Header } from "../components/layout/Header";
// import { Footer } from "../components/layout/Footer";

export function Home() {
  return (
    <main className="min-h-screen bg-[#fff7ec] flex flex-col">
      {/* HEADER & NAVBAR */}
      {/* Optionally import and use layout Header/Nav components if present */}

      {/* HERO */}
      <header
        className="relative w-full text-center px-4 pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#ffe3ba] to-[#fff7ec]"
        aria-label="Restaurant landing hero"
      >
        <div className="max-w-3xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Restaurant presentation dish"
            className="rounded-2xl shadow-xl w-full h-56 sm:h-72 md:h-80 object-cover mb-7 border-4 border-[#f6e0c6]"
            loading="eager"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d94828] mb-2">
            Now Open in Your City
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#26170e] mb-5 drop-shadow">
            Savour. {env.appName || "The Gourmet Kitchen"}
          </h1>
          <p className="max-w-xl mx-auto text-lg sm:text-xl leading-relaxed text-[#6f5b4a] mb-10">
            Discover a modern culinary escape where passion and flavor meet. Locally sourced, globally inspired. Reserve your table and delight your senses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#ff6b4a] px-8 text-white hover:bg-[#d94828] focus:bg-[#d94828] focus:ring-2 focus:ring-[#ffad84] shadow-lg transition"
            >
              <Link to="/">Book a Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#e7cdb4] bg-[#fffaf2] px-8 text-[#26170e] hover:bg-[#ffe7cf] focus:bg-[#ffe7cf] border-2 focus:ring-2 focus:ring-[#ffad84] transition"
            >
              <Link to="#menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* TRUST/USP BLOCK */}
      <section
        className="w-full px-4 py-6 bg-[#fff7ec] border-b border-[#f6e0c6]"
        aria-label="Restaurant trust & credibility"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ffad84]">
              <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden="true" fill="none">
                <circle cx="10" cy="10" r="10" fill="white" />
                <path d="M14.24 6.82 8.95 12.1l-3.18-3.18-.8.8 3.99 3.98 6.09-6.09-.81-.79Z" fill="#d94828"/>
              </svg>
            </span>
            <span className="font-medium text-[#6f5b4a] text-sm">Voted #1 New Restaurant · 2024</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ffad84]">
              <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden="true" fill="none">
                <circle cx="10" cy="10" r="10" fill="white" />
                <path d="m10 4 1.908 5.73H18L12.546 9.552 14.454 15.27 10 12.222 5.546 15.27l1.908-5.718L2 9.73h6.092L10 4Z" fill="#d94828"/>
              </svg>
            </span>
            <span className="font-medium text-[#6f5b4a] text-sm">Michelin-Inspired Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#ffad84]">
              <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden="true" fill="none">
                <circle cx="10" cy="10" r="10" fill="white"/>
                <path d="M6.8 12v-2.06H6V10c0-1.2.98-2.18 2.18-2.18h3.08A2.18 2.18 0 0 1 13.44 10v.28h-.8V12H6.8Zm6.36-2.46L10 5l-3.16 4.53a3.005 3.005 0 0 0-1.14 2.34v1.13C5.7 13.08 7.12 14.5 8.94 14.5h2.12c1.82 0 3.24-1.42 3.24-3.19v-1.13c0-.93-.43-1.79-1.14-2.34Z" fill="#d94828"/>
              </svg>
            </span>
            <span className="font-medium text-[#6f5b4a] text-sm">Locally Sourced + Organic</span>
          </div>
        </div>
      </section>

      {/* FEATURED MENU SECTION */}
      <section
        id="menu"
        className="py-16 px-4 w-full bg-[#fffaf2] border-b border-[#f1ddc9]"
        aria-labelledby="menu-highlight"
      >
        <div className="max-w-4xl mx-auto">
          <h2 id="menu-highlight" className="text-2xl sm:text-3xl font-bold mb-2 text-center text-[#26170e]">
            Featured Menu
          </h2>
          <p className="mb-8 text-center text-[#6f5b4a] text-base">
            Seasonally crafted with the freshest ingredients. Our favorites:</p>
          <ul className="grid gap-8 md:grid-cols-2">
            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=300&q=80"
                  alt="Truffle Risotto"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#f1ddc9]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#d94828] text-lg flex items-center gap-2">Truffle Wild Mushroom Risotto</h3>
                <p className="text-[#6f5b4a] text-sm">
                  Creamy arborio, wild mushrooms, black truffle, parmesan crisp.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=300&q=80"
                  alt="Citrus Seared Salmon"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#f1ddc9]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#d94828] text-lg flex items-center gap-2">Citrus Seared Salmon</h3>
                <p className="text-[#6f5b4a] text-sm">
                  Atlantic salmon, blood orange glaze, asparagus, fennel salad.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80"
                  alt="Handmade Ravioli"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#f1ddc9]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#d94828] text-lg flex items-center gap-2">Handmade Ricotta Ravioli</h3>
                <p className="text-[#6f5b4a] text-sm">
                  House ricotta, local herbs, brown butter sage sauce.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1514512364185-4c2b678271aa?auto=format&fit=crop&w=300&q=80"
                  alt="Chocolate Lava Cake"
                  className="rounded-lg h-24 w-24 object-cover border-2 border-[#f1ddc9]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#d94828] text-lg flex items-center gap-2">Molten Chocolate Lava Cake</h3>
                <p className="text-[#6f5b4a] text-sm">
                  Warm chocolate cake, liquid chocolate center, vanilla bean gelato.
                </p>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="bg-[#ff6b4a] px-10 text-white hover:bg-[#d94828] focus:bg-[#d94828] focus:ring-2 focus:ring-[#ffad84] shadow-lg transition">
              <Link to="/">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT / HISTORY BLOCK */}
      <section
        className="w-full py-16 px-4 border-b border-[#e5d6c3] bg-[#fff7ec]"
        aria-labelledby="about-history"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="about-history" className="text-2xl font-bold text-[#d94828] mb-3">
              Our Story
            </h2>
            <p className="text-[#6f5b4a] text-base mb-4">
              Founded by culinary lovers who believe food should inspire, not just satisfy.
              Every dish is a celebration of vibrant flavors and cherished memories, served with warmth and modern hospitality.
            </p>
            <div className="space-y-1">
              <p className="text-[#26170e] text-base font-semibold">Est. 2024 · Family Owned</p>
              <p className="text-[#bfa682] text-sm">Chef Maria & Team</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
              alt="Restaurant founders"
              className="rounded-xl shadow-lg w-64 h-56 object-cover border-4 border-[#f1ddc9] bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* AMBIANCE / UNIQUE VALUE SECTION */}
      <section
        className="w-full py-14 px-4 bg-gradient-to-b from-[#ffe7cf] to-[#fff7ec] border-b border-[#f1ddc9]"
        aria-labelledby="ambiance"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="ambiance" className="text-2xl font-bold text-[#d94828] mb-3">
              An Experience For Every Occasion
            </h2>
            <p className="text-[#6f5b4a] text-base mb-6">
              Step into a space where modern comfort meets timeless elegance. Sun-drenched interiors, lush plants, ambient lighting, and curated music set the stage for memorable moments.
            </p>
            <ul className="space-y-3 text-[#6f5b4a] font-medium text-base">
              <li className="flex items-center gap-3">
                <span className="inline-flex w-5 h-5 justify-center items-center text-[#d94828]">✔️</span>
                Private dining & event bookings
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex w-5 h-5 justify-center items-center text-[#d94828]">✔️</span>
                Wheelchair & child-friendly design
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex w-5 h-5 justify-center items-center text-[#d94828]">✔️</span>
                Vibrant patio for brunch & cocktails
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex w-5 h-5 justify-center items-center text-[#d94828]">✔️</span>
                Dedicated vegan and gluten-free options
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0723cdd?auto=format&fit=crop&w=400&q=80"
                alt="Restaurant ambiance"
                className="rounded-xl shadow-lg w-40 h-56 object-cover border-4 border-[#f1ddc9] bg-white"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
                alt="Dining area"
                className="rounded-xl shadow-lg w-40 h-56 object-cover border-4 border-[#f1ddc9] bg-white hidden md:block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GUEST TESTIMONIALS */}
      <section
        className="w-full py-14 bg-gradient-to-br from-[#fff2e5] to-[#fff7ec]"
        aria-labelledby="testimonials"
      >
        <div className="max-w-5xl px-4 mx-auto">
          <h2 id="testimonials" className="text-center text-2xl font-bold tracking-tight text-[#d94828] mb-8">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-[#f6e0c6] bg-white transition-shadow hover:shadow-md focus-within:shadow-md">
              <CardContent className="py-8 flex flex-col items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/64.jpg"
                  alt="Anna G."
                  className="mb-3 w-14 h-14 rounded-full border-2 border-[#f1ddc9] object-cover"
                  loading="lazy"
                />
                <p className="italic text-[#6f5b4a]">&ldquo;Best meal I’ve had all year.
                  Every dish was a work of art!&rdquo;</p>
                <span className="mt-3 font-semibold text-[#26170e]">Anna G.</span>
              </CardContent>
            </Card>
            <Card className="border-[#f6e0c6] bg-white transition-shadow hover:shadow-md focus-within:shadow-md">
              <CardContent className="py-8 flex flex-col items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                  alt="Michael T."
                  className="mb-3 w-14 h-14 rounded-full border-2 border-[#f1ddc9] object-cover"
                  loading="lazy"
                />
                <p className="italic text-[#6f5b4a]">&ldquo;The ambiance and service are
                  exquisite. Highly recommend for a special night out.&rdquo;</p>
                <span className="mt-3 font-semibold text-[#26170e]">Michael T.</span>
              </CardContent>
            </Card>
            <Card className="border-[#f6e0c6] bg-white transition-shadow hover:shadow-md focus-within:shadow-md">
              <CardContent className="py-8 flex flex-col items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/92.jpg"
                  alt="Priya R."
                  className="mb-3 w-14 h-14 rounded-full border-2 border-[#f1ddc9] object-cover"
                  loading="lazy"
                />
                <p className="italic text-[#6f5b4a]">&ldquo;Our family can’t wait for our next visit!
                  Kids menu is fantastic too.&rdquo;</p>
                <span className="mt-3 font-semibold text-[#26170e]">Priya R.</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PERSUASIVE CTA SECTION */}
      <section
        className="py-12 px-4 w-full bg-[#fffaf2] border-t border-[#f1ddc9] text-center"
        aria-label="Reserve Call to Action"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-[#26170e]">Make Your Next Meal Unforgettable</h2>
          <p className="text-base md:text-lg text-[#6f5b4a] mb-7">Let us sweep you off your feet with exceptional food, service, and ambiance. Reserve your table—walk-ins welcome, but reservations encouraged!</p>
          <Button
            asChild
            size="lg"
            className="bg-[#ff6b4a] px-10 text-white hover:bg-[#d94828] focus:bg-[#d94828] focus:ring-2 focus:ring-[#ffad84] shadow-lg text-base transition"
          >
            <Link to="/">Book a Table</Link>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#26170e] text-[#fff7ec] pt-12 pb-8 mt-auto" aria-label="Footer">
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
        <div className="mt-8 text-center text-xs text-[#f6e0c6]">
          &copy; {new Date().getFullYear()} {env.appName || "The Gourmet Kitchen"}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}