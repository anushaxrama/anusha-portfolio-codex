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

        <div className="case-cover-art" aria-label={`${title} visual preview`}>
          <div className="case-cover-flower" aria-hidden="true">
            <i /><i /><i /><i /><i />
            <strong />
          </div>
          <div className="case-cover-tab tab-one">
            <Image src={image} alt={`${title} interface preview`} fill sizes="(max-width: 900px) 70vw, 420px" />
          </div>
          <div className="case-cover-tab tab-two">
            <span>{tags[0]}</span>
          </div>
          <div className="case-cover-tab tab-three">
            <span>{tags[1]}</span>
          </div>
          <div className="case-cover-note">
            <small>{tags[2]}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
