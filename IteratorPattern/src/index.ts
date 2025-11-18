import { BrowserHistory } from "./BrowserHistory.js";

//  5.) Create an instance of BrowserHistory and test the push and pop methods
const history = new BrowserHistory();
history.push("https://google.com");
history.push("https://facebook.com");
history.push("https://twitter.com");
history.push("https://onlyfans.com");
// 6.) Use for loop to iterate over the URLs
for (let i = 0; i < history.getUrls().length; i++) {
  console.log(history.getUrls()[i]);
}

console.log(history.getUrls());
