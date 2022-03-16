$(document).ready(function(){ 
		/*********** Nav menu ***************/
		$('.bar-area,.canvas-icon').click(function(){
			$('.menubar-area').toggleClass('offcanvas-area');
			return false;
		});
		$('.bar-area,.canvas-icon').click(function(){
			$('body').toggleClass('hidden');
			return false;
		});
		$('.gallery-slider').owlCarousel({
			loop:false,
			margin:20,
			nav:false,
			autoplay:true,
			dots:false,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1.3,
				},
				576:{
					items:3.3,
				},
				1200:{
					items:4.3,
				}
			}
		})	
		var clicked_id;
var audio_var = new Audio();


$('.ppbutton').on("click",function(){
  var datasrc = $(this).attr('data-src');
  clicked_id= $(this).attr('id');
  console.log(clicked_id);
  audio_var.pause();
  $('.ppbutton').not(this).each(function(){
      $(this).removeClass('fa-pause-circle');
       $(this).addClass('fa-play-circle');
  });
  
  if($(this).hasClass('fa-play-circle')){
     console.log('play_click');
     audio_var.src=datasrc;
     $(this).removeClass('fa-play-circle');
     $(this).addClass('fa-pause-circle');
     console.log(audio_var);
     audio_var.play();
   } else {
     console.log('pause_click');
     $(this).removeClass('fa-pause-circle');
     $(this).addClass('fa-play-circle');
     console.log(audio_var);
     audio_var.pause();
     //audio_var.src='';
     //audio_var.load();
	 console.log(audio_var);
   }

  
});

  audio_var.onended = function() {
     $("#"+clicked_id).removeClass('fa-pause-circle');
     $("#"+clicked_id).addClass('fa-play-circle');
  };
		
});
