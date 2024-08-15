/**
 * GET FETCH API
 */
const allFilesRecipes: string[] = [
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
const fetchDataRecipes = async function() {
    const allData: any[] = [];
    try {
        for(const all of allFilesRecipes) {
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
 * push element in page recipes
 */
const recipes_list: any = document.querySelector("[data-recipes-list]");
const Pagination_list: any = document.querySelector("[data-Pagination-list]");
let itemsPerPage: number = 60;

// skeleton recipes
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

function shuffleArray(array: any[]): any[] {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};

// get recipes
async function getRecipes() {
    const data: any = await fetchDataRecipes();
    const shuffleData: any = shuffleArray(data);

    // get page
    const urlParam: URLSearchParams = new URLSearchParams(window.location.search);
    const currentPage: (string | number) = parseInt(urlParam.get("page") || "1", 10);
    const totalItems: number = shuffleData.length;
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const pageItmes: any = shuffleData.slice(startIndex, endIndex);

    // get search
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const langParam: string | null = urlParams.get("search");
    const lang: string = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
    const filter: any = pageItmes.filter((display: any) => display.name.toLowerCase().includes(lang));

    recipes_list.innerHTML = "";

    filter.forEach((ele: any) => {
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
    
    const inputPage: any = document.querySelector("[data-input-page]");
    const indexPage: any = document.querySelector("[data-index-page]");
    const totalPage: any = Math.ceil(totalItems / itemsPerPage);
    indexPage.innerHTML = totalPage;
    inputPage.addEventListener("keydown", (e: any) => { if (e.key === "Enter") window.location.href = `./recipes.html?page=${inputPage.value}` });
}; getRecipes();