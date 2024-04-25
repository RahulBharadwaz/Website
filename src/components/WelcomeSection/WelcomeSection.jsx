import { useEffect, useRef } from 'react'
import './WelcomeSection.scss'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
          {/* Changing the Future, for the Better. */}Empowering Minds, Connecting Futures
        </div>
        <div className="mottoSubtitle">
        Students Hub: Where learning thrives amidst diverse resources, collaborative forums, and a vibrant community, empowering students for academic excellence and success.
        </div>
        <div className="welcomeButtons">
          <button>Learn More</button>
          {/* <button>Watch Intro Video</button> */}
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/images/welcomeImage.png' 
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
