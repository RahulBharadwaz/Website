import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <div className="columnTitle">
            Student Hub
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">About</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Services</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Community</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Blog</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Resources
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Help</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Terms</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Support
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Quick Search</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Popular Help Topics</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Product FAQs</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Policies</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Contact
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              Phone: +91 9989203699
            </div>
            <div className="columnTextItem">
              Email: <u><a href='#'>StudentHub@gmail.com</a></u>
            </div>
            <div className="columnTextItem">
              Address: Lucknow,UP
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
