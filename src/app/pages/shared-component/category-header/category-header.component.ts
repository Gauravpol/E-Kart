import { Component } from '@angular/core';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent {

  categoryList = [
    {
      name:'Electronic',
      Link:'/pages/Electronics'
    },
    {
      name:'Today\'s Deals'
    },
    {
      name:'Tv & Appliances'
    },
    {
      name:'Mens'
    },
    {
      name:'Women'
    },
    {
      name:'Home & Furniture'
    },
    {
      name:'Sports,Books & More'
    },
  ]



ngOnInit(){
console.log("category list ->"+JSON.stringify(this.categoryList));
}
}
