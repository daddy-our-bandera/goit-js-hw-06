const refs = {
  mainUl: document.querySelector("#categories"),
  secondUl: document.querySelectorAll(".item"),
};
console.log(`Number of categories:${refs.secondUl.length}`);
for (let i = 0; i < refs.secondUl.length; i += 1) {
  console.log(`
Category: ${refs.secondUl[i].querySelector("h2").textContent}`);
  console.log(`Elements: ${refs.secondUl[i].querySelectorAll("ul li").length}`);
}
