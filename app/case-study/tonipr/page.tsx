import Link from 'next/link'

type VisualPlaceholderProps = {
  number: string
  title: string
  note: string
}

function VisualPlaceholder({ number, title, note }: VisualPlaceholderProps) {
  return (
    <div className="crusoe-visual-placeholder toni-visual-placeholder">
      <span>{number}</span>
      <div>
        <strong>{title}</strong>
        <small>{note}</small>
      </div>
      <i aria-hidden="true" />
    </div>
  )
}

const websiteSurfaces = [
  'A redesigned landing page with a clearer explanation of the product and its value',
  'A pricing experience structured around the Starter PR Kit and Founder Plan',
  'A blog hub with search, filters, and discovery chips for easier content exploration',
  'Customer stories, founder spotlights, and examples that made the output feel tangible',
]

const interviewPrinciples = [
  ['Direction', 'Start with the founder’s goal so Toni can shape the conversation around the right outcome.'],
  ['Warmth', 'Make the AI host feel prepared and encouraging, without becoming distracting or overly human.'],
  ['Momentum', 'Keep users oriented through questions, progress, recording states, and the next action.'],
  ['Flexibility', 'Support different user roles, stories, and content needs without making setup feel heavy.'],
]

const contentOutputs = [
  ['LinkedIn posts', 'Ready-to-refine thought leadership pulled from the founder’s own answers.'],
  ['Blog ideas + articles', 'Longer-form angles that turn interview themes into useful narratives.'],
  ['Press quotes', 'Concise, credible lines designed for media and external communications.'],
  ['Founder stories', 'A structured origin, mission, and point of view in the founder’s voice.'],
  ['PR kits', 'A practical collection of reusable assets, organized for publishing and sharing.'],
]

export default function ToniPRCaseStudy() {
  return (
    <main className="crusoe-case toni-case">
      <nav className="crusoe-case-nav" aria-label="Case study navigation">
        <Link href="/#work">← Back to work</Link>
        <span>ToniPR · UI/UX Design Internship</span>
        <a href="mailto:arama@ucdavis.edu">Let&apos;s talk</a>
      </nav>

      <header className="crusoe-case-hero">
        <div className="toni-spark spark-one" aria-hidden="true" />
        <div className="toni-spark spark-two" aria-hidden="true" />
        <div className="crusoe-hero-copy">
          <p className="crusoe-eyebrow">UI/UX Design Internship · March–May 2026</p>
          <h1>From one conversation to a full content kit.</h1>
          <p className="crusoe-lede">
            At ToniPR, a product by TunePact, I helped design the end-to-end experience for founders to complete a guided
            AI interview and turn their answers into useful PR and marketing content.
          </p>
        </div>

        <div className="crusoe-hero-meta">
          <div><span>Role</span><strong>UI/UX Design Intern</strong></div>
          <div><span>Timeline</span><strong>March–May 2026</strong></div>
          <div><span>Product</span><strong>ToniPR by TunePact</strong></div>
          <div><span>Focus</span><strong>Web, onboarding, AI interview, content</strong></div>
        </div>

        <figure className="toni-walkthrough">
          <video
            src="/tonipr/tonipr-site-walkthrough.mp4"
            poster="/tonipr/site-hero.jpg"
            aria-label="ToniPR website and product story walkthrough"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <figcaption>
            <span>Live product walkthrough</span>
            <small>Landing page, positioning, process, content outputs, and customer proof</small>
          </figcaption>
        </figure>
      </header>

      <section className="crusoe-impact-band" aria-label="ToniPR experience summary">
        <div><strong>01</strong><span>Connected founder journey</span></div>
        <div><strong>05+</strong><span>Core product surfaces designed</span></div>
        <div><strong>01</strong><span>Interview-to-content system</span></div>
      </section>

      <section className="crusoe-case-section intro-section">
        <div className="crusoe-section-label"><span>Overview</span><strong>The product in one line</strong></div>
        <div className="crusoe-intro-grid">
          <h2>Help busy founders sound like themselves, more consistently.</h2>
          <div>
            <p>
              ToniPR is an interview-led content product for founders, consultants, and small teams. Users choose a goal,
              talk with Toni for a few minutes, and receive content shaped from what they actually said.
            </p>
            <p>
              My work connected the promise on the marketing site to the reality inside the product: discover the value,
              choose a plan, get oriented, complete the interview, and understand what to do with the generated content.
            </p>
          </div>
        </div>
      </section>

      <section className="crusoe-case-section project-section toni-lilac-section">
        <div className="crusoe-section-label"><span>Part 01</span><strong>Positioning + discovery</strong></div>
        <div className="crusoe-project-heading">
          <h2>Make the value feel real before asking founders to start.</h2>
          <p>
            I redesigned the landing experience, refined navigation and information hierarchy, structured pricing, and
            built supporting content surfaces so visitors could quickly understand what ToniPR creates and who it is for.
          </p>
        </div>

        <div className="crusoe-visual-pair">
          <VisualPlaceholder number="01A" title="Landing page redesign" note="Add desktop and mobile hero, how-it-works, and example-output screens" />
          <VisualPlaceholder number="01B" title="Pricing + plans" note="Add Starter PR Kit and Founder Plan explorations" />
        </div>

        <div className="crusoe-output-grid">
          <h3>A clearer product story across the site.</h3>
          <ul>
            {websiteSurfaces.map((surface) => <li key={surface}>{surface}</li>)}
          </ul>
        </div>

        <div className="crusoe-showcase-grid">
          <VisualPlaceholder number="01C" title="Blog + discovery hub" note="Add search, filters, topic chips, and article-card states" />
          <div className="crusoe-quote-block">
            <span>Experience principle</span>
            <blockquote>Show the outcome early. Let the product explain itself through useful examples.</blockquote>
          </div>
        </div>
      </section>

      <section className="crusoe-case-section project-section toni-peach-section">
        <div className="crusoe-section-label"><span>Part 02</span><strong>Onboarding + AI interview</strong></div>
        <div className="crusoe-project-heading">
          <h2>Design an AI interview that feels guided, not scripted.</h2>
          <p>
            I designed the onboarding flow and the live interview experience with Toni as the host. The work included
            login and credits-plan screens, user roles, interview-question structure, progress states, and character motion explorations.
          </p>
        </div>

        <VisualPlaceholder number="02A" title="End-to-end onboarding flow" note="Add entry, goal selection, role setup, login, credits, and interview preparation screens" />

        <div className="crusoe-findings-grid">
          {interviewPrinciples.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="crusoe-flow-comparison">
          <div>
            <p className="crusoe-eyebrow">Toni as host</p>
            <h3>A character with a job to do.</h3>
            <p>
              Toni needed to add warmth and continuity while keeping the founder&apos;s story at the center. I explored motion
              and response states that communicated listening, thinking, prompting, and completion without creating visual noise.
            </p>
          </div>
          <VisualPlaceholder number="02B" title="AI interview + Toni motion" note="Add interview states, question patterns, recording UI, and character animation frames" />
        </div>
      </section>

      <section className="crusoe-case-section project-section toni-mint-section">
        <div className="crusoe-section-label"><span>Part 03</span><strong>Dashboard + generated content</strong></div>
        <div className="crusoe-project-heading">
          <h2>Turn a finished interview into content people can actually use.</h2>
          <p>
            I designed the main dashboard and the presentation of generated PR outputs, focusing on hierarchy, scanning,
            trust, and an easy path from reviewing an idea to editing, copying, or publishing it.
          </p>
        </div>

        <div className="toni-output-list">
          {contentOutputs.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="crusoe-visual-pair billing-visuals">
          <VisualPlaceholder number="03A" title="Main dashboard" note="Add content-kit overview, project status, credits, and next actions" />
          <VisualPlaceholder number="03B" title="Generated content detail" note="Add LinkedIn, article, quote, founder-story, or PR-kit presentation screens" />
        </div>
      </section>

      <section className="crusoe-case-section collaboration-section">
        <div className="crusoe-section-label"><span>System view</span><strong>One connected journey</strong></div>
        <div className="crusoe-collaboration-grid">
          <div>
            <h2>Discover. Interview. Shape. Share.</h2>
            <p>
              The internship tied together acquisition, account setup, conversation design, AI feedback, dashboard structure,
              and content presentation. Each surface had to feel distinct while still belonging to one calm, credible system.
            </p>
          </div>
          <VisualPlaceholder number="04" title="Full experience map" note="Add the complete journey from landing page through published content" />
        </div>
      </section>

      <section className="crusoe-case-section reflection-section">
        <p className="crusoe-eyebrow">Reflection</p>
        <h2>What this project sharpened.</h2>
        <div className="crusoe-reflection-grid">
          <article><span>01</span><p>AI experiences feel more trustworthy when users can see how their own input shaped the result.</p></article>
          <article><span>02</span><p>A character can create warmth, but clarity and pacing still have to carry the interaction.</p></article>
          <article><span>03</span><p>Great onboarding begins before sign-up, with a product story that makes the outcome easy to picture.</p></article>
        </div>
      </section>

      <footer className="crusoe-case-footer">
        <p>ToniPR · UI/UX Design Internship</p>
        <h2>One conversation, many ways to show up.</h2>
        <div>
          <Link href="/#work">More work</Link>
          <a href="mailto:arama@ucdavis.edu">Get in touch</a>
        </div>
      </footer>
    </main>
  )
}
