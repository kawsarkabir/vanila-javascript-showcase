// const loadAllNewsCategories = () => {
//   fetch("https://openapi.programming-hero.com/api/news/categories")
//     .then((res) => res.json())
//     .then((categories) => displayCategoriesName(categories.data.news_category));
// };

// const displayCategoriesName = (names) => {
//   for (const name of names) {
//     console.log(name.category_id);
//     const menu = document.getElementById("menu_all");
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <a
//         href="#"
//         onclick="categoriesLink('${name.names}')"
//         class="btn btn-ghost"
//       >
//         ${name.category_name}
//       </a>
//     `;
//     menu.appendChild(li);
//     console.log(name.category_name);
//     console.log(name);

//   }
// };

// const categoriesLink = (id) => {
//   fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// loadAllNewsCategories();
// categoriesLink()
