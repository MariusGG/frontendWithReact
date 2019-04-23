console.dir(document);
console.log(document.URL);


let title = document.querySelector('#title')

let selectAllLi = document.querySelectorAll('li');

// function styleLi() {
//   for(i = 0; i < selectAllLi.length; i++){
//     selectAllLi[i].style.fontWeight = "900";
//     selectAllLi[i].style.color = "green";
//   }
// }
// styleLi();

function findTag(tag) {
  return document.querySelector(tag);
}

function createHtmlTag(tag) {
  return document.createElement(tag);
}

function appendingHtmlTag(parentTag, childTag) {
  return parentTag.appendChild(childTag);
}

function addingUrl(tag, url) {
  return tag.href = url;
}
let getSponsor = findTag('article h2')
let sponsorP = findTag('#sponsors p')

getSponsor.addEventListener('click', function(e) {
  return sponsorP.style.display = "block";
});


console.log(sponsorP);

selectAllLi.forEach((item) => {
  let x = item.innerHTML

})
