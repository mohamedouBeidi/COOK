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
var allFiles = [
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
var fetchDataDetail = function () {
    return __awaiter(this, void 0, void 0, function () {
        var allData, _i, allFiles_1, all, URL_1, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allData = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    _i = 0, allFiles_1 = allFiles;
                    _a.label = 2;
                case 2:
                    if (!(_i < allFiles_1.length)) return [3 /*break*/, 6];
                    all = allFiles_1[_i];
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
 * Get Detail
 */
var detail = document.querySelector("[data-detail]");
// push skeleton
detail.innerHTML = "\n<div class=\"detail\">\n    <div class=\"img-detail-skeleton img-cover\"></div>\n    \n    <div class=\"detail-body\">\n        <div class=\"detail-title\">\n            <div class=\"display-small-skeleton\"></div>\n        </div>\n\n        <div class=\"text-content-skeleton\"></div>\n        \n        <div class=\"text-list\">\n            <div class=\"text-box br-rt\">\n                <div class=\"display-large-skeleton\"></div>\n                <div class=\"label-small-skeleton\"></div>\n            </div>\n\n            <div class=\"text-box\">\n                <div class=\"display-large-skeleton\"></div>\n                <div class=\"label-small-skeleton\"></div>\n            </div>\n        </div>\n\n        <div class=\"text-country-skeleton\"></div>\n    </div>\n</div>\n";
// push detail in page
function getDetail() {
    return __awaiter(this, void 0, void 0, function () {
        var data, urlParam, langParam, lang, filter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchDataDetail()];
                case 1:
                    data = _a.sent();
                    urlParam = new URLSearchParams(window.location.search);
                    langParam = urlParam.get("detail");
                    lang = langParam ? decodeURIComponent(langParam).toLowerCase() : "./index.html";
                    filter = data.filter(function (ele) {
                        return ele.name.toLowerCase().includes(lang);
                    });
                    detail.innerHTML = "";
                    filter.forEach(function (ele) {
                        detail.innerHTML = "\n        <img src=\"".concat(ele.img, "\" alt=\"").concat(ele.name, "\" loading=\"lazy\" class=\"img-detail img-cover\">\n        \n        <div class=\"detail-body\">\n            <div class=\"detail-title\">\n                <h1 class=\"display-medium\">").concat(ele.name, "</h1>\n\n                <button class=\"btn-bookmark bookmark-add label-medium\" data-bookmark-add>\n                    <span class=\"material-symbols-outlined bookmark-add\" aria-hidden=\"true\">bookmark_add</span>\n                    Save\n                </button>\n\n                <button class=\"btn-bookmark bookmark label-medium\" data-bookmark>\n                    <span class=\"material-symbols-outlined bookmark\" aria-hidden=\"true\">bookmark</span>\n                    Unsaved\n                </button>\n            </div>\n\n            <p class=\"text-content label-large\">").concat(ele.dsc, "</p>\n            \n            <div class=\"text-list\">\n                <div class=\"text-box br-rt\">\n                    <h1 class=\"display-medium\">").concat(ele.price, "</h1>\n                    <p class=\"label-small\">price</p>\n                </div>\n\n                <div class=\"text-box\">\n                    <h1 class=\"display-medium\">").concat(ele.rate, "</h1>\n                    <p class=\"label-small\">rate</p>\n                </div>\n            </div>\n\n            <p class=\"text-country label-large\"><b>country</b>: ").concat(ele.country, "</p>\n        </div>\n        ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
getDetail();
