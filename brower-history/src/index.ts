import { BrowserHistory } from "./BrowserHIstory";

const history = new BrowserHistory();
history.push("https://www.google.com");
history.push("https://www.facebook.com");
history.push("https://www.youtube.com");
history.push("https://www.twitter.com");
console.log(history.getUrls());

const iterator = history.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
