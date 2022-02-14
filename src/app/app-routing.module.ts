import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormuserComponent} from './formuser/formuser.component';
import { TableauuserComponent} from './tableauuser/tableauuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {path:'',component:FormuserComponent},
  {path:'tab',component:TableauuserComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
