const lib = {
  scrollToSection: function (e,ref) {
    e.preventDefault();
    document.getElementById(ref).scrollIntoView(false);
    document.getElementById('navi-toggle').checked = false;
  },
  closeWindow: function (e,ref){
    document.getElementById(ref).style.display = 'none';
  },
  openPopup: function (e,ref){
    document.getElementById(ref).style.visibility = 'visible';
    document.getElementById(ref).style.opacity = 1;
  },
  closePopup: function (e,ref){
    e.stopPropagation();
    document.getElementById(ref).style.visibility = 'hidden';
    document.getElementById(ref).style.opacity = 0;
  },
  childClick: function (e,ref){
    e.stopPropagation();
  },
};

window.lib = lib;