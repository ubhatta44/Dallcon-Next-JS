const Navbar = () => {
    return ( 
    <nav>
       <div class="top-header">
          <div class="container">
             <div class="top-header-wrap">
                <div class="opening-time">
                   OFFICE HOURS
                   <span itemprop="openingHours" content="MON-FRI | 8:00AM-5:00PM"></span>
                   <span>
                   MON-FRI | 8:00AM-5:00PM</span>            
                </div>
                <div class="contact-info">
                   <a href="tel:1300325526">
                   <span itemprop="telephone">1300 325 526</span>
                   </a>                <a href="mailto:sales@dallcon.com">
                   <span itemprop="email">sales@dallcon.com</span>
                   </a>            
                </div>
             </div>
          </div>
       </div>
    </nav>
    );
    }
    export default Navbar;