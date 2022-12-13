import { Component, Input, Output, EventEmitter } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  @Input() country_name = '';
  @Input() country_index = 0;
  @Input() index_is_even = false;
  @Output() deleteCountryEvent = new EventEmitter<number>();

  removeThisCountry()
  {
    this.deleteCountryEvent.emit(this.country_index);
  }

  getColorOfCountryRow():string
  {
    if(this.index_is_even == true && ( this.country_name.includes('a') || this.country_name.includes('r')))
    {
      return 'lightblue';
    }
    else if(this.index_is_even == true && !( this.country_name.includes('a') || this.country_name.includes('r')))
    {
      return 'yellow';
    }
    else if(this.index_is_even == false && this.country_name.length > 6)
    {
      return 'orange';
    }
    else if(this.index_is_even == false && this.country_name.length <= 6)
    {
      return 'lightgray';
    }

    return 'lightgreen';
  }

  onNavigate(event: any){
    event.stopPropagation();
    window.open("https://pl.wikipedia.org/wiki/" + this.country_name, "_blank");
  }
}
