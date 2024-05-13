    var movies = {
        all:["The Dark Knight", "Inception","Superbad", "The Hangover","The Shawshank Redemption " ,"Forest Gump"],
        action: ["The Dark Knight", "Inception"],
        comedy: ["Superbad", "The Hangover"],
        drama: ["The Shawshank Redemption " ,"Forest Gump"],
        
    };

    
    function showMovies(genre) {
        var movieList = document.getElementById('movieList');
        var moviesForGenre = movies[genre];
        movieList.innerHTML = ""; 
        
        moviesForGenre.forEach(function(movie) {
            var listItem = document.createElement('p');
            listItem.textContent = movie;
            movieList.appendChild(listItem);
        });
    }