fetch("https://imdb8.p.rapidapi.com/actors/get-bio?nconst=nm0000134", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": '78f85b7b41msh23461f7d0f97e63p1b3ddajsna0629e398be9'
	}
})
.then(response => response.json())
.then(response => {
    //console.log(response);
  //  console.log(response.content);
    
     document.getElementById('box1').innerHTML = response.realName;
     document.getElementById('box2').innerHTML = response.spouses[1].name;
})
.catch(err => {
	console.log(err);
});




