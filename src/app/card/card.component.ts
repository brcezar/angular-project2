import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  titulo: string;

  @Input()
  subTitulo: string;

  @Input()
  descricao: string;

  @Input()
  imagemURL: string;

  @Output()
  onClick = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }
}
