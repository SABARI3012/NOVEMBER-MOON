import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { AmbianceComponent } from './ambiance/ambiance.component';
import { ContactComponent } from './contact/contact.component';
import { BookingformComponent } from './bookingform/bookingform.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'ambiance', component: AmbianceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book', component: BookingformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
