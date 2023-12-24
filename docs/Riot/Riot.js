'use strict';
(function() {

  window.addEventListener('load', init);

  const url = "https://americas.api.riotgames.com";
  var user = "";
  var tag = "";
  const apiKey = "RGAPI-fc31df07-a5cb-48a8-9165-2f93dcfca565";

  function init() {
    document.getElementById('Username').addEventListener('input', updateUserName);
    document.getElementById('Tagline').addEventListener('input', updateTag);
    document.getElementById('submit').addEventListener('click', getPlayerInfo);

  }

function updateUserName() {
  user = document.getElementById('Username').value;
}

function updateTag() {
  tag = document.getElementById('Tagline').value;
}

function getPlayerInfo() {
  if (user === "") {
    user = document.getElementById('Username').value;
  }
  if (tag === "") {
    tag = document.getElementById('Tagline').value;
  }
  console.log(user);
  console.log(tag);
  let fetchUrl = url + '/riot/account/v1/accounts/by-riot-id/' + user + "/" + tag + "?api_key=" + apiKey;
  console.log(fetchUrl);
  fetch(fetchUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
}

})();