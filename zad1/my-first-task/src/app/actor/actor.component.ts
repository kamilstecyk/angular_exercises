import { Component } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent {
  showActor:boolean = false;
  input_actor_name:string = "";
  input_actor_surname:string = "";
  input_actor_best_film:string = "";

  submitActorDataAndShow(e:Event):void 
  {
    console.log(e.target);
    console.log("show");
    this.showActor = true;
    console.log(this.input_actor_name + " " + this.input_actor_surname + " " + this.input_actor_best_film);
  }

  hideActor(e:Event):void 
  {
    console.log(e.target);
    console.log("hide");
    this.showActor = false;
  }
}
