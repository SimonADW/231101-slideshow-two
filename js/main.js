const slideshows = document.querySelectorAll(".slideshow");


slideshows.forEach(slideshow => {
	const slides = slideshow.querySelectorAll(".slideshow__slide");
	const controls = slideshow.querySelectorAll(".slideshow__control-button");
	const dotContainer = slideshow.querySelector(".slideshow__dots");	
	const counter = slideshow.querySelector(".slideshow__counter");

	let index = 0;

	const totalSlides = slides.length;
	const lastIndex = slides.length -1;

	
	const renderDots = () => { 
		slides.forEach((slide, index) => {
			const newDot = document.createElement("button")
			newDot.classList.add("slideshow__dot");
			newDot.dataset.index = index;
			dotContainer.appendChild(newDot);			
		})
	}
	
	renderDots();	
	const dots = slideshow.querySelectorAll(".slideshow__dot");

	const renderDotsActive = () => {
		dots.forEach((button) => {
			button.classList.remove("slideshow__dot--active");
		})	
		dots[index].classList.add("slideshow__dot--active");
	}


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

		if (button.dataset.index) {				
			setIndex(parseInt(button.dataset.index))			
		};
			
		renderSlideClass();
		renderCounter();
		renderDotsActive();
	};



	controls.forEach(button => {
		button.addEventListener("click", changeSlide);
	});

	dots.forEach(button => {
		button.addEventListener("click", changeSlide);
	});
	

	// Render on page load;
	renderCounter();
	renderDotsActive();
});




