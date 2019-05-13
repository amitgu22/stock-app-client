import { StockService } from '../stock.service';
import {Stock} from '../stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stock: Stock = new Stock();
  submitted = false;

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }



  save() {
    this.stockService.createStock(this.stock)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stock = new Stock();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
