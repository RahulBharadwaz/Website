import { useEffect, useRef } from 'react'
import './ChooseUsSection.scss'

import { AiOutlineBarChart as Chart } from 'react-icons/ai'
import { RiComputerLine as Service } from 'react-icons/ri'
import { MdSupportAgent as Support} from 'react-icons/md'
import { FaPeopleCarry as Community } from 'react-icons/fa'

const ChooseUsSection = () => {
  const cardsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(cardsRef.current)
  }, [])

  return (
    <section className="chooseUsSection">
      <div className="sectionTitle">
        Why Choose Us
      </div>
      <div className="reasonCards" ref={cardsRef}>
        <div className="card">
          <div className="cardSymbol">
            <Chart size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          Comprehensive Resources
          </div>
          <div className="cardDesc">
          Our website is a hub of knowledge, offering diverse resources from news updates to academic materials, supporting every aspect of your educational journey.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Service size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          User-Centric Design
          </div>
          <div className="cardDesc">
          Enjoy a seamless experience with our intuitive and user-friendly website design, making it easy to navigate and access information effortlessly.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Community size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            A Strong, Growing Community
          </div>
          <div className="cardDesc">
          Engage in open conversations through anonymous messaging, promoting honesty and freedom of expression. Connect with others safely, sharing thoughts and ideas without revealing your identity
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Support size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          Informed Decision-Making
          </div>
          <div className="cardDesc">
          Make informed choices about your education and career with detailed profiles of colleges and universities, providing valuable insights for your academic journey.
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChooseUsSection
