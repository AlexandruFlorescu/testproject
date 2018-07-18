import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  declarations: []
})
export class MaterialModule { }
