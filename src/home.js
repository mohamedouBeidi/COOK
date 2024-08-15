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
var arrayData = [
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
var fetchData = function () {
    return __awaiter(this, void 0, void 0, function () {
        var allData, _i, arrayData_1, all, URL_1, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allData = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, arrayData_1 = arrayData;
                    _a.label = 2;
                case 2:
                    if (!(_i < arrayData_1.length)) return [3 /*break*/, 6];
                    all = arrayData_1[_i];
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
 * search hero
 */
var search = document.querySelector("[data-search]");
var btn_search = document.querySelector("[data-btn-search]");
btn_search.addEventListener("click", function () { if (search.value.toLowerCase().trim())
    window.location.href = "./recipes.html?search=".concat(search.value.toLowerCase().trim()); });
search.addEventListener("keyup", function (e) { if (e.key === "Enter")
    btn_search.click(); });
/**
 * tsb
 */
var tabBtn = document.querySelectorAll("[data-tab-btn]");
var tabBox = document.querySelectorAll("[data-tab-box]");
var _loop_1 = function (i) {
    tabBtn[i].addEventListener("click", function () {
        for (var i_1 = 0; i_1 < tabBtn.length; i_1++) {
            tabBtn[i_1].classList.remove("active");
            tabBox[i_1].classList.remove("active");
        }
        ;
        tabBtn[i].classList.add("active");
        tabBox[i].classList.add("active");
    });
};
for (var i = 0; i < tabBtn.length; i++) {
    _loop_1(i);
}
;
/**
 * PUSH FETCH API
 */
var best_foods = document.querySelector("[data-tab-list-best-foods]");
var burgers = document.querySelector("[data-tab-list-burgers]");
var desserts = document.querySelector("[data-tab-list-desserts]");
var drinks = document.querySelector("[data-tab-list-drinks]");
var steaks = document.querySelector("[data-tab-list-steaks]");
var tab_list = document.querySelectorAll("[data-tab-list]");
tab_list.forEach(function (ele) {
    ele.innerHTML += "\n    <div class=\"card\">\n        <div class=\"img-card-skeleton img-cover\"></div>\n\n        <div class=\"card-body\">\n            <div class=\"title-content-skeleton\"></div>\n\n            <div class=\"card-bottom\">\n                <div class=\"time-skeleton\"></div>\n            </div>\n        </div>\n    </div>\n    ".repeat(12);
});
// Random order
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
// Get Best Foods
function getBestFoods() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/best-foods.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(28, 40));
                    best_foods.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        best_foods.innerHTML += "\n        <div class=\"card\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getBestFoods();
// Get Burgers
function getBurgers() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/burgers.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(38, 50));
                    burgers.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        burgers.innerHTML += "\n        <div class=\"card\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getBurgers();
// Get Desserts
function getDesserts() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/desserts.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(0, 12));
                    desserts.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        desserts.innerHTML += "\n        <div class=\"card\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getDesserts();
// Get Drinks
function getDrinks() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/drinks.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(18, 30));
                    drinks.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        drinks.innerHTML += "\n        <div class=\"card\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getDrinks();
// Get Steaks
function getSteaks() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/steaks.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(28, 40));
                    steaks.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        steaks.innerHTML += "\n        <div class=\"card\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getSteaks();
/**
 * #RECIPE SLIDER
 */
var slider_one = document.querySelector("[data-slider-one]");
var slider_two = document.querySelector("[data-slider-two]");
var sliderSkeleton = document.querySelectorAll("[data-skeleton]");
sliderSkeleton.forEach(function (ele) {
    ele.innerHTML = "\n    <div class=\"card-slider\">\n        <div class=\"img-card-skeleton img-cover\"></div>\n\n        <div class=\"card-body\">\n            <div class=\"title-content-skeleton\"></div>\n\n            <div class=\"card-bottom\">\n                <div class=\"time-skeleton\"></div>\n            </div>\n        </div>\n    </div>\n    ".repeat(12);
});
// Get Our Foods
function getOurFoods() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/our-foods.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(8, 20));
                    slider_one.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        slider_one.innerHTML += "\n        <li class=\"card-slider\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </li>\n        ");
                    });
                    slider_one.innerHTML += "\n    <a href=\"recipes.html\" class=\"card-slider-show-more label-small\">\n        Show More\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
getOurFoods();
// Get Ice Cream
function getIceCream() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, shuffleData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/ice-cream.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    shuffleData = shuffleArray(data.slice(8, 20));
                    slider_two.innerHTML = "";
                    shuffleData.forEach(function (ele) {
                        slider_two.innerHTML += "\n        <li class=\"card-slider\">\n            <a href=\"detail.html?detail=".concat(ele.name, "\" class=\"title-content label-medium\">\n                <img src=\"").concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-card img-cover\">\n            </a>\n\n            <div class=\"card-body\">\n                <a href=\"detail.html?detail=").concat(ele.name, "\" class=\"title-content label-medium\">").concat(ele.name, "</a>\n\n                <div class=\"card-bottom\">\n                    <p class=\"time\">\n                        <span class=\"material-symbols-outlined\" aria-hidden=\"true\">globe</span>\n                        ").concat(ele.country, "\n                    </p>\n\n                    <button class=\"btn-bookmark bookmark-add\" data-bookmark-add>\n                        <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    </button>\n\n                    <button class=\"btn-bookmark bookmark\" data-bookmark>\n                        <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    </button>\n                </div>\n            </div>\n        </li>\n        ");
                    });
                    slider_two.innerHTML += "\n    <a href=\"recipes.html\" class=\"card-slider-show-more label-small\">\n        Show More\n    </a>\n    ";
                    return [2 /*return*/];
            }
        });
    });
}
;
getIceCream();
/**
 * #TAG
 */
var tag_list = document.querySelector("[data-tags-list]");
function tagList() {
    return __awaiter(this, void 0, void 0, function () {
        var URL, response, data, indexData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "./menus/our-foods.json";
                    return [4 /*yield*/, fetch(URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    indexData = data.slice(0, 35);
                    tag_list.innerHTML = "";
                    indexData.forEach(function (ele) {
                        tag_list.innerHTML += "<a href=\"detail.html?detail=".concat(ele.name, "\" class=\"btn-tag label-small\">").concat(ele.name, "</a>");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
tagList();
