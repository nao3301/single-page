const lib = {
  scrollToSection: function (e,ref) {
    e.preventDefault();
    document.getElementById(ref).scrollIntoView(false);
    document.getElementById('navi-toggle').checked = false;
  },
  closeWindow: function (e,ref){
    document.getElementById(ref).style.display = 'none';
  }
};

window.lib = lib;