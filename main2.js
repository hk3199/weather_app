const searchbox= document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
const iconElement=document.querySelector('.icon-weather');

getLocation();

function setQuery(evt){
	if(evt.keyCode==13){
		getResults(searchbox.value);
		console.log(searchbox.value);
		//evt.preventDefault();
	}
}

function getResults(query)
{
	fetch('https://api.weatherbit.io/v2.0/current?&city='+query+'&key=b8d750eeef324d22b675f6a64ea981c8')
	.then(weather =>{
		return weather.json();
	}).then(displayResults);

}
function displayResults(weather) {
 console.log(weather)
 document.querySelector('.output').innerHTML=weather.data[0].temp+'&#8451';
 document.querySelector('.wind').innerHTML=weather.data[0].wind_spd+' m/s' ;
 document.querySelector('.name').innerHTML=weather.data[0].city_name;
 document.querySelector('.date').innerHTML=weather.data[0].datetime;
 document.querySelector('.weather').innerHTML=weather.data[0].weather.description;
 document.getElementById("icon-weather").src="icons/"+weather.data[0].weather.icon+".png";
 setPositionForInfo();
 //document.querySelector('.icons').innerHTML= <img src="icons/${img weather.data[0].weather.icon}.png"/>'  
 //var icon = ("<img src='icons/" + weather.img weather.data[0].weather.icon + ".png'>");
  //iconElement.innerHTML = icon;
// iconElement.src='icons/'+weather.img weather.data[0].weather.icon+'.png';
 }

  
function setPositionForInfo() 
{
	let Containerr = document.querySelector('.weatherContainer');
	let weatherContainerHeight= Containerr.clientHeight;
	let weatherContainerWidth= Containerr.clientWidth;
	Containerr.style.left= `calc(50% - ${weatherContainerWidth/2}px)`;
	Containerr.style.top= `calc(25% )`;
	Containerr.style.visibility='visible';
	
}

// for getting device location

function getLocation(){
	var geolocation = navigator.geolocation;
		console.log(geolocation);
	geolocation.getCurrentPosition(showLocation,errorHandler);
	console.log(geolocation);
}

function showLocation(position){
	var latitude= position.coords.latitude;
	console.log(latitude);
	var longitude = position.coords.longitude;
	getFirst(latitude,longitude);
}

function errorHandler(err){
	if(err.code==1){
		alert("location access was denied");
	}
}

function getFirst(latitude,longitude)
{
	fetch('https://api.weatherbit.io/v2.0/current?&lat='+latitude+'&lon='+longitude+'&key=b8d750eeef324d22b675f6a64ea981c8')
	.then(weather =>{
		return weather.json();
	}).then(displayResults);

}






















