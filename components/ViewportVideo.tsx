'use client'

import { useEffect, useRef } from 'react'

type ViewportVideoProps = {
  sources: Array<{ src: string; type: string }>
  className?: string
  ariaLabel?: string
  controls?: boolean
  poster?: string
}

export default function ViewportVideo({
  sources,
  className,
  ariaLabel,
  controls = false,
  poster,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.88) {
          void video.play().catch(() => undefined)
          return
        }

        video.pause()
      },
      { threshold: [0, 0.5, 0.75, 0.88, 1] },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      aria-label={ariaLabel}
      controls={controls}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
      Your browser does not support the video tag.
    </video>
  )
}
