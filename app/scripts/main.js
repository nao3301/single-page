const lib = {
  scrollToSection: function (e,ref) {
    e.preventDefault();
    document.getElementById(ref).scrollIntoView(true);
    document.getElementById('navi-toggle').checked = false;
  }
};

window.lib = lib;