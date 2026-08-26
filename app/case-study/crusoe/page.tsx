import Image from 'next/image'
import Link from 'next/link'

type VisualPlaceholderProps = {
  number: string
  title: string
  note: string
  format?: 'wide' | 'square' | 'portrait'
}

function VisualPlaceholder({ number, title, note, format = 'wide' }: VisualPlaceholderProps) {
  return (
    <div className={`crusoe-visual-placeholder ${format}`}>
      <span>{number}</span>
      <div>
        <strong>{title}</strong>
        <small>{note}</small>
      </div>
      <i aria-hidden="true" />
    </div>
  )
}

function CrusoeAuditArtifact() {
  const currentScreens = [
    ['Instance templates', '/images/crusoe/current-instances-empty.png', 809, 376],
    ['Storage', '/images/crusoe/current-storage-empty.png', 808, 330],
    ['Custom images', '/images/crusoe/current-networking-empty.png', 1128, 428],
    ['Orchestration', '/images/crusoe/current-orchestration-empty.png', 1117, 421],
    ['Observability', '/images/crusoe/current-observability-empty.png', 1119, 466],
    ['Resources', '/images/crusoe/current-resource-empty.png', 1045, 431],
    ['Security', '/images/crusoe/current-security-empty.png', 1258, 431],
    ['Clusters', '/images/crusoe/current-cluster-empty.png', 1389, 348],
    ['Metrics', '/images/crusoe/current-metrics-empty.png', 1256, 348],
    ['Logs', '/images/crusoe/current-logs-empty.png', 1306, 470],
    ['Low-data charts', '/images/crusoe/current-table-empty.png', 1208, 611],
    ['Missing prerequisite', '/images/crusoe/current-modal-empty.png', 583, 369],
  ] as const

  return (
    <figure className="crusoe-artifact-card crusoe-audit-artifact">
      <div className="crusoe-artifact-heading">
        <span>01A · Research audit</span>
        <strong>Where first-time users got stuck</strong>
      </div>

      <div className="crusoe-audit-images">
        <Image
          className="crusoe-audit-overview"
          src="/images/crusoe/empty-state-first-time-flow.png"
          alt="Annotated Crusoe first-time experience audit with user needs, gaps, and empty-state screens"
          width={3168}
          height={3184}
          sizes="(max-width: 900px) 88vw, 42vw"
        />
        <Image
          className="crusoe-audit-detail"
          src="/images/crusoe/empty-state-problem-framing.png"
          alt="Problem-framing board summarizing the current empty-state experience"
          width={1040}
          height={1040}
          sizes="(max-width: 900px) 44vw, 20vw"
        />
      </div>

      <div className="crusoe-current-state-gallery" aria-label="Current Crusoe Console empty-state inventory">
        {currentScreens.map(([label, src, width, height]) => (
          <figure key={src}>
            <Image src={src} alt={`${label} empty-state audit screen`} width={width} height={height} sizes="(max-width: 700px) 78vw, 36vw" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>

      <figcaption>12 audited surfaces · first-time experience flow · problem framing</figcaption>
    </figure>
  )
}

const futureEmptyStates = [
  ['Kubernetes · First run', '/images/crusoe/final-kubernetes-empty.png', 1440, 940],
  ['Instances · Provisioning', '/images/crusoe/final-instances-provisioning.png', 1440, 900],
  ['Disks · Provisioning', '/images/crusoe/final-disks-provisioning.png', 1440, 900],
  ['Buckets · Error recovery', '/images/crusoe/final-buckets-error.png', 1440, 900],
  ['Templates · Error recovery', '/images/crusoe/final-templates-error.png', 1440, 900],
  ['Kubernetes · Error recovery', '/images/crusoe/final-kubernetes-error.png', 1440, 940],
  ['Kubernetes · Kubeconfig', '/images/crusoe/final-kubernetes-kubeconfig.png', 1440, 940],
] as const

const finalEmptyStateVideos = [
  ['Console overview', '/crusoe/empty-state-instances.mp4', 'The first-run system shown in context with the complete Console navigation.'],
  ['Kubernetes', '/crusoe/empty-state-kubernetes.mp4', 'Clear guidance and a primary action for creating a first cluster.'],
  ['Managed Logs', '/crusoe/empty-state-managed-logs.mp4', 'A focused starting point for configuring the first managed log source.'],
  ['Reservations', '/crusoe/empty-state-reservations.mp4', 'An approachable entry into creating and managing capacity reservations.'],
] as const

function CrusoeFinalSystemArtifact() {
  return (
    <figure className="crusoe-artifact-card crusoe-final-artifact">
      <div className="crusoe-artifact-heading">
        <span>01B · Release progression</span>
        <strong>A clear V1, with a richer future direction</strong>
      </div>
      <section className="crusoe-release-block crusoe-v1-release">
        <div className="crusoe-release-heading">
          <span>V1 · Shippable foundation</span>
          <p>A focused empty state with concise guidance, one primary action, and a path to documentation.</p>
        </div>
        <figure>
          <Image
            src="/images/crusoe/final-instances-empty.png"
            alt="Final V1 Crusoe Console empty state for instances"
            width={838}
            height={768}
            sizes="(max-width: 900px) 88vw, 52vw"
          />
          <figcaption>V1 · No Instances Yet</figcaption>
        </figure>
      </section>

      <section className="crusoe-release-block crusoe-v2-release">
        <div className="crusoe-release-heading">
          <span>V2 · Future release concept</span>
          <p>Contextual cards add templates, prerequisite messaging, status feedback, and recovery paths when the product is ready for a richer onboarding layer.</p>
        </div>
        <div className="crusoe-final-screens">
          {futureEmptyStates.map(([label, src, width, height]) => (
            <figure key={src}>
              <Image
                src={src}
                alt={`Future Crusoe Console design for ${label}`}
                width={width}
                height={height}
                sizes="(max-width: 700px) 82vw, 35vw"
              />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <figcaption>V1 final design and V2 future-release explorations from the Crusoe handoff</figcaption>
    </figure>
  )
}

const emptyStateOutputs = [
  'A cross-Console audit spanning pages, tables, charts, cards, dropdowns, and modals',
  'A shippable V1 pattern with clear titles, descriptions, actions, docs, and next steps',
  'A scalable illustration direction for Compute, Orchestration, Storage, Metrics, and Access',
  'Future-state onboarding concepts for prerequisites, CLI actions, and suggested configurations',
]

const heuristicFindings = [
  ['Visibility', 'Security and API access were difficult to discover in the primary navigation.'],
  ['Orientation', 'Context shifts between organization, project, and account were easy to miss.'],
  ['Guidance', 'Credential setup lacked clear prerequisites, validation, and next steps.'],
  ['Consistency', 'Console and documentation language did not always describe the same path.'],
]

const billingLevels = [
  ['01', 'Overview', 'Start with a calm summary of usage, spend, and the period being viewed.'],
  ['02', 'Breakdown', 'Make cost attribution legible across organization, project, account, and Foundry.'],
  ['03', 'Detail', 'Let users trace a number back to the infrastructure activity that created it.'],
  ['04', 'Action', 'Surface the next useful move: investigate, export, document, or resolve.'],
]

const projectTimeline = [
  ['01', 'Understand', 'Audit the Console, map first-time journeys, and study comparable cloud products.'],
  ['02', 'Frame', 'Connect recurring friction to user needs, technical constraints, and product priorities.'],
  ['03', 'Design', 'Explore interaction patterns, test near-term and future directions, and refine the system in critique.'],
  ['04', 'Align + hand off', 'Partner with engineering, product, brand, and writing to prepare implementation-ready work.'],
]

const internshipOutcomes = [
  ['System', 'Created reusable patterns that could bring consistent guidance to empty surfaces across the Console.'],
  ['Direction', 'Separated a focused, shippable V1 from richer future onboarding concepts so the roadmap stayed clear.'],
  ['Priorities', 'Turned journey-level usability findings into recommendations organized by severity and effort.'],
  ['Handoff', 'Delivered structured Figma files, technical context, and documentation for cross-functional implementation.'],
]

export default function CrusoeCaseStudy() {
  return (
    <main className="crusoe-case crusoe-cloud-case">
      <nav className="crusoe-case-nav" aria-label="Case study navigation">
        <Link href="/#work">← Back to work</Link>
        <span>Crusoe · Product Design Internship</span>
        <a href="mailto:arama@ucdavis.edu">Let&apos;s talk</a>
      </nav>

      <header className="crusoe-case-hero">
        <div className="crusoe-orbit orbit-one" aria-hidden="true" />
        <div className="crusoe-orbit orbit-two" aria-hidden="true" />
        <div className="crusoe-hero-copy">
          <p className="crusoe-eyebrow">Most recent internship · Cloud infrastructure</p>
          <h1>Making complex cloud workflows feel clear.</h1>
          <p className="crusoe-lede">
            At Crusoe, I led three connected product design initiatives across the Console: a reusable empty-state system,
            a heuristic evaluation of critical journeys, and a clearer bridge between infrastructure usage and cost.
          </p>
        </div>

        <div className="crusoe-hero-meta">
          <div><span>Role</span><strong>Product Design Intern</strong></div>
          <div><span>Timeline</span><strong>2026 internship</strong></div>
          <div><span>Team</span><strong>Design, PM, Eng, Brand, Writing</strong></div>
          <div><span>Tools</span><strong>Figma, FigJam, research + audits</strong></div>
        </div>

        <VisualPlaceholder
          number="00"
          title="Crusoe Console overview"
          note="Add an approved hero image or a collage of the three projects"
        />
        <p className="crusoe-disclosure">Selected work is presented at an appropriate level of detail. Replace visual placeholders with approved artifacts.</p>
      </header>

      <section className="crusoe-impact-band" aria-label="Internship impact summary">
        <div><strong>01</strong><span>Reusable empty-state system</span></div>
        <div><strong>02</strong><span>Heuristic evaluation of IaaS cloud console</span></div>
        <div><strong>03</strong><span>Intelligence Foundry usage-to-cost model</span></div>
      </section>

      <section className="crusoe-case-section intro-section">
        <div className="crusoe-section-label"><span>01 · Overview</span><strong>One internship, three layers of clarity.</strong></div>
        <div className="crusoe-intro-grid">
          <h2>From first-run moments to high-stakes cloud decisions.</h2>
          <div>
            <p>
              The work moved across different scales, but the design question stayed consistent: how can the Console help
              people understand where they are, what is happening, and what to do next?
            </p>
            <p>
              I worked from systems-level audits down to individual interaction details, combining competitive research,
              journey mapping, cognitive principles, visual design, and close cross-functional collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="crusoe-case-section crusoe-problem-section">
        <div className="crusoe-section-label"><span>02 · Challenge</span><strong>Designing for a technical product with a steep learning curve</strong></div>
        <div className="crusoe-problem-grid">
          <div>
            <p className="crusoe-eyebrow">Problem statement</p>
            <h2>How might the Console explain complex infrastructure clearly enough for users to act with confidence?</h2>
          </div>
          <div className="crusoe-problem-context">
            <p>
              Crusoe Console helps users manage compute infrastructure, storage, clusters, credentials, resource usage,
              and billing. Across these workflows, missing context could make an intentional state feel broken or make a
              high-consequence action difficult to understand.
            </p>
            <p>
              My work focused on reducing that uncertainty at three levels: first-run guidance, end-to-end usability,
              and the connection between infrastructure activity and cost.
            </p>
          </div>
        </div>
      </section>

      <section className="crusoe-case-section crusoe-process-section">
        <div className="crusoe-section-label"><span>03 · Process</span><strong>Project timeline</strong></div>
        <div className="crusoe-process-intro">
          <h2>A repeatable path from ambiguity to an implementation-ready direction.</h2>
          <p>
            Each initiative moved at a different pace, but the underlying process stayed consistent: understand the
            system, frame the right problem, design at multiple horizons, and align the final direction with the people building it.
          </p>
        </div>
        <div className="crusoe-timeline" aria-label="Crusoe internship design process">
          {projectTimeline.map(([number, title, body]) => (
            <article key={title}>
              <span>{number}</span>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="empty-state-system" className="crusoe-case-section project-section green-section">
        <div className="crusoe-section-label"><span>04 · Project 01</span><strong>Console empty states</strong></div>
        <div className="crusoe-project-heading">
          <h2>Turn an empty screen into a useful starting point.</h2>
          <p>
            Empty states appeared across products and UI patterns, but they did not yet behave like one system. I audited
            the Console, studied cloud competitors, and designed a first version that could ship while leaving room for richer onboarding.
          </p>
        </div>

        <div className="crusoe-visual-pair crusoe-empty-state-visuals">
          <CrusoeAuditArtifact />
          <CrusoeFinalSystemArtifact />
        </div>

        <section className="crusoe-motion-gallery" aria-labelledby="crusoe-motion-title">
          <div className="crusoe-motion-heading">
            <span>Final V1 system · In motion</span>
            <div>
              <h3 id="crusoe-motion-title">One pattern, across the Console.</h3>
              <p>Four shipped-ready applications of the system show how its hierarchy stays consistent while the product context changes.</p>
            </div>
          </div>
          <div className="crusoe-motion-grid">
            {finalEmptyStateVideos.map(([title, src, description]) => (
              <figure key={src}>
                <video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={`${title} empty state walkthrough`} />
                <figcaption>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="crusoe-output-grid">
          <h3>What the system needed to do</h3>
          <ul>
            {emptyStateOutputs.map((output) => <li key={output}>{output}</li>)}
          </ul>
        </div>

        <div className="crusoe-showcase-grid">
          <figure className="crusoe-system-detail">
            <Image
              src="/images/crusoe/final-instances-empty.png"
              alt="Final No Instances Yet empty state with Crusoe illustration, guidance, and actions"
              width={838}
              height={768}
              sizes="(max-width: 900px) 90vw, 54vw"
            />
            <figcaption>Illustration, guidance, primary action, and documentation path working as one system.</figcaption>
          </figure>
          <div className="crusoe-quote-block">
            <span>Design principle</span>
            <blockquote>Give users enough context to act, without making an empty moment feel heavy.</blockquote>
          </div>
        </div>
      </section>

      <section className="crusoe-case-section project-section blue-section">
        <div className="crusoe-section-label"><span>05 · Project 02</span><strong>Heuristic evaluation of IaaS cloud console</strong></div>
        <div className="crusoe-project-heading">
          <h2>Find the friction hiding between screens.</h2>
          <p>
            I evaluated three critical Console journeys using Nielsen&apos;s heuristics and cognitive science principles,
            mapped end-to-end workflows, scored issues by severity, and translated findings into prioritized design recommendations.
          </p>
        </div>

        <VisualPlaceholder number="02A" title="Journey map + scorecard" note="Add the evaluation board, severity scale, and prioritized findings" />

        <div className="crusoe-findings-grid">
          {heuristicFindings.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="crusoe-flow-comparison">
          <div>
            <p className="crusoe-eyebrow">Deep dive · API access</p>
            <h3>A critical setup journey with too many quiet failure points.</h3>
            <p>
              The analysis surfaced hidden navigation, an unexpected default landing page, documentation mismatches,
              unclear credential creation, weak error prevention, and missing next steps.
            </p>
          </div>
          <VisualPlaceholder number="02B" title="Recommended API setup flow" note="Add before/after flows or key annotated screens" />
        </div>
      </section>

      <section className="crusoe-case-section project-section coral-section">
        <div className="crusoe-section-label"><span>06 · Project 03</span><strong>Intelligence Foundry usage-to-cost model</strong></div>
        <div className="crusoe-project-heading">
          <h2>Connect infrastructure activity to the number on the invoice.</h2>
          <p>
            For Intelligence Foundry, I redesigned the relationship between operational usage and billing so users could
            understand scope, trace costs, and investigate unexpected spend without losing context.
          </p>
        </div>

        <div className="crusoe-billing-levels">
          {billingLevels.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="crusoe-visual-pair billing-visuals">
          <VisualPlaceholder number="03A" title="Usage overview" note="Add the approved summary and scope controls" />
          <VisualPlaceholder number="03B" title="Cost investigation" note="Add breakdown, detail, or invoice connection screens" />
        </div>
      </section>

      <section className="crusoe-case-section collaboration-section">
        <div className="crusoe-section-label"><span>07 · Collaboration</span><strong>Designing across the system</strong></div>
        <div className="crusoe-collaboration-grid">
          <div>
            <h2>Shared early. Refined together. Built for handoff.</h2>
            <p>
              Across the internship, I partnered with design, product, engineering, brand, and technical writing. The work
              moved through audits, working sessions, critiques, implementation conversations, and iterative visual refinement.
            </p>
          </div>
          <VisualPlaceholder number="04" title="Process + collaboration" note="Add workshop notes, Figma iterations, or handoff details" />
        </div>
      </section>

      <section className="crusoe-case-section crusoe-outcomes-section">
        <div className="crusoe-section-label"><span>08 · Outcomes</span><strong>What the internship produced</strong></div>
        <div className="crusoe-outcomes-heading">
          <h2>Clearer product moments and clearer paths for the team.</h2>
          <p>
            The work established concrete improvements for the current Console while giving the team reusable systems
            and future directions that could extend beyond a single screen or release.
          </p>
        </div>
        <div className="crusoe-outcomes-grid">
          {internshipOutcomes.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="crusoe-case-section reflection-section">
        <p className="crusoe-eyebrow">09 · Reflection</p>
        <h2>What I&apos;m taking with me.</h2>
        <div className="crusoe-reflection-grid">
          <article><span>01</span><p>Designing infrastructure products means making scope, state, and consequence visible at every step.</p></article>
          <article><span>02</span><p>A good system leaves room for an implementable first version and a more ambitious future direction.</p></article>
          <article><span>03</span><p>Cross-functional clarity is part of the product. The artifact has to help the team make decisions, too.</p></article>
        </div>
      </section>

      <footer className="crusoe-case-footer">
        <p>Crusoe · Product Design Internship</p>
        <h2>Thanks for taking a look.</h2>
        <div>
          <Link href="/#work">More work</Link>
          <a href="mailto:arama@ucdavis.edu">Get in touch</a>
        </div>
      </footer>
    </main>
  )
}
