"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserHistory = void 0;
const ArrayIterator_1 = require("./iterators/ArrayIterator");
class BrowserHistory {
    constructor() {
        this.urls = [];
    }
    push(url) {
        this.urls.push(url);
    }
    pop() {
        return this.urls.pop();
    }
    createIterator() {
        return new ArrayIterator_1.ArrayIterator(this.urls);
    }
    getUrls() {
        return this.urls;
    }
}
exports.BrowserHistory = BrowserHistory;
//# sourceMappingURL=BrowserHIstory.js.map