import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { Observable } from "rxjs";
import { StockService } from "../stock.service";
import {Stock} from "../stock";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.css"],

})
export class StockListComponent implements OnInit {
  stocks: Observable<Stock[]>;
  myFromNowInterval: any;


  constructor(private stockService: StockService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.myFromNowInterval = setInterval( () => {

    this.reloadData();},60000);
  }

  reloadData() {
    this.stocks = this.stockService.getStockList();
  }

}
