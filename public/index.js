/* let's go! */
const myName = document.querySelector("#github-user-handle");
const image = document.querySelector("#github-user-avatar");
const nameOfRepo = document.querySelector("#github-user-repos");
const languages = document.querySelector("#github-repos-languages");
const stars = document.querySelector("#github-repos-stars");
const nameTopRepo = document.querySelector("#github-repo-name");
const Created = document.querySelector("#github-repo-created");
const issues = document.querySelector("#github-repo-open-issues");
const noOfWatching = document.querySelector("#github-repo-watchers");
const Contributors = document.querySelector("#github-repo-contributors");

const mainLink = "https://api.github.com/users/MahmoudJD95";
const repoLink = "https://api.github.com/users/MahmoudJD95/repos";
const contributorsUrl =
  "https://api.github.com/repos/MahmoudJD95/Twitter-Clone/contributors";
const startedLink = "https://api.github.com/users/MahmoudJD95/starred";
const languageLink = "https://api.github.com/users/MahmoudJD95/repos";

function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let apiObject = JSON.parse(xhr.responseText);

      cb(apiObject);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function changeName(data) {
  myName.textContent = data.name;
  image.src = data.avatar_url;
  nameOfRepo.textContent = data.public_repos;
}

function repoDom(data) {
  nameTopRepo.textContent = data[2].name;
  Created.textContent = data[2].owner.login;
  issues.textContent = data[2].open_issues;
  noOfWatching.textContent = data[2].watchers;
}

function language(data) {
  data.forEach((ele) => {
    if (ele.language !== null) {
      languages.textContent += " " + ele.language;
    }
  });
}

function Contributor(data) {
  Contributors.textContent = data[0].login;
}

function stared(data) {
  stars.textContent = data.length;
}

fetch(mainLink, changeName);
fetch(repoLink, repoDom);
fetch(languageLink, language);
fetch(contributorsUrl, Contributor);
fetch(startedLink, stared);
