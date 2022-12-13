import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  how_many_clicks:number = 0;

  handleClick()
  {
    console.log("clicked div");
    this.how_many_clicks++;
  }

  handleChangeOfBg():string
  {
    if(this.how_many_clicks == 1)
    {
      return 'orange';
    }
    else if(this.how_many_clicks == 2)
    {
      return 'green';
    }
    else 
    {
      this.how_many_clicks = 0;
      return 'transparent';
    }
  }
}
