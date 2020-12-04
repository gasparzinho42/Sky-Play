fetch("https://sky-frontend.herokuapp.com/movies")
    .then((response) => response.json())
    .then((response) => { 
      carrossel(response);
      galeria(response);
    });

    function galeria(response) {
        console.log(response)
        const filmes = response.find(
          (categoria) => categoria.type === "carousel-portrait"
        );
        filmes.movies.forEach((movie) => {
          $(".galeria").append(
            `<img src='${movie.images[0].url}' alt='${movie.title}' class="movie" />`
          );
        });
      }

      function carrossel(lista) {
        const movies = lista.find(carrosel => carrosel.type === 'highlights')
        movies.items.forEach(item => {
            $('.carousel').append(`<div class="div-img"> <img src='${item.images[0].url}' alt='${item.title}' class='filme'/> </div>`)
        })
        
        $('.carousel').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  
                  arrows: true,
                  dots:true,
                  centerPadding: '30px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  dots:true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
    }