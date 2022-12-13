import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
    inputed_country: string = "";
    countries: Array<string> = [];

    add_country_btn_handler()
    {
      this.countries.push(this.inputed_country);
      console.log("add country " + this.inputed_country);
      console.log("Countries array: " + this.countries.length);
      this.inputed_country = "";
    }

    deleteCountryFromArray(index: number)
    {
      this.countries.splice(index, 1);
      console.log("Countreis lenght" + this.countries.length)
    }
}
