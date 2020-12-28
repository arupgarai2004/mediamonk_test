var main = document.getElementsByClassName("container")[0],
		allChapters = document.getElementsByClassName("chapter"),
		allnavMenu = document.getElementsByClassName("cell"),
		prev = document.getElementsByClassName("prev")[0],
		next = document.getElementsByClassName("next")[0],
		SlidePercentages = [0, 13, 23, 37, 51, 65, 80, 100, 100, 115],
		slide_no = 0;
		
		
function sliderArrows(number) {
	slideChapter(slide_no += number);
}

function slideChapter(slideNum){
	slide_no=slideNum;
	prev.style.display = "block";
	next.style.display = "block";
	
	//hide next/prev button on frist and last page.
	if(slideNum==0){
		prev.style.display = "none";
	}else if(slideNum == (allChapters.length -1)){
		next.style.display = "none";
	}
	
	
	for (var chapter of allChapters) {
		chapter.className = "chapter ";
	}
	for (var cell of allnavMenu) {
		cell.className = "cell ";
	}
	
	allChapters[slideNum].classList.add("current-chapter");
	allnavMenu[slideNum].classList.add("current-cell");
	main.style.backgroundPosition = SlidePercentages[slideNum] + "%";
	
	if(slideNum == (allChapters.length -1)){
		allChapters[9].classList.add("final-chapter");
	}
}