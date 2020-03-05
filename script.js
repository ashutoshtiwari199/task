        var container = document.querySelector(".container")


        fetch("https://yts.mx/api/v2/list_movies.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.data.movies);
                for (var i = 1; i < 5; i++)
                    container.innerHTML += `
                <div class="box">
            <div class="textbg">
                <div class="text">
                    <i class="fa fa-star"></i>
                    <h3 class="textfont" >${data.data.movies[i].rating}/10</h3>
                    <h3 class="genres" >${data.data.movies[i].genres}</h3>
                    <button onclick="myFunction(${i})" class="button" >View Detail</button>
                </div>
            </div>

            <div class="image">
                <img src=${data.data.movies[i].medium_cover_image} alt="">
            </div>
        </div>                
        `

            });

       var myFunction=function(v){
        fetch("https://yts.mx/api/v2/list_movies.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                container.innerHTML =` <div class="moviedetail">
                <div class="posterimage">
                    <img src="${data.data.movies[v].medium_cover_image}"  alt="">
                </div>
        </div>
        <div class="description" >
            <h1 style="font-size: 32px;" class="textfont" >${data.data.movies[v].title}</h1>
            <h4 class="textfont" >${data.data.movies[v].year}</h4>
            <h3 class="textfont" >${data.data.movies[v].genres}</h3>
            <h4 class="textfont" >IMDB Rating</h4>
            <h4 class="textfont" >${data.data.movies[v].rating}  <i class="fa fa-star"></i></h4>
            
        </div>`
            })
       }

       
