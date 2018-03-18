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

    // Initializes and opens PhotoSwipes
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

  },
  initAnimalGallery: function () {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'img/tiere/LR_-0893.jpg',
        w: 5352,
        h: 3573

      },
      {
        src: 'img/tiere/LR_-0894.jpg',
        w: 3649,
        h: 3649
      },
      {
        src: 'img/tiere/LR_-0932.jpg',
        w: 4016,
        h: 6016
      },
      {
        src: 'img/tiere/LR_-1413.jpg',
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
        src: 'img/passion/LR_-0115.jpg',
        w: 4000,
        h: 6000
      },
      {
        src: 'img/passion/LR_-0126.jpg',
        w: 4016,
        h: 6016

      },
      {
        src: 'img/passion/LR_-0233.jpg',
        w: 6016,
        h: 4016
      },
      {
        src: 'img/passion/LR_-0305-2.jpg',
        w: 6000,
        h: 4000
      },
      {
        src: 'img/passion/LR_-0638.jpg',
        w: 6016,
        h: 4016

      },
      {
        src: 'img/passion/LR_-1024.jpg',
        w: 4000,
        h: 6000
      },
      {
        src: 'img/passion/LR_-1025.jpg',
        w: 4016,
        h: 6016

      },
      {
        src: 'img/passion/LR_-1064.jpg',
        w: 4000,
        h: 6000
      },
      {
        src: 'img/passion/LR_-1675.jpg',
        w: 4016,
        h: 6016

      },
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