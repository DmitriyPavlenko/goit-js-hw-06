const countCat = document.querySelectorAll("#categories .item");
console.log(`Count categories: ${countCat.length}`);
console.log("");
countCat.forEach((category) => {
  const titleOfCategory = category.querySelector("h2").textContent;
  const numberOfElements = category.querySelector("ul").children.length;
  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${numberOfElements}`);
});
