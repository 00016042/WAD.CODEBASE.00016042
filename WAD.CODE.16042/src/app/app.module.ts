import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component'; 

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    DeleteComponent,
    CreateCategoryComponent,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule, // Material Table
    MatButtonModule, // Material Buttons
    BrowserAnimationsModule // Required for Angular Material animations
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
