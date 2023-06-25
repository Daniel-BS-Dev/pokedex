import { Component, OnInit, Input } from "@angular/core";
import { PokemonDetailModel } from "src/app/models/pokemonDetails";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon!: PokemonDetailModel;
  @Input() classicMode!: boolean;

  constructor() { }

  get mensageTooltip() {
    return `Clique para ver mais informações sobre ${this.pokemon.name}.`;
  }

  getPrincipalType = (list: any) =>
    list?.filter((x: any) => x.slot === 1)[0]?.type.name;

  ngOnInit() {
  }
}
