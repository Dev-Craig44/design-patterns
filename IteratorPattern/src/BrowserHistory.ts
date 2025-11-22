import { Iterator } from "./interfaces/Iterator";
import { ArrayIterator } from "./iterators/ArrayIterator";
// 1.) Create the BrowserHistory class that will manage the list of URLs
export class BrowserHistory {
  // If tomorrow we decided to change the data structure from an array to a linked list, our main is going to break.
  // 2.) Create private field to store URLs
  private urls: string[] = [];

  // 3.) Add the push and pop methods to add and remove URLs
  push(url: string): void {
    this.urls.push(url);
  }

  // 4.) Add the pop method to remove the last URL
  pop(): string | undefined {
    return this.urls.pop();
  }

  createIterator(): Iterator<string> {
    return new ArrayIterator(this.urls);
  }

  getUrls(): string[] {
    return this.urls;
  }
}
