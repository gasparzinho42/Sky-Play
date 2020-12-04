$('.menu').click(function(){
    $('#menu').removeClass('hidden').addClass('show')
})
$('.close').click(function(){
    $('#menu').removeClass('show').addClass('hidden')
})

for (let i = 0 ; i < 3 ; i++) {
 
    const slider = document.getElementsByClassName('galeria')[i];
   
    let isDown = false;
    let startX;
    let scrollLeft;
   
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
   
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
   
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX);
      slider.scrollLeft = scrollLeft - walk;
    });
  
   
  }