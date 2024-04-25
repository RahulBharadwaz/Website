import { useRef, useState } from "react"
import './ReviewsSection.scss'

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="reviewSectionTitle">
          Reviews
        </div>
        <div className="reviewSectionSubtitle">
          Have a look at what some of our customers are saying about us!
        </div>
      </div>
      <div className="allReviews">
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic1.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Rajesh
            </div>
            <div className="reviewerLocation">
              Lucknow,UP
            </div>
            <div className="reviewerReview">
              <em>The range of resources available is impressive. Whether I need news updates or academic materials, I can always rely on this website for valuable information</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic2.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Shivi
            </div>
            <div className="reviewerLocation">
              Jaipur,RJ
            </div>
            <div className="reviewerReview">
              <em>"The anonymous messaging feature is a game-changer! It allows me to express myself freely and engage in meaningful conversations without the fear of judgment"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic3.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Pooran
            </div>
            <div className="reviewerLocation">
              Houston, TX
            </div>
            <div className="reviewerReview">
              <em>"Navigating this website is a pleasure. The user-friendly design makes it easy to find what I need, enhancing my overall browsing experience"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic4.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Samantha 
            </div>
            <div className="reviewerLocation">
              Hyderabad,TS
            </div>
            <div className="reviewerReview">
              <em>I appreciate the platform's commitment to user feedback. Being able to share my thoughts and suggestions helps shape the website's evolution, making it more tailored to users' needs</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
