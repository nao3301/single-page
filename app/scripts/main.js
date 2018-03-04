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
  initPortraitGallery: function () {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'img/portraits/LR_-0349.jpg',
        w: 4000,
        h: 6000
      },
      {
        src: 'img/portraits/LR_-7901.jpg',
        w: 4016,
        h: 6016

      },
      {
        src: 'img/portraits/rici-7991.jpg',
        w: 4016,
        h: 6016
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      bgOpacity: 0.8,
      index: 0, // start at first slide
      spacing: 0.02,
      clickToCloseNonZoomable: false,
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

  },
  initAnimalGallery: function () {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'img/tiere/LR_-0060.jpg',
        w: 4000,
        h: 6000
      },
      {
        src: 'img/tiere/LR_-0893.jpg',
        w: 4016,
        h: 6016

      },
      {
        src: 'img/portraits/rici-7991.jpg',
        w: 4016,
        h: 6016
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      bgOpacity: 0.8,
      index: 0, // start at first slide
      spacing: 0.02,
      clickToCloseNonZoomable: false,
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

  },
  initPassionGallery: function () {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'img/portraits/LR_-0349.jpg',
        w: 4000,
        h: 6000
      },
      {
        src: 'img/portraits/LR_-7901.jpg',
        w: 4016,
        h: 6016

      },
      {
        src: 'img/portraits/rici-7991.jpg',
        w: 4016,
        h: 6016
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      bgOpacity: 0.8,
      index: 0, // start at first slide
      spacing: 0.02,
      clickToCloseNonZoomable: false,
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

  }
};


window.lib = lib;