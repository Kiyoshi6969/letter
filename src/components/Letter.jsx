import { useState, useRef, useEffect } from 'react'

// =============================================
// MUSIC — Place your mp3 file in /public/music/
// and rename it to background.mp3
// =============================================
const MUSIC_PATH = '/music/background.mp3'

const LETTER_DATE = new Date().toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric'
})

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [musicError, setMusicError] = useState(false)
  const audioRef = useRef(null)

  // Create audio element once
  useEffect(() => {
    const audio = new Audio(MUSIC_PATH)
    audio.loop = true
    audio.volume = 0.45
    audio.onerror = () => setMusicError(true)
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const openLetter = () => {
    setIsOpen(true)
    // Start music
    if (audioRef.current && !musicError) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setMusicError(true))
    }
  }

  const closeLetter = () => {
    setIsOpen(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLetter() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section letter-section">
      <p className="section-title">A Letter For You</p>
      <div className="section-rule" />

      <p className="letter-hint">Click to open</p>

      {/* ── Envelope Button ── */}
      <button className="envelope-btn" onClick={openLetter} aria-label="Open love letter">
        <div className="envelope-glow" />
        <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope body */}
          <rect x="2" y="2" width="216" height="146" rx="8" fill="url(#envGrad)" stroke="url(#envBorder)" strokeWidth="1.5"/>

          {/* Envelope flap closed */}
          <path d="M2 2 L110 82 L218 2" fill="url(#flapGrad)" stroke="url(#envBorder)" strokeWidth="1.5" strokeLinejoin="round"/>

          {/* Side fold lines */}
          <line x1="2" y1="148" x2="110" y2="82" stroke="url(#envBorder)" strokeWidth="1"/>
          <line x1="218" y1="148" x2="110" y2="82" stroke="url(#envBorder)" strokeWidth="1"/>

          {/* Wax seal */}
          <circle cx="110" cy="90" r="18" fill="url(#sealGrad)" stroke="#d4a957" strokeWidth="1"/>
          <text x="110" y="96" textAnchor="middle" fontSize="16">💌</text>

          <defs>
            <linearGradient id="envGrad" x1="0" y1="0" x2="220" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fce8ef"/>
              <stop offset="100%" stopColor="#f5d0dd"/>
            </linearGradient>
            <linearGradient id="flapGrad" x1="0" y1="0" x2="220" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f8dce8"/>
              <stop offset="100%" stopColor="#e8a0b4"/>
            </linearGradient>
            <linearGradient id="envBorder" x1="0" y1="0" x2="220" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d4a957"/>
              <stop offset="50%" stopColor="#e8a0b4"/>
              <stop offset="100%" stopColor="#d4a957"/>
            </linearGradient>
            <radialGradient id="sealGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8a0b4"/>
              <stop offset="100%" stopColor="#c0607a"/>
            </radialGradient>
          </defs>
        </svg>
      </button>

    

      {/* ── Letter Modal ── */}
      {isOpen && (
        <div
          className="letter-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeLetter() }}
          role="dialog"
          aria-modal="true"
          aria-label="Love letter"
        >
          <div className="letter-modal">
            <button className="letter-close" onClick={closeLetter} aria-label="Close letter">×</button>

            <div className="letter-header">
              <span className="letter-wax-seal">💌</span>
              <p className="letter-date">{LETTER_DATE}</p>
            </div>

            <p className="letter-salutation">Dear Luv,</p>

            <div className="letter-body">
              <p>
                I hope you're having a good day today, Luv. I wrote this letter to give you
                clarity about my intentions toward you.
              </p>
              <p>
                I never imagined that I would fall for you. I never thought I would find myself
                longing for you, loving you, and being willing to take risks for you not until
                I got to know you more.
              </p>
              <p>
                I felt how much you care. I saw how honest you are. You appreciate even the
                smallest things I do for you, and you never take my efforts for granted. Every
                laugh you make makes my heart skip a beat. I love the way you look at me
                without judgment.
              </p>
              <p>
              You may never fully know how much I love you, but I truly love you so deeply that I am willing to
               do anything for you. I know we are not in a relationship yet, but I want you to understand that I will always be here for you, no matter what.

              Every day, you teach me how to be more patient and how to become a better man. When I met you, you gave me the motivation to have clear goals 
              in life. What I mean is, everything started to make more sense, and I now want to improve myself and change my ways so I can reach those goals with you by my side.
              </p>
              <p>
                You supported me through my ups and downs, and I want to assure you that I
                will not stop loving you as long as I feel there is hope for us. I will
                continue loving you and do my best to make you feel loved. I will make you
                happy, even when we face hardships.
              </p>
              <p>
                I just want you to know that my feelings are pure. I've been thinking about
                this a lot lately, and I realized that this is not just love. I choose you
                every day. I want you, I'll wait for you, and I'm willing to take risks for
                you. 
              </p>

              <p>
               I hope that one day, you achieve everything you dream of and receive all the blessings you truly deserve. I'll always be here to support you in reaching your goals in life.

Please don't ever hesitate to reach out if you have something on your mind or a problem you want to share. I'll be here to listen, to comfort you, and to help ease whatever you're going through.

              </p>
              <p>
                I hope this letter helps lessen any doubts you may have about my intentions
                toward you. And more than just words, I will show it through my actions.
              </p>
            </div>

            <div className="letter-signature">
              <p>Forever yours,</p>
              <strong>Takahiro</strong>
            </div>

          
          </div>
        </div>
      )}
    </section>
  )
}
