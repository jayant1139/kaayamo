import React from 'react'

export default function Footer() {
    return (
        <>
        <footer>
        <div className="d-flex justify-content-evenly">
         <div className="footer-column">
             <ul>
             <h5>Navigation</h5>
                 <li><a href="/">Home</a></li>
                 <li><a href="/">About Us</a></li>
                 <li><a href="/">What We Do</a></li>
                 <li><a href="/">To The Power of 10</a></li>
                 <li><a href="/">Donate</a></li>
             </ul>
         </div>
         <div className="footer-column">
             <ul>
             <h5>What We Do</h5>
                 <li><a href="/">Become a mentor</a></li>
                 <li><a href="/">Testimonials</a></li>
                 <li><a href="/">Support</a></li>
                 <li><a href="/">Blog</a></li>
                 <li><a href="/">Donate</a></li>
             </ul>
         </div>
         <div className="footer-column">
             <ul>
             <h5>Legal</h5>
                 <li><a href="/">General Info</a></li>
                 <li><a href="/">Privacy Policy</a></li>
                 <li><a href="/">Terms of Service</a></li>
             </ul>
         </div>
         <div className="footer-column">
             <ul>
             <h5>Talk To Us</h5>
                 <li><a href="/">kaayamo@gmail.com</a></li>
                 <li><a href="/">+99999999</a></li>
                 <li><a href="/">Contact Us</a></li>
                 <li><a href="/">Facebook</a></li>
                 <li><a href="/">Linkedin</a></li>
                 <li><a href="/">Twitter</a></li>
             </ul>
         </div>
         </div>
         </footer>
        </>
    )
}
