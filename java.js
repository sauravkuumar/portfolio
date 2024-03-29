

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="https://i.ibb.co/2KKdtZk/profile-pic.jpg" type="lo.png"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer saurav</title>
    <link rel="stylesheet" href="style.css">
<link rel="me" href="https://www.blogger.com/profile/18241178981162942797" />
<meta name='google-adsense-platform-account' content='ca-host-pub-1556223355139109'/>
<meta name='google-adsense-platform-domain' content='blogspot.com'/>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8389120514271140&host=ca-host-pub-1556223355139109" crossorigin="anonymous"></script>

<!-- data-ad-client=ca-pub-8389120514271140 -->
</head>
<style>
    
*{
    margin: 0;
    padding: 0;
}
.conatiner2{
    width: 100%;
}
.wrapper {
    background-color: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    padding: 0px 10px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
}
   .wrapper .login-btn{
    width: 70px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgb(97, 97, 241);
}
.wrapper .logo img {
    height: 70px;
    display: block;
}
.wrapper .logo a{
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 5rem;
    font-family: 'Courier New', Courier, monospace;
}
.navbar {
    position: fixed;
    top: 0;
    left: 100%;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 20px;
    transition: left 0.3s;
}
.wrapper button{
    border: none;
    width: 70px;
    height: 25px;
    border-radius: 2rem;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgb(97, 97, 241);
}
.navbar.show {
    left: 0 !important;
}

.hide-scroll {
    overflow: hidden;
}
.navbar {
    display: flex;
}
.navbar nav ul{
    display: flex;
    align-items: center;
    margin-top: 1rem;
}
.navbar ul {
    all: unset;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}
.navbar ul a {
    all: unset;
    color: rgb(94, 94, 223);
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 400;
    font-size: 18px;
}
.navbar ul a:hover {
    color: #111111;
    text-decoration: underline overline;
    text-decoration-thickness: 3px;
}

.close-nav {
    text-align: left;
    margin-bottom: 10px;
}
.close-nav button {
    all: unset;
    background: #fff;
    font-size: 32px;
    cursor: pointer;
    border: none;
    padding: 15px;
    border-radius: 3px;
    color: #444444;
}
.close-nav button:hover {
    color: #222222;
    background: white;
}

.menu-bar button {
    border:none;
    background: #fff;
    height: 30px;
    width: 40px;
    padding: 2px 5px;
    cursor: pointer;
    border-radius: 3px;
}
.menu-bar i {
    display: block;
    border-top: 3px solid #444444;
    border-bottom: 3px solid 

#444444;
}
.menu-bar i::after {
    display: block;
    content: "";
    border-top: 3px solid #444444;
    margin: 6px 0;
}
.menu-bar button:hover {
    background: white;
}
.menu-bar button:hover i {
    border-color: #222222;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px;
}

@media (min-width: 730px) {
    .navbar {
        all: unset;
        display: block;
        
    }
    .conatiner2 .wrapper .logo a{
        font-size: 2px;
    }
    
    .container .content1 img{
        border-radius: 50%;
        margin-left: 5rem;
        width: 10px;
    }
    .navbar ul {
        flex-direction: row;
        gap: 20px;
        
    }
    .navbar ul a {
        font-size: inherit;
        
    }
    .close-nav,
    .menu-bar {
        display: none;
    }
    
}

/*ndafk sbdfkjag shfahfhasfna bsjkf*/
.container{
    display: flex;
    
}
.container .content1{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.container .content1 img{
    border-radius: 50%;
    margin-left: 1rem;
    width: 40%;
}
.container .content1 .text{
    font-family: 'Courier New', Courier, monospace;
}
.container .content1 .text h1{
    font-size: 3rem;
}
.container .content1 .text h2{
    font-size: 1.5rem;
}
.container .content1 .text button{
    margin-top: 1rem;
    width: 150px;
    height: 50px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bolder;
    border-color: #99cff4;
}
.container .content1 .text button:hover{
    transition: 0.5s;
    background-color: rgb(72, 72, 228);
    border: #99cff4;
    color: white;
}
.popup-container {
    display: none;
    position: fixed;
    top: 90%;
    left: 15%;
    border-radius: 0 10px 10px 10px;
    transform: translate(-50%, -50%);
    background-color: rgb(1, 1, 1);
    padding: 20px;
    color: #ccc;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 99;
    width: 200px;
    
  }
  
  .popup {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    .popup-container {
        display: flex;
        position: fixed;
        top: 90%;
        left: 35%;
        border-radius: 0px 5px 5px 5px;
        transform: translate(-50%, -50%);
        background-color: rgb(1, 1, 1);
        padding: 20px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 999;
        width: 205px;
        color: #ccc;
        font-size: 1rem;
      }
      .container .content1 .text h1{
        font-size: 1.7rem;
    }
    .container .content1 .text h2{
        font-size: 0.7rem;
    }
      .popup-container h2{
        display: flex;
        font-size: 15px;
      }
}
/* about section */
.container2{
    margin: 3rem;
    display: flex;
    flex-wrap: wrap;
    
}
.container2 .content2 h2{
    font-size: 30px;
    font-weight: 100;
    margin-top: 1rem;
}
.container2 .content2 h1{
    margin-top: 1rem;
    color: rgb(62, 62, 246);
}
.container2 .content2 h3{
    margin-top: 1rem;
    font-weight: 200;
    color: rgb(62, 62, 246);
}
.container2 .content2 p{
    font-size: 1rem;
    font-weight: 100;
    margin-top: 1rem;
}
.content3{
    display: flex;
    margin: 5rem;
}
@media screen and (max-width: 768px) {
    .content3{
        display: flex;
        flex-wrap: wrap;
        margin: 0rem;
    } 
    .container2 .content3 img{
        width: 320px;
        height: 320px;
    }
    .container2 .content3 .text2 {
        display: flex;
        margin-left: 0rem;
        margin-top: 1rem;
        font-weight: 100;
        font-size: 1rem;
        justify-content: space-between;
    }
    .container2{
        margin: 1rem;
    }
    
}
.container2 .content3{
    display: flex;
    align-items: center;
    justify-content: center;
}
.container2 .content3 img{
    width: 320px;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.content3 .text2 {
    display: flex;
    margin-left: 5rem;
    font-weight: 100;
    font-size: 1rem;
    justify-content: space-between;
}
@media screen and (max-width: 768px) {
    .footer{
        background-color: rgba(138, 140, 141, 0.422);
        height: 20rem;
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.footer{
    background-color: rgba(138, 140, 141, 0.422);
    height: 9.5rem;
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer button{
    margin-top: 0.5rem;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    color: rgb(255, 255, 255);
    background-color: #000000;
    cursor: pointer;
}

.footer p{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
}
.footer h2{
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
}
.footer h3{
    margin-top: 0.5rem;
    font-family: 'Courier New', Courier, monospace;
}
.footer .image{
    display: flex;
    align-items: center;
    justify-content: center;
  	margin-top:1rem;
}
.footer .image p{
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer img{
    width: 40px;
    display: flex;
    justify-content: space-between;
    filter: contrast(0.5);
    color: #000000;
    margin-left: 1rem;
}
.footer a{
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>

<body>
   
        <div class="conatiner2">
        <div class="wrapper">
            <div class="logo">
                <a href="#"><img src="https://i.ibb.co/nkvwsVG/lo.png" alt="dev-saurav"> </a>
            </div>
            
            <div class="navbar">
                <div class="close-nav"><button>×</button></div>
                <nav>
                    <ul>
                        <li><a href="https://sauravkuumar.github.io/navbar.github.io/">Courses</a></li>
                        <li><a href="https://sauravkuumar.github.io/navbar.github.io/webinar.html">Webinar</a></li>
                        <li><a href="https://sauravkuumar.github.io/navbar.github.io/instacode.html">Source Code</a></li>
                        <li><a href="#">Membership</a></li>

                    </ul>
                </nav>
                
            </div>
            <div class="menu-bar">
                <button><i></i></button>
            </div>
          
        </div>
    </div>
    <style>
        
    </style>
    
    
      <script src="script1.js"></script>
  
    <!--------------------CENTER--------------->
  <style>
    .container a{
    text-decoration: none;
    }
  </style>
    <div class="container">
        <div class="content1"><div class="text"> <h1>DEVELOPER SAURAV</h1>
        <br> <br> <h2>Fun • Coding • Tech • Programming</h2><a href="https://sauravkuumar.github.io/navbar.github.io/readmore.html">
          <button>READ MORE</button></a></div>
            <img src="https://i.ibb.co/Nrh2wdx/saurav-kuumar.jpg">
    </div>
    <script src="script.js"></script>
</div>
    <!----------------------about ------------>
    <div class="container2">
        <div class="content2">
            <h2>
                About Me
            </h2>
            <h1>
                Hello, I'm SAURAV, 
            </h1>
            <h3>
                A dedicated Full Stack Developer with a passion for crafting exceptional digital experiences.
            </h3>
            <p>My journey in the world of technology has been an exciting one, and I thrive on turning innovative ideas into functional, user-friendly applications. With a diverse skill set and a commitment to excellence, I specialize in building efficient and versatile projects using a variety of programming languages and technologies. Here's a bit more about what I bring to the table:</p>
        </div>
        <div class="content3">
            <img src="https://i.ibb.co/2KKdtZk/profile-pic.jpg">
            <div class="text2">
                <p>🚀 Flutter Enthusiast: I have a deep expertise in Flutter, which allows me to create stunning, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter's flexibility and performance capabilities inspire me to push the boundaries of app development.<br>
                    <br> <br>💻 Full Stack Prowess: My skills aren't limited to one aspect of development. I thrive on both the front-end and back-end, ensuring that your project not only looks great but also functions flawlessly. Whether it's PHP, Python, JavaScript, or any other tech stack, I've got it covered.<br>
                    <br> <br>🌐 Cross-Platform and Cross-Browser Compatibility: I understand the importance of making your projects accessible to a wide audience. I take pride in my ability to create applications and websites that work seamlessly across various platforms and browsers, delivering a consistent user experience.<br>
                    <br> <br>🎨 UI/UX Design: Beyond just code, I have a keen eye for design. I believe that a beautiful, intuitive user interface is just as important as robust functionality. I pay meticulous attention to detail to ensure your project not only works well but also looks fantastic.</p>
            </div>
        </div>
    </div>
    <div class="mainbox">
    <div class="containers">
        <h2>Contact Us</h2>
    <form action="#" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Submit">
    </form>
            
    </div>
</div>
<style>
    .mainbox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .containers {
        max-width: 500px;
        width: 100%;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        
    }
    h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    label {
        margin-bottom: 6px;
        font-weight: bold;
    }
    input[type="text"], textarea {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    textarea {
        resize: none;
    }
    input[type="submit"] {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 12px 20px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }
    input[type="submit"]:hover {
        background-color: #0056b3;
    }

    /* Animation */
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .containers {
        animation: slideInFromLeft 0.5s ease-out;
    }
    
</style>
<!-----------Join us---------->

<div class="footer">
   
    <div class="image">
    <a href="https://www.instagram.com/saurav_kuumar_/?hl=en"><img src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/64e08dd8e4b03f0cb2dc89f0/pages/assets/images/7PASNimage5.png"><p>Instagram</p> </a>
    <a href="https://www.youtube.com/@codetodream"><img src="https://dz8fbjd9gwp2s.cloudfront.net/orgData/64e08dd8e4b03f0cb2dc89f0/pages/assets/images/gMYrUimage5.png"><p>Youtube</p></a>
</div>
    <h2>Developer Saurav &#169; 2023</h2> 
    <h2><a href=""> •Privacy policy </a>&nbsp;
        <a href=""> •Terms of use </a>&nbsp;
        <a href=""> •Contact us</a>&nbsp;
        <a href=""> •Refund policy</a></h2> 
</div>
<script>
    const theBody = document.querySelector('body');
const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');

// Hiding body scroll when mobile navigation menu opens
function bodyScroll() {
    if (Navbar.classList.contains('show')) {
        theBody.classList.add('hide-scroll');
    } else if (theBody.classList.contains('hide-scroll')) {
        theBody.classList.remove('hide-scroll');
    }
}

function showHide() {
    Navbar.classList.toggle('show');
    bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;
</script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const popupContainer = document.getElementById('popupContainer');
        const popup = document.getElementById('popup');
      
        const messages = [
          'Avinash registered 12 minutes ago, form Delhi',
          'Vikki registered 30 minutes ago,from Bihar Begusarai',
          'Aditiya Raj saini registered 15 minutes ago,from Bihar Begusarai',
          'Abhishek Raj  registered 3 minutes ago,from Mumbai',
          'Aryan Kumar registered 10 minutes ago,from Bihar Samastipur'
        ];
      
        let currentIndex = 0;
      
        function showPopup() {
          popup.textContent = messages[currentIndex];
          popupContainer.style.display = 'block';
      
          setTimeout(function () {
            popupContainer.style.display = 'none';
            currentIndex = (currentIndex + 1) % messages.length;
            setTimeout(showPopup, 10000); 
          }, 5000); 
        }
      
        showPopup();
      });
      
</script>
<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>
