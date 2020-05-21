import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Cart {
  id: string
  product: string
  quantity: number
}


@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor(private http: HttpClient) { }

  // getAllCartItems(): Observable<Cart[]> {
  //   return this.http.get<Cart[]>('http://localhost:3000/api/cart-items')
  // }

  // getCartItem(name: string): Observable<Cart> {
  //   return this.http.get<Cart>('http://localhost:3000/api/cart-item/' + id)
  // }

  // insertCartItems(cart: Cart): Observable<Cart> {
  //   return this.http.post<Cart>('http://localhost:3000/api/cart-items/', id)
  // }

  // updateCart(cart: Cart): Observable<void> {
  //   return this.http.put<void>(
  //     'http://localhost:3000/api/cart-itemss/' + cart.id,
  //     cart
  //   )
  // }

  // deleteCart(name: string) {
  //   return this.http.delete('http://localhost:8000/api/cats/' + name)
  // }
}
