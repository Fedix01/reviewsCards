// local reviews data
const reviews = [
  {
    id: 0,
    name: 'Sara Jones',
    job: 'UX DESIGNER',
    img: 'person-5.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?'
  },
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
let img = document.querySelector("img");
console.log(img)
let title = document.querySelector("#author")
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let myBtn = document.querySelector(".random-btn");

let currentItem = 1;
function changeCards() {
  let item = reviews[currentItem];
  img.src = item.img;
  console.log(img.src);
  title.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;

  if (currentItem < 4) {
    currentItem++
  } else if (currentItem === 4) {
    return currentItem = 0;
  }
}
window.addEventListener("DOMContentLoaded", () => {
  myBtn.addEventListener("click", () => {
    changeCards()
  });
})
