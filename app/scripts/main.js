const lib = {
  scrollToSection: function (e) {
    e.preventDefault();
    // e.scrollIntoView(false);
    console.log(e);
    document.getElementById('navi-toggle').checked = false;
  },
  test2: function test() {
    console.log('test2');
  }
};

window.lib = lib;