import { useEffect, useRef } from 'react'

// Floating petal particle
function createPetal(container) {
  const petal = document.createElement('div')
  petal.classList.add('petal')

  const size = Math.random() * 8 + 4
  petal.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${Math.random() * 8 + 6}s;
    animation-delay: ${Math.random() * 10}s;
    opacity: ${Math.random() * 0.6 + 0.1};
    background: hsl(${330 + Math.random() * 30}, 70%, ${70 + Math.random() * 20}%);
    border-radius: ${Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
  `
  container.appendChild(petal)

  // Remove after animation
  setTimeout(() => {
    if (petal.parentNode) petal.parentNode.removeChild(petal)
  }, 18000)
}

export default function AnimatedBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Spawn petals periodically
    const interval = setInterval(() => {
      createPetal(container)
    }, 600)

    // Initial batch
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createPetal(container), i * 200)
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-canvas" ref={containerRef}>
      <div className="bg-gradient" />
    </div>
  )
}
