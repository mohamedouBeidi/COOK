"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const allFilesRecipes = [
    "./menus/bbqs.json",
    "./menus/best-foods.json",
    "./menus/breads.json",
    "./menus/burgers.json",
    "./menus/chocolates.json",
    "./menus/desserts.json",
    "./menus/drinks.json",
    "./menus/fried-chicken.json",
    "./menus/ice-cream.json",
    "./menus/our-foods.json",
    "./menus/pizzas.json",
    "./menus/sandwiches.json",
    "./menus/sausages.json",
    "./menus/steaks.json",
];
const fetchDataRecipes = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const allData = [];
        try {
            for (const all of allFilesRecipes) {
                const URL = all;
                const response = yield fetch(URL);
                const data = yield response.json();
                allData.push(...data);
            }
            ;
            return allData;
        }
        catch (error) {
            console.error("Error Fetch Data", error);
            return null;
        }
        ;
    });
};
const recipes_list = document.querySelector("[data-recipes-list]");
const Pagination_list = document.querySelector("[data-Pagination-list]");
let itemsPerPage = 60;
recipes_list.innerHTML += `
<div class="card">
    <div class="img-card-skeleton img-cover"></div>

    <div class="card-body">
        <div class="title-content-skeleton"></div>

        <div class="card-bottom">
            <div class="time-skeleton"></div>
        </div>
    </div>
</div>
`.repeat(60);
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    ;
    return array;
}
;
function getRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataRecipes();
        const shuffleData = shuffleArray(data);
        const urlParam = new URLSearchParams(window.location.search);
        const currentPage = parseInt(urlParam.get("page") || "1", 10);
        const totalItems = shuffleData.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItmes = shuffleData.slice(startIndex, endIndex);
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("search");
        const lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
        const filter = pageItmes.filter((display) => display.name.toLowerCase().includes(lang));
        recipes_list.innerHTML = "";
        filter.forEach((ele) => {
            recipes_list.innerHTML += `
        <div class="card">
            <a href="detail.html?detail=${ele.name}" class="title-content label-medium">
                <img src="${ele.img}" alt="${ele.name}" loading="lazy" class="img-card img-cover">
            </a>

            <div class="card-body">
                <a href="detail.html?detail=${ele.name}" class="title-content label-medium">${ele.name}</a>

                <div class="card-bottom">
                    <p class="time">
                        <span class="material-symbols-outlined" aria-hidden="true">globe</span>
                        ${ele.country}
                    </p>

                    <button class="btn-bookmark bookmark-add" data-bookmark-add>
                        <span class="material-symbols-outlined bookmark-add" aria-hidden="true">bookmark_add</span>
                    </button>

                    <button class="btn-bookmark bookmark" data-bookmark>
                        <span class="material-symbols-outlined bookmark" aria-hidden="true">bookmark</span>
                    </button>
                </div>
            </div>
        </div>
        `;
        });
        const inputPage = document.querySelector("[data-input-page]");
        const indexPage = document.querySelector("[data-index-page]");
        const totalPage = Math.ceil(totalItems / itemsPerPage);
        indexPage.innerHTML = totalPage;
        inputPage.addEventListener("keydown", (e) => { if (e.key === "Enter")
            window.location.href = `./recipes.html?page=${inputPage.value}`; });
    });
}
;
getRecipes();
//# sourceMappingURL=recipes.js.map