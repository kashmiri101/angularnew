import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {InventoryComponent} from './inventory/inventory.component';
import {FaqComponent} from './faq/faq.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {PrivacypolicyComponent} from './privacypolicy/privacypolicy.component';
import {HowtobuyComponent}  from './howtobuy/howtobuy.component';
import {SalestermComponent} from './salesterm/salesterm.component';
import {BlogComponent } from './blog/blog.component';
import {HarareComponent } from './harare/harare.component';
import {DurbanComponent} from './durban/durban.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',  
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  }, 
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'testimonial',
    component:TestimonialComponent
  },
  {
    path: 'privacypolicy',
    component:PrivacypolicyComponent
  },
  {
    path: 'howtobuy',
    component:HowtobuyComponent
  },
  {
    path: 'salesterm',
    component:SalestermComponent
  },{
     path:'blog',
     component:BlogComponent
  },{
     path:'harare',
     component:HarareComponent
  },{
    path:'durban',
    component:DurbanComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
