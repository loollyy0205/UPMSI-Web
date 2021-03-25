import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatTabsModule,
  MatExpansionModule,
  MatDialogModule,
  MatTooltipModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
