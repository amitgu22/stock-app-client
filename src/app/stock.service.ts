import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = '/stock/api';

  constructor(private http: HttpClient) { }

  getStock(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/stock/${id}`);
  }

  createStock(stock: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/stock`, stock);
  }

  updateStock(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/stock/${id}`, value);
  }



  getStockList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stockList`);
  }
}
