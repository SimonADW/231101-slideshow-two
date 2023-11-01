const slideshows = document.querySelectorAll(".slideshow");


slideshows.forEach(slideshow => {
	const slides = slideshow.querySelectorAll(".slideshow__slide");
	const controls = slideshow.querySelectorAll(".slideshow__control-button");
	const dots = slideshow.querySelectorAll(".slideshow__dot");
	const counter = slideshow.querySelectorAll(".slideshow__counter");

	let index = 0;

	const totalSlides = slides.length;
	const lastIndex = slides.length -1;

	const setIndex = (newIndex) => {
		index = newIndex;
	}

	const decrementIndex = () => {
		if ( index > 0) {
			index -= 1; 			
		} else {
			index = lastIndex;
		}
	}

	const incrementIndex = () => {
		if (index < lastIndex) {
			index += 1;
		} else {
			index = 0;
		}
	}

	const renderSlideClass = () => {
		slides.forEach(slide => {
			slide.classList.remove("slideshow__slide--visible");
		});

		slides[index].classList.add("slideshow__slide--visible");
	}

	const renderCounter = () => {
		counter.textContent = `${index +1} of ${totalSlides}`;
	}

	const changeSlide = (event) => {
		const button = event.currentTarget;

		if (button.dataset.direction === "previous") {
			decrementIndex();
		}
		
		if (button.dataset.direction === "next") {
			incrementIndex()
		}
		console.log(index);;

		if (button.dataset.index) {
			setIndex(parseInt(button.dataset.index))
		};
			
			renderSlideClass();
			renderCounter();

	};

	controls.forEach(button => {
		button.addEventListener("click", changeSlide);
	});

	dots.forEach(button => {
		button.addEventListener("click", changeSlide);
	});
	

});



