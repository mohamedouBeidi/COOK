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
const allFiles = [
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
const fetchDataDetail = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const allData = [];
        try {
            for (const all of allFiles) {
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
const detail = document.querySelector("[data-detail]");
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
function getDetail() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataDetail();
        const urlParam = new URLSearchParams(window.location.search);
        const langParam = urlParam.get("detail");
        const lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "./index.html";
        const filter = data.filter((ele) => {
            return ele.name.toLowerCase().includes(lang);
        });
        detail.innerHTML = "";
        filter.forEach((ele) => {
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
    });
}
;
getDetail();
//# sourceMappingURL=detail.js.map