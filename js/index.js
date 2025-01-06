var imageList = Array.from(document.querySelectorAll(".boxImg img"));
var ligthContainer = document.getElementById("ligthContainer");
var ligthItem = document.getElementById("ligthItem");
var btnClose = document.getElementById("btnClose");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var portfolioDetails = document.querySelector(".portfolio-details");
var currentIndex;
for (var i = 0; i < imageList.length; i++) {
  imageList[i].addEventListener("click", function (e) {
    currentIndex = imageList.indexOf(e.target);
    ligthContainer.classList.replace("d-none", "d-flex");
    ligthItem.style.backgroundImage = `url('${e.target.getAttribute("src")}')`;
  });
}
document.addEventListener("click", function (e) {
  if (e.target == ligthContainer) {
    closeSlide();
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    closeSlide;
  }
});

btnClose.addEventListener("click", function () {
  closeSlide();
});
next.addEventListener("click", function () {
  slide(1);
});
prev.addEventListener("click", function () {
  slide(-1);
});
function closeSlide() {
  ligthContainer.classList.replace("d-flex", "d-none");
}
function slide(step) {
  currentIndex = currentIndex + step;
  if (currentIndex < 0) {
    currentIndex = imageList.length-1;
  }
  if (currentIndex == imageList.length) {
    currentIndex = 0;
  }
  var srcImg = imageList[currentIndex].getAttribute("src");
  ligthItem.style.backgroundImage = `url('${srcImg}')`;
}

var plusIcons = document.querySelectorAll("#plusIcon");
for (var i = 0; i < plusIcons.length; i++) {
  plusIcons[i].addEventListener("click", function () {
    portfolioDetails.classList.replace("d-none", "d-block");
  });
}


let sectionOffset =  document.getElementById('about').offsetTop;

window.addEventListener('scroll',function()
{
  let currentScroll = window.scrollY
  if(currentScroll > sectionOffset - 80)
    {
      document.querySelector('.navbar').style.cssText = `
      background-color:rgba(0,0,0,0.7)
      `
    }
    else{
      document.querySelector('.navbar').style.cssText = `
      background-color:transparent
      `
    }

})


$(function()
{
  $('.loader').fadeOut(1000,function()
  {
    $('.loading').slideUp(1000,function()
    {
      $('body').css('overflow','auto')
      $('.loading').remove()
    })
  })
})


$('a').on('click',function(e)
{
  let aHref = e.target.getAttribute('href')
  let sectionOffset = $(aHref).offset().top
  $('html').animate( {scrollTop:sectionOffset} ,2000)
})

