// utils
const setOpacity = (item) => (opacity) => document.querySelector(item).style.opacity = opacity;

// init map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

// navbar opacity control
function controlNavBarEventCallback () {
  const setNavbarOpacity = setOpacity('.navbar');
  const opacityValue = window.scrollY > 150 ? 0.9 : 1;

  setNavbarOpacity(opacityValue);
}

window.addEventListener('scroll', controlNavBarEventCallback);

// basic smooth scrolling, using jquery for demo purpose only
$('.navbar a, .btn').on('click', function (e) {
  if(this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800)
  }
})
