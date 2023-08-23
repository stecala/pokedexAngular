import { Component } from '@angular/core';
import { HttpProxyService } from 'src/app/services/http-proxy.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-scrollbar-left',
  templateUrl: './scrollbar-left.component.html',
  styleUrls: ['./scrollbar-left.component.scss']
})
export class ScrollbarLeftComponent {

  allPokemonPath : string = 'pokemon?limit=20&offset=0';
  list: any = {};
  nameList: any = [];
  pokemonList : any = [];
  pokemon : any = [];
  i : number = 0; 

  constructor(private http: HttpProxyService){
    Promise.resolve().then(()=>{
      this.list = this.http.nameGet(this.allPokemonPath);
      return this.list;
    }).then(()=>{
      this.nameList = this.list.__zone_symbol__value.results;
      //console.error(this.nameList);
      this.nameList.forEach((element: { name: string; }) => {
        return this.http.singlePokemonGet(element.name);
      });
    }).then(()=>{
    
    }).catch((err) => {
      console.error(err);
    })

  }
}
