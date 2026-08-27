'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, type KeyboardEvent } from 'react'

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
    ['Orchestration', '/images/crusoe/current-orchestration-empty.png', 1117, 421],
    ['Observability', '/images/crusoe/current-observability-empty.png', 1119, 466],
    ['Security', '/images/crusoe/current-security-empty.png', 1258, 431],
    ['Clusters', '/images/crusoe/current-cluster-empty.png', 1389, 348],
    ['Missing prerequisite', '/images/crusoe/current-modal-empty.png', 583, 369],
  ] as const

  const figJamArtifacts = [
    {
      number: '01',
      title: 'Frame the first-time gap',
      description: 'Synthesized the missing guidance, assumed technical familiarity, and unclear next steps affecting brand-new users.',
      image: '/images/crusoe/figjam-research-synthesis.png',
      width: 1220,
      height: 820,
    },
    {
      number: '02',
      title: 'Walk the first-run journey',
      description: 'Followed a fresh account through Compute, Storage, Networking, Orchestration, and Observability to surface repeated dead ends.',
      image: '/images/crusoe/figjam-first-time-journey.png',
      width: 1450,
      height: 1300,
    },
    {
      number: '03',
      title: 'Connect patterns across products',
      description: 'Mapped recurring behaviors across resource types to show that the issue was systemic—not a collection of isolated empty screens.',
      image: '/images/crusoe/figjam-pattern-map.png',
      width: 1800,
      height: 1450,
    },
  ] as const

  return (
    <figure className="crusoe-artifact-card crusoe-audit-artifact">
      <div className="crusoe-artifact-heading">
        <span>02A · Research audit</span>
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

      <section className="crusoe-figjam-story" aria-labelledby="crusoe-figjam-title">
        <div className="crusoe-figjam-heading">
          <span>FigJam synthesis</span>
          <div>
            <h3 id="crusoe-figjam-title">Turning scattered evidence into a system-level problem.</h3>
            <p>Before designing UI, I used FigJam to connect first-time needs, repeated journey breakdowns, and patterns appearing across the Console.</p>
          </div>
        </div>

        <div className="crusoe-figjam-grid">
          {figJamArtifacts.map((artifact) => (
            <figure key={artifact.image}>
              <Image
                src={artifact.image}
                alt={`${artifact.title} FigJam artifact`}
                width={artifact.width}
                height={artifact.height}
                sizes="(max-width: 900px) 88vw, 58vw"
              />
              <figcaption>
                <span>{artifact.number}</span>
                <div>
                  <strong>{artifact.title}</strong>
                  <p>{artifact.description}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="crusoe-evidence-heading">
        <span>Representative Console evidence</span>
        <p>Six examples from the broader 12-surface audit.</p>
      </div>

      <div className="crusoe-current-state-gallery" aria-label="Current Crusoe Console empty-state inventory">
        {currentScreens.map(([label, src, width, height]) => (
          <figure key={src}>
            <Image src={src} alt={`${label} empty-state audit screen`} width={width} height={height} sizes="(max-width: 700px) 78vw, 36vw" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>

      <figcaption>12 audited surfaces · FigJam synthesis · six representative Console examples</figcaption>
    </figure>
  )
}

const futureEdgeCases = [
  {
    state: 'In progress',
    title: 'Provisioning without duplicate actions',
    description: 'An informational banner confirms that the request is working, sets a time expectation, and disables actions that would create a duplicate resource.',
    image: '/images/crusoe/final-instances-provisioning.png',
    width: 1440,
    height: 900,
  },
  {
    state: 'Failure',
    title: 'A specific error with a recovery path',
    description: 'The banner names what failed, explains the likely cause, and keeps retry or an alternate configuration close to the problem.',
    image: '/images/crusoe/final-kubernetes-error.png',
    width: 1440,
    height: 940,
  },
  {
    state: 'Retry',
    title: 'Recovery without losing context',
    description: 'A failed creation attempt stays attached to the empty state, so users can try again while the recommended setup cards remain available.',
    image: '/images/crusoe/final-buckets-error.png',
    width: 1440,
    height: 900,
  },
  {
    state: 'Ready',
    title: 'The next step after success',
    description: 'Once the resource is ready, the banner changes from status reporting to the next required action—in this case, downloading the kubeconfig.',
    image: '/images/crusoe/final-kubernetes-kubeconfig.png',
    width: 1440,
    height: 940,
  },
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
        <span>05A · Release progression</span>
        <strong>One foundation, two release horizons</strong>
      </div>
      <div className="crusoe-release-visual-comparison">
        <section className="crusoe-release-block crusoe-v1-release">
          <div className="crusoe-release-heading">
            <span>V1 · Shippable foundation</span>
            <p>A focused empty state with concise guidance, one primary action, and a documentation path.</p>
          </div>
          <figure>
            <Image
              src="/images/crusoe/final-instances-empty.png"
              alt="Final V1 Crusoe Console empty state for instances"
              width={838}
              height={768}
              sizes="(max-width: 900px) 88vw, 42vw"
            />
            <figcaption>V1 · Consistent empty-state foundation</figcaption>
          </figure>
        </section>

        <section className="crusoe-release-block crusoe-v2-release">
          <div className="crusoe-release-heading">
            <span>V2 · Future release system</span>
            <p>Contextual cards recommend useful starting configurations; state-aware banners handle prerequisites, progress, failure, recovery, and the next step.</p>
          </div>
          <figure>
            <Image
              src="/images/crusoe/final-kubernetes-empty.png"
              alt="Future Crusoe Kubernetes empty state with recommendation cards and a provisioning banner"
              width={1440}
              height={940}
              sizes="(max-width: 900px) 88vw, 42vw"
            />
            <figcaption>V2 · Guidance cards + state-aware banner</figcaption>
          </figure>
        </section>
      </div>
      <figcaption>V1 final system and V2 future-release direction shown once, side by side</figcaption>
    </figure>
  )
}

function CrusoeEdgeCaseArtifact() {
  return (
    <section className="crusoe-edge-cases" aria-labelledby="crusoe-edge-cases-title">
      <div className="crusoe-edge-heading">
        <span>06 · Edge cases</span>
        <div>
          <h3 id="crusoe-edge-cases-title">The cards guide the first choice. The banners carry every state after it.</h3>
          <p>The future release was designed as a connected system: recommendation cards reduce first-run decision load, while persistent banners keep users oriented as the product moves through prerequisites, provisioning, failure, recovery, and success.</p>
        </div>
      </div>

      <div className="crusoe-edge-model" aria-label="Future release edge-case model">
        <article><span>01</span><strong>Missing prerequisite</strong><p>Explain what must exist first and provide the action or documentation needed to resolve it.</p></article>
        <article><span>02</span><strong>Provisioning</strong><p>Confirm the request, set a time expectation, and prevent accidental duplicate actions.</p></article>
        <article><span>03</span><strong>Failure + recovery</strong><p>Name the failure, preserve context, and offer retry, an alternate path, or support.</p></article>
        <article><span>04</span><strong>Ready + next step</strong><p>Replace passive success messaging with the next action required to use the resource.</p></article>
      </div>

      <div className="crusoe-edge-gallery">
        {futureEdgeCases.map((edgeCase) => (
          <figure key={edgeCase.image}>
            <Image
              src={edgeCase.image}
              alt={`${edgeCase.title} shown through a future-release Crusoe banner`}
              width={edgeCase.width}
              height={edgeCase.height}
              sizes="(max-width: 900px) 88vw, 42vw"
            />
            <figcaption>
              <span>{edgeCase.state}</span>
              <div>
                <strong>{edgeCase.title}</strong>
                <p>{edgeCase.description}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

const emptyStateOutputs = [
  'A cross-Console audit spanning pages, tables, charts, cards, dropdowns, and modals',
  'A shippable V1 pattern with clear titles, descriptions, actions, docs, and next steps',
  'A scalable illustration direction for Compute, Orchestration, Storage, Metrics, and Access',
  'Future-state onboarding concepts for prerequisites, CLI actions, and suggested configurations',
]

const emptyStateScope = [
  ['12', 'surfaces audited'],
  ['6', 'interface patterns'],
  ['2', 'release horizons'],
  ['5', 'partner disciplines'],
] as const

const emptyStateWork = [
  {
    number: '01',
    title: 'Inventory the system',
    body: 'Reviewed pages, tables, charts, cards, dropdowns, and modals across the Console—not just the most visible product screens.',
    output: 'Cross-Console audit',
  },
  {
    number: '02',
    title: 'Trace the first run',
    body: 'Walked a brand-new account through Compute, Storage, Networking, Orchestration, and Observability to find repeated dead ends.',
    output: 'First-time journey map',
  },
  {
    number: '03',
    title: 'Separate the states',
    body: 'Distinguished truly empty moments from missing prerequisites, provisioning, errors, and recovery so one message was not forced onto every condition.',
    output: 'State model + edge cases',
  },
  {
    number: '04',
    title: 'Build the pattern',
    body: 'Defined a repeatable hierarchy for illustration, title, supporting guidance, primary action, and documentation across product contexts.',
    output: 'Reusable component anatomy',
  },
  {
    number: '05',
    title: 'Design two horizons',
    body: 'Kept the near-term release intentionally focused, then explored a richer onboarding layer without making V1 dependent on future platform work.',
    output: 'V1 system + V2 direction',
  },
  {
    number: '06',
    title: 'Prepare the handoff',
    body: 'Documented behavior, content intent, variants, and product-specific examples so teams could apply the system beyond a single mockup.',
    output: 'Implementation-ready guidance',
  },
] as const

const emptyStateRules = [
  ['Name the moment', 'Say what is empty in language that matches the product—not a generic “nothing here.”'],
  ['Explain the consequence', 'Give only the context a user needs to understand why the state exists and what happens next.'],
  ['Prioritize one move', 'Lead with a single useful action; keep documentation available without competing with it.'],
  ['Design the transition', 'Account for prerequisites, provisioning, failure, and recovery instead of stopping at the pristine first screen.'],
] as const

const versionComparison = [
  ['Goal', 'Make empty moments clear and actionable now.', 'Turn first-run moments into contextual onboarding.'],
  ['Experience', 'A concise message, one primary action, and a documentation path.', 'Guided cards, recommended configurations, templates, and progressive next steps.'],
  ['States covered', 'The core “no resources yet” state across priority products.', 'Prerequisites, provisioning, success feedback, errors, and recovery.'],
  ['Technical lift', 'Fits the existing Console architecture and available product data.', 'Depends on richer state awareness, product logic, and orchestration.'],
  ['Why it matters', 'A consistent foundation the team could implement without waiting.', 'A clear roadmap that preserves the ambition without blocking the release.'],
] as const

const aiWorkflow = [
  {
    number: '01',
    title: 'Synthesize',
    ai: 'Used AI to cluster repeated audit observations and surface language patterns across a large set of screens.',
    human: 'I checked every theme against the source artifacts and decided which patterns were meaningful.',
  },
  {
    number: '02',
    title: 'Explore',
    ai: 'Generated alternate content structures and edge-case prompts for empty, prerequisite, provisioning, and failure states.',
    human: 'I selected, rewrote, and designed the directions that matched the product and user context.',
  },
  {
    number: '03',
    title: 'Pressure-test',
    ai: 'Used AI as a critique partner to look for inconsistent terminology, missing scenarios, and unclear next steps.',
    human: 'The team validated technical accuracy, feasibility, tone, and the final product decisions.',
  },
] as const

const emptyStatePartners = [
  ['Design critique', 'Pressure-tested hierarchy, density, and how the pattern should flex across products.'],
  ['Product', 'Prioritized the surfaces that mattered most and kept the first release focused.'],
  ['Engineering', 'Validated available states, prerequisites, actions, and what the Console could support in V1.'],
  ['Brand', 'Aligned the illustration direction with Crusoe’s visual language without letting art overpower guidance.'],
  ['Technical writing', 'Refined titles, descriptions, terminology, and the relationship between in-product help and documentation.'],
] as const

const cleanAuditFindings = [
  ['Inconsistent orientation', 'Some empty pages explained the resource; others relied on prior infrastructure knowledge.'],
  ['Dead-end first runs', 'A visible create action did not always explain prerequisites, sequence, or what would happen next.'],
  ['One state carrying too much', 'Empty, blocked, provisioning, error, and recovery moments were not treated as distinct product states.'],
] as const

const competitiveAnalysis = [
  ['Orientation', 'How peer cloud products introduce an unfamiliar resource.', 'Use a product-specific title and one concise explanation instead of a generic “no data” message.'],
  ['Starting point', 'Whether users receive only a create button or a meaningful default path.', 'Keep one primary action in V1; introduce recommended configurations and templates in V2.'],
  ['Technical support', 'How documentation, CLI paths, and prerequisites appear in context.', 'Keep documentation secondary but visible, and surface prerequisites before users hit a dead end.'],
  ['Lifecycle feedback', 'How the experience responds after a user starts an action.', 'Carry the empty state through provisioning, failure, retry, and ready states with persistent banners.'],
] as const

const futureBannerCases = [
  ['Provisioning', 'Confirm the request, set a time expectation, and prevent duplicate actions.', '/images/crusoe/edge-banner-provisioning.png'],
  ['Failure', 'Name what failed, explain the cause, and offer a concrete recovery path.', '/images/crusoe/edge-banner-failure.png'],
  ['Retry', 'Preserve context after a failed attempt so users can recover without starting over.', '/images/crusoe/edge-banner-retry.png'],
  ['Ready', 'Replace passive success messaging with the next action required to use the resource.', '/images/crusoe/edge-banner-ready.png'],
] as const

const collaborationPhases = [
  ['Align the release', 'Design critique and product partnership separated a focused V1 from the more ambitious onboarding layer.'],
  ['Validate the behavior', 'Engineering reviewed available product states, prerequisites, actions, and implementation constraints.'],
  ['Make it feel native', 'Brand and technical writing refined illustration, terminology, guidance, and documentation paths.'],
] as const

const heuristicScope = [
  ['3', 'critical journeys'],
  ['10', 'Nielsen heuristics'],
  ['3', 'cognitive-science lenses'],
  ['1', 'prioritized backlog'],
] as const

const heuristicMethod = [
  ['01', 'Walk the journey', 'Followed each task from entry point to completion, including navigation changes, prerequisites, errors, and handoffs to documentation.'],
  ['02', 'Evaluate behavior', 'Mapped observed friction to Nielsen’s principles and the cognitive mechanism behind it—not personal preference.'],
  ['03', 'Rate the consequence', 'Separated cosmetic issues from moments that blocked setup, obscured context, or increased the chance of an infrastructure mistake.'],
] as const

const heuristicJourneys = [
  {
    number: '01',
    title: 'Find API access',
    focus: 'Discoverability',
    goal: 'Locate the place to create and manage API credentials.',
    friction: 'Security and API access lived behind an unexpected account path. Users had to know where to look before the interface could help them.',
    heuristics: [
      ['H2', 'Match between system and the real world'],
      ['H6', 'Recognition rather than recall'],
      ['H7', 'Flexibility and efficiency of use'],
    ],
    response: 'Surface “API Keys” in account navigation and add a direct profile-menu shortcut instead of making users repeat a three-menu path.',
    result: 'The destination uses the language users search for and is reachable in one step.',
  },
  {
    number: '02',
    title: 'Create an API key',
    focus: 'Setup + validation',
    goal: 'Create the right credential in the right account context without an avoidable failure.',
    friction: 'The flow mixed “secret,” “access,” and “API key” language, made scope changes easy to miss, and waited until submission to reveal preventable errors.',
    heuristics: [
      ['H1', 'Visibility of system status'],
      ['H4', 'Consistency and standards'],
      ['H5', 'Error prevention'],
      ['H9', 'Recognize, diagnose, and recover from errors'],
    ],
    response: 'Keep account context visible, use “API key” consistently, disable Create until required fields are complete, and show progress plus field-specific recovery guidance.',
    result: 'Users can confirm scope before acting, avoid incomplete submissions, and understand what is happening after Create.',
  },
  {
    number: '03',
    title: 'Connect the CLI',
    focus: 'Handoff + next step',
    goal: 'Use the new credential to continue setup outside the creation flow.',
    friction: 'Credential creation ended without a clear continuation. Users had to leave the Console, find separate documentation, and translate terminology between the two surfaces.',
    heuristics: [
      ['H4', 'Consistency and standards'],
      ['H6', 'Recognition rather than recall'],
      ['H10', 'Help and documentation'],
    ],
    response: 'Add an inline “Next: Set up the CLI” action, preserve account context, and align Console and documentation terminology around one task-specific path.',
    result: 'Success leads directly to the next useful action instead of becoming another search task.',
  },
] as const

const heuristicScience = [
  ['Working memory', 'Keep options and context visible so users do not have to remember information across screens.'],
  ['Mental models', 'Use familiar infrastructure language and place actions where users already expect to find them.'],
  ['Error recovery', 'Assume mistakes will happen; explain what failed, preserve context, and provide a clear way forward.'],
] as const

const heuristicDeliverables = [
  ['Journey evidence', 'End-to-end task maps connected each issue to the moment where users lost context or confidence.'],
  ['Severity rationale', 'Findings were prioritized by task impact, frequency, recoverability, and implementation effort.'],
  ['Design direction', 'Recommendations translated each heuristic violation into a concrete change in navigation, language, feedback, or guidance.'],
  ['Shared backlog', 'The final artifact gave design, product, and engineering one structured source for deciding what to address next.'],
] as const

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

const collaborationRhythm = [
  ['01', 'Audit', 'Design + product', 'Shared recurring patterns and aligned on which journeys needed the most attention.'],
  ['02', 'Working sessions', 'Product + engineering', 'Turned open questions into technical constraints, priorities, and testable directions.'],
  ['03', 'Critique', 'Design + brand + writing', 'Refined hierarchy, terminology, visual language, and the amount of guidance each moment needed.'],
  ['04', 'Handoff', 'Engineering', 'Documented states, behavior, content, and future considerations so decisions stayed clear during implementation.'],
] as const

const internshipOutcomes = [
  ['System', 'Created reusable patterns that could bring consistent guidance to empty surfaces across the Console.'],
  ['Direction', 'Separated a focused, shippable V1 from richer future onboarding concepts so the roadmap stayed clear.'],
  ['Priorities', 'Turned journey-level usability findings into recommendations organized by severity and effort.'],
  ['Handoff', 'Delivered structured Figma files, technical context, and documentation for cross-functional implementation.'],
]

const crusoeProjects = [
  {
    id: 'empty-state-system',
    number: '01',
    tabLabel: 'Empty-state system',
    title: 'Console empty states',
    description: 'A reusable first-run system spanning Compute, Orchestration, Storage, Metrics, and Access.',
  },
  {
    id: 'heuristic-evaluation',
    number: '02',
    tabLabel: 'Heuristic evaluation',
    title: 'IaaS Console evaluation',
    description: 'An end-to-end audit of critical journeys, scored and translated into prioritized recommendations.',
  },
  {
    id: 'usage-to-cost',
    number: '03',
    tabLabel: 'Usage → cost',
    title: 'Intelligence Foundry billing',
    description: 'A clearer model connecting operational infrastructure usage to billing and cost investigation.',
  },
] as const

type CrusoeProjectId = (typeof crusoeProjects)[number]['id']

export default function CrusoeCaseStudy() {
  const [activeProject, setActiveProject] = useState<CrusoeProjectId>('empty-state-system')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as CrusoeProjectId
    if (crusoeProjects.some((project) => project.id === hash)) setActiveProject(hash)
  }, [])

  const selectProject = (projectId: CrusoeProjectId) => {
    setActiveProject(projectId)
    window.history.replaceState(null, '', `#${projectId}`)
  }

  const handleProjectKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    const currentIndex = crusoeProjects.findIndex((project) => project.id === activeProject)
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? crusoeProjects.length - 1
        : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + crusoeProjects.length) % crusoeProjects.length
    const nextProject = crusoeProjects[nextIndex]
    selectProject(nextProject.id)
    document.getElementById(`crusoe-tab-${nextProject.id}`)?.focus()
  }

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
          <div><span>Tools</span><strong>Figma, FigJam, Claude Code</strong></div>
        </div>

        <figure className="crusoe-hero-visual">
          <div className="crusoe-hero-visual-media">
            <Image
              src="/images/crusoe/crusoe-data-center-hero.jpg"
              alt="Aerial view of a Crusoe AI data center campus"
              width={1280}
              height={622}
              sizes="(max-width: 900px) 94vw, 1400px"
              priority
            />
            <div className="crusoe-hero-visual-copy">
              <span>00 · Context</span>
              <strong>Infrastructure at the scale behind the Console.</strong>
            </div>
          </div>
          <figcaption>
            <span>Crusoe AI data center</span>
            <a href="https://www.crusoe.ai/data-centers" target="_blank" rel="noreferrer">Official Crusoe imagery ↗</a>
          </figcaption>
        </figure>
        <p className="crusoe-disclosure">Selected internship work is presented at an appropriate level of detail.</p>
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

      <section className="crusoe-project-workspace" aria-labelledby="crusoe-projects-title">
        <div className="crusoe-project-switcher crusoe-case-section">
          <div className="crusoe-project-switcher-copy">
            <p className="crusoe-eyebrow">Three projects · One internship</p>
            <h2 id="crusoe-projects-title">Explore one case study at a time.</h2>
            <p>Each project has its own problem, process, artifacts, and outcome—without making you scroll through the other two first.</p>
          </div>

          <div
            className="crusoe-project-tabs"
            role="tablist"
            aria-label="Crusoe internship projects"
            onKeyDown={handleProjectKeyDown}
          >
            {crusoeProjects.map((project) => {
              const isActive = activeProject === project.id
              return (
                <button
                  key={project.id}
                  id={`crusoe-tab-${project.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`crusoe-panel-${project.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? 'is-active' : ''}
                  onClick={() => selectProject(project.id)}
                >
                  <span className="crusoe-project-tab-number">{project.number}</span>
                  <span className="crusoe-project-tab-copy">
                    <strong>{project.tabLabel}</strong>
                    <small>{project.description}</small>
                  </span>
                  <span className="crusoe-project-tab-mark" aria-hidden="true">↗</span>
                </button>
              )
            })}
          </div>
        </div>

        {activeProject === 'empty-state-system' && (
      <section
        id="crusoe-panel-empty-state-system"
        role="tabpanel"
        aria-labelledby="crusoe-tab-empty-state-system"
        className="crusoe-case-section project-section green-section crusoe-project-panel"
      >
        <div className="crusoe-section-label"><span>01 · Overview</span><strong>Console empty states</strong></div>
        <div className="crusoe-project-heading">
          <h2>Turn an empty screen into a useful starting point.</h2>
          <p>
            Empty states appeared across products and UI patterns, but they did not yet behave like one system. I audited
            the Console, studied cloud competitors, and designed a first version that could ship while leaving room for richer onboarding.
          </p>
        </div>

        <div className="crusoe-scope-strip" aria-label="Empty-state project scope">
          {emptyStateScope.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-audit-title">
          <div className="crusoe-clean-heading">
            <span>02 · Audit</span>
            <div>
              <h3 id="crusoe-clean-audit-title">Start with the whole Console, not one empty page.</h3>
              <p>I audited twelve surfaces across pages, tables, charts, cards, dropdowns, and modals, then followed a brand-new account across five product areas to see where the same confusion repeated.</p>
            </div>
          </div>
          <div className="crusoe-clean-audit-layout">
            <figure>
              <Image src="/images/crusoe/figjam-research-synthesis.png" alt="FigJam synthesis of first-time Crusoe Console gaps and user needs" width={1220} height={820} sizes="(max-width: 900px) 90vw, 58vw" />
              <figcaption>Audit synthesis · first-time gaps, user needs, and repeated dead ends</figcaption>
            </figure>
            <div className="crusoe-clean-findings">
              {cleanAuditFindings.map(([title, body], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-problem-title">
          <div className="crusoe-clean-heading">
            <span>03 · Problem framing</span>
            <div>
              <h3 id="crusoe-clean-problem-title">The issue was not emptiness. It was uncertainty.</h3>
              <p>The audit reframed the work from “design an empty state” to “build a repeatable first-run system that explains the product, guides one action, and stays useful as the resource changes state.”</p>
            </div>
          </div>
          <div className="crusoe-clean-problem-layout">
            <figure>
              <Image src="/images/crusoe/empty-state-problem-framing.png" alt="FigJam problem-framing board for Crusoe empty states" width={1040} height={1040} sizes="(max-width: 900px) 90vw, 44vw" />
              <figcaption>Problem-framing artifact from the working FigJam</figcaption>
            </figure>
            <div className="crusoe-clean-problem-steps">
              <article><span>Current state</span><h4>Empty pages assumed technical familiarity.</h4><p>Users could see that nothing existed, but not always what the resource was, why they needed it, or what should happen first.</p></article>
              <article><span>User need</span><h4>Orientation before configuration.</h4><p>First-time users needed product context, setup guidance, and one recommended next step without a wall of instructions.</p></article>
              <article><span>Design opportunity</span><h4>A system that changes with the resource.</h4><p>The pattern needed to cover the first choice and continue through prerequisites, provisioning, failure, recovery, and readiness.</p></article>
            </div>
          </div>
        </section>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-competitive-title">
          <div className="crusoe-clean-heading">
            <span>04 · Competitive analysis</span>
            <div>
              <h3 id="crusoe-clean-competitive-title">Benchmark the strongest first-run patterns in cloud products.</h3>
              <p>I compared how peer cloud consoles orient new users, present starting configurations, connect documentation, and communicate lifecycle states. The goal was not to copy a screen—it was to identify which patterns reduced uncertainty.</p>
            </div>
          </div>
          <div className="crusoe-competitive-table" role="table" aria-label="Competitive analysis translated into Crusoe design decisions">
            {competitiveAnalysis.map(([dimension, compared, response], index) => (
              <article key={dimension} role="row">
                <span>0{index + 1}</span>
                <div><small>Compared</small><h4>{dimension}</h4><p>{compared}</p></div>
                <div><small>Crusoe response</small><p>{response}</p></div>
              </article>
            ))}
          </div>
          <div className="crusoe-competitive-takeaway">
            <span>Competitive takeaway</span>
            <p>The clearest products did three things well: explain the resource in product language, reduce the first decision to one useful path, and keep feedback visible after the user acts.</p>
          </div>
        </section>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-v1-title">
          <div className="crusoe-clean-heading">
            <span>05 · V1</span>
            <div>
              <h3 id="crusoe-clean-v1-title">Ship the consistent foundation first.</h3>
              <p>V1 fit the existing Console architecture: a product-specific illustration, a clear title, concise guidance, one primary action, and a secondary path to documentation.</p>
            </div>
          </div>
          <div className="crusoe-clean-v1-layout">
            <figure>
              <Image src="/images/crusoe/final-instances-empty.png" alt="Final V1 Crusoe instances empty state" width={838} height={768} sizes="(max-width: 900px) 90vw, 54vw" />
              <figcaption>V1 · implementation-ready empty-state foundation</figcaption>
            </figure>
            <div className="crusoe-clean-rules">
              {emptyStateRules.map(([title, body], index) => (
                <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{body}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-v2-title">
          <div className="crusoe-clean-heading">
            <span>06 · V2</span>
            <div>
              <h3 id="crusoe-clean-v2-title">Extend the foundation into contextual onboarding.</h3>
              <p>V2 adds recommendation cards for the first choice and a persistent banner layer for everything that happens after it. The richer direction stayed separate so it could inform the roadmap without blocking V1.</p>
            </div>
          </div>
          <figure className="crusoe-clean-v2-hero">
            <Image src="/images/crusoe/final-kubernetes-empty.png" alt="Future Crusoe Kubernetes empty state with configuration cards and a provisioning banner" width={1440} height={940} sizes="(max-width: 900px) 90vw, 80vw" />
            <figcaption>V2 · recommended configurations + state-aware guidance</figcaption>
          </figure>
          <div className="crusoe-clean-edge-intro">
            <span>Edge-case banner system</span>
            <p>The cards help users choose a starting point. The banners keep them oriented through the complete resource lifecycle.</p>
          </div>
          <div className="crusoe-clean-banner-grid">
            {futureBannerCases.map(([title, body, image]) => (
              <figure key={image}>
                <Image src={image} alt={`${title} banner from the future Crusoe empty-state system`} width={1210} height={115} sizes="(max-width: 900px) 90vw, 42vw" />
                <figcaption><strong>{title}</strong><span>{body}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-collaboration-title">
          <div className="crusoe-clean-heading">
            <span>07 · Collaboration</span>
            <div>
              <h3 id="crusoe-clean-collaboration-title">The release strategy came from working through constraints together.</h3>
              <p>I shared the work early with design, product, engineering, brand, and technical writing. Each review narrowed ambiguity and made the system easier to build and extend.</p>
            </div>
          </div>
          <div className="crusoe-clean-collaboration-grid">
            {collaborationPhases.map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{body}</p></article>
            ))}
          </div>
          <div className="crusoe-clean-ai-callout">
            <div><span>AI-assisted workflow</span><h4>Claude Code accelerated synthesis, exploration, and critique.</h4></div>
            <p>I used AI to cluster repeated observations, pressure-test content variants, and surface missing states. I checked every theme against the source artifacts, and the team validated technical accuracy, feasibility, tone, and the final product decisions.</p>
          </div>
          <div className="crusoe-collaboration-outcome">
            <span>What changed because of collaboration</span>
            <p>The team moved from an ambitious all-at-once onboarding concept to a focused V1 that could ship, while preserving V2 as a concrete future-release system instead of losing the larger idea.</p>
          </div>
        </section>

        <section className="crusoe-clean-section" aria-labelledby="crusoe-clean-outcome-title">
          <div className="crusoe-clean-heading">
            <span>08 · Outcome</span>
            <div>
              <h3 id="crusoe-clean-outcome-title">One pattern, applied across the Console.</h3>
              <p>The final work paired an implementation-ready V1 with a documented V2 direction, giving the team both an immediate improvement and a clear path toward richer onboarding.</p>
            </div>
          </div>
          <div className="crusoe-motion-grid crusoe-clean-motion-grid">
            {finalEmptyStateVideos.map(([title, src, description]) => (
              <figure key={src}>
                <video src={src} autoPlay muted loop playsInline preload="metadata" aria-label={`${title} empty state walkthrough`} />
                <figcaption><strong>{title}</strong><span>{description}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className="crusoe-clean-outcome-band">
            <span>Design principle</span>
            <blockquote>Give users enough context to act, without making an empty moment feel heavy.</blockquote>
          </div>
        </section>
      </section>
        )}

        {activeProject === 'heuristic-evaluation' && (
      <section
        id="crusoe-panel-heuristic-evaluation"
        role="tabpanel"
        aria-labelledby="crusoe-tab-heuristic-evaluation"
        className="crusoe-case-section project-section blue-section crusoe-project-panel"
      >
        <div className="crusoe-section-label"><span>01 · Overview</span><strong>Heuristic evaluation of IaaS cloud console</strong></div>
        <div className="crusoe-project-heading">
          <h2>Find the friction hiding between screens.</h2>
          <p>
            I evaluated three critical Console journeys using Nielsen&apos;s heuristics and cognitive science principles,
            mapped end-to-end workflows, scored issues by severity, and translated findings into prioritized design recommendations.
          </p>
        </div>

        <div className="crusoe-he-scope" aria-label="Heuristic evaluation scope">
          {heuristicScope.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>

        <section className="crusoe-clean-section crusoe-he-section" aria-labelledby="crusoe-he-method-title">
          <div className="crusoe-clean-heading">
            <span>02 · Method</span>
            <div>
              <h3 id="crusoe-he-method-title">I evaluated each issue by principle, user impact, and severity.</h3>
              <p>The evaluation combined a structured interface review with journey-level context. Every finding had to name the violated principle, explain the user consequence, and point toward a concrete design response.</p>
            </div>
          </div>

          <figure className="crusoe-he-artifact crusoe-he-artifact-wide">
            <Image src="/images/crusoe/heuristic-method.png" alt="Figma overview explaining Nielsen heuristics and the cognitive-science foundation of the evaluation" width={1440} height={900} sizes="(max-width: 900px) 92vw, 86vw" />
            <figcaption><span>Working framework</span><strong>A structured method—not a taste-based critique</strong></figcaption>
          </figure>

          <div className="crusoe-he-method-grid">
            {heuristicMethod.map(([number, title, body]) => (
              <article key={number}><span>{number}</span><h4>{title}</h4><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="crusoe-clean-section crusoe-he-section" aria-labelledby="crusoe-he-framework-title">
          <div className="crusoe-clean-heading">
            <span>03 · Framework</span>
            <div>
              <h3 id="crusoe-he-framework-title">Ten principles created one consistent evaluation language.</h3>
              <p>The framework made findings comparable across navigation, setup, system feedback, documentation, and error states—even when the underlying Console surfaces looked very different.</p>
            </div>
          </div>

          <figure className="crusoe-he-artifact crusoe-he-artifact-wide">
            <Image src="/images/crusoe/heuristic-principles.png" alt="Figma frame documenting Nielsen's ten usability heuristics used in the Crusoe Console evaluation" width={1440} height={900} sizes="(max-width: 900px) 92vw, 86vw" />
            <figcaption><span>Evaluation rubric</span><strong>Nielsen&apos;s ten heuristics, translated into observable interface behavior</strong></figcaption>
          </figure>

          <div className="crusoe-he-principle-band">
            <span>How I used it</span>
            <p>A heuristic name alone was never the finding. The useful unit was: <strong>observable behavior → violated principle → user consequence → recommended change.</strong></p>
          </div>
        </section>

        <section className="crusoe-clean-section crusoe-he-section" aria-labelledby="crusoe-he-benchmark-title">
          <div className="crusoe-clean-heading">
            <span>04 · Benchmark</span>
            <div>
              <h3 id="crusoe-he-benchmark-title">Compare friction and flow in products built for technical users.</h3>
              <p>I used Stripe and AWS as contrasting references: one demonstrates progressive guidance and visible system status; the other shows how terminology, density, and hidden navigation can amplify cognitive load.</p>
            </div>
          </div>

          <div className="crusoe-he-benchmark-grid">
            <figure className="crusoe-he-artifact">
              <Image src="/images/crusoe/heuristic-stripe.png" alt="Figma competitive heuristic evaluation of Stripe developer onboarding" width={1440} height={900} sizes="(max-width: 900px) 92vw, 43vw" />
              <figcaption><span>Good reference</span><strong>Stripe · guidance stays close to the task</strong></figcaption>
            </figure>
            <figure className="crusoe-he-artifact">
              <Image src="/images/crusoe/heuristic-aws.png" alt="Figma competitive heuristic evaluation of AWS Console complexity" width={1440} height={900} sizes="(max-width: 900px) 92vw, 43vw" />
              <figcaption><span>Poor reference</span><strong>AWS · density and jargon obscure the path</strong></figcaption>
            </figure>
          </div>

          <div className="crusoe-he-benchmark-takeaway">
            <span>Benchmark takeaway</span>
            <blockquote>Technical depth does not require interface complexity. The strongest products expose complexity progressively and keep state, language, and next steps visible.</blockquote>
          </div>
        </section>

        <section className="crusoe-clean-section crusoe-he-section" aria-labelledby="crusoe-he-findings-title">
          <div className="crusoe-clean-heading">
            <span>05 · Journey findings</span>
            <div>
              <h3 id="crusoe-he-findings-title">Three journeys showed exactly where the Console lost users.</h3>
              <p>I organized the findings by task—not by screen—so the team could see the user goal, the breakdown, the violated principles, and the recommended change in one pass.</p>
            </div>
          </div>

          <div className="crusoe-he-journey-map" aria-label="Three evaluated Console journeys">
            {heuristicJourneys.map((journey) => (
              <div key={journey.number}>
                <span>{journey.number}</span>
                <strong>{journey.title}</strong>
                <small>{journey.focus}</small>
              </div>
            ))}
          </div>

          <div className="crusoe-he-journeys">
            {heuristicJourneys.map((journey) => (
              <article key={journey.number} className="crusoe-he-journey-card">
                <header>
                  <div className="crusoe-he-journey-number">Journey {journey.number}</div>
                  <div>
                    <h4>{journey.title}</h4>
                    <p><strong>User goal:</strong> {journey.goal}</p>
                  </div>
                  <span>{journey.focus}</span>
                </header>

                <div className="crusoe-he-journey-body">
                  <section className="crusoe-he-journey-friction">
                    <span>Observed friction</span>
                    <p>{journey.friction}</p>
                  </section>

                  <section className="crusoe-he-journey-violations">
                    <span>Heuristic violations</span>
                    <ul>
                      {journey.heuristics.map(([code, name]) => (
                        <li key={code}><strong>{code}</strong><p>{name}</p></li>
                      ))}
                    </ul>
                  </section>

                  <section className="crusoe-he-journey-response">
                    <span>Design response</span>
                    <p>{journey.response}</p>
                    <footer><strong>What improves</strong><p>{journey.result}</p></footer>
                  </section>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="crusoe-clean-section crusoe-he-section" aria-labelledby="crusoe-he-science-title">
          <div className="crusoe-clean-heading">
            <span>06 · Cognitive science</span>
            <div>
              <h3 id="crusoe-he-science-title">Explain why the friction matters—not only where it appears.</h3>
              <p>Working memory, mental models, and error recovery helped connect interface details to how people process complex technical tasks under time pressure.</p>
            </div>
          </div>

          <figure className="crusoe-he-artifact crusoe-he-artifact-wide">
            <Image src="/images/crusoe/heuristic-cognitive-science.png" alt="Figma frame connecting working memory, mental models, and error recovery to interface design" width={1440} height={900} sizes="(max-width: 900px) 92vw, 86vw" />
            <figcaption><span>Reasoning layer</span><strong>The cognitive mechanism behind the heuristic</strong></figcaption>
          </figure>

          <div className="crusoe-he-science-grid">
            {heuristicScience.map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="crusoe-clean-section crusoe-he-section" aria-labelledby="crusoe-he-output-title">
          <div className="crusoe-clean-heading">
            <span>07 · Output</span>
            <div>
              <h3 id="crusoe-he-output-title">A shared backlog grounded in user consequence.</h3>
              <p>The final case-study artifact translated the evaluation into a structure the team could use for prioritization, design exploration, and implementation planning.</p>
            </div>
          </div>

          <div className="crusoe-he-output-grid">
            {heuristicDeliverables.map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{body}</p></article>
            ))}
          </div>

          <div className="crusoe-he-final-note">
            <span>What changed</span>
            <p>Each recommendation now connects a user task to a violated principle, its consequence, and a concrete design response.</p>
          </div>
        </section>
      </section>
        )}

        {activeProject === 'usage-to-cost' && (
      <section
        id="crusoe-panel-usage-to-cost"
        role="tabpanel"
        aria-labelledby="crusoe-tab-usage-to-cost"
        className="crusoe-case-section project-section coral-section crusoe-project-panel"
      >
        <div className="crusoe-section-label"><span>Project 03</span><strong>Intelligence Foundry usage-to-cost model</strong></div>
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
        )}
      </section>

      <section className="crusoe-case-section collaboration-section">
        <div className="crusoe-section-label"><span>04 · Collaboration</span><strong>Designing across the system</strong></div>
        <div className="crusoe-collaboration-grid">
          <div>
            <h2>Shared early. Refined together. Built for handoff.</h2>
            <p>
              Across the internship, I partnered with design, product, engineering, brand, and technical writing. The work
              moved through audits, working sessions, critiques, implementation conversations, and iterative visual refinement.
            </p>
          </div>
          <aside className="crusoe-collaboration-artifact" aria-label="Cross-functional collaboration process">
            <header>
              <span>04 · Working rhythm</span>
              <small>Cross-functional</small>
            </header>
            <ol>
              {collaborationRhythm.map(([number, title, partner, body]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div>
                    <div className="crusoe-collaboration-step-heading">
                      <h3>{title}</h3>
                      <small>{partner}</small>
                    </div>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <footer>Each pass made the product decision—and the handoff—clearer.</footer>
          </aside>
        </div>
      </section>

      <section className="crusoe-case-section crusoe-outcomes-section">
        <div className="crusoe-section-label"><span>05 · Outcomes</span><strong>What the internship produced</strong></div>
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
        <p className="crusoe-eyebrow">06 · Reflection</p>
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
