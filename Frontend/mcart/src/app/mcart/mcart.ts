import { Component } from '@angular/core';

@Component({
  selector: 'app-mcart',
  standalone: false,
  templateUrl: './mcart.html',
  styleUrl: './mcart.css',
})
export class Mcart {

   company = {
    name: "MCart E-Commerce",
    description: "MCart is a leading online shopping platform, providing the best quality products with fast delivery and secure payment options.",
    founded: 2020,
    employees: 50,
    email: "support@mcart.com",
    phone: "+91 9876543210",
    address: "Eon tech park Kharadi Pune",
    logo: "assets/logo.webp"
  };

}
