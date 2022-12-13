import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact_data: {full_name:string, phone:string, email:string};
  show_details: boolean = false;

  handle_click_on_details_visibility_btn()
  {
    this.show_details = !this.show_details;
    console.log(this.show_details);
  }
}
