import { useEffect, useRef } from 'react'
import './AboutSection.scss'

const AboutSection = () => {
  const aboutImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='/images/aboutUsImage.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
          About Us
        </div>
        <div className="body">
        The "Students Hub" consolidates diverse study resources, including textbooks, materials, and tools across subjects and academic levels. It promotes collaboration through forums and study groups, fostering knowledge exchange and peer support. Additionally, it facilitates access to academic advisors, creating a supportive environment to enhance students' academic journeys.
        </div>
        {/* <div className="button">
          <button>Read More</button>
        </div> */}
      </div>
    </section>
  )
}

export default AboutSection
