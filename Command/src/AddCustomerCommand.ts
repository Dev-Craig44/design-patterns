import { CustomerService } from "./CustomerService";
import { Command } from "./fx/Command";

export class AddCustomerCommand implements Command {
  constructor() {}
  execute(): void {
    const service = new CustomerService();
    service.addCustomer();
  }
}
