import { Iterator } from "./interfaces/Iterator";
import { ArrayIterator } from "./iterators/ArrayIterator";

export class BrowserHistory {
  private urls: string[] = [];

  push(url: string): void {
    this.urls.push(url);
  }

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
