# Assignment 1 - ReactJS app.

Name: Dobromil Stodulski

## Features.
 
 + Feature 1 - I mostly redesigned the whole website with react bootstrap
 + Feature 2 - The movie details page has recommendations and similar movies page that can redirect the user to the choosen movie 
 + Feature 3 - Movie details page also has a movie cast and crew page
 + Feature 4 - User has to authenticate by registering and logging in using Firebase in order to view the Favorites and Watch List pages
 + Feature 5 - Movie details page has a videos/trailers page
 + Feature 6 - User can sign out of their account using the button at the top of the page
 + Feature 7 - Movie details page also has images
 + Feature 8 - Added Top Rated movies page
 + Feature 9 - Sessions added i.e. user will always be logged in when coming back to the website

## Setup requirements.

+ I have used react-bootstrap so: ```npm install react-bootstrap```
+ I have also used Firebase: ```npm install firebase```
+ Then ```npm start```

## Known Issues / Notes.

+ Favourites and Watch List - these pages don't appear to show the movies that the user has added.
+ Firebase - the configuration isn't stored in a .env file due to me running into diffciulties, as I couldn't get Firebase to process my details from that file. As a solution I placed my configuration into the file itself. Github commits back this up. 
+ Movie Cast/Crew - These take you nowhere, I haven't implemented anything.
+ Top Rated - Add To Watch List button doesn't work as it's not implemented.

## API Data Model.

+ https://api.themoviedb.org/3/movie/&append_to_response=credits,images,recommendations,similar,videos - get movie details alongside the specific movie credits, images, videos, recommendations and similar movies. (Saves more time and space - but also ran to difficulty calling movie credits.)
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - get reviews of a specific movie
+ https://api.themoviedb.org/3/movie/upcoming - get upcoming movies
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies

## App Design.

### Component catalogue.

![][stories]

### UI Design.

![][mainView]
> + Main view of the website with the updated site header.
> + New page added : top rated.
> + On the right hand side, there is a sign out button to be able to sign out of the account.

![][movieDetail]
> + Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.
> + Clicking on Movie Cast shows the movie cast.
> + Clicking on Movie Crew shows the movie crew.
> + Clicking on Movie Trailers shows videos relating to the movie.
> + Clicking on Movie Images shows photos relating to the movie.
> + Clicking Similar Movies and Recommendations show both resepectively similar and recommended movies.

![][movieCast]
>Shows the cast with a picture of them, popularity and the character they played.

![][movieCrew]
>Shows the crew with a picture of them, populairty and the role they played.

![][videos]
>Shows a youtube video embedded player with the name of the video, statitng what type of the video is and where it came from (the source).

![][movieImages]
>Shows images of the movie, includes vote avergae and count.

![][similarMovies]
>Shows all movies similar to the current movie.

![][recommendations]
>Recommends movies that are also alike to the current movie.

![][registration]
>User uses this page if they don't have an account to create on in order to access the favourites and watch list pages.

![][loginPage]
>User inputs their email and password that they have registered with.

![][review]
>Shows the full text for a movie review. 

## Routing.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /movies/watchlist (protected) - displays the user's watch list movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /register (public) - allows the user to register for the first time.
+ /login (public) - allows the user to login with their existing account.

### Data hyperlinking.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][movieTrailersBoxed]
>Clicking the 'Watch The Video Here' opens a new YouTube page with the video/trailer that the user desired to play.

![][loginPageBoxed]
>Clicking the 'Don't have an account?' redirects the user to the registration page.

![][similarMoviesBoxed]
>Clicking a movie redirects it to the movie details.

![][recommendationsBoxed]
>Clicking a movie redirects it to the movie details.

## Independent learning.

+ React-Bootstrap - https://react-bootstrap.github.io/
> All componnets taken from the official documentation @ https://react-bootstrap.github.io/components/alerts

+ Firebase Authentication - followed the tutorial @ https://www.youtube.com/watch?v=unr4s3jd9qA
> The full source code of the video can be found @ https://github.com/satansdeer/react-firebase-auth/tree/master/src

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetails.png
[review]: ./public/movieReview.png
[reviewLink]: ./public/review.png
[stories]: ./public/storyBook.png
[movieCast]: ./public/movieCast.png
[movieCrew]: ./public/movieCrew.png
[movieImages]: ./public/movieImages.png
[movieReview]: ./public/movieReview.png
[movieTrailersBoxed]: ./public/movieTrailers.png
[recommendationsBoxed]: ./public/recommendations.png
[recommendations]: ./public/recommendationsNotBoxed.png
[registrationPage]: ./public/registrationPage.png
[similarMoviesBoxed]: ./public/similarMovies.png
[similarMovies]: ./public/similarMoviesNotBoxed.png
[videos]: ./public/videos.png
[loginPageBoxed]: ./public/loginPage.png
[loginPage]: ./public/loginPageNotBoxed.png
[registration]: ./public/registrationPage.png
[mainView]: ./public/mainView.png
