import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";

const MaterialComponents = [
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatTabsModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
