import { AddCustomerCommand } from "./AddCustomerCommand";
// 4.) import the Button class
import { Button } from "./fx/Button";

class main {
  main(): void {
    // 2.) create the command object
    const command = new AddCustomerCommand();
    // 3.) create the button and assign the command to it
    const button = new Button("Add Customer", command);
    // 5.) simulate a button click
    button.click();
  }
}

const app = new main();
app.main();
