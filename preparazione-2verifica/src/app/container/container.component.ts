import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  names: string[];  
  constructor() { 
     this.names = ['Escavatore', 'Trattore', 'Autocarro', 'Rimorchio', 'Carrello', 'Elevatore', 'Compattore', 'Finitrice', 'Terna', 'Pala'];
  }
  ngOnInit() {
  }
}


