"use strict";

let mlogo = document.querySelector(".mblogo");
let wrapper = document.querySelector(".wrapper");
let video = document.querySelector(".video");
let burger = document.querySelector(".burger-layer");
let burger2 = document.querySelector(".burger-layer-2");
let burger3 = document.querySelector(".burger-layer-3");
let search = document.querySelector(".searchbtn");
let input1 = document.querySelector(".searchcar");
let searchcar = document.querySelector(".searchcar.active");
let burgerfnc = document.querySelector(".nav-item2");
let popup = document.querySelector(".popup");
let nav = document.querySelector(".mobile");

mlogo.addEventListener("click", (event) => {
  mlogo.classList.toggle("active");
  wrapper.classList.toggle("active");
  document.body.classList.toggle("dark");
  video.classList.toggle("active");
  burger.classList.toggle("active");
  search.classList.toggle("active");
  burger2.classList.toggle("active");
  burger3.classList.toggle("active");
  nav.classList.toggle("active");
});

search.addEventListener("click", function () {
  input1.classList.toggle("active");
});

burgerfnc.addEventListener("click", function () {
  document.querySelector(".popup").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.getElementById("commentsList");
  const postId = 1;

  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => response.json())
    .then((comments) => {
      comments.forEach((comment) => {
        const li = document.createElement("li");
        li.textContent = `Name: ${comment.name}, Email: ${comment.email}, Body: ${comment.body}`;
        commentsList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching comments:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.getElementById("commentsList");
  const searchInput = document.getElementById("searchC");

  const commentsData = [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
      body: "This is comment 1",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@example.com",
      body: "This is comment 2",
    },
  ];

  // Function to perform search
  function performSearch(query) {
    // Clear previous results
    commentsList.innerHTML = "";

    const results = commentsData.filter(
      (comment) =>
        comment.name.toLowerCase().includes(query.toLowerCase()) ||
        comment.email.toLowerCase().includes(query.toLowerCase()) ||
        comment.body.toLowerCase().includes(query.toLowerCase())
    );

    results.forEach((comment) => {
      const li = document.createElement("li");
      li.textContent = `Comment ID: ${comment.id}, Name: ${comment.name}, Email: ${comment.email}, Body: ${comment.body}`;
      commentsList.appendChild(li);
    });
  }

  searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    performSearch(query);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");

  function handleRegistration(event) {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
  }
});
