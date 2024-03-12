import { Component, EventEmitter, Input, OnInit, Output, input,  } from '@angular/core';
import { Movie } from '../movie-list/movie';


@Component({
  selector: 'app-starts-integer',
  standalone: true,
  imports: [],
  templateUrl: './starts-integer.component.html',
  styleUrl: './starts-integer.component.css'
})
export class StartsIntegerComponent{

  @Input() quantity! : Number;

  @Input() i!: number;

  @Output() quantityChange: EventEmitter<Number> = new EventEmitter<Number>();


  modificar_valor(valor:number):void {
    this.quantity=valor;
    this.quantityChange.emit(this.quantity);
  }

}
