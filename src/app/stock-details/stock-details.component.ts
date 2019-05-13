import {Stock} from '../stock';
import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../stock.service';
import { StockListComponent } from '../stock-list/stock-list.component';

@Component({
  selector: 'app-stock-details',
  templateUrl: 'stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  @Input() stock: Stock;

  submitted = false;

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  update() {
    this.stockService.updateStock(12,this.stock)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stock = new Stock();
  }

  onSubmit() {
    this.submitted = true;
    this.update();
  }





}
