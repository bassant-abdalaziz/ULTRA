import React, { Fragment } from 'react'
import Footer from './Footer'
import "../css/Contact.css"
import Button from './Button'

const Contact= ()=> {
  return (
    <Fragment>
      <div className="drop">
            <div className="container">
                <h2 className="heading">Drop Me A line</h2>
                <form action="">
                    <div className="form-input">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <input type="text" className="sub" placeholder="Your Subject"/>
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <Button>Send</Button>
                </form>
            </div>
        </div>
    <Footer />
    </Fragment>
  )
}

export default Contact