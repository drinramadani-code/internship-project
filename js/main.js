function resize_navbar_li(width) {
  $("nav#navbar ul.navbar_ul_items li").css("width", `${width}%`);
}

$(window).on("resize", function() {
  if ($(window).width() >= 1024) {
    $("#navbar > .container > ul").show(300);
    resize_navbar_li((100 / $("nav#navbar ul.navbar_ul_items li").length) - 5);
  } else {
    $("#navbar > .container > ul").hide(300);
    resize_navbar_li(95);
  }
});

$("#navbar > div > i").click(function() {
  $("#navbar > .container > ul").toggle(300);
});

var add_product_toggler_text = 0;
$(document).on('click', "#add_product_toggler", function() {
  $("div.dashboard #products #add-form-div").toggle(400);
  $("div.dashboard #products .dashboard_section_title#add_products_section_title").toggle(400);
  if (add_product_toggler_text % 2 == 0) {
    $(this).html("Largo Formen");
  } else {
    $(this).html("Shto Produkt");
  }
  add_product_toggler_text +=1;
});

$(document).ready(function() {
  if ($(window).width() >= 1024) {
    $("#navbar > .container > ul").show(300);
    resize_navbar_li((100 / $("nav#navbar ul.navbar_ul_items li").length) - 5);
  } else {
    $("#navbar > .container > ul").hide(300);
    resize_navbar_li(95);
  }
})
var edit_profile_toggler_text = 0;
$(document).on('click', "#edit_profile_toggler", function() {
  $("div.dashboard #products #editProfile-div").toggle(400);
  $("div.dashboard #products .changePasswordTxt#edit_profile_section_title").toggle(400);
  if (edit_profile_toggler_text % 2 == 0) {
    $(this).html("Largo Formen");
  } else {
    $(this).html("Ndrysho Profilin");
  }
  edit_profile_toggler_text +=1;
});

var edit_password_toggler_text = 0;
$(document).on('click', "#edit_password_toggler", function() {
  $("div.dashboard #products #formChange-div").toggle(400);
  $("div.dashboard #products .changePasswordTxt#edit_profile_section_title").toggle(400);
  if (edit_password_toggler_text % 2 == 0) {
    $(this).html("Largo Formen");
  } else {
    $(this).html("Ndrysho Passwordin");
  }
  edit_password_toggler_text +=1;
});

$(".cities_to_select > button.city_selectable").click(function() {
  let el = $(this)[0];
  let city = this.innerHTML.substring(18);

  setCookie('city', city, .2);
  window.location.href = 'view_products/index.php';
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
