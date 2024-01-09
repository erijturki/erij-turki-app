import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent {
   name = 'Formation Web';
   alignement ='right';
   couleur = 'red';
   @Input() session: any;
   @Output() participantsChange = new EventEmitter<any>();
  constructor(){}
  ngOnInit(){}
   inscrire(){
    console.log('nouvelle inscription..');
    this.session.name = 'Formation Web Avancé';
    this.session.participants = +this.session.participants + 1;
    console.log(this.session.participants+ 'Participants');
    this.participantsChange.emit({
       value: this.session.participants
    });
  
  }
  
}
