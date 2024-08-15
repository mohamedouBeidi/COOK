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
const arrayData = [
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
const fetchData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const allData = [];
        try {
            for (const all of arrayData) {
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
const search = document.querySelector("[data-search]");
const btn_search = document.querySelector("[data-btn-search]");
btn_search.addEventListener("click", () => { if (search.value.toLowerCase().trim())
    window.location.href = `./recipes.html?search=${search.value.toLowerCase().trim()}`; });
search.addEventListener("keyup", (e) => { if (e.key === "Enter")
    btn_search.click(); });
const tabBtn = document.querySelectorAll("[data-tab-btn]");
const tabBox = document.querySelectorAll("[data-tab-box]");
for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", () => {
        for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].classList.remove("active");
            tabBox[i].classList.remove("active");
        }
        ;
        tabBtn[i].classList.add("active");
        tabBox[i].classList.add("active");
    });
}
;
const best_foods = document.querySelector("[data-tab-list-best-foods]");
const burgers = document.querySelector("[data-tab-list-burgers]");
const desserts = document.querySelector("[data-tab-list-desserts]");
const drinks = document.querySelector("[data-tab-list-drinks]");
const steaks = document.querySelector("[data-tab-list-steaks]");
const tab_list = document.querySelectorAll("[data-tab-list]");
tab_list.forEach((ele) => {
    ele.innerHTML += `
    <div class="card">
        <div class="img-card-skeleton img-cover"></div>

        <div class="card-body">
            <div class="title-content-skeleton"></div>

            <div class="card-bottom">
                <div class="time-skeleton"></div>
            </div>
        </div>
    </div>
    `.repeat(12);
});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    ;
    return array;
}
;
function getBestFoods() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/best-foods.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(28, 40));
        best_foods.innerHTML = "";
        shuffleData.forEach((ele) => {
            best_foods.innerHTML += `
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
    });
}
;
getBestFoods();
function getBurgers() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/burgers.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(38, 50));
        burgers.innerHTML = "";
        shuffleData.forEach((ele) => {
            burgers.innerHTML += `
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
    });
}
;
getBurgers();
function getDesserts() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/desserts.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(0, 12));
        desserts.innerHTML = "";
        shuffleData.forEach((ele) => {
            desserts.innerHTML += `
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
    });
}
;
getDesserts();
function getDrinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/drinks.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(18, 30));
        drinks.innerHTML = "";
        shuffleData.forEach((ele) => {
            drinks.innerHTML += `
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
    });
}
;
getDrinks();
function getSteaks() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/steaks.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(28, 40));
        steaks.innerHTML = "";
        shuffleData.forEach((ele) => {
            steaks.innerHTML += `
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
    });
}
;
getSteaks();
const slider_one = document.querySelector("[data-slider-one]");
const slider_two = document.querySelector("[data-slider-two]");
const sliderSkeleton = document.querySelectorAll("[data-skeleton]");
sliderSkeleton.forEach((ele) => {
    ele.innerHTML = `
    <div class="card-slider">
        <div class="img-card-skeleton img-cover"></div>

        <div class="card-body">
            <div class="title-content-skeleton"></div>

            <div class="card-bottom">
                <div class="time-skeleton"></div>
            </div>
        </div>
    </div>
    `.repeat(12);
});
function getOurFoods() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/our-foods.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(8, 20));
        slider_one.innerHTML = "";
        shuffleData.forEach((ele) => {
            slider_one.innerHTML += `
        <li class="card-slider">
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
        </li>
        `;
        });
        slider_one.innerHTML += `
    <a href="recipes.html" class="card-slider-show-more label-small">
        Show More
    </a>
    `;
    });
}
;
getOurFoods();
function getIceCream() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/ice-cream.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        let shuffleData = shuffleArray(data.slice(8, 20));
        slider_two.innerHTML = "";
        shuffleData.forEach((ele) => {
            slider_two.innerHTML += `
        <li class="card-slider">
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
        </li>
        `;
        });
        slider_two.innerHTML += `
    <a href="recipes.html" class="card-slider-show-more label-small">
        Show More
    </a>
    `;
    });
}
;
getIceCream();
const tag_list = document.querySelector("[data-tags-list]");
function tagList() {
    return __awaiter(this, void 0, void 0, function* () {
        const URL = "./menus/our-foods.json";
        const response = yield fetch(URL);
        const data = yield response.json();
        const indexData = data.slice(0, 35);
        tag_list.innerHTML = "";
        indexData.forEach((ele) => {
            tag_list.innerHTML += `<a href="detail.html?detail=${ele.name}" class="btn-tag label-small">${ele.name}</a>`;
        });
    });
}
;
tagList();
//# sourceMappingURL=home.js.map