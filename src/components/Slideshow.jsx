import { useState, useEffect } from 'react'

// =============================================
// SLIDESHOW IMAGES — Replace these paths with
// your own JPG files placed in /public/images/
// e.g. /images/photo1.jpg, /images/photo2.jpg
// =============================================
const SLIDES = [
  {
    src: '/images/photo1.jpg',   // ← Replace with your photo
    caption: 'Every moment with you is a treasure ✦',
  },
  {
    src: '/images/photo2.jpg',   // ← Replace with your photo
    caption: 'My heart found its home in you ✦',
  },
  {
    src: '/images/photo3.jpg',   // ← Replace with your photo
    caption: 'You are my favourite kind of adventure ✦',
  },
  {
    src: '/images/photo4.jpg',   // ← Replace with your photo
    caption: 'I choose you, every single day ✦',
  },
]

export default function Slideshow() {
  const [current, setCurrent] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent(c => (c + 1) % SLIDES.length)

  return (
    <section className="section">
      <p className="section-title">Our Story</p>
      <div className="section-rule" />

      <div className="slideshow-wrapper">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
            {imageErrors[i] ? (
              <div className="slide-placeholder">
                <span className="placeholder-icon">🌸</span>
                <p>Add your photo to /public/images/photo{i + 1}.jpg</p>
              </div>
            ) : (
              <img
                src={slide.src}
                alt={`Memory ${i + 1}`}
                onError={() => setImageErrors(prev => ({ ...prev, [i]: true }))}
              />
            )}
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}
      </div>

      <div className="slideshow-controls">
        <button className="slide-btn" onClick={prev} aria-label="Previous">‹</button>
        <div className="slide-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="slide-btn" onClick={next} aria-label="Next">›</button>
      </div>
    </section>
  )
}
