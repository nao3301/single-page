import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

const lib = {

  scrollToSection: function (e, ref) {
    e.preventDefault();
    document.getElementById(ref).scrollIntoView(false);
    document.getElementById('navi-toggle').checked = false;
  },
  closeWindow: function (e, ref) {
    document.getElementById(ref).style.display = 'none';
  },
  openPopup: function (e, ref) {
    document.getElementById(ref).style.visibility = 'visible';
    document.getElementById(ref).style.opacity = 1;
  },
  closePopup: function (e, ref) {
    e.stopPropagation();
    document.getElementById(ref).style.visibility = 'hidden';
    document.getElementById(ref).style.opacity = 0;
  },
  childClick: function (e, ref) {
    e.stopPropagation();
  },
  initGallery: function () {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'img/portraits/LR_-0060.jpg',
        w: 2000,
        h: 1200
      },
      {
        src: 'img/portraits/LR_-0060.jpg',
        w: 1200,
        h: 900
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      bgOpacity: 0.7,
      index: 0, // start at first slide
      spacing: 0.05,
      clickToCloseNonZoomable: false,
      shareButtons: [

      ],
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

  }
};


window.lib = lib;