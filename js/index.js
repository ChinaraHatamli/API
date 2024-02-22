// const config = {
//   URL: "https://randomuser.me/api/",
// };

// const image = document.querySelector("#user-image");
// const userName = document.querySelector("#user-name");
// const userGender = document.querySelector("#user-gender");
// const userMail = document.querySelector("#user-mail");
// const userLocation = document.querySelector("#user-location");
// const userNumber = document.querySelector("#user-number");

// async function fetchData() {
//   const response = await fetch(config.URL);
//   const data = await response.json();
//   showData (data);
// }

// fetchData();

// function showData(data) {
//   image.src = data.results[0].picture.large;
//   userName.textContent = data.results[0].name.first;
//   userGender.textContent = data.results[0].gender;
//   userMail.textContent = data.results[0].email;
//   userLocation.textContent = data.results[0].location.city;
//   userNumber.textContent = data.results[0].phone;
// }

// const config = {
//   URL: "https://open.er-api.com/v6/latest/USD",
// };

// const list = document.querySelector("#exchange-list");

// async function fetchData() {
//   const response = await fetch(config.URL);
//   const data = await response.json();
//   showData(data);

//   console.log("response");
// }
// fetchData();

// function showData(data) {
//   const currency = ["AZN", "EUR", "USD", "RUB"];

//   currency.forEach((currency) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${currency}: ${data.rates[currency]}`;
//     list.appendChild(listItem);
//   });
// }


