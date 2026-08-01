import OpeningLoader from "./OpeningLoader";

const reasons = [
  {
    number: "01",
    title: "Kamu membuat hari biasa terasa istimewa",
    text: "Bahkan hal-hal kecil terasa lebih hangat kalau dijalani atau diceritakan bersamamu.",
  },
  {
    number: "02",
    title: "Kamu terasa seperti rumah",
    text: "Tempat aku bisa kembali, bercerita, tertawa, dan menjadi diriku sendiri tanpa perlu berpura-pura.",
  },
  {
    number: "03",
    title: "Caramu peduli",
    text: "Ada kelembutan dalam perhatianmu yang mungkin sederhana, tapi selalu berarti besar untukku.",
  },
  {
    number: "04",
    title: "Senyummu yang menenangkan",
    text: "Satu senyummu cukup untuk membuat dunia yang sedang berisik terasa sedikit lebih tenang.",
  },
  {
    number: "05",
    title: "Kamu membuatku ingin bertumbuh",
    text: "Bukan menjadi orang lain, tapi menjadi versi diriku yang lebih baik—bersamamu.",
  },
  {
    number: "06",
    title: "Karena kamu adalah kamu",
    text: "Dengan semua hal kecil, keunikan, kekurangan, dan caramu melihat dunia. Aku menyayangimu seutuhnya.",
  },
];

const photoCaptions = [
  "Salah satu hari favoritku",
  "Senyum yang selalu aku cari",
  "Kita dan cerita kecil kita",
  "Tempat, waktu, dan kamu",
  "Momen yang ingin kuingat",
  "Semoga selalu ada kita",
];

export default function Home() {
  return (
    <>
      <OpeningLoader />
      <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke awal">
          N <span aria-hidden="true">♥</span> H
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#surat">Surat</a>
          <a href="#alasan">Alasan</a>
          <a href="#galeri">Galeri</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow">A little corner of the world, just for you</p>
        <h1>
          Untuk Haya,
          <span>perempuan yang membuat duniaku terasa lebih hangat.</span>
        </h1>
        <p className="hero-copy">
          Aku membuat halaman kecil ini untuk menyimpan beberapa hal yang
          mungkin tidak selalu pandai aku ucapkan secara langsung.
        </p>
        <a className="primary-button" href="#surat">
          Buka surat untukmu <span aria-hidden="true">↓</span>
        </a>
        <div className="date-mark" aria-label="1 Agustus 2026">
          <span>01</span>
          <i />
          <span>08</span>
          <i />
          <span>26</span>
        </div>
      </section>

      <section className="letter-section" id="surat">
        <div className="section-intro">
          <p className="eyebrow">A letter for you</p>
          <h2>Untuk kamu yang kusayang.</h2>
        </div>

        <article className="letter-card">
          <span className="quote-mark" aria-hidden="true">“</span>
          <p className="salutation">Haya,</p>
          <p>
            Mungkin aku tidak selalu menjadi orang yang paling pandai merangkai
            kata. Kadang ada banyak hal di kepalaku yang ingin kusampaikan,
            tetapi akhirnya hanya menjadi senyum kecil saat melihatmu.
          </p>
          <p>
            Jadi hari ini, lewat halaman sederhana ini, aku ingin kamu tahu:
            kehadiranmu berarti lebih banyak daripada yang mungkin terlihat.
            Kamu membuat hari-hariku punya warna yang berbeda. Bukan karena
            semuanya selalu sempurna, tetapi karena aku menjalaninya bersamamu.
          </p>
          <p>
            Terima kasih sudah menjadi Haya—dengan segala cerita, tawa, sifat
            unik, dan semua bagian dirimu. Aku tidak hanya menyukai momen-momen
            indah kita. Aku juga menyayangi prosesnya, perjalanan kita, dan
            kemungkinan-kemungkinan kecil tentang masa depan yang ada kamu di
            dalamnya.
          </p>
          <p>
            Semoga saat kamu membuka halaman ini, kamu merasa dipilih,
            dihargai, dan disayangi. Bukan hanya hari ini, tetapi pada
            hari-hari biasa setelahnya juga.
          </p>
          <div className="signature">
            <span>Dengan seluruh hatiku,</span>
            <strong>Noval</strong>
          </div>
        </article>
      </section>

      <section className="reasons-section" id="alasan">
        <div className="section-intro centered">
          <p className="eyebrow">Why I adore you</p>
          <h2>Beberapa dari begitu banyak alasan.</h2>
          <p>
            Kalau semuanya ditulis, mungkin halaman ini tidak akan pernah
            selesai. Jadi, kita mulai dari enam.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span>{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeri">
        <div className="gallery-heading">
          <div className="section-intro">
            <p className="eyebrow">Our little gallery</p>
            <h2>Momen-momen bersama Haya.</h2>
          </div>
          <p>
            Karena kenangan terbaik bukan hanya untuk diingat, tetapi juga
            untuk disimpan.
          </p>
        </div>

        <div className="photo-grid">
          {photoCaptions.map((caption, index) => (
            <figure className={`photo-item photo-${index + 1}`} key={caption}>
              <div
                className="photo-frame"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(74, 35, 39, 0.03), rgba(74, 35, 39, 0.22)), url('/photos/photo-${index + 1}.jpg')`,
                }}
                role="img"
                aria-label={`Tempat foto ${index + 1}: ${caption}`}
              >
                <span className="photo-number">0{index + 1}</span>
                <span className="photo-placeholder">Foto kita</span>
              </div>
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-heart" aria-hidden="true">♥</div>
        <p className="eyebrow">And one last thing</p>
        <h2>
          Selamat Girlfriend Day,
          <span>Haya.</span>
        </h2>
        <p>
          Hari ini memang punya nama khusus. Tapi menyayangimu bukan sesuatu
          yang hanya ingin kulakukan satu hari dalam setahun.
        </p>
        <p className="always">Hari ini, besok, dan seterusnya.</p>
      </section>

      <footer>
        <span>Made with love for Haya</span>
        <span>01 · 08 · 2026</span>
      </footer>
      </main>
    </>
  );
}
