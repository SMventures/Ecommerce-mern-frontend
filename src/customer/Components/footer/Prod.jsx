import React, { useEffect } from 'react';
import "./styles1.css";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default function Prod() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    jet();
    revealElements();
  }

  function jet() {
    var ilake = document.getElementById("head");
    if (ilake) {
      ilake.style.top = "0px";
      ilake.style.position = "sticky";
    }
  }

  function revealElements() {
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
  }

  return (
    <div className="App">
     
      <main>
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
              <h1>Trading Merchandise</h1>
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
      </main>
    </div>
  );
}
