import EnquiryForm from "./enquiry-form";

// TODO: replace all placeholder content below with real academy details.
const PHONE = "+91 96770 92392";
const WHATSAPP = "https://wa.me/919677092392?text=Hi%2C%20I%27d%20like%20a%20free%20trial%20at%20Flying%20Feathers";

const programs = [
  { t: "Kids beginners", d: "Ages 6 to 10. Footwork, grip and fun games that build a love for the sport." },
  { t: "Junior development", d: "Ages 10 to 16. Structured drills, match play and fitness for school and district level." },
  { t: "Competitive squad", d: "Tournament preparation, video review and singles and doubles tactics." },
  { t: "Adults and fitness", d: "Learn from scratch or sharpen your game. Morning and evening batches." },
];
const batches = [
  ["Kids beginners", "Mon, Wed, Fri", "5:00 to 6:00 pm", "Rs. 1,500 / month"],
  ["Junior development", "Tue to Sat", "6:00 to 7:30 pm", "Rs. 2,500 / month"],
  ["Competitive squad", "Mon to Sat", "6:00 to 8:00 am", "Rs. 3,500 / month"],
  ["Adults", "Sat, Sun", "7:00 to 8:30 am", "Rs. 2,000 / month"],
];
const coaches = [
  { n: "Head Coach - Mr. Kathiresan", src: "/coaches/head-coach.jpg", b: "Former state-level player with 10+ years of coaching experience." },
  { n: "Coach - Mr. Pradeep", src: "/coaches/coach-2.jpg", b: "Certified junior coach focused on technique and footwork." },
];

// TODO: put real photos in public/players/ and set src, e.g. "/players/1.jpg"
const players = [
  { src: "/players/1.jpg", alt: "Player training at the academy" },
  { src: "/players/2.jpg", alt: "Junior batch on court" },
  { src: "/players/3.jpg", alt: "Tournament match" },
];
// TODO: replace with real partner or sponsor names
const partners = ["Yonex India", "SunRISE", "VentXpert", "Gargi", "Shutly Academy Managemnet"];

function PlayerPhotos({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {players.map((p, i) => (
        <div key={i} className="grid aspect-[4/3] place-items-center overflow-hidden rounded-lg bg-court/15 text-sm text-ink/60">
          {p.src ? <img src={p.src} alt={p.alt} className="h-full w-full object-cover" /> : "Player photo"}
        </div>
      ))}
    </div>
  );
}

function PartnerList({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {partners.map((n) => (
        <li key={n} className="rounded-lg border border-ink/15 bg-white px-4 py-3 text-center font-semibold">{n}</li>
      ))}
    </ul>
  );
}

function Court() {
  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#f3f7f6" strokeWidth="3">
      <rect x="60" y="40" width="480" height="320" />
      <rect x="60" y="70" width="480" height="260" />
      <line x1="300" y1="40" x2="300" y2="360" strokeWidth="5" />
      <line x1="180" y1="40" x2="180" y2="360" />
      <line x1="420" y1="40" x2="420" y2="360" />
      <line x1="180" y1="200" x2="60" y2="200" />
      <line x1="420" y1="200" x2="540" y2="200" />
    </svg>
  );
}

function Smash() {
  return (
    <svg role="img" aria-label="Badminton player jumping to smash" className="mx-auto h-72 w-auto sm:h-96" viewBox="0 0 340 440" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="150" cy="425" rx="70" ry="8" fill="#000" opacity=".25" />
      <g stroke="#f3f7f6">
        <circle cx="150" cy="130" r="19" fill="#f3f7f6" />
        <path d="M150 165 L146 255" strokeWidth="32" />
        <path d="M155 172 L205 122 L228 82" strokeWidth="13" />
        <path d="M140 172 L104 208 L84 190" strokeWidth="12" />
        <path d="M146 255 L114 322 L96 392" strokeWidth="17" />
        <path d="M148 255 L188 300 L166 362" strokeWidth="17" />
      </g>
      <g stroke="#f2c230">
        <path d="M228 82 L246 54" strokeWidth="6" />
        <ellipse cx="259" cy="32" rx="17" ry="27" transform="rotate(35 259 32)" strokeWidth="5" />
        <path d="M250 22 L268 42 M244 32 L262 52 M256 12 L274 32" strokeWidth="1.5" opacity=".6" />
      </g>
      <path d="M300 50 Q 318 120 262 182" stroke="#f3f7f6" strokeWidth="2" strokeDasharray="4 8" opacity=".5" />
      <g transform="translate(296 96) rotate(-35)">
        <circle cx="0" cy="0" r="7" fill="#f2c230" />
        <path d="M-6 -3 L-14 -26 M0 -5 L0 -28 M6 -3 L14 -26 M-6 -3 Q0 -30 6 -3" stroke="#f3f7f6" strokeWidth="2.5" fill="#f3f7f6" fillOpacity=".25" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* Side panels: only on very wide screens, where there is empty space beside the content */}
      <aside aria-label="Players in action" className="fixed left-3 top-24 z-10 hidden w-56 rounded-xl bg-white/95 p-3 shadow-lg min-[1650px]:block">
        <h2 className="mb-3 text-base font-bold">Players in action</h2>
        <PlayerPhotos className="grid gap-3" />
      </aside>
      <aside aria-label="Our partners" className="fixed right-3 top-24 z-10 hidden w-56 rounded-xl bg-white/95 p-3 shadow-lg min-[1650px]:block">
        <h2 className="mb-3 text-base font-bold">Our partners</h2>
        <PartnerList className="grid gap-3" />
      </aside>
      <header className="relative overflow-hidden bg-court-deep text-line">
        <Court />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-3xl font-extrabold sm:text-4xl">Flying Feathers</span>
          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#programs">Programs</a><a href="#batches">Batches</a><a href="#coaches">Coaches</a><a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 pb-20 pt-10 sm:pt-16 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-7xl">Train like every rally counts.</h1>
            <p className="mt-6 max-w-xl text-lg text-line/85">Professional badminton coaching for kids, juniors and adults. Certified coaches, small batches and match practice every week.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-md bg-shuttle px-6 py-3 font-semibold text-ink">Book a free trial</a>
              <a href={WHATSAPP} className="rounded-md border border-line/60 px-6 py-3 font-semibold">Chat on WhatsApp</a>
            </div>
          </div>
          {/* TODO: replace with a real photo of your players, e.g. <Image src="/hero.jpg" .../> in public/ */}
          <Smash />
        </div>
      </header>

      <section id="programs" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Programs for every level</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {programs.map((p) => (
            <div key={p.t} className="border-l-4 border-court pl-5">
              <h3 className="text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 max-w-md text-ink/80">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="batches" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Batches and fees</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead><tr className="border-b-2 border-ink/20 text-sm"><th className="py-3">Batch</th><th>Days</th><th>Time</th><th>Fee</th></tr></thead>
              <tbody>
                {batches.map((r) => (
                  <tr key={r[0]} className="border-b border-ink/10">
                    {r.map((c, i) => <td key={i} className={`py-4 ${i === 0 ? "font-semibold" : ""}`}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="coaches" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Your coaches</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {coaches.map((c) => (
            <div key={c.n} className="flex gap-5">
              {c.src ? (
                <img src={c.src} alt={c.n} className="h-24 w-24 shrink-0 rounded-full object-cover" />
              ) : (
                <div className="h-24 w-24 shrink-0 rounded-full bg-court/20" aria-hidden />
              )}
              <div><h3 className="text-xl font-semibold">{c.n}</h3><p className="mt-1 text-ink/80">{c.b}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 min-[1650px]:hidden">
        <h2 className="text-3xl font-bold sm:text-4xl">Players in action</h2>
        <PlayerPhotos className="mt-6 grid gap-4 sm:grid-cols-3" />
        <h2 className="mt-14 text-3xl font-bold sm:text-4xl">Our partners</h2>
        <PartnerList className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" />
      </section>

      <section id="contact" className="bg-court py-20 text-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Your first session is free</h2>
            <p className="mt-4 max-w-md text-line/85">Fill in the form and we'll call you to fix a time. Rackets are available for trial sessions.</p>
            <dl className="mt-8 grid gap-3">
              <div><dt className="text-sm text-line/70">Address</dt><dd>34, New Colony, 2nd Main Road, Alwartirunagar, Virugambakkam, Chennai</dd></div>
              <div><dt className="text-sm text-line/70">Phone</dt><dd><a href={`tel:${PHONE.replace(/ /g, "")}`}>{PHONE}</a></dd></div>
              <div><dt className="text-sm text-line/70">Hours</dt><dd>Mon to Sat, 6:00 am to 11:30 pm</dd></div>
            </dl>
          </div>
          <div className="text-ink"><EnquiryForm /></div>
        </div>
      </section>

      <footer className="bg-court-deep py-6 text-center text-sm text-line/70">© Flying Feathers Badminton Academy</footer>
    </main>
  );
}