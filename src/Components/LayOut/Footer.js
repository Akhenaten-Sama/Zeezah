import React from 'react';
import CopyRight from './CopyRight'




export default function StickyFooter() {

  return (
    <footer className="footer" >
      
    <h4 className='transparent'>&copy; Efunkunle Oluwaseun</h4>
    <div className='social-container'>
    <div className="social">
    <a href='https://twitter.com/bombassin' >
                <i className="fab fa-twitter " />
                </a>
    </div>
            <div className="social">
            <a href='https://github.com/Akhenaten-Sama'>
            
            <i className="fab fa-github " />
            </a>
            
        </div>
        <div className="social">
        <a href='https://www.linkedin.com/in/efunkunle/'>
        <i className="fab fa-linkedin " />
        </a>
      
            </div>
    </div>
   
  
          
          
    </footer>
  );
}