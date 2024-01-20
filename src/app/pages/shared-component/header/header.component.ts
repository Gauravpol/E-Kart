import { AfterViewInit, ElementRef,Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}



  isSubMenuOpen:boolean = false;
  


  categoryList = [
    {
      name:'Electronic',
      Link:'/pages/Electronics',
      icon:'fa fa-chevron-down'
    },
    {
      name:'Today\'s Deals',
      icon:'fa fa-chevron-down',

    },
    {
      name:'Tv & Appliances',
      icon:'fa fa-chevron-down'

    },
    {
      name:'Mens',
      icon:'fa fa-chevron-down'

    },
    {
      name:'Women',
      icon:'fa fa-chevron-down'

    },
    {
      name:'Home & Furniture',
      icon:'fa fa-chevron-down'

    },
    {
      name:'Sports,Books & More',
      icon:'fa fa-chevron-down'

    },
  ]



ngOnInit(){
console.log("category list ->"+JSON.stringify(this.categoryList));


}

}
