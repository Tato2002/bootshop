let imgLinks = [
	"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9bbcdc336d84900a9c0ac5c005fed9a_9366/Forum_Low_Shoes_White_FY7973_01_standard.jpg",
	"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cae1ed7805b419a90a7ac5c012641f0_9366/Forum_Low_Shoes_White_FY7974_01_standard.jpg"
]


let image = document.querySelector(".mainImage img");

let imageBtn = document.querySelectorAll(".imgBtn");

for (const Btn of imageBtn) {
	Btn.addEventListener("click", function () {
		let imageLink = this.getAttribute("data-link")
		image.setAttribute("src", imageLink);
	})
}

for (let i = 0; i < imgLinks.length; i++) {
	imageBtn[i].setAttribute("data-link", imgLinks[i])
}

image.setAttribute("src", imgLinks[0]);