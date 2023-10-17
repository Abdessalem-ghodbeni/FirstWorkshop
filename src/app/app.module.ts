import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListUserComponentComponent } from './user/list-user-component/list-user-component.component';
import { ProductsComponent } from './products/products.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    ListUserComponentComponent,
    ProductsComponent,
    AddUserComponent,
    NotFoundComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
