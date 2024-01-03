import { AfterViewInit, ElementRef,Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  // ngAfterViewInit(): void {
  //   const popoverTriggerEl = this.elementRef.nativeElement.querySelector('#popoverBtn');
  //   const popoverContentEl = document.getElementById('popoverContent');

  //   if (popoverTriggerEl && popoverContentEl) {
  //     const popover = new bootstrap.Popover(popoverTriggerEl, {
  //       content: () => popoverContentEl.innerHTML,
  //       html: true,
  //     });
  //   }
  // }

  isSubMenuOpen:boolean = false;

  ngOnInit(){

  }
}
