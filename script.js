// Talent Page Head Line Switch
const links = document.querySelectorAll(".menu-items a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("a.active").classList.remove("active");
    link.classList.add("active");
  });
});
// Accordion
const accordion = document.getElementsByClassName('accordion-container');
        for(i = 0; i < accordion.length; i++ ) {
            accordion[i].addEventListener('click', function() {
                this.classList.toggle('active')
            })
        }

// Modal

// Get the modal
var modal = document.getElementById("modal-wrapper");
window.onload = function() {
  // Modal

// Get the button that opens the modal
var btn1 = document.getElementById("modal9-1");
var btn2 = document.getElementById("modal9-2");
var btn3 = document.getElementById("modal9-3");
var btn4 = document.getElementById("modal9-4");
  // Get the modal
  var modal = document.getElementById("modal-wrapper");

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close");
  // Get the button that opens the modal
  var btn1 = document.getElementById("modal9-1");
  var btn2 = document.getElementById("modal9-2");
  var btn3 = document.getElementById("modal9-3");
  var btn4 = document.getElementById("modal9-4");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
}
  // Get the <span> element that closes the modal
  var span = document.getElementById("modal-close");

btn2.onclick = function() {
  modal.style.display = "block";
}
  // When the user clicks on the button, open the modal
  btn1.onclick = function() {
    modal.style.display = "block";
  }

btn3.onclick = function() {
  modal.style.display = "block";
}
  btn2.onclick = function() {
    modal.style.display = "block";
  }

btn4.onclick = function() {
  modal.style.display = "block";
}
  btn3.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
  btn4.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
} 

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

}
  71  
style.css
@@ -31,7 +31,8 @@ body {
#zuri-training-footer *,
#zuri-talent-head,
#zuri-talent-main,
#zuri-talent-footer {
#zuri-talent-footer,
#modal-wrapper {
    font-family: 'Graphik', sans-serif;
}

@@ -1144,6 +1145,8 @@ text-decoration: none;
    overflow: auto;
    width: 100%; /* Very Important because This triggers the event.target section */
    height: 100%; /* Very Important because This triggers the event.target section */
    background-color: rgba(0, 0, 0, 0.507);

}

#modal-wrapper .modal-container {
@@ -1185,14 +1188,51 @@ text-decoration: none;
    margin-bottom: 0.5rem;
}

/* Modal Sample */

  #modal-close:hover,
  #modal-close:focus {
    color: black;
    fill: currentColor;
#modal-close {
    cursor: pointer;
  }
}

/* Talent Modal */
#modal-wrapper .btn-modal-pop {
    margin: 0.5rem 0 1rem;
}

#modal-wrapper a {
    background-color: #e7332b;
    border-radius: 0 0 8px 0;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    padding: 11px 50px;
    text-decoration: 0;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    white-space: nowrap;
}

#modal-wrapper a:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
}

#modal-wrapper .modal-container-talent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    padding: 5rem 2rem;
}

.modal-container-talent #modal-top h2 {
    font-size: 2.5rem;
    line-height: 3rem;
}

.modal-container-talent #modal-top {
    gap: 1rem;
}

  .footer-hr {
    display: none;
@@ -2454,6 +2494,19 @@ text-decoration: none;
    #zuri-talent-main .zuri-talent-main-4 .talent-btns {
        display: block;
    }
  }

    #modal-wrapper .modal-container-talent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        gap: 1rem;
        padding: 3rem 1rem;
    }

    #modal-wrapper .modal-container-talent h2 {
        font-size: 2rem;
        line-height: 2.5rem;
    }

  } 
  46  
talent.html
@@ -17,7 +17,7 @@
                <a href="#zuri-talent-main-2" class="zuri-menu-link">Impact</a>
                <a href="#zuri-talent-main-4" class="zuri-menu-link">Why Us</a>

                <div><a href="" class="header-btn">Hire talents</a></div>
                <div id="modal9-5"><span class="header-btn">Hire talents</a></span>
            </div>
        </nav>
    </header>
@@ -132,6 +132,48 @@ <h2>Why Hire our <span>Talents</span></h2>
        </div>
    </footer>

    <script src="app.js" defer></script>
    <div id="modal-wrapper" class="modal">
        <div class="modal-container modal-container-talent">
            <div id="modal-top">
                <h2>Talent Recruitment</h2>
                <img src="img/eva_close-outline.svg" alt="" id="modal-close">
            </div>
            <p>We will love to discuss your business and your talent needs.</p>
            <div class="btn-modal-pop"><a href="#">Fill this form</a></div>
            <p>OR</p>
            <div class="btn-modal-pop"><a href="#">Book a Consultation</a></div>
        </div>
    </div>

    <script>
            window.onload = function() {
            // Modal
            // Get the modal
            var modal = document.getElementById("modal-wrapper");

            // Get the button that opens the modal
            var btn5 = document.getElementById("modal9-5");

            // Get the <span> element that closes the modal
            var span = document.getElementById("modal-close");

            // When the user clicks on the button, open the modal
            btn5.onclick = function() {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
                }
            };
        }
    </script>
</body>
</html> 
