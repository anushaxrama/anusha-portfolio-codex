'use client'

import Image from 'next/image'

type CaseStudyCoverProps = {
  title: string
  eyebrow: string
  description: string
  image: string
  accent: 'blue' | 'pink' | 'orange' | 'green' | 'mint'
  tags: string[]
}

export default function CaseStudyCover({
  title,
  eyebrow,
  description,
  image,
  accent,
  tags,
}: CaseStudyCoverProps) {
  return (
    <section className={`case-cover case-cover-${accent}`}>
      <div className="case-cover-inner">
        <div className="case-cover-copy">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{description}</span>
          <a href="#case-study-detail">Read the case study</a>
        </div>

        <div
          className="case-cover-art"
          aria-label={`${title} visual preview`}
          data-topics={tags.join(' · ')}
        >
          <div className="case-cover-orbit case-cover-orbit-one" aria-hidden="true"><i /></div>
          <div className="case-cover-orbit case-cover-orbit-two" aria-hidden="true"><i /></div>
          <div className="case-cover-orbit case-cover-orbit-three" aria-hidden="true"><i /></div>
          <div className="case-cover-image-frame">
            <Image src={image} alt={`${title} interface preview`} fill sizes="(max-width: 900px) 70vw, 420px" />
          </div>
          <div className="case-cover-dot-cluster" aria-hidden="true">
            <i /><i /><i />
          </div>
        </div>
      </div>
    </section>
  )
}
