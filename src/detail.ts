/**
 * GET FETCH API
 */
const allFiles: string[] = [
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
const fetchDataDetail = async function() {
    const allData: any[] = [];
    try {
        for(const all of allFiles) {
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
 * Get Detail
 */
const detail: any = document.querySelector("[data-detail]");

// push skeleton
detail.innerHTML = `
<div class="detail">
    <div class="img-detail-skeleton img-cover"></div>
    
    <div class="detail-body">
        <div class="detail-title">
            <div class="display-small-skeleton"></div>
        </div>

        <div class="text-content-skeleton"></div>
        
        <div class="text-list">
            <div class="text-box br-rt">
                <div class="display-large-skeleton"></div>
                <div class="label-small-skeleton"></div>
            </div>

            <div class="text-box">
                <div class="display-large-skeleton"></div>
                <div class="label-small-skeleton"></div>
            </div>
        </div>

        <div class="text-country-skeleton"></div>
    </div>
</div>
`;

// push detail in page
async function getDetail() {
    const data: any = await fetchDataDetail();

    const urlParam: URLSearchParams = new URLSearchParams(window.location.search);
    const langParam: string | null = urlParam.get("detail");
    const lang: string = langParam ? decodeURIComponent(langParam).toLowerCase() : "./index.html";
    const filter: any[] = data.filter((ele: any) => {
        return ele.name.toLowerCase().includes(lang);
    });
    
    detail.innerHTML = "";

    filter.forEach((ele: any) => {
        detail.innerHTML = `
        <img src="${ele.img}" alt="${ele.name}" loading="lazy" class="img-detail img-cover">
        
        <div class="detail-body">
            <div class="detail-title">
                <h1 class="display-medium">${ele.name}</h1>

                <button class="btn-bookmark bookmark-add label-medium" data-bookmark-add>
                    <span class="material-symbols-outlined bookmark-add" aria-hidden="true">bookmark_add</span>
                    Save
                </button>

                <button class="btn-bookmark bookmark label-medium" data-bookmark>
                    <span class="material-symbols-outlined bookmark" aria-hidden="true">bookmark</span>
                    Unsaved
                </button>
            </div>

            <p class="text-content label-large">${ele.dsc}</p>
            
            <div class="text-list">
                <div class="text-box br-rt">
                    <h1 class="display-medium">${ele.price}</h1>
                    <p class="label-small">price</p>
                </div>

                <div class="text-box">
                    <h1 class="display-medium">${ele.rate}</h1>
                    <p class="label-small">rate</p>
                </div>
            </div>

            <p class="text-country label-large"><b>country</b>: ${ele.country}</p>
        </div>
        `;
    });
}; getDetail();