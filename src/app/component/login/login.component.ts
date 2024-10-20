import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.cartService.toggleButtonVisibility(true); 
  }

}
