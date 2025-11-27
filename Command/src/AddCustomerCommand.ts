import { CustomerService } from "./CustomerService";
import { Command } from "./fx/Command";

export class AddCustomerCommand implements Command {
  private service: CustomerService;

  constructor(service: CustomerService) {
    this.service = service;
  }
  execute(): void {
    this.service.addCustomer();
  }
}
