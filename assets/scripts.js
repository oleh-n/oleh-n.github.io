      new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
      });

      function handleResize() {
        var h = $(window).height();
        $('.fullpage').css({'height':h+'px'});
      }
      $(function(){
        handleResize();

        $(window).resize(function(){
        handleResize();
      });
      });

    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){   
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800,'swing');
        });
        /*
        setTimeout(function () {
            // jQuery('.carousel').carousel();
            jQuery('#carousel-testimonials').carousel();
        }, 5000);
        */
        
        $('#cform').submit(function (e) {
            e.preventDefault();
            
             $.ajax({
                type: "POST",
                url: 'http://www.webstart.in.ua/c/cform.php',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                //dataType: 'json',
                data: $(this).serialize(), // serializes the form's elements.
            }).done(function(data) {
                $('#cform')[0].reset();
                $("#cform").trigger('reset');
                $('#cnote').show();
                console.log(data); // show response from the php script.
            }).fail(function(data) {
                console.log(data); // show response from the php script.
            });
        });
    });


 // animation
$(window).scroll(function() {
    $('h2,h3').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+600) {
        $(this).addClass("animated slideInDown");
      }
    });


  });