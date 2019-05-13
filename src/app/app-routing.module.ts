import { StockDetailsComponent } from './stock-details/stock-details.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock', pathMatch: 'full' },
  { path: 'stock', component: StockListComponent },
  { path: 'add', component: CreateStockComponent },
  { path: 'update', component: StockDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
