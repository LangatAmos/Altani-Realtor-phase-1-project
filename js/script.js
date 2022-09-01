// fetch data from the server
document.addEventListener('DOMContentLoaded', function() {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '224e070ea7mshfb00fdc5e69b177p1b58b3jsn20f89408b922',
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
	}
};
	function fetchData(){
    return fetch('https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116&CurrentPage=1&RecordsPerPage=10&SortOrder=A&SortBy=1&CultureId=1&NumberOfDays=0&BedRange=0-0&BathRange=0-0&RentMin=0', options)
	.then(response => response.json())
	.then((data) => {
		return renderData(data);
        //console.log(data);
    })
	.catch(err => console.error(err));

}
//console.log(fetchData());
function renderData(books) {
	const ul = document.querySelector(".property-list")
	for (let prperty of data) {
		const li = document.querySelector(".property-card")
		li.innerHTML = data.title;
	}
}


//creating sticky navbar 
const header = document.querySelector(".header");
const sticky = header.offsetTop;
window.addEventListener("scroll", function () {
    if (window.scrollY >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
});

 // toggle between element classes
const toggle = document.addEventListener("click", function () {
	(".navbar .nav-links").toggleClass("active");
    (".menu-btn i").toggleClass("active");
});
});