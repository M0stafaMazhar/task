import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spiner',
  template:
    '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrl: './loading-spiner.component.css',
})
export class LoadingSpinerComponent {}
