var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * GET FETCH API
 */
var allFilesRecipes = [
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
var fetchDataRecipes = function () {
    return __awaiter(this, void 0, void 0, function () {
        var allData, _i, allFilesRecipes_1, all, URL_1, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allData = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, allFilesRecipes_1 = allFilesRecipes;
                    _a.label = 2;
                case 2:
                    if (!(_i < allFilesRecipes_1.length)) return [3 /*break*/, 6];
                    all = allFilesRecipes_1[_i];
                    URL_1 = all;
                    return [4 /*yield*/, fetch(URL_1)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    allData.push.apply(allData, data);
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6:
                    ;
                    return [2 /*return*/, allData];
                case 7:
                    error_1 = _a.sent();
                    console.error("Error Fetch Data", error_1);
                    return [2 /*return*/, null];
                case 8:
                    ;
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * push element in page recipes
 */
var recipes_list = document.querySelector("[data-recipes-list]");
var Pagination_list = document.querySelector("[data-Pagination-list]");
var itemsPerPage = 60;
// skeleton recipes
recipes_list.innerHTML += "\n<div class=\"card\">\n    <div class=\"img-card-skeleton img-cover\"></div>\n\n    <div class=\"card-body\">\n        <div class=\"title-content-skeleton\"></div>\n\n        <div class=\"card-bottom\">\n            <div class=\"time-skeleton\"></div>\n        </div>\n    </div>\n</div>\n".repeat(60);
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    ;
    return array;
}
;
// get recipes
function getRecipes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, shuffleData, urlParam, currentPage, totalItems, startIndex, endIndex, pageItmes, urlParams, langParam, lang, filter, inputPage, indexPage, totalPage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataRecipes()];
                case 1:
                    data = _a.sent();
                    shuffleData = shuffleArray(data);
                    urlParam = new URLSearchParams(window.location.search);
                    currentPage = parseInt(urlParam.get("page") || "1", 10);
                    totalItems = shuffleData.length;
                    startIndex = (currentPage - 1) * itemsPerPage;
                    endIndex = startIndex + itemsPerPage;
                    pageItmes = shuffleData.slice(startIndex, endIndex);
                    urlParams = new URLSearchParams(window.location.search);
                    langParam = urlParams.get("search");
                    lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "";
                    filter = pageItmes.filter(function (display) { return display.name.toLowerCase().includes(lang); });
                    recipes_list.innerHTML = "";
                    filter.forEach(function (ele) {
                        recipes_list.innerHTML += "\n        <div class=\"card\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    });
                    inputPage = document.querySelector("[data-input-page]");
                    indexPage = document.querySelector("[data-index-page]");
                    totalPage = Math.ceil(totalItems / itemsPerPage);
                    indexPage.innerHTML = totalPage;
                    inputPage.addEventListener("keydown", function (e) { if (e.key === "Enter")
                        window.location.href = "./recipes.html?page=".concat(inputPage.value); });
                    return [2 /*return*/];
            }
        });
    });
}
;
getRecipes();
