'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ViewportVideo from '@/components/ViewportVideo'

type Project = {
  title: string
  category: string
  description: string
  href: string
  image: string
  alt: string
  previewVideo?: string
  secondaryImage?: string
  secondaryAlt: string
  tone: string
  stat: string
  crop: string
  singlePhone?: boolean
  placeholder?: boolean
  placeholderLabel?: string
  placeholderTitle?: string
  placeholderMeta?: string
}

type ShowcaseSlide = {
  title: string
  href?: string
  alt: string
  format: 'portrait' | 'square' | 'landscape'
  image?: string
  secondaryImage?: string
  video?: string
  position?: string
  fit?: 'cover' | 'contain'
  tone: 'ink' | 'sage' | 'lilac' | 'sky' | 'rose' | 'citrus' | 'mint'
  presentation?: 'full' | 'inset'
  framing?: 'roomy' | 'tight'
  motion?: 'afterglow'
  composition?: 'frameless'
  art?: 'orbit-bloom' | 'manifesto' | 'signal-field'
  variant?: 'spotify' | 'crusoe' | 'habitat'
}

const projects: Project[] = [
  {
    title: 'Crusoe',
    category: 'Internship · Cloud Infrastructure',
    description: 'Three connected initiatives that made complex cloud workflows clearer, more actionable, and easier to trust.',
    href: '/case-study/crusoe',
    image: '/images/crusoe/final-instances-provisioning.png',
    alt: 'Crusoe Console case study preview',
    secondaryImage: '/images/crusoe/final-kubernetes-empty.png',
    secondaryAlt: 'Crusoe Kubernetes Console empty state',
    tone: 'crusoe',
    stat: 'Console clarity',
    crop: 'center',
  },
  {
    title: 'ToniPR',
    category: 'Internship · AI Storytelling',
    description: 'An end-to-end platform that turns one guided founder interview into useful PR and marketing content.',
    href: '/case-study/tonipr',
    image: '/tonipr/site-hero.jpg',
    alt: 'ToniPR case study preview',
    secondaryImage: '/tonipr/tonipr-product-still.jpg',
    secondaryAlt: 'ToniPR product walkthrough',
    tone: 'toni',
    stat: 'Interview to content',
    crop: 'center',
  },
  {
    title: 'Nexus',
    category: 'AI · Education',
    description: 'Consensus-backed answers from multiple models, designed for students who need clarity fast.',
    href: '/case-study/nexus',
    image: '/narbl/narbl-1.png',
    alt: 'Nexus landing page preview',
    secondaryImage: '/narbl/narbl-7.png',
    secondaryAlt: 'Nexus research workspace',
    tone: 'blue',
    stat: 'AI clarity',
    crop: 'center',
  },
  {
    title: 'NeuraNote',
    category: 'AI · Learning',
    description: 'A calmer note-taking system for memory, concept maps, and review rituals.',
    href: '/case-study/neuranote',
    image: '/neuranote/neuranote-1.png',
    alt: 'NeuraNote interface preview',
    secondaryImage: '/neuranote/neuranote-5.png',
    secondaryAlt: 'NeuraNote review flow',
    tone: 'pink',
    stat: 'Memory-first',
    crop: 'center',
  },
  {
    title: 'FlowOps',
    category: 'B2B · Workflow',
    description: 'Enterprise request management made more readable across roles, approvals, and SLAs.',
    href: '/case-study/flowops',
    image: '/flowops/flowops-requests.png',
    alt: 'FlowOps dashboard preview',
    secondaryImage: '/flowops/flowops-role-switcher.png',
    secondaryAlt: 'FlowOps agent workspace',
    tone: 'orange',
    stat: 'Workflow logic',
    crop: 'left',
  },
  {
    title: 'HABITat',
    category: 'Mobile · Behavior',
    description: 'A habit tracker built around streaks, tiny rewards, and a virtual habitat that grows with you.',
    href: '/case-study/habitat',
    image: '/habitat/hero-phones.jpeg',
    alt: 'HABITat app preview',
    secondaryAlt: 'HABITat home dashboard',
    tone: 'green',
    stat: 'Habit loops',
    crop: 'center',
  },
  {
    title: 'Spotify Threads',
    category: 'Concept · Music',
    description: 'A Spotify concept for listening memory, mood-based discovery, and intentional rediscovery.',
    href: '/case-study/spotify',
    image: '/spotify/spotify-1.png',
    alt: 'Spotify Threads single-phone prototype',
    singlePhone: true,
    secondaryAlt: 'Spotify Threads listening memory screen',
    tone: 'mint',
    stat: 'Music memory',
    crop: 'center',
  },
]

const showcaseSlides: ShowcaseSlide[] = [
  {
    title: 'ToniPR · Product walkthrough',
    href: '/case-study/tonipr',
    video: '/tonipr/tonipr-centered-walkthrough.mp4',
    alt: 'ToniPR marketing experience and product story walkthrough',
    format: 'landscape',
    tone: 'rose',
    presentation: 'inset',
    framing: 'roomy',
  },
  {
    title: 'Orbital bloom · Motion study',
    alt: 'Animated orbital bloom visual study',
    format: 'portrait',
    tone: 'ink',
    presentation: 'full',
    art: 'orbit-bloom',
  },
  {
    title: 'NeuraNote · Product reel',
    href: '/case-study/neuranote',
    video: '/neuranote/neuranote-showcase-borderless-wide.mp4',
    alt: 'NeuraNote hero, dashboard, concept map, review, and insights experience',
    format: 'landscape',
    tone: 'lilac',
    presentation: 'inset',
    framing: 'tight',
  },
  {
    title: 'Visual study · Afterglow',
    image: '/images/inspiration/cosmic-figures.jpg',
    alt: 'Dreamlike cosmic artwork with three glowing figures',
    format: 'portrait',
    fit: 'contain',
    position: 'center',
    tone: 'ink',
    presentation: 'full',
    motion: 'afterglow',
  },
  {
    title: 'Spotify Threads · Listening memory',
    href: '/case-study/spotify',
    image: '/spotify/spotify-1.png',
    alt: 'Spotify Threads listening-memory mobile interface',
    format: 'portrait',
    fit: 'contain',
    position: 'center',
    tone: 'ink',
    presentation: 'inset',
    framing: 'tight',
    variant: 'spotify',
  },
  {
    title: 'Signal field · Generative motion',
    alt: 'Animated RGB signal field visual experiment',
    format: 'square',
    tone: 'ink',
    presentation: 'full',
    art: 'signal-field',
  },
  {
    title: 'Crusoe · Kubernetes',
    href: '/case-study/crusoe',
    video: '/crusoe/empty-state-kubernetes.mp4',
    alt: 'Crusoe Console Kubernetes empty state walkthrough',
    format: 'landscape',
    tone: 'ink',
    presentation: 'inset',
    framing: 'tight',
    variant: 'crusoe',
  },
  {
    title: 'Clear, useful, human · Visual identity study',
    alt: 'Layered gradient typography visual identity study',
    format: 'landscape',
    tone: 'sky',
    presentation: 'full',
    art: 'manifesto',
  },
  {
    title: 'Nexus · Multi-model workspace',
    href: '/case-study/nexus',
    image: '/narbl/narbl-1.png',
    alt: 'Nexus AI research workspace landing experience',
    format: 'landscape',
    fit: 'contain',
    position: 'center',
    tone: 'ink',
    presentation: 'inset',
    framing: 'tight',
    variant: 'habitat',
  },
  {
    title: 'HABITat',
    href: '/case-study/habitat',
    image: '/habitat/hero-phones.jpeg',
    alt: 'HABITat mobile app shown in transparent phone frames',
    format: 'landscape',
    fit: 'contain',
    tone: 'ink',
    presentation: 'inset',
    framing: 'tight',
  },
]

const loopedShowcaseSlides = [...showcaseSlides, ...showcaseSlides]

const supportTabs = [
  { image: '/tonipr/site-hero.jpg', alt: 'ToniPR storytelling platform', tone: 'tab-pink' },
  { image: '/images/crusoe/final-instances-provisioning.png', alt: 'Crusoe Console provisioning experience', tone: 'tab-stone' },
  { image: '/narbl/narbl-4.png', alt: 'Nexus AI research interface', tone: 'tab-ink' },
  { image: '/flowops/flowops-requests.png', alt: 'FlowOps request-management workspace', tone: 'tab-lime' },
  { image: '/neuranote/neuranote-1.png', alt: 'NeuraNote learning experience', tone: 'tab-sky' },
  { image: '/habitat/hero-phones.jpeg', alt: 'HABITat mobile experience', tone: 'tab-green' },
  { image: '/images/inspiration/cosmic-figures.jpg', alt: 'Afterglow visual study', tone: 'tab-blue' },
  { image: '/spotify/spotify-1.png', alt: 'Spotify Threads listening experience', tone: 'tab-mist' },
]

const supportColumns = [
  ['Product Design', 'Websites / Apps', 'Design Systems'],
  ['Motion Design', 'Prototyping', 'Visual Identity'],
  ['AI Interfaces', 'UX Research', 'Storytelling'],
]

function ShowcaseArt({ kind }: { kind: NonNullable<ShowcaseSlide['art']> }) {
  if (kind === 'orbit-bloom') {
    return (
      <span className="showcase-art orbit-bloom" aria-hidden="true">
        <span className="orbit-stars" />
        <span className="orbit-flower">
          <i /><i /><i /><i /><i /><i />
        </span>
        <span className="orbit-horizon" />
      </span>
    )
  }

  if (kind === 'manifesto') {
    return (
      <span className="showcase-art manifesto-study" aria-hidden="true">
        <span className="manifesto-glow" />
        <span className="manifesto-layer manifesto-layer-back" />
        <span className="manifesto-layer manifesto-layer-middle" />
        <span className="manifesto-panel">
          <span className="manifesto-words">Clear.<br />Useful.<br />Human.</span>
          <strong>make it click.</strong>
        </span>
      </span>
    )
  }

  return (
    <span className="showcase-art signal-field" aria-hidden="true">
      <span className="signal-grid" />
      <span className="signal-glow" />
      <span className="signal-bars">
        {Array.from({ length: 17 }, (_, index) => <i key={index} />)}
      </span>
    </span>
  )
}

export default function HousePortfolio() {
  const workStripRef = useRef<HTMLDivElement>(null)
  const workTrackRef = useRef<HTMLDivElement>(null)
  const [heroFlowersReady, setHeroFlowersReady] = useState(false)

  useEffect(() => {
    const readyTimer = window.setTimeout(() => setHeroFlowersReady(true), 1250)
    return () => window.clearTimeout(readyTimer)
  }, [])

  useEffect(() => {
    const strip = workStripRef.current
    const track = workTrackRef.current
    if (!strip || !track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const now = typeof window.performance?.now === 'function'
      ? () => window.performance.now()
      : () => Date.now()
    let frame = 0
    let lastTime = now()
    let offset = 0
    const normalSpeed = 30
    const hoverSpeed = 8
    let speed = normalSpeed
    let targetSpeed = normalSpeed
    let loopWidth = 0
    const scheduleFrame = typeof window.requestAnimationFrame === 'function'
      ? (callback: FrameRequestCallback) => window.requestAnimationFrame(callback)
      : (callback: FrameRequestCallback) => window.setTimeout(() => callback(now()), 16)
    const cancelFrame = typeof window.cancelAnimationFrame === 'function'
      ? (id: number) => window.cancelAnimationFrame(id)
      : (id: number) => window.clearTimeout(id)

    const measureLoop = () => {
      const firstSlide = track.children[0] as HTMLElement | undefined
      const repeatedFirstSlide = track.children[showcaseSlides.length] as HTMLElement | undefined
      loopWidth = firstSlide && repeatedFirstSlide
        ? repeatedFirstSlide.offsetLeft - firstSlide.offsetLeft
        : track.scrollWidth / 2
      if (loopWidth > 0) offset %= loopWidth
    }

    const handleVisibilityChange = () => {
      lastTime = now()
    }

    const handlePointerEnter = () => {
      targetSpeed = hoverSpeed
    }

    const handlePointerLeave = () => {
      targetSpeed = normalSpeed
    }

    measureLoop()
    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(measureLoop)
      : null
    resizeObserver?.observe(track)
    window.addEventListener('resize', measureLoop, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)
    strip.addEventListener('pointerenter', handlePointerEnter)
    strip.addEventListener('pointerleave', handlePointerLeave)

    const move = (time: number) => {
      const elapsed = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time
      speed += (targetSpeed - speed) * Math.min(1, elapsed * 7)
      if (loopWidth > 0) {
        offset = (offset + speed * elapsed) % loopWidth
        track.style.transform = `translate3d(${-offset}px, 0, 0)`
      }

      frame = scheduleFrame(move)
    }

    frame = scheduleFrame(move)
    return () => {
      cancelFrame(frame)
      resizeObserver?.disconnect()
      window.removeEventListener('resize', measureLoop)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      strip.removeEventListener('pointerenter', handlePointerEnter)
      strip.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <main className="dani-page min-h-screen">
      <div className="dani-hero-shell">
        <nav className="dani-nav" aria-label="Primary navigation">
          <div className="dani-nav-menu">
            <a href="#work" className="is-current">Works</a>
            <a href="#about">About me</a>
            <a
              href="/Anusha_Ramachandran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </div>
        </nav>

        <section className="dani-hero">
          <div className={`hero-flower flower-blue${heroFlowersReady ? ' is-ready' : ''}`} aria-hidden="true">
            <div className="hero-flower-shape">
              <span /><span /><span /><span /><span /><span />
              <strong />
            </div>
          </div>
          <div className={`hero-flower flower-red${heroFlowersReady ? ' is-ready' : ''}`} aria-hidden="true">
            <div className="hero-flower-shape">
              <span /><span /><span /><span /><span /><span />
              <strong />
            </div>
          </div>
          <div className="dani-hero-copy">
            <div className="hero-doodle" aria-hidden="true">
              <span />
            </div>
            <p className="dani-kicker">Hi, I’m Anusha</p>
            <h1>
              <span>Visual and Product</span>
              <span>designer bringing ideas</span>
              <span>from concept to launch.</span>
            </h1>
            <p className="dani-hero-text">
              I work across research, visual design, interaction, and front-end implementation—
              turning complex ideas and messy workflows into polished digital products people can
              understand, trust, and use.
            </p>
            <div className="dani-hero-actions">
              <a href="mailto:arama@ucdavis.edu" className="dani-button primary">Chat with me</a>
            </div>
          </div>
        </section>
      </div>

      <section id="work" className="digital-home">
        <h2>Step into my digital home</h2>
        <div
          ref={workStripRef}
          className="work-strip"
          aria-label="Featured portfolio projects"
        >
          <div ref={workTrackRef} className="work-track">
            {loopedShowcaseSlides.map((slide, index) => {
              const isDuplicate = index >= showcaseSlides.length
              const cardClassName = `home-work-card showcase-${slide.format} showcase-tone-${slide.tone} showcase-${slide.presentation ?? 'full'}${slide.video ? ' showcase-video' : ''}${slide.framing ? ` showcase-${slide.framing}` : ''}${slide.motion ? ` showcase-motion-${slide.motion}` : ''}${slide.composition ? ` showcase-${slide.composition}` : ''}${slide.variant ? ` showcase-${slide.variant}` : ''}`
              const cardContents = (
                <>
                  <span className="showcase-media">
                    {slide.art ? (
                      <ShowcaseArt kind={slide.art} />
                    ) : slide.video ? (
                      <ViewportVideo
                        sources={[{ src: slide.video, type: 'video/mp4' }]}
                        ariaLabel={slide.alt}
                      />
                    ) : slide.image ? (
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 760px) 82vw, 534px"
                        style={{
                          objectPosition: slide.position ?? 'center',
                          objectFit: slide.fit ?? 'cover',
                        }}
                      />
                    ) : null}
                  </span>
                </>
              )

              return slide.href ? (
                <Link
                  key={`${slide.title}-${index}`}
                  href={slide.href}
                  className={cardClassName}
                  aria-hidden={isDuplicate}
                  aria-label={`View ${slide.title}`}
                  tabIndex={isDuplicate ? -1 : undefined}
                >
                  {cardContents}
                </Link>
              ) : (
                <div
                  key={`${slide.title}-${index}`}
                  className={cardClassName}
                  aria-hidden="true"
                >
                  {cardContents}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mini-work">
        <div className="mini-work-heading">
          <p className="dani-kicker">Selected projects</p>
          <h2>Tiny fraction of my work.</h2>
          <p>
            A quick pass through product concepts, research-heavy flows, AI tools, mobile behavior design, and playful systems.
          </p>
        </div>

        <div className="case-study-stack">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className={`case-study-row ${project.tone}`}
            >
              <div className="case-side-tiles" aria-hidden="true">
                <div className="case-flower-tile">
                  <div className="case-mini-flower">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <strong />
                  </div>
                </div>
                <div className="case-blank-tile">
                  <div className="case-mini-flower case-mini-flower-inverse">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <strong />
                  </div>
                </div>
              </div>
              <div className="case-feature-card">
                <div className="case-preview">
                  <div className="case-pattern" />
                  <div className={`case-image main-shot${project.previewVideo || project.singlePhone ? ' single-phone-shot' : ''}`}>
                    {project.previewVideo ? (
                      <ViewportVideo
                        sources={[{ src: project.previewVideo, type: 'video/webm' }]}
                        poster={project.image}
                        ariaLabel={project.alt}
                        className="single-phone-preview-video"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 900px) 72vw, 780px"
                        className="case-media-contain"
                      />
                    )}
                  </div>
                  {project.secondaryImage && (
                    <div className="case-image mini-shot">
                      <Image
                        src={project.secondaryImage}
                        alt={project.secondaryAlt}
                        fill
                        sizes="(max-width: 900px) 60vw, 340px"
                        className="case-media-contain"
                      />
                    </div>
                  )}
                  <div className="case-meta">
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="case-description-panel">
                  <p>{project.description}</p>
                  <div>
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </div>
                  <i aria-hidden="true">»</i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="dani-support">
        <div className="support-heading">
          <h2>I’ve got your back with...</h2>
          <p className="home-single-line">Digital aesthetics that engage and emotionally connect with your users</p>
        </div>

        <div className="support-tab-stage">
          <div className="support-tab-interaction" aria-label="Design capability preview cards">
            {supportTabs.map((tab, index) => (
              <div key={`${tab.image}-${index}`} className={`support-tab ${tab.tone}`}>
                <Image src={tab.image} alt={tab.alt} fill sizes="160px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="support-list-grid">
          {supportColumns.map((column, index) => (
            <div key={index} className="support-list-column">
              {column.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="behind-pixels">
        <div className="behind-heading">
          <h2>A little about me</h2>
          <p className="home-single-line">The perspective and small things that shape my work.</p>
        </div>

        <div className="pixel-story first">
          <div className="photo-board">
            <div className="grid-paper" />
            <div className="travel-line" />
            <figure className="polaroid p-one">
              <Image src="/about-grad.jpg" alt="Anusha celebrating her UC Davis graduation" fill sizes="180px" className="object-cover" />
              <span className="photo-clip" aria-hidden="true" />
            </figure>
            <figure className="polaroid p-two">
              <Image src="/about-nature.jpg" alt="A quiet set of swings surrounded by greenery" fill sizes="180px" className="object-cover" />
              <span className="photo-clip" aria-hidden="true" />
            </figure>
            <figure className="polaroid p-three">
              <Image src="/about-sunset.jpg" alt="Sunset over the harbor" fill sizes="180px" className="object-cover" />
              <span className="photo-clip" aria-hidden="true" />
            </figure>
          </div>
          <div className="pixel-copy">
            <p>
              I’m a product designer drawn to clear systems, playful details, and ideas that make people feel a little more capable.
            </p>
            <p>
              My work lives around AI, learning tools, mobile habits, and the tiny interaction choices that make a product feel trustworthy.
            </p>
          </div>
        </div>

        <div className="pixel-divider" />

        <div className="pixel-story second">
          <div className="pixel-copy">
            <p>
              I like making complex things feel easy without making them boring. Research, visual design, prototypes, and storytelling are usually all on the table.
            </p>
          </div>
          <div className="photo-board small-board">
            <div className="grid-paper" />
            <div className="travel-line looping" />
            <figure className="polaroid p-four">
              <Image src="/about-friends-grad-1.jpg" alt="Anusha celebrating graduation with friends" fill sizes="170px" className="object-cover" />
              <span className="photo-clip" aria-hidden="true" />
            </figure>
            <figure className="polaroid p-six">
              <Image src="/about-matcha.jpg" alt="A table full of matcha drinks" fill sizes="170px" className="object-cover" />
              <span className="photo-clip" aria-hidden="true" />
            </figure>
            <figure className="polaroid p-seven">
              <Image src="/about-food.jpg" alt="Dinner shared around the table" fill sizes="170px" className="object-cover" />
              <span className="photo-clip" aria-hidden="true" />
            </figure>
          </div>
        </div>
      </section>

      <footer className="dani-footer">
        <a href="mailto:arama@ucdavis.edu" className="footer-contact-card" aria-label="Email Anusha">
          <div className="footer-flower footer-flower-left" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => <span key={index} />)}
            <strong />
          </div>
          <div className="footer-flower footer-flower-right" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => <span key={index} />)}
            <strong />
          </div>
          <p>Think we vibe?</p>
          <h2>Get in touch</h2>
        </a>
        <div className="footer-link-row" aria-label="Footer links">
          <a href="#work">works</a>
          <a href="mailto:arama@ucdavis.edu">email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedIn</a>
        </div>
      </footer>

      <section className="flower-finale" aria-label="A closing design thought">
        <p>Good design makes complex things feel naturally clear.</p>
        <div className="flower-finale-grid" aria-hidden="true">
          {Array.from({ length: 30 }, (_, flowerIndex) => (
            <span className="flower-finale-mark" key={flowerIndex}>
              {Array.from({ length: 6 }, (_, petalIndex) => <i key={petalIndex} />)}
              <strong />
            </span>
          ))}
        </div>
      </section>

      <a className="floating-chat" href="mailto:arama@ucdavis.edu" aria-label="Email Anusha">
        <span />
      </a>
    </main>
  )
}
