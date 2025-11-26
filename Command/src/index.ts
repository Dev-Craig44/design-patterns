import { AddCustomerCommand } from "./AddCustomerCommand";
// 4.) import the Button class
import { Button } from "./fx/Button";

class main {
  main(): void {
    const command = new AddCustomerCommand();
    const button = new Button("Add Customer", command);
    button.click();
  }
}

const app = new main();
app.main();
