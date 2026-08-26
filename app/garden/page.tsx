import Image from 'next/image'
import Link from 'next/link'

const gardenItems = [
  { image: '/habitat/habitat-figma.png', alt: 'HABITat Figma board', size: 'wide', label: 'habit world' },
  { image: '/neuranote/lofi-sketches-1.png', alt: 'NeuraNote sketch page', size: 'tall', label: 'lofi notes' },
  { image: '/spotify/spotify-lofi-wireframes.png', alt: 'Spotify Threads wireframes', size: 'standard', label: 'wireframe scraps' },
  { image: '/habitat/animals.jpeg', alt: 'HABITat animal visuals', size: 'small', label: 'tiny mascots' },
  { image: '/narbl/figma-iteration-2.png', alt: 'Nexus design iteration', size: 'standard', label: 'ai study room' },
  { image: '/flowops-request-lifecycle.png', alt: 'FlowOps lifecycle diagram', size: 'wide', label: 'workflow map' },
  { image: '/neuranote/midfi-wireframes.png', alt: 'NeuraNote midfi wireframes', size: 'standard', label: 'study flow' },
  { image: '/habitat/habitat-10.jpeg', alt: 'HABITat mobile screen', size: 'tall', label: 'mobile garden' },
  { image: '/spotify/spotify-4.png', alt: 'Spotify Threads screen', size: 'small', label: 'music memory' },
  { image: '/newlongsleeves.png', alt: 'Long sleeve design artifact', size: 'standard', label: 'visual play' },
  { image: '/flowops-permission-matrix.png', alt: 'FlowOps permission matrix', size: 'wide', label: 'systems thinking' },
  { image: '/neuranote/neuranote-5.png', alt: 'NeuraNote high fidelity screen', size: 'small', label: 'polished pixel' },
]

export default function GardenPage() {
  return (
    <main className="dani-page garden-page-shell min-h-screen">
      <nav className="dani-nav">
        <Link href="/#work">works</Link>
        <span className="dani-nav-spacer" aria-hidden="true" />
        <Link href="/garden" aria-current="page">garden</Link>
      </nav>

      <section className="garden-archive">
        <div className="garden-heading">
          <h1>Garden</h1>
          <p>A little visual archive of sketches, systems, scraps, screens, and ideas still growing.</p>
        </div>

        <div className="garden-grid">
          {gardenItems.map((item, index) => (
            <figure key={`${item.image}-${index}`} className={`garden-card ${item.size}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 90vw, 360px" className="object-cover" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="garden-more">More to bloom soon...</p>
      </section>

      <footer className="dani-footer">
        <a href="mailto:arama@ucdavis.edu" className="footer-contact-card" aria-label="Email Anusha">
          <span className="peace-doodle" aria-hidden="true" />
          <p>Think we vibe?</p>
          <h2>Get in touch</h2>
        </a>
        <div className="footer-link-row" aria-label="Footer links">
          <Link href="/#work">works</Link>
          <Link href="/garden">garden</Link>
          <a href="mailto:arama@ucdavis.edu">email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedIn</a>
        </div>
      </footer>

      <a className="floating-chat" href="mailto:arama@ucdavis.edu" aria-label="Email Anusha">
        <span />
      </a>
    </main>
  )
}
