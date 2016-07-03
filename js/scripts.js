
    $(document).ready(function () {
      window.asd = $('.SlectBox').SumoSelect({ csvDispCount: 9 });
      window.test = $('.testsel').SumoSelect({okCancelInMulti:true });
    });



    $(":checkbox").on('change', function () {
    $('[name="' + $(this).attr('name') + '"]').not(this).prop('checked', false);
    });



      
    $( function() {        
      $( '#cd-dropdown' ).dropdown();

    });


    $('.welcome a').on('click', function (evt) {
    evt.preventDefault();
    var contentId = $(this).attr('href');
    var content = $(document).find(contentId);
    $('html, body').stop().animate({
    scrollTop: $(content).offset().top
    }, 2000);
    });



    $(document).ready(function() {

        var owl = $("#owl-demo");

        owl.owlCarousel({

        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0;
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
        });

        // Custom Navigation Events
        $(".next").click(function(){
          owl.trigger('owl.next');
        })
        $(".prev").click(function(){
          owl.trigger('owl.prev');
        })
        $(".play").click(function(){
          owl.trigger('owl.play',1000);
        })
        $(".stop").click(function(){
          owl.trigger('owl.stop');
        })


      });


  $('.select-cateagory').on('click',function(){
  $('.select-cateagory').removeClass('cateagory-active');
  $(this).addClass('cateagory-active');
});
