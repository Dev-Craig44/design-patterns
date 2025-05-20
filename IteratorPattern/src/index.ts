import { BrowserHistory } from "./BrowserHistory.js";

const history = new BrowserHistory();
history.push("https://google.com");
history.push("https://facebook.com");
history.push("https://twitter.com");
history.push("https://onlyfans.com");
console.log(history.getUrls());
