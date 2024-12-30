const item_list = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Vue JS",
  "Node JS",
  "MongoDB",
  "Laravel",
  "PHP",
  "MySQL",
  "Python",
  "C++",
  "C#",
  "Java",
  "Flutter",
  "React Native",
  "BootStrap",
  "jQuery",
  "Next JS",
];

const item_container = document.querySelector(".item-container");
const input = document.querySelector(".search-bar");
item_list.sort();

function display() {
  item_list.forEach((each) => {
    const node = document.createElement("li");
    node.classList.add("item");
    const nodeContent = document.createTextNode(each);
    node.appendChild(nodeContent);
    item_container.appendChild(node);
  });
}
display();

item_container.addEventListener("click", (click) => {
  const item = document.querySelectorAll(".item");
  const content = document.querySelector(".content");
  const check = click.target;
  if (check.classList.contains("active")) {
    return null;
  } else {
    item.forEach((each) => {
      each.classList.remove("active");
    });
    check.classList.add("active");
    content.innerHTML = check.textContent;
  }
});

input.oninput = () => {
  let text = input.value;
  if (!text) {
    item_container.innerHTML = "";
    display();
  } else {
    item_container.innerHTML = "";
    let new_text = text.toLowerCase();
    item_list.forEach((each) => {
      const new_each = each.toLowerCase();
      if (new_each.includes(new_text)) {
        const node = document.createElement("li");
        node.classList.add("item");
        const nodeContent = document.createTextNode(each);
        node.appendChild(nodeContent);
        item_container.appendChild(node);
      }
    });
  }
};
