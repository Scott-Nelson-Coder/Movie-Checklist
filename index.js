let message = document.querySelector("#message");

// let inputBtn = document.querySelector("#input-btn")

function addMovie(event) {
  event.preventDefault();

  let inputField = document.querySelector("input");

  let movie = document.createElement("li");

  let movieTitle = document.createElement("span");
  document.addEventListener("click", crossOffMovie);

  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let list = document.querySelector("ul");
  list.append(movie);
  inputField.value = "";
}

document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted";
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
if (event.target.classList.contains("checked") === true) {
    message.textContent = "Movie Watched!"
} else {
    message.textContent = "Movie added back!"
}

}
