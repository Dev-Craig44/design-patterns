"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserHistory_js_1 = require("./BrowserHistory.js");
const history = new BrowserHistory_js_1.BrowserHistory();
history.push("https://google.com");
history.push("https://facebook.com");
history.push("https://twitter.com");
history.push("https://onlyfans.com");
console.log(history.getUrls());
