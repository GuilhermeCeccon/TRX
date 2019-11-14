var nextArrow = $(".next_caro");
var prevArrow = $(".previous_caro");
$(document).ready(function () {
  $(".carroussel").slick({
    dots: true,
    infinite: true,
    autoplay: 3000,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: true,
    nextArrow: nextArrow,
    prevArrow: prevArrow
  });
});
// $(".navbar--list").mouseover(function() {
//   $("body").css({
//     backgroundColor: "rgba(17, 17, 17, 0.15)"
//   });
// });
// $(".navbar--list").mouseout(function() {
//   $("body").css({
//     backgroundColor: "white"
//   });
// });

array = [];

$(".card__buttom").click(function (event) {
  event.preventDefault();
  var name = $(this).attr("data-name");
  var price = $(this).attr("data-price");
  var oldPrice = $(this).attr("data-oldPrice");

  var cart = {
    name,
    price,
    oldPrice
  };

  array.push(cart);

  showCarts();
});

function showCarts() {
  let output = "";

  array.forEach(item => {
    output += `
            <p> ${item.name}</p>
            <p> ${item.price}</p>
            <p> ${item.oldPrice}</p>`;
  });
  document.getElementById("result").innerHTML = output;
  $(".tt").mouseenter(function () {
    $(".bag").css({
      display: "block",
      width: "0"
    });
    $(".bag").animate({
        width: "30%"
      },
      "slow"
    );
    $(".backgroundr").css({
      display: "block"
    });
  });
  $(".backgroundr").mouseleave(function () {
    $(".bag").css({
      display: "none"
    });
    $(".backgroundr").css({
      display: "none"
    });
  })
}

$(".filter__button").click(function () {
  $(".filter__container").css({
    display: "block",
    width: "0"
  });
  $(".filter__container").animate({
      width: "50%"
    },
    "slow"
  );
  $(".backgroundr").css({
    display: "block"
  });
});
$(".filter__btn-close").click(function () {
  $(".filter__container").toggle("slow");
  $(".backgroundr").css({
    display: "none"
  });
});



// $(".tt").click(function () {
//   $(".bag").css({
//     display: "block",
//     width: "0"
//   });
//   $(".bag").animate({
//       width: "30%"
//     },
//     "slow"
//   );
//   $(".backgroundr").css({
//     display: "block"
//   });
// });