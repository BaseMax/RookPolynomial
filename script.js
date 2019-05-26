/**
*
* @Name : RookPolynomial/script.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2019-05-26
* @Released under : https://github.com/BaseMax/RookPolynomial/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/RookPolynomial
*
**/
let sections = document.querySelectorAll(".section")
let sectionForm = document.querySelector(".section-form")
let sectionBoard = document.querySelector(".section-board")
let sectionRook = document.querySelector(".section-rook")
if(sectionForm) {
	let inputSizeWidth = sectionForm.querySelector(".input-size-width")
	let inputSizeHeight = sectionForm.querySelector(".input-size-height") 
	let inputSizeButton = sectionForm.querySelector(".input-size-button")
	if(inputSizeWidth && inputSizeHeight && inputSizeButton) {
		inputSizeButton.addEventListener("click", function() {
			let inputSizeWidthValue = inputSizeWidth.value
			let inputSizeHeightValue = inputSizeHeight.value
			// alert(inputSizeWidthValue + "/" + inputSizeHeightValue)
			sectionForm.style.display="none"
			sectionRook.style.display="none"
			sectionBoard.style.display="block"
		})
	}
}
if(sectionBoard) {
	let board = sectionBoard.querySelector(".board")
	if(board) {
		let boardItems = board.querySelectorAll(".column")
		if(boardItems) {
			boardItems.forEach(function(item) {
				item.addEventListener("click", function() {
					console.log(item.classList);
					item.classList.toggle("disable");
				})
			})
		}
		let boardButton = sectionBoard.querySelector(".board-button");
		if(boardButton) {
			boardButton.addEventListener("click", function(){
				sectionForm.style.display="none"
				sectionBoard.style.display="none"
				sectionRook.style.display="block"
			})
		}
	}
}
if(sectionRook) {
	let board = sectionRook.querySelector(".board")
	if(board) {
		let boardItems = board.querySelectorAll(".column")
		if(boardItems) {
			boardItems.forEach(function(item) {
				item.addEventListener("click", function() {
					boardItems.forEach(function(_item) {
						_item.classList.remove("rook");
					})
					item.classList.toggle("rook");
				})
			})
		}
	}
}


