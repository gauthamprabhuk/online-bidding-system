import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isButtonVisible = false;
  public totalItem : number = 0;
  public searchTerm : string = '';
  constructor(private cartServie : CartService) { }


  ngOnInit(): void {

    this.cartServie.buttonVisibility$.subscribe(isVisible => {
      this.isButtonVisible = isVisible; 
    });

    this.cartServie.getProducts()
    .subscribe( res=>{
      this.totalItem = res.length;
    } )
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartServie.search.next(this.searchTerm);
  }

}