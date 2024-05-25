import { useEffect, useRef } from "react"
import './ServicesSection.scss'

const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
          Services
        </div>
        <div className="mottoSubtitle">
  
Stay informed with our comprehensive news section covering education and global updates. Access a diverse range of study materials and tools to enhance your academic journey. Share your valuable feedback through our dedicated platform to help us continually improve our services. Explore detailed profiles of colleges and universities, making informed decisions about your educational path. Connect with a vibrant community of learners and educators. Join us in shaping the future of education together.
        </div>
        <div className="serviceButtons">
          <button>Learn More</button>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/images/servicesImage.png' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
    </section>
  )
}

export default ServicesSection
