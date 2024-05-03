document.addEventListener('DOMContentLoaded', function () {
    var parallaxBackground = document.querySelector('.banner');
  
    document.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      parallaxBackground.style.transform = 'translate3d(0, ' + scrolled * 0.5 + 'px, 0)';
    });
  });
