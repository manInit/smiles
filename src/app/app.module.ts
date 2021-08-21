import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAllComponent } from './page-all/page-all.component';
import { PageAllService } from "./page-all/page-all.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ActionIconComponent } from './action-icon/action-icon.component';
import { PageComponent } from './page/page.component';
import { PageLoveComponent } from './page-love/page-love.component';
import { PageDeletedComponent } from './page-deleted/page-deleted.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { HoverImgComponent } from './hover-img/hover-img.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAllComponent,
    TableComponent,
    NavbarComponent,
    HeaderComponent,
    ActionIconComponent,
    PageComponent,
    PageLoveComponent,
    PageDeletedComponent,
    InputComponent,
    ButtonComponent,
    HoverImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [PageAllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
