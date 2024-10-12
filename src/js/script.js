document.querySelector('.mobile-menu').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('closed-menu');
    mobileNav.classList.add('open-menu');
  });
  
  document.querySelector('.tabler-icon').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('open-menu');
    mobileNav.classList.add('closed-menu');
  });

  


  var inputs = document.getElementsByTagName('input');

  for (var i=0; i<inputs.length; i++)  {
    if (inputs[i].type == 'checkbox')   {
      inputs[i].checked = false;
    }
  }


  const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  const clone = item.cloneNode(true);
  carousel.appendChild(clone);
});


document.getElementById('Switch').addEventListener('change', function() {
  document.body.classList.toggle('dark');
});
