
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
//theme
var thememode=document.getElementById("thememode");
thememode.onclick=function(){
   
  if (thememode.innerText=="dark_mode") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    thememode.innerText="light_mode";
    header.style.backgroundColor="black";
    header.style.color="white";
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          thememode.innerText="dark_mode";
          header.style.backgroundColor="white";
          header.style.color="black";

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


