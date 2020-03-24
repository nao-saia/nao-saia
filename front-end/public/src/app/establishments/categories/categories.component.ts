import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ns-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  itemsPerSlide = 5;
  singleSlideOffset = true;
  @Output() categoria = new EventEmitter();

  slides = [
    {
      image: "assets/img/categories/doces.png",
      label: "Doceria",
      categoria: "doceria"
    },
    { image: "assets/img/categories/beer.png", label: "Bar", categoria: "bar" },
    {
      image: "assets/img/categories/clinic.png",
      label: "Farmácia",
      categoria: "farmacia"
    },
    {
      image: "assets/img/categories/restaurante.png",
      label: "Restaurante",
      categoria: "restaurante"
    },
    {
      image: "assets/img/categories/basket.png",
      label: "Supermercado",
      categoria: "supermercado"
    },
    {
      image: "assets/img/categories/bread.png",
      label: "Padaria",
      categoria: "padaria"
    },
    {
      image: "assets/img/categories/ice-creams.png",
      label: "Sorveteria",
      categoria: "sorveteria"
    }
  ];

  ngOnInit(): void {}

  changeCategoria(categoria) {
    this.categoria.emit(categoria);
  }
}
