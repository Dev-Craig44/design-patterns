import { AddCustomerCommand } from "./AddCustomerCommand";
import { CustomerService } from "./CustomerService";
// 4.) import the Button class
import { Button } from "./fx/Button";

class main {
  main(): void {
    const service = new CustomerService();
    const command = new AddCustomerCommand(service);
    const button = new Button("Add Customer", command);
    button.click();
  }
}

const app = new main();
app.main();
