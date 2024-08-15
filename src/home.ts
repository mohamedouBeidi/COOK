/**
 * GET FETCH API
 */
const arrayData: string[] = [
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
const fetchData = async function() {
    const allData: any[] = [];
    try {
        for(const all of arrayData) {
            const URL: string = all;
            const response: Response = await fetch(URL);
            const data: any[] = await response.json();
            allData.push(...data);
        };
        return allData;
    } catch (error) {
        console.error("Error Fetch Data", error);
        return null;
    };
};

/**
 * search hero
 */
const search: any = document.querySelector("[data-search]");
const btn_search: any = document.querySelector("[data-btn-search]");

btn_search.addEventListener("click", () => { if (search.value.toLowerCase().trim()) window.location.href = `./recipes.html?search=${search.value.toLowerCase().trim()}`; });

search.addEventListener("keyup", (e: any) => { if (e.key === "Enter") btn_search.click(); });

/**
 * tsb
 */
const tabBtn: any = document.querySelectorAll("[data-tab-btn]");
const tabBox: any = document.querySelectorAll("[data-tab-box]");

for (let i: number = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", () => {
        for (let i: number = 0; i < tabBtn.length; i++) { 
            tabBtn[i].classList.remove("active"); 
            tabBox[i].classList.remove("active"); 
        };
        tabBtn[i].classList.add("active");
        tabBox[i].classList.add("active");
    });
};

/**
 * PUSH FETCH API
 */
const best_foods: any = document.querySelector("[data-tab-list-best-foods]");
const burgers: any = document.querySelector("[data-tab-list-burgers]");
const desserts: any = document.querySelector("[data-tab-list-desserts]");
const drinks: any = document.querySelector("[data-tab-list-drinks]");
const steaks: any = document.querySelector("[data-tab-list-steaks]");
const tab_list: any = document.querySelectorAll("[data-tab-list]");

tab_list.forEach((ele: any) => {
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

// Random order
function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};

// Get Best Foods
async function getBestFoods() {
    const URL: string = "./menus/best-foods.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(28, 40));

    best_foods.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getBestFoods();

// Get Burgers
async function getBurgers() {
    const URL: string = "./menus/burgers.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(38, 50));

    burgers.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getBurgers();

// Get Desserts
async function getDesserts() {
    const URL: string = "./menus/desserts.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(0, 12));

    desserts.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getDesserts();

// Get Drinks
async function getDrinks() {
    const URL: string = "./menus/drinks.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(18, 30));

    drinks.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getDrinks();

// Get Steaks
async function getSteaks() {
    const URL: string = "./menus/steaks.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(28, 40));

    steaks.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getSteaks();

/**
 * #RECIPE SLIDER
 */
const slider_one: any = document.querySelector("[data-slider-one]");
const slider_two: any = document.querySelector("[data-slider-two]");
const sliderSkeleton: any = document.querySelectorAll("[data-skeleton]");

sliderSkeleton.forEach((ele: any) => {
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

// Get Our Foods
async function getOurFoods() {
    const URL: string = "./menus/our-foods.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(8, 20));

    slider_one.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getOurFoods();

// Get Ice Cream
async function getIceCream() {
    const URL: string = "./menus/ice-cream.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    let shuffleData = shuffleArray(data.slice(8, 20));

    slider_two.innerHTML = "";

    shuffleData.forEach((ele: any) => {
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
}; getIceCream();

/**
 * #TAG
 */
const tag_list: any = document.querySelector("[data-tags-list]");
async function tagList() {
    const URL: string = "./menus/our-foods.json";
    const response: Response = await fetch(URL);
    const data: any[] = await response.json();
    const indexData = data.slice(0, 35);

    tag_list.innerHTML = "";

    indexData.forEach((ele: any) => {
        tag_list.innerHTML += `<a href="detail.html?detail=${ele.name}" class="btn-tag label-small">${ele.name}</a>`;
    });
}; tagList();