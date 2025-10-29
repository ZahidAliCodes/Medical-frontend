const selectedLanguageImg = document.querySelector(".lang-selected-img");


$(document).ready(function () {
  var availableTags = [
    { value: "about-us.html", label: "about-us" },
    { value: "blog.html", label: "blog" },
    { value: "contact-us.html", label: "contact-us" },
    { value: "discussion-next.html", label: "discussion-next" },
    { value: "discussion.html", label: "discussion" },
    { value: "faq-more.html", label: "faq-more" },
    { value: "faq.html", label: "faq" },
    { value: "go-green.html", label: "go-green" },
    { value: "home-security.html", label: "home-security" },
    { value: "partners.html", label: "partners" },
    { value: "pricing.html", label: "pricing" },
    { value: "privacy-policy.html", label: "privacy-policy" },
    { value: "repair-service.html", label: "repair-service" },
    { value: "smart-home.html", label: "smart-home" },
    { value: "solar-panel.html", label: "solar-panel" },
    { value: "start-repair-choose.html", label: "start-repair-choose" },
    { value: "tracking-status.html", label: "tracking-status" },
    { value: "tracking.html", label: "tracking" },
    { value: "tv-sound.html", label: "tv-sound" },
  ];
  $("input#inputSearch").autocomplete({
    source: availableTags,
    select: function (event, ui) {
      window.location.href = ui.item.value;
    }
  });
});
$('input#inputSearch').on('keyup', function () {
  if (this.value.length > 0) {
    $('.quick-links').hide();
  }
  else {
    $('.quick-links').show();
  }
});

/// location button and search
$(".btnLocation").click(function () {
  console.log("test");
  $(".btnLocation").toggleClass("btn_active");
  $(".btnTextLocation").toggleClass("text_active");
  $(".LocationInput").toggleClass("input_active").focus();
  overlay.classList.add("show");
});

/////// Switch Light/Dark Mode
// ///Mobile
function MobileMode() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("ModeSelected", "dark-theme");
    document.querySelector(".icon-mode-mobile").src = "img/icons/sun.png";
    localStorage.setItem("ModeSelectedImg", document.querySelector(".icon-mode-mobile").src);
  }
  else {
    localStorage.setItem("ModeSelected", "light-theme");
    document.querySelector(".icon-mode-mobile").src = "img/icons/moon.png";
    localStorage.setItem("ModeSelectedImg", document.querySelector(".icon-mode-mobile").src);
  }
}

//Desktop
var iconMode = document.querySelector(".icon-mode");
$(".icon-mode").click(function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("ModeSelected", "dark-theme");
    iconMode.src = "img/icons/sun.png";
    localStorage.setItem("ModeSelectedImg", iconMode.src);
  }
  else {
    localStorage.setItem("ModeSelected", "light-theme");
    iconMode.src = "img/icons/moon.png";
    localStorage.setItem("ModeSelectedImg", iconMode.src);
  }
});





const swiperService = document.querySelectorAll(".services-swiper .swiper-slide"),
  servicesImg = document.querySelectorAll(".services-swiper_item img"),
  servicesHeader = document.querySelectorAll(".services-swiper_item h5");

for (let i = 0; i < swiperService.length; i++) {
  swiperService[i].addEventListener("mouseover", function () {
    servicesHeader[i].style.backgroundColor = "black";
    servicesHeader[i].style.color = "whitesmoke";
    servicesImg[i].style.transform = "scale(1.5)";
  });
  swiperService[i].addEventListener("mouseout", function () {
    servicesHeader[i].style.backgroundColor = "whitesmoke";
    servicesHeader[i].style.color = "black";
    servicesImg[i].style.transform = "scale(1)";
  });
};


////// Navbar Animation (Search -- Dropwdown Services)
const servicesItem1 = document.querySelector("#home-tab"),
  servicesItem2 = document.querySelector("#profile-tab"),
  servicesItem3 = document.querySelector("#contact-tab"),
  supportItem = document.querySelector("#support-tab"),
  searchButton = document.querySelector("nav .navbar-nav .link-search"),
  inputBox = document.querySelector('.inputSearch'),
  closeButton = document.querySelector(".search-container .link-close"),
  desktopNav = document.querySelector(".desktop-nav"),
  searchContainer = document.querySelector(".search-container"),
  servicesDropdown = document.querySelector(".services-dropdown_menu"),
  supportDropdown = document.querySelector(".support-dropdown_menu"),
  service_dropDownMenu = document.querySelector(".service_dropDownMenu"),
  support_dropDownMenu = document.querySelector(".suppport_dropDownMenu"),
  overlay = document.querySelector(".overlay");

service_dropDownMenu.addEventListener("mouseover", () => {
  supportDropdown.classList.add("hide");
  servicesDropdown.classList.add("hide");
  overlay.classList.remove("show");
})
function supportMenu() {
  supportDropdown.classList.remove("hide");
  overlay.classList.add("show");
} 

searchButton.addEventListener("click", () => {
  desktopNav.classList.add("hide");
  searchContainer.classList.remove("hide");
  overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
})

document.querySelectorAll("nav .navbar-collapse > ul > li.nav-item:not(:has(.link-search))").forEach(i=> {
  i.addEventListener("mouseover", ()=> {
      desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  overlay.classList.remove("show");
  })
})


servicesItem1.addEventListener("click", () => {
  servicesDropdown.classList.remove("hide");
  overlay.classList.add("show");

  
})
servicesItem2.addEventListener("click", () => {
  servicesDropdown.classList.remove("hide");
  overlay.classList.add("show");
})
servicesItem3.addEventListener("click", () => {
  servicesDropdown.classList.remove("hide");
  overlay.classList.add("show");
})
supportItem.addEventListener("click", () => {
  supportDropdown.classList.remove("hide");
  overlay.classList.add("show");
})

overlay.addEventListener("mouseover", () => {
  desktopNav.classList.remove("hide");
  searchContainer.classList.add("hide");
  servicesDropdown.classList.add("hide");
  supportDropdown.classList.add("hide");
  document.querySelector(".slicknav_nav").style.display = "none";
  overlay.classList.remove("show");
  $(".btnLocation").removeClass("btn_active");
  $(".btnTextLocation").removeClass("text_active");
  $(".LocationInput").removeClass("input_active");
});

searchButton.addEventListener("mouseover", ()=> {
   desktopNav.classList.remove("hide"); 
  servicesDropdown.classList.add("hide");
  supportDropdown.classList.add("hide");
  document.querySelector(".slicknav_nav").style.display = "none";
  overlay.classList.remove("show");
  $(".btnLocation").removeClass("btn_active");
  $(".btnTextLocation").removeClass("text_active"); 
})

$(document).ready(function () {
  var swiper1 = new Swiper(".head-swiper", {
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });


  var swiper2 = new Swiper(".partners-swiper", {
    slidesPerView: 1,
    slidesPerColumn: 3,
    spaceBetween: 2,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerColumn: 3,
      },
      640: {
        slidesPerView: 3,
        slidesPerColumn: 3,
      },
      769: {
        slidesPerView: 3,
        slidesPerColumn: 3,
      },
      1024: {
        slidesPerView: 4,
        slidesPerColumn: 3,

      },
      1200: {
        slidesPerView: 4,
        slidesPerColumn: 3,

      },
    },
    navigation: {
      nextEl: ".swiper-button-next.partners-swiper-button",
      prevEl: ".swiper-button-prev.partners-swiper-button",
    }
  });
  const members = document.querySelectorAll(".team-section_card img");
  for (let i = 0; i < members.length; i++) {
    members[i].addEventListener("click", function () {
      members.forEach(function (element) {
        element.classList.remove("active");
      });
      members[i].classList.add("active");
    });
  };

  var swiper2 = new Swiper(".members-swiper", {
    slidesPerView: 1,
    slidesPerColumn: 3,
    spaceBetween: 2,
    speed: 0,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerColumn: 3,
      },
      640: {
        slidesPerView: 3,
        slidesPerColumn: 3,
      },
      769: {
        slidesPerView: 3,
        slidesPerColumn: 3,
      },
      1024: {
        slidesPerView: 4,
        slidesPerColumn: 3,

      },
      1200: {
        slidesPerView: 4,
        slidesPerColumn: 3,

      },
    },
    navigation: {
      nextEl: ".swiper-button-next.partners-swiper-button",
      prevEl: ".swiper-button-prev.partners-swiper-button",
    }
  });
  var swiper0 = new Swiper(".Apple-swiper", {
    slidesPerView: 1,
    slidesPerColumn: 12,
    spaceBetween: 2,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerColumn: 6,
      },
      640: {
        slidesPerView: 3,
        slidesPerColumn: 4,
      },
      769: {
        slidesPerView: 3,
        slidesPerColumn: 4,
      },
      1024: {
        slidesPerView: 4,
        slidesPerColumn: 4,

      },
      1200: {
        slidesPerView: 5,
        slidesPerColumn: 4,

      },
    },
    navigation: {
      nextEl: ".swiper-button-next.smartPhones-swiper-button",
      prevEl: ".swiper-button-prev.smartPhones-swiper-button",
    }
  });

  var swiper3 = new Swiper(".date-swiper", {
    // autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper4 = new Swiper(".news-swiper", {
    slidesPerView: 1,
    spaceBetween: 55,
    speed: 0,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swipe5 = new Swiper(".services-swiper1", {
    observer: true,
    observeParents: true,
    spaceBetween: 2,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next.services-swiper1-button",
      prevEl: ".swiper-button-prev.services-swiper1-button",
    },
  });

  var swipe6 = new Swiper(".services-swiper2", {
    observer: true,
    observeParents: true,
    spaceBetween: 2,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next.services-swiper2-button",
      prevEl: ".swiper-button-prev.services-swiper2-button",
    },
  });

  var swipe7 = new Swiper(".services-swiper3", {
    observer: true,
    observeParents: true,
    spaceBetween: 2,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next.services-swiper3-button",
      prevEl: ".swiper-button-prev.services-swiper3-button",
    },
  });

  var swipe8 = new Swiper(".support-swiper1", {
    observer: true,
    observeParents: true,
    spaceBetween: 2,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next.support-swiper1-button",
      prevEl: ".swiper-button-prev.support-swiper1-button",
    },
  });
});
/********************************/
let Phones_items = document.querySelectorAll('.phones-list .carousel .carousel-item')

Phones_items.forEach((el) => {
  const minPerSlide = 5
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = Phones_items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});

let Laptops_items = document.querySelectorAll('.laptops-list .carousel .carousel-item')

Laptops_items.forEach((el) => {
  const minPerSlide = 5
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = Laptops_items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});

let Tablets_items = document.querySelectorAll('.tablets-list .carousel .carousel-item')

Tablets_items.forEach((el) => {
  const minPerSlide = 5
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = Tablets_items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});

let Watches_items = document.querySelectorAll('.watches-list .carousel .carousel-item')

Watches_items.forEach((el) => {
  const minPerSlide = 5
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = Watches_items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
/*******************************/

/************ Product Details page ********************/
function changeImage(element) {

  var main_prodcut_image = document.getElementById('main_product_image');
  main_prodcut_image.src = element.src;
}
/*====================================
  Cart Plus Minus Button
======================================*/
var pomoLength = 1;
$('.btn-number-plus').click(function () {
  pomoLength++;
  $('.input-number').val(pomoLength);
});
$(".btn-number-minus").click(function () {
  if (pomoLength == 1) return;
  pomoLength--;
  $('.input-number').val(pomoLength);
});
// Remove Items From Cart
$('.shopping-cart .remove').click(function () {
  event.preventDefault();
  $(this).parent().parent().hide(400);

})
/********************************/
const cards = document.querySelectorAll(".ISO-section .card"),
  iconImgs = document.querySelectorAll(".icon-center img");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    iconImgs.forEach(function (element) {
      element.classList.remove("active");
    });
    iconImgs[i].classList.add("active");
  });
  cards[i].addEventListener("mouseout", function () {
    iconImgs.forEach(function (element) {
      element.classList.remove("active");
    });
  });
};
/*************************  */
const paymentMethodBtn = document.querySelectorAll(".payment-method-btn");
for (let i = 0; i < paymentMethodBtn.length; i++) {
  paymentMethodBtn[i].addEventListener("click", () => {
    paymentMethodBtn.forEach(function (element) {
      element.classList.remove("clicked");
    });
    paymentMethodBtn[i].classList.add("clicked");
  });
};
/** Modal Agree privacy policy*/
function check() {
  let flexCheckDefault = document.getElementById('checkId');
  flexCheckDefault.setAttribute("checked", "checked");
}
function uncheck() {
  let flexCheckDefault = document.getElementById('checkId');
  flexCheckDefault.removeAttribute("checked");
}
$("#TermsOfUse").on('click', function () {
  $('#popup-privacyServices-modal').modal('show');
})
$("#cancelPrivacyPolicyModal").on('click', function () {
  $('#flexCheckDefault').prop('checked', false);
  $('#popup-privacyServices-modal').modal('hide');
})
$("#submitAgreeModal").on('click', function () {
  $('#flexCheckDefault').prop('checked', true);
  $('#popup-privacyServices-modal').modal('hide');
})


$(document).ready(function () {
  window.togglePassword = togglePassword; //export function sample to the globals.
  function togglePassword() {
    var x = document.getElementById("form-password");
    // var x = $('#form-password');
    if (x.type === "password") {
      x.type = "text";
      $('.input-group.show-password i').addClass('fa-eye-slash');
      $('.input-group.show-password i').removeClass('fa-eye');
    } else {
      x.type = "password";
      $('.input-group.show-password i').addClass('fa-eye');
      $('.input-group.show-password i').removeClass('fa-eye-slash');

    }
  }
});

$('.start-repair_brand-checkbox').change(function () {
  var on = this.checked;
  $(this).parent('label').toggleClass('clicked');
});

$('.start-repair_subservices-item').click(function () {
  $(this).toggleClass('active');
});

const MobileSubmenu = document.querySelectorAll(".mobile-menu .submenu-item");

/* slicknav mobile menu active  */
$('.mobile-menu').slicknav({
  prependTo: '.navbar-header',
  parentTag: 'liner',
  allowParentLinks: true,
  duplicate: true,
  label: '',
  closedSymbol: '<i class="icon-arrow-right"></i>',
  openedSymbol: '<i class="icon-arrow-down"></i>',
});

jQuery(function ($) {
  //Initiat WOW JS
  new WOW().init();
});

$(function () {
  $('.services-dropdown_menu-close').on('click', function () {
    $(this).closest(".tab-pane").removeClass('active');
    $(this).closest(".tab-pane").removeClass('show');
    $(".services-dropdown_item").removeClass('active');
  });

});

$(".EmailFormYellow").on('submit', function () {
  $('#verificationModalYellow').modal('show');
})
$(".EmailFormBlue").on('submit', function () {
  $('#verificationModalBlue').modal('show');
})
$(".HideVerification").on('click', function () {
  $('.modal').modal('hide');
})

$(window).scroll(function () {
  if ($(document).scrollTop() > 900 && $("#popup-modal").attr("displayed") === "false") {
    $('#popup-modal').modal('show');
    $("#popup-modal").attr("displayed", "true");
  }
});
// $(window).scroll(function () {
//   if ($(document).scrollTop() > 900 && $("#popup-modal2").attr("displayed") === "false") {
//     $('#popup-modal2').modal('show');
//     $("#popup-modal2").attr("displayed", "true");
//   }
// });
$(window).scroll(function () {
  if ($(document).scrollTop() > 900 && $("#popup-modal3").attr("displayed") === "false") {
    $('#popup-modal3').modal('show');
    $("#popup-modal3").attr("displayed", "true");
  }
});

/************************* Brands */
const MoreBrands = document.querySelector(".moreBrands"),
      brandsBtn = document.querySelector(".AllBrandsBtn");
function SeeMoreBrands() {
  MoreBrands.style.display = "block";
  brandsBtn.style.display = "none";
}

///////////////////////// Preloading ////////////////////////////////////
var loader = document.querySelector(".loader");
var loadOverlay = document.querySelector(".loadOverlay")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
  loadOverlay.classList.add("disppear");
}

///////////// Back to Top /////////////////////////////////
$(document).ready(function () {
  var progressPath = document.querySelector('.BackTop-wrap path');
  var pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }

  updateProgress();
  $(window).scroll(updateProgress);

  var offset = 50;
  var duration = 550;

  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.BackTop-wrap').addClass('active-BackTop');
    } else {
      jQuery('.BackTop-wrap').removeClass('active-BackTop');
    }
  });

  jQuery('.BackTop-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })
});

/*Dropdown Menu*/
const languages = document.querySelectorAll(".language_dropdown .dropdown-item"),
  languageImg = document.querySelectorAll(".language_dropdown img"),
  theme = document.querySelectorAll('.StyleLink');

for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener("click", function () {
    selectedLanguageImg.src = languageImg[i].src;
    languages.forEach(function (element) {
      element.classList.remove("selected");
    });
    localStorage.setItem("activeLanguage", languages[i].getAttribute('data-lang-code'));
    languages[i].classList.toggle("selected");
    localStorage.setItem("LanguageSelected", languageImg[i].src);
    if (languages[i].getAttribute('data-lang-code') == "ar-AR") {
      changeDirectionToRight();
    }
    else {
      changeDirectionToLeft();
    }
  });
};


let LanguageDirection = localStorage.getItem('dir');
const changeDirectionToRight = () => {
  document.documentElement.setAttribute('dir', 'rtl');
  localStorage.setItem("dir", "rtl");
  theme.forEach(function (element) {
    element.setAttribute('href', 'css/ar-style.css');
    localStorage.setItem("href", "css/ar-style.css");
  });
}
//}

const changeDirectionToLeft = () => {
  document.documentElement.setAttribute('dir', 'auto');
  localStorage.setItem("dir", "auto");
  theme.forEach(function (element) {
    element.setAttribute('href', 'css/style.css');
    localStorage.setItem("href", "css/style.css");
  });
}
//}
const getLanguageImg = () => {
  if (localStorage.getItem('LanguageSelected') != null) {
    let currLanguage = localStorage.getItem('LanguageSelected');
    var languageObj = localStorage.getItem('activeLanguage');
    selectedLanguageImg.src = currLanguage;
    languages.forEach(element => {
      element.classList.remove("selected");
      if (element.getAttribute('data-lang-code') == languageObj) {
        element.classList.add("selected");
      }
    });
  }
}

const switchMode = () => {
  if (localStorage.getItem('ModeSelectedImg') != null) {
    console.log(localStorage.getItem('ModeSelectedImg'));
    let ModeTheme = localStorage.getItem('ModeSelected');
    let ModeThemeIcon = localStorage.getItem('ModeSelectedImg');
    document.querySelector(".icon-mode-mobile").src = ModeThemeIcon;
    iconMode.src = ModeThemeIcon;
    document.body.classList.add(ModeTheme);
  }
}

window.onload = () => {
  let LanguageTheme = localStorage.getItem('dir');
  switchMode();
  if (LanguageTheme === 'rtl') {
    changeDirectionToRight();
    getLanguageImg();
  } else {
    changeDirectionToLeft();
    getLanguageImg();
  }
  document.querySelector(".slicknav_btn").addEventListener("click", function () {
    if (document.querySelector(".slicknav_btn").classList.contains('slicknav_open')) {
      overlay.classList.add("show");
    }
    else {
      overlay.classList.remove("show");
    }
  });
}
////////// Buy Back Confirmation 
$("#submit_order").on('click', function () {
  $('#confirmationModalYellow').modal('show');
})
$(".HideConfirmation_btn").on('click', function () {
  $('#confirmationModalYellow').modal('hide');
})
//////////// careers login modal
$(".HideWelcomeModal_btn").on('click', function () {
  $('#welcome_back_modal').modal('hide');
})
//////////// Careers Sign up modal
$(".showSignOutModal_btn").on('click', function () {
  $('#popup-privacyServices-modal').modal('hide');
  $('#SignedOut_modal').modal('show');
})
$(".CloseSignedOutModal_btn").on('click', function () {
  $('#SignedOut_modal').modal('hide');
})
$(".acceptTerms_btn").on('click', function () {
  $('#popup-privacyServices-modal').modal('hide');
})
/////////////// Secondary Navbar 
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);


  