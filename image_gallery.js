// JavaScript Document
var controlsOpened = true;

var showControlsCont = function() {
	"use strict";
	document.getElementById("controlsCont").style.display = "block";
};
var hideControlsCont = function() {
	"use strict";
	if(!controlsOpened) {
	    document.getElementById("controlsCont").style.display = "none";
	}
};
document.getElementById("smallImageCont").onmouseover = showControlsCont;
document.getElementById("smallImageCont").onmouseout = hideControlsCont;

/***************************************************************************************************/

var startOnMouseOver = function() {
	"use strict";
	document.getElementById("start").style.background = "url(../image_gallery_project/image_gallery_pics/start_over.png)";
};
var startOnMouseOut = function() {
	"use strict";
	document.getElementById("start").style.background = "url(../image_gallery_project/image_gallery_pics/start_out.png)";
};
document.getElementById("start").onmouseover = startOnMouseOver;
document.getElementById("start").onmouseout = startOnMouseOut;

var backClicked = false;
var backOnMouseOver = function() {
	"use strict";
	document.getElementById("back").style.background = "url(../image_gallery_project/image_gallery_pics/rewind_over.png)";
};
var backOnMouseOut = function() {
	"use strict";
	if(backClicked) {
		document.getElementById("back").style.background = "url(../image_gallery_project/image_gallery_pics/rewind_clicked.png)";
	}
	if(!backClicked) {
	    document.getElementById("back").style.background = "url(../image_gallery_project/image_gallery_pics/rewind_out.png)";
	}
};
var backOnClick = function() {
	"use strict";
	document.getElementById("back").style.background = "url(../image_gallery_project/image_gallery_pics/rewind_clicked.png)";
	document.getElementById("forward").style.background = "url(../image_gallery_project/image_gallery_pics/forward_out.png)";
	forwardClicked = false;
	if(!backClicked) {
		if(currentImage > 2) {
	        currentImage -= 3;
		} else if(currentImage === 2) {
			currentImage -= 2;
		} else if(currentImage === 1) {
			currentImage -= 1;
		} else {
			currentImage = 0;
		}
	    setNextImage();
	}
	backClicked = true;
};
document.getElementById("back").onmouseover = backOnMouseOver;
document.getElementById("back").onmouseout = backOnMouseOut;
document.getElementById("back").onclick = backOnClick;

var forwardClicked = true;
var forwardOnMouseOver = function() {
	"use strict";
	document.getElementById("forward").style.background = "url(../image_gallery_project/image_gallery_pics/forward_over.png)";
};
var forwardOnMouseOut = function() {
	"use strict";
	if(forwardClicked) {
		document.getElementById("forward").style.background = "url(../image_gallery_project/image_gallery_pics/forward_clicked.png)";
	}
	if(!forwardClicked) {
	    document.getElementById("forward").style.background = "url(../image_gallery_project/image_gallery_pics/forward_out.png)";
	}
};
var forwardOnClick = function() {
	"use strict";
	document.getElementById("forward").style.background = "url(../image_gallery_project/image_gallery_pics/forward_clicked.png)";
	document.getElementById("back").style.background = "url(../image_gallery_project/image_gallery_pics/rewind_out.png)";
	backClicked = false;
	if(!forwardClicked) {
		if(currentImage < (imageArray.length - 3)) {
	        currentImage += 3;
		} else if(currentImage === (imageArray.length - 3)) {
			currentImage += 2;
		} else if(currentImage === (imageArray.length - 2)) {
			currentImage += 1;
		} else {
			currentImage = imageArray.length - 1;
		}
	    setNextImage();
	}
	forwardClicked = true;
};
document.getElementById("forward").onmouseover = forwardOnMouseOver;
document.getElementById("forward").onmouseout = forwardOnMouseOut;
document.getElementById("forward").onclick = forwardOnClick;

var endOnMouseOver = function() {
	"use strict";
	document.getElementById("end").style.background = "url(../image_gallery_project/image_gallery_pics/end_over.png)";
};
var endOnMouseOut = function() {
	"use strict";
	document.getElementById("end").style.background = "url(../image_gallery_project/image_gallery_pics/end_out.png)";
};
document.getElementById("end").onmouseover = endOnMouseOver;
document.getElementById("end").onmouseout = endOnMouseOut;

/***************************************************************************************************/

var controlsClosedHeight = 225;
document.getElementById("controlsCont").style.height = "225px";
var openControlsCont = function() {
	"use strict";
	var controlsCont = document.getElementById("controlsCont");
	if(controlsCont.style.height === "25px") {
		controlsOpened = true;
	    slideControls1 = setInterval(function() {slideControlsDown();}, 1000/60);
		document.getElementById("controlsContButton").style.background = "url(../image_gallery_project/image_gallery_pics/up_mouse_out.jpg)";
	} 
	if(controlsCont.style.height === "225px") {
		slideControls2 = setInterval(function() {slideControlsUp();}, 1000/60);
		document.getElementById("controlsContButton").style.background = "url(../image_gallery_project/image_gallery_pics/down_mouse_out.jpg)";
	}
};
document.getElementById("controlsContButton").onclick = openControlsCont;

var slideControls1;
var slideControlsDown = function() {
	"use strict";	
	if(controlsClosedHeight < 225) {
	    controlsClosedHeight += 10;
		document.getElementById("controlsCont").style.height = controlsClosedHeight + "px";
	} else {
		clearInterval(slideControls1);
	}
};
var slideControls2;
var slideControlsUp = function() {
	"use strict";	
	if(controlsClosedHeight > 25) {
	    controlsClosedHeight -= 10;
		document.getElementById("controlsCont").style.height = controlsClosedHeight + "px";
	} else {
		document.getElementById("controlsCont").style.display = "none";
		clearInterval(slideControls2);
		controlsOpened = false;
	}
};
	   
/****************************************************************************************************/

var prevOnMouseOver = function() {
	"use strict";
	document.getElementById("smallPrev").style.background = "url(../image_gallery_project/image_gallery_pics/left_mouse_over.jpg)";
};
var prevOnMouseOut = function() {
	"use strict";
	document.getElementById("smallPrev").style.background = "url(../image_gallery_project/image_gallery_pics/left_mouse_out.jpg)";
};
document.getElementById("smallPrev").onmouseover = prevOnMouseOver;
document.getElementById("smallPrev").onmouseout = prevOnMouseOut;

var nextOnMouseOver = function() {
	"use strict";
	document.getElementById("smallNext").style.background = "url(../image_gallery_project/image_gallery_pics/right_mouse_over.jpg)";
};
var nextOnMouseOut = function() {
	"use strict";
	document.getElementById("smallNext").style.background = "url(../image_gallery_project/image_gallery_pics/right_mouse_out.jpg)";
};
document.getElementById("smallNext").onmouseover = nextOnMouseOver;
document.getElementById("smallNext").onmouseout = nextOnMouseOut;

var controlsButtonOnMouseOver = function() {
	"use strict";
	showControlsCont();
	if(controlsClosedHeight === 25) {
	    document.getElementById("controlsContButton").style.background = "url(../image_gallery_project/image_gallery_pics/down_mouse_over.jpg)";
	}
	if(controlsClosedHeight > 25) {
		document.getElementById("controlsContButton").style.background = "url(../image_gallery_project/image_gallery_pics/up_mouse_over.jpg)";
	}
};
var controlsButtonOnMouseOut = function() {
	"use strict";
	hideControlsCont();
	if(controlsClosedHeight === 25) {
	    document.getElementById("controlsContButton").style.background = "url(../image_gallery_project/image_gallery_pics/down_mouse_out.jpg)";
	}
	if(controlsClosedHeight === 225) {
		document.getElementById("controlsContButton").style.background = "url(../image_gallery_project/image_gallery_pics/up_mouse_out.jpg)";
	}
};
document.getElementById("controlsContButton").onmouseover = controlsButtonOnMouseOver;
document.getElementById("controlsContButton").onmouseout = controlsButtonOnMouseOut;

/*****************************************************************************************************/

var imageArray;

var getResponse = function() {
	"use strict";	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if(request.readyState === 4 && request.status === 200) {
			var response = JSON.parse(request.responseText);
			imageArray = JSON.parse(response.images);
			setImageUrlOnLoad();
            imageCount = imageArray.length;
			recycleAmount = imageCount - 7;
            recycledCount = 0;
            recycleImage = false;
            smallImageLeft = 0;
		}
	};
	request.open("GET", "image_ajax.php", true);
	request.send();
};

var setImageUrlOnLoad = function() {
	"use strict";
	
	var smallImages = document.getElementsByClassName("smallImage");
	
	if(imageArray !== undefined) {
	    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[1] + ") center";
	    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
	
	    for(var j = 0; j < 10; j++) {
			if(j < imageArray.length) {
 		        smallImages[j].style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[j] + ") center";
			}
		    for(var k = (imageArray.length); k < 7; k++) {
			    smallImages[k].style.background = "url(../image_gallery_project/image_gallery_pics/no_image.jpg";
		    }
	    }
	}
};

var loadFunction = function() {
	"use strict";
	getResponse();
	interval = 10;
    timerLimit = 10000;
    setSlideLeftAnimation();
};
window.onload = loadFunction;

var deleteLastImage = function() {
	"use strict";
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if(request.readyState === 4 && request.status === 200) {
            getResponse();
		}
	};
	request.open("GET", "image_delete.php", true);
	request.send();
};
document.getElementById("deleteImage").onclick = deleteLastImage;

var currentImage = 2;

var setNextImage = function() {
	"use strict";
	
	if(imageArray !== undefined) {
	    if(image2Shown) {
		     document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[currentImage] + ") center";
	    }
	    if(!image2Shown) {
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[currentImage] + ") center";
	    }
	    if(forwardClicked || !backClicked) {
		    if(currentImage < (imageArray.length)) {
	            currentImage += 1;
			    if(currentImage === (imageArray.length)) {
				    currentImage = 0;
			    }
		    }
	    }
	    if(backClicked) {
		    if(currentImage > -1) {
	            currentImage -= 1;
			    if(currentImage === -1) {
				    currentImage = imageArray.length - 1;
			    }
		    }
	    }
	}
};

var toFirstImage = function() {
	"use strict";
	if(image2Shown) {
		if(backClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 1] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
			currentImage = imageArray.length - 2;
		}
		if(forwardClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[1] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
			currentImage = 2;
		}
	}
	if(!image2Shown) {
		if(backClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 1] + ") center";
			currentImage = imageArray.length - 2;
		}
		if(forwardClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[1] + ") center";
			currentImage = 2;
		}
	}
};
document.getElementById("start").onclick = toFirstImage;

var toLastImage = function() {
	"use strict";
	if(image2Shown) {
		if(backClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 2] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 1] + ") center";
			currentImage = imageArray.length - 3;
		}
		if(forwardClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 1] + ") center";
			currentImage = 1;
		}
	}
	if(!image2Shown) {
		if(backClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 1] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 2] + ") center";
			currentImage = imageArray.length - 3;
		}
		if(forwardClicked) {
		    document.getElementById("displayImage1").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[imageArray.length - 1] + ") center";
		    document.getElementById("displayImage2").style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[0] + ") center";
			currentImage = 1;
		}
	}
};
document.getElementById("end").onclick = toLastImage;

var imageCount;
var recycleAmount = imageCount - 7;
var recycledCount = 0;
var recycleImage = false;
var smallImageLeft = 0;
var moveLeft;
var moveRight;

var moveSmallImagesLeft = function() {
	"use strict";
	if(smallImageLeft >= -106 && recycledCount < recycleAmount) {
		smallImageLeft -= 6;
		document.getElementById("imageSlideCont").style.left = smallImageLeft + "px";
	} else {
		clearInterval(moveLeft);
	}
	setRecycleImage();
	if(recycleImage) {
		recycleImagesLeft();
	}
};
var moveSmallImagesRight = function() {
	"use strict";
	if(smallImageLeft <= 0 && recycledCount >= 0) {
		smallImageLeft += 6;
		document.getElementById("imageSlideCont").style.left = smallImageLeft + "px";
	} else {
		clearInterval(moveRight);
	}
	setRecycleImage();
	if(recycleImage) {
		recycleImagesRight();
	}
};

var prevOnMouseDown = function() {
	"use strict";
	if(recycledCount < recycleAmount) {
	    moveLeft = setInterval(function() {moveSmallImagesLeft(); }, 1000/60);
	}
};
var prevOnMouseUp = function() {
	"use strict";
	clearInterval(moveLeft);
};
document.getElementById("smallPrev").onmousedown = prevOnMouseDown;
document.getElementById("smallPrev").onmouseup = prevOnMouseUp;

var nextOnMouseDown = function() {
	"use strict";
	if(recycledCount >= 0) {
	    moveRight = setInterval(function() {moveSmallImagesRight(); }, 1000/60);
	}
};
var nextOnMouseUp = function() {
	"use strict";
	clearInterval(moveRight);
};
document.getElementById("smallNext").onmousedown = nextOnMouseDown;
document.getElementById("smallNext").onmouseup = nextOnMouseUp;

var recycleImagesLeft = function() {
	"use strict";
	var smallImages = document.getElementsByClassName("smallImage");
	var imageSlideCont = document.getElementById("imageSlideCont");
	var image = smallImages[0];
	if(recycledCount < (imageArray.length - 10)) {
	    image.style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[recycledCount + 10] + ") center";
	}
	imageSlideCont.removeChild(image);
	imageSlideCont.appendChild(image);
	smallImageLeft = 0;
	imageSlideCont.style.left = smallImageLeft + "px";		
	recycleImage = false;
	recycledCount += 1;
};

var recycleImagesRight = function() {
	"use strict";
	var smallImages = document.getElementsByClassName("smallImage");
	var imageSlideCont = document.getElementById("imageSlideCont");
	var image = smallImages[9];
	if(recycledCount > 0 && recycledCount <= (imageArray.length - 8)) {
	    image.style.background = "url(../image_gallery_project/image_gallery_pics/" + imageArray[recycledCount - 1] + ") center";
	}
	imageSlideCont.removeChild(image);
	imageSlideCont.insertBefore(image, imageSlideCont.childNodes[0]);
	smallImageLeft = -106;
	imageSlideCont.style.left = smallImageLeft + "px";	
	recycleImage = false;
	recycledCount -= 1;
};

var setRecycleImage = function() {
	"use strict";
	if(smallImageLeft < -106 || smallImageLeft > 0) {
		recycleImage = true;
	}
};

/******************************************************************************************************/

var timer = 0;
var frameRate = 1000/60;
var timerLimit;
var slideHorizontal = false;
var animationFinished = true;
var image2Shown = true;
var animationTimer;
var image1Position;
var image2Position;
var limit1;
var limit2;
var interval;
var slideImage;
var slideImageOne = function() {
	"use strict";	
	if(image1Position !== limit1 && image2Position !== limit2) {
	    image1Position += interval;
		image2Position += interval;
		if(slideHorizontal) {
		    document.getElementById("displayImage1").style.left = image1Position + "px";
		    document.getElementById("displayImage2").style.left = image2Position + "px";
		} 
		if(!slideHorizontal) {
			document.getElementById("displayImage1").style.top = image1Position + "px";
		    document.getElementById("displayImage2").style.top = image2Position + "px";
		}
		animationFinished = false;
	} else {
		if(slideHorizontal) {
		    document.getElementById("displayImage2").style.left = (limit2*-1) + "px";
		} 
		if(!slideHorizontal) {
			document.getElementById("displayImage2").style.top = (limit2*-1) + "px";
		}	
		image2Position = (limit2*-1);
		clearInterval(slideImage);
		animationFinished = true;
		image2Shown = false;
		setNextImage();
	}
};
var slideImageTwo = function() {
	"use strict";	
	if(image2Position !== limit1 && image1Position !== limit2) {
	    image2Position += interval;
		image1Position += interval;
		if(slideHorizontal) {
		    document.getElementById("displayImage2").style.left = image2Position + "px";
		    document.getElementById("displayImage1").style.left = image1Position + "px";
		} 
		if(!slideHorizontal) {
			document.getElementById("displayImage2").style.top = image2Position + "px";
		    document.getElementById("displayImage1").style.top = image1Position + "px";
		}
		animationFinished = false;
	} else {
		if(slideHorizontal) {
		    document.getElementById("displayImage1").style.left = (limit2*-1) + "px";
		} 
		if(!slideHorizontal) {
			document.getElementById("displayImage1").style.top = (limit2*-1) + "px";
		}
		image1Position = (limit2*-1);
		clearInterval(slideImage);
		animationFinished = true;
		image2Shown = true;
		setNextImage();
	}
};
var imageSlideTimer = function() {
	"use strict";
	if(timer < timerLimit) {
		timer += frameRate;
	} else {
		if(image1Position === (limit2*-1)) {
			slideImage = setInterval(function() { slideImageOne(); }, frameRate);
		}
		if(image2Position === (limit2*-1)) {
			slideImage = setInterval(function() { slideImageTwo(); }, frameRate);
		}
		timer = 0;
	}
};

var clearIntervals = function() {
	"use strict";
	clearInterval(animationTimer);
	clearInterval(slideImage);
	clearInterval(fadeImage);
	timer = 0;
};

var resetImagePosition = function(left1, left2, top1, top2) {
	"use strict";
	var image1 =  document.getElementById("displayImage1");
	var image2 = document.getElementById("displayImage2");
	if(image2Shown) {
	    image1.style.left = left1;
	    image2.style.left = left2;
	    image1.style.top = top1;
	    image2.style.top = top2;
	}
	if(!image2Shown) {
	    image1.style.left = left2;
	    image2.style.left = left1;
	    image1.style.top = top2;
	    image2.style.top = top1;
	}
};

var resetImageOpacity = function(opac1, opac2) {
	"use strict";
	var image1 =  document.getElementById("displayImage1");
	var image2 = document.getElementById("displayImage2");
	if(image2Shown) {
	   image1.style.opacity = opac2;
	   image2.style.opacity = opac1;
	}
	if(!image2Shown) {
	   image1.style.opacity = opac1;
	   image2.style.opacity = opac2;
	}
};

var resetAnimationParameters = function(p1, p2, p3, p4) {
	"use strict";
	image1Position = p1;
    image2Position = p2;
	limit1 = p3;
	limit2 = p4;
};

var setSlideRightAnimation = function() {
	"use strict";
	clearIntervals();
	resetImagePosition("400px", "0px", "0px", "0px");
	resetImageOpacity("1", "1");
	resetAnimationParameters(400, 0, 0, -400);
	slideHorizontal = true;
	animationTimer = setInterval(function() { imageSlideTimer(); }, frameRate);
};
var setSlideLeftAnimation = function() {
	"use strict";
	clearIntervals();
	resetImagePosition("-400px", "0px", "0px", "0px");
	resetImageOpacity("1", "1");
	resetAnimationParameters(-400, 0, 0, 400);
	slideHorizontal = true;
    animationTimer = setInterval(function() { imageSlideTimer(); }, frameRate);
};

var setSlideDownAnimation = function() {
	"use strict";
	clearIntervals();
	resetImagePosition("0px", "0px", "-300px", "0px");
	resetImageOpacity("1", "1");
	resetAnimationParameters(-300, 0, 0, 300);
	slideHorizontal = false;
	animationTimer = setInterval(function() { imageSlideTimer(); }, frameRate);
};

var setSlideUpAnimation = function() {
	"use strict";
	clearIntervals();
	resetImagePosition("0px", "0px", "300px", "0px");
	resetImageOpacity("1", "1");
	resetAnimationParameters(300, 0, 0, -300);
	slideHorizontal = false;
	animationTimer = setInterval(function() { imageSlideTimer(); }, frameRate);
};

/************************************************************************************/
var opacity1 = 100;
var opacity2 = 0;
var fadeImage;
var fadeImageOut = function() {
	"use strict";
	if(opacity1 !== 0) {
        opacity1 -= interval;
		if(opacity1 % 10 === 0) {
		    var opacityString = (opacity1/100).toString(10);
			if(image2Shown) {
		        document.getElementById("displayImage2").style.opacity = opacityString;
			}
			if(!image2Shown) {
		        document.getElementById("displayImage1").style.opacity = opacityString;
			}
		}
		animationFinished = false;
	}  else {
		clearInterval(fadeImage);
		opacity1 = 100;
		fadeImage = setInterval(function() { fadeImageIn(); }, frameRate);
		if(image2Shown) {
			image2Shown = false;
		} else {
			image2Shown = true;
		}
	}
};
var fadeImageIn = function() {
	"use strict";
	if(opacity2 !== 100) {
        opacity2 += interval;
		if(opacity1 % 10 === 0) {
		    var opacityString = (opacity2/100).toString(10);
			if(!image2Shown) {
		        document.getElementById("displayImage1").style.opacity = opacityString;
			}
			if(image2Shown) {
				document.getElementById("displayImage2").style.opacity = opacityString;
			}
		}
	}  else {
		clearInterval(fadeImage);
		opacity2 = 0; 
		animationFinished = true;
		setNextImage();
	}
};
var imageFadeTimer = function() {
	"use strict";
	if(timer < timerLimit) {
		timer += frameRate;
	} else {
		timer = 0;
		fadeImage = setInterval(function() { fadeImageOut(); }, frameRate);
	}
};
var setImageFadeAnimation = function() {
	"use strict";
	clearIntervals();
	resetImagePosition("0px", "0px", "0px", "0px");
	resetImageOpacity("1", "0");
	opacity1 = 100;
	opacity2 = 0;
	animationTimer = setInterval(function() { imageFadeTimer(); }, frameRate);	
};

var checkAnimationFinished;

var selectAnimationType = function() {
	"use strict";
	
	if(animationFinished) {
	    var selectedType = document.querySelector("input[name=animType]:checked");
	    switch(selectedType.value) {
		    case "slideLeft":
			    setSlideLeftAnimation();
			    break;
		    case "slideRight":
			    setSlideRightAnimation();
			    break;
		    case "slideDown":
			    setSlideDownAnimation();
			    break;
		    case "slideUp":
			    setSlideUpAnimation();
			    break;
		    case "fadeInOut":
			  setImageFadeAnimation();
			    break;
	    }
	    selectAnimationSpeed();
		clearInterval(checkAnimationFinished);
    }
};

var setCheckAnimationFinished1 = function() {
	"use strict";
	checkAnimationFinished = setInterval(function() { selectAnimationType(); }, 200);
};

var animationTypes = document.getElementsByName("animType");
animationTypes[0].onclick = setCheckAnimationFinished1;
animationTypes[1].onclick = setCheckAnimationFinished1;
animationTypes[2].onclick = setCheckAnimationFinished1;
animationTypes[3].onclick = setCheckAnimationFinished1;
animationTypes[4].onclick = setCheckAnimationFinished1;

var selectAnimationInterval = function() {
	"use strict";
	if(animationFinished) {
	    var selectedInterval = document.querySelector("input[name=animInterval]:checked");
	    switch(selectedInterval.value) {
		    case "five":
			    timerLimit = 5000;
			    break;
		    case "ten":
			    timerLimit = 10000;
			    break;
		    case "fifteen":
		        timerLimit = 15000;
			    break;
	    }
		clearInterval(checkAnimationFinished);
	}
};

var setCheckAnimationFinished2 = function() {
	"use strict";
	checkAnimationFinished = setInterval(function() { selectAnimationInterval(); }, 200);
};

var animationIntervals = document.getElementsByName("animInterval");
animationIntervals[0].onclick = setCheckAnimationFinished2;
animationIntervals[1].onclick = setCheckAnimationFinished2;
animationIntervals[2].onclick = setCheckAnimationFinished2;

var selectAnimationSpeed = function() {
	"use strict";
		
	function setTypeSpeed(type, speed) {
		if(selectedType.value === type) {
			interval = speed;
		}
	} 
	
	if(animationFinished) {
	    var selectedSpeed = document.querySelector("input[name=animSpeed]:checked");
	    var selectedType = document.querySelector("input[name=animType]:checked");
	
	    switch(selectedSpeed.value) {
		    case "slow":
			    setTypeSpeed("slideLeft", 5);
			    setTypeSpeed("slideRight", -5);
			    setTypeSpeed("slideDown", 5);
			    setTypeSpeed("slideUp", -5);
			    setTypeSpeed("fadeInOut", 1);
			    break;
		    case "medium":
			    setTypeSpeed("slideLeft", 10);
			    setTypeSpeed("slideRight", -10);
			    setTypeSpeed("slideDown", 10);
			    setTypeSpeed("slideUp", -10);
			    setTypeSpeed("fadeInOut", 5);
			    break;
		    case "fast":
			    setTypeSpeed("slideLeft", 20);
			    setTypeSpeed("slideRight", -20);
			    setTypeSpeed("slideDown", 20);
			    setTypeSpeed("slideUp", -20);
			    setTypeSpeed("fadeInOut", 10);
			    break;
	    }
		clearInterval(checkAnimationFinished);
	}
};

var setCheckAnimationFinished3 = function() {
	"use strict";
	checkAnimationFinished = setInterval(function() { selectAnimationType(); }, 200);
};

var animationSpeeds = document.getElementsByName("animSpeed");
animationSpeeds[0].onclick = setCheckAnimationFinished3;
animationSpeeds[1].onclick = setCheckAnimationFinished3;
animationSpeeds[2].onclick = setCheckAnimationFinished3;
	