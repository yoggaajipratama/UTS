 $(document).ready(function(){
	var auto_pindah = 3000;
	var speed = 500;
	var pindah = true;

	$('.slide').first().addClass('active');
	
	$('.slide').hide();
	
	$('.active').show();
	
	$('#next').on('click', nextSlide);
	
	$('#prev').on('click', prevSlide);
	
	if(pindah == true){
		setInterval(nextSlide,auto_pindah);
	}
	
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
        });
	
	$('.active').show();
	
	$('#next').on('click', nextSlide);
	
	$('#prev').on('click', prevSlide);
	
	if(pindah == true){
		setInterval(nextSlide,auto_pindah);
	}