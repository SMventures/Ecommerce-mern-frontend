import "./styles.css";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default function About() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
      
      <header id="head">
        <a href={{}}>
          <span>
            
          </span>
          <span id="c_name">About Us</span>
        </a>
       
      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome to Digital Dalal Street, where the world of stock trading meets style and functionality.</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          
          <p>
          <h1 >Our Mission</h1>
          At Digital Dalal Street, we are on a mission to revolutionize the way traders experience the stock market. We believe that trading should not only be profitable but also enjoyable and stylish. Our curated collection of products is designed to make your trading journey easy, comfortable, affordable, and undeniably fashionable.
          </p>
        </div>

        <div id="first" className="reveal">
          
          <div>
            
            
            
           
            
          </div>
        </div>

        <div id="fourth" className="reveal">
          
        <h1 style={{ textAlign: "center",fontSize: "2rem", color:"white" }}>Our Products</h1>
        </div>

        <div id="second" className="reveal">
      
          <div className="container">
            <div>
              <h1>Trading Education</h1>
              
              <p>
              Unlock the secrets of the stock market with our carefully selected books. From beginner's guides to advanced investing strategies, technical and fundamental analysis, behavioral finance, and risk management, we have a curated library that caters to traders at every level.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>Customized Electronics and Accessories</h1>
              
              <p>
              Express your passion for trading with our exclusive range of customized electronics and accessories. From mobile covers and laptop skins to mouse pads and trading flashcards, our products are designed to seamlessly blend style with functionality.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>Trading Merchandise
</h1>
             
              <p>
              Make a statement with our trading-themed merchandise. Our collection includes trendy t-shirts and hoodies featuring unique stock market designs. Now you can wear your passion for trading on your sleeve—literally!
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>Trading Posters and Decor</h1>
              
              <p>
              Transform your trading space with our eye-catching trading posters. Infuse inspiration into your daily routine and surround yourself with visuals that reflect your commitment to success.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>Trading Journal</h1>
              
              <p>
              Stay organized and track your trading journey with our specially designed trading journals. Reflect on your wins, learn from your losses, and set new goals—all within the pages of a journal crafted for traders, by traders.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          
        </div>

        <div id="third" className="reveal">
          <h1 id="front" style={{ textAlign: "center",fontSize: "2rem" }}>Why choose Digital Dalal Street?</h1>
          <h1 style={{ textAlign: "center" }}>
            
          </h1>
          <div id="third_cards">
            <div>
              <h2>Easy Shopping Experience</h2>
              <p>
              Navigating our online store is as seamless as executing a well-planned trade. Our user-friendly interface ensures that you find what you need effortlessly.
              </p>
            </div>
            <div>
              <h2>Comfortable and Affordable</h2>
              <p>
              We believe that a comfortable and stylish trading experience shouldn't break the bank. That's why we offer a range of affordable products without compromising on quality.
              </p>
            </div>
            <div>
              <h2>Fashionable Trading</h2>
              <p>
              Why settle for the ordinary when you can trade in style? Our fashionable merchandise lets you showcase your love for the stock market with flair.
              </p>
            </div>
          </div>
        </div>


        <div className="container" style={{ textAlign: 'center' }}>
  <div>
    <h1>  <FolderCopyIcon/> Join the Digital Dalal Street Community</h1>
    <p style={{ textAlign: 'center' }}>
      Digital Dalal Street is more than a marketplace; it's a community of traders who share a passion for success and a love for all things in the stock market. Connect with like-minded individuals, share trading tips, and showcase your unique style within our growing community.
    </p>
  </div>
</div>

          <div className="container" style={{ textAlign: 'center' }}>
            <div>
              
              <h1>  <FolderCopyIcon/> Explore the Future of Trading with Digital Dalal Street
</h1>
              
              <p>
              Discover a world where trading meets fashion, education meets style, and your trading journey is transformed. Join us at Digital Dalal Street and elevate your trading experience today.
              </p>
            </div>
            
          </div>

        
      </main>

     
     
    </div>
  );
}
