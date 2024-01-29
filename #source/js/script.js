Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(document).ready(function () {
  $(".beforeAfter_content").twentytwenty();
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".nav-item").click(function (event) {
  $(this).find(".sub-menu").toggleClass("open");
});
$(".beforeAfter  .slide").twentytwenty();
$(".faq-item").click(function (event) {
  $(this).toggleClass("open");
});
$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});

$(".search_wrap form").click(function () {
  $(".search-list").toggleClass("open");
});
$(document).on("click", function (e) {
  if (!$(e.target).closest(".search_wrap").length) {
    $(".search-list").removeClass("open");
  }
});

$(".filter-item").click(function () {
  let index = $(this).data("index");

  if (index === "ALL") {
    $(this).closest(".filters").find(".filter-item").removeClass("open");
    $(this).addClass("open");
    $(this).closest("section").find(".filter_content-item").addClass("open");
  } else {
    $(this).closest(".filters").find(".filter-item").removeClass("open");
    $(this).addClass("open");
    $(this).closest("section").find(".filter_content-item").removeClass("open");
    $('.filter_content-item[data-index="' + index + '"]').addClass("open");
  }
  if ($(window).width() < 1024) {
    $(".filter_content-item .forms-list")
      .slick("unslick")
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 744,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
  if ($(window).width() < 1024) {
    $(".prod_list")
      .slick("unslick")
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 744,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
});

$(".faq-item").click(function (event) {
  let parentListItem = $(this).closest("li");
  let isPlusOpen = parentListItem.find(".plus").hasClass("open");
  $(".plus").removeClass("open");
  $(".answer").removeClass("open");
  $(".question").removeClass("open");
  if (isPlusOpen) {
    parentListItem.find(".answer").removeClass("open");
  } else {
    parentListItem.find(".answer").addClass("open");
    parentListItem.find(".plus").addClass("open");
    parentListItem.find(".question").addClass("open");
  }
});

$(".category").click(function (event) {
  $(".categories-card").toggleClass("open");
});
$(".categories-card .close").click(function (event) {
  $(".categories-card").toggleClass("open");
});

//-------------------------_SLIDERS_---------------------------//

$(".issues-slider").slick({
  slidesToShow: 3,
  prevArrow: $(".issues").find(".prev"),
  nextArrow: $(".issues").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".brands-list").slick({
  slidesToShow: 7,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".services-slider").slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".services-slider").closest("section").find(".prev"),
  nextArrow: $(".services-slider").closest("section").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".process-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
});
$(".projectInformation_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
});
$(".blogs-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".similar-product-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    $(".prod_list").each(function (index, element) {
      var $slider = $(element);
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
    });
  }
  if ($(window).width() < 1024) {
    $(".forms-list").each(function (index, element) {
      var $slider = $(element);
      $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 744,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  }
});
$(window).trigger("resize");

//--------------------FORMS--------------------//

$(document).ready(function () {
  var $phoneInput = $("#tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

$(document).ready(function () {
  $(".file-btn").on("click", function () {
    $(this).closest(".fileinput").find(".file").trigger("click");
  });

  $(".file").on("change", function () {
    var fileName = $(this)[0].files[0].name;
    $(this).closest(".fileinput").find(".file-name").val(fileName);
  });
});
// const validation = new JustValidate("#main-form");
// validation
//   .addField("#name", [
//     {
//       rule: "required",
//       errorMessage: "Name is required",
//     },
//     {
//       rule: "minLength",
//       value: 2,
//     },
//   ])
//   .addField("#tel", [
//     {
//       rule: "required",
//       errorMessage: "Phone number is required",
//     },
//     {
//       rule: "minLength",
//       value: 14,
//       errorMessage: "The field must contain a minimum of 10 characters",
//     },
//   ])
//   .addField("#email", [
//     {
//       rule: "required",
//       errorMessage: "Email is required",
//     },
//     {
//       rule: "email",
//       errorMessage: "Email is invalid!",
//     },
//   ]);

const validation = new JustValidate(".form");
validation
  .addField(".inputName", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ])
  .addField(".inputLName", [
    {
      rule: "required",
      errorMessage: "Last name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])

  .addField("select", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
  ])
  .addField(".file1", [
    {
      rule: "minFilesCount",
      value: 1,
      errorMessage: "File is required",
    },
  ])
  .addField(".file2", [
    {
      rule: "minFilesCount",
      value: 1,
      errorMessage: "File is required",
    },
  ])
  .addRequiredGroup(".radio-list1")
  .addRequiredGroup(".radio-list2")
  .addRequiredGroup(".radio-list3");
