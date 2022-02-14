import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.css']
})
export class FormuserComponent implements OnInit {
  formus="hi";
  etat=true;
  date=new Date();
  couleur="red";
  tickets=[{
nomuser:"molka",
priorite:"high"
  },{
    nomuser:"molka2",
    priorite:"high"
      },{
            nomuser:"aaa",
            priorite:"low"
              },{
                nomuser:"bbb",
                priorite:"low"
                  },{
                    nomuser:"molka3",
                    priorite:"high"
                      }]
  constructor() { }

  ngOnInit(): void {
  }
  changeretat(){
    this.etat=false;
    console.log(this.etat);
    this.couleur="yellow";
  }
}
