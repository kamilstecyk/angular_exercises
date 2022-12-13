import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'list_of_contacts';
  contacts: {full_name:string, phone:string, email:string}[] = [ { "full_name" : "Janek Kowalski", "phone" : "231 452 111", "email" : "janekkowalski@gmail.com"}, { "full_name" : "Janek Lisiewicz", "phone" : "322 222 333", "email" : "lisiewicz@gmail.com"}, { "full_name" : "Artur Szpilka", "phone" : "009 222 111", "email" : "szpila@gmail.com"}, { "full_name" : "Filip Menel", "phone" : "222 444 333", "email" : "fmenel@gmail.com"}, { "full_name" : "Kacper Bolec", "phone" : "221 321 222", "email" : "boleck@gmail.com"}, { "full_name" : "Sylwia Drozdzowka", "phone" : "222 111 999", "email" : "drozdzowkas@gmail.com"}];

}
