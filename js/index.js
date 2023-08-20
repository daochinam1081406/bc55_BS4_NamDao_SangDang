
var togglesidebar = document.getElementById("togglesidebar");
togglesidebar.onclick = function () {
    var rightsidebar=document.getElementById("rightsidebar");
    if (togglesidebar.className=="fa title-open-rightsidebar tooltipstered fa-angle-double-left") {
        togglesidebar.classList.remove("fa-angle-double-left");
        togglesidebar.classList.add("fa-angle-double-right");
        rightsidebar.classList.remove("hide-right-bar-notifications");
      } else {
        togglesidebar.classList.remove("fa-angle-double-right");
        togglesidebar.classList.add("fa-angle-double-left");
        rightsidebar.classList.add("hide-right-bar-notifications");
      }
      console.log(togglesidebar.className);
  
};
// back to top
let mybutton = document.getElementById("btnBackToTop");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  smoothScrollToTop(); // Gọi hàm lên đầu trang mềm mượt
}

function smoothScrollToTop() {
  const startingY = window.scrollY;
  const targetY = 0;
  const duration = 1000; // Thời gian di chuyển (miliseconds)
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Giới hạn tiến trình từ 0 đến 1
    const ease = easeOutCubic(progress); // Hàm "easing" để tạo cảm giác mềm mượt

    window.scrollTo(0, startingY + ease * (targetY - startingY));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Hàm "easing" để tạo hiệu ứng mềm mượt
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

var header = document.querySelector('nav.navbar.navbar-expand-lg');
var PageCTA = document.getElementById('products');
var casptonecta=document.getElementById('casptone-cta');
var h3pj=document.querySelector('.h3pj');
var ppj=document.querySelector('.ppj')
var h3pj2=document.querySelector('.h3pj2');
var ppj2=document.querySelector('.ppj2')
var h3pj3=document.querySelector('.h3pj3');
var ppj3=document.querySelector('.ppj3');
var themenav=document.querySelector('.nav-pills .nav-link.active');
var nav1=document.querySelector('.nav1');
var nav2=document.querySelector('.nav2');
var nav3=document.querySelector('.nav3');

//theme
var thememode=document.getElementById("thememode");
thememode.onclick=function(){
   
  if (thememode.innerText=="dark_mode") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    thememode.innerText="light_mode";
    header.style.backgroundColor="#191c1d";
    header.style.color="white";
    PageCTA.style.backgroundColor="#141616";
    casptonecta.style.backgroundColor="#141616";
    h3pj.style.color="#eee";
    ppj.style.color="#b7b7b7"; 
    h3pj2.style.color="#eee";
    ppj2.style.color="#b7b7b7"; 
    h3pj3.style.color="#eee";
    ppj3.style.color="#b7b7b7"; 
    themenav.style.backgroundColor="#141616";
    nav1.style.color="#eee";
    nav2.style.color="#eee";
    nav3.style.color="#eee";

    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          thememode.innerText="dark_mode";
          header.style.backgroundColor="white";
          header.style.color="#191c1d";
          PageCTA.style.backgroundColor="white";
          casptonecta.style.backgroundColor="white";
          h3pj.style.color="black";
          ppj.style.color="black"; 
          h3pj2.style.color="black";
          ppj2.style.color="black"; 
          h3pj3.style.color="black";
          ppj3.style.color="black"; 
          themenav.style.backgroundColor="white";
          nav1.style.color="black";
          nav2.style.color="black";
          nav3.style.color="black";
      

         

    }    
};

var headerHeight = window.getComputedStyle(header).height;
var scrolled = false;

window.addEventListener('scroll', function() {
  if (!scrolled) {
    scrolled = true;
    setTimeout(function() {
      var currentPosition = window.scrollY;
      if (currentPosition > 0) {
        var number=0.85* parseFloat(headerHeight);
        header.style.height = number+'px';
      } else {
        header.style.height = headerHeight;
      }
      scrolled = false;
    }, 400); // Đặt khoảng thời gian giữa các thay đổi
  }
});


