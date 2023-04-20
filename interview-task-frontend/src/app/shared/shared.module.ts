import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AvatarInitialsPipe } from './pipes/avatar-initials.pipe'
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AvatarInitialsPipe
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    AvatarInitialsPipe,
    HttpClientModule
  ]
})
export class SharedModule { }
