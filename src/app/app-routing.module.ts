import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from "./login/login.component";
import {AuthGuard} from "./auth.guard"
import { PreventLoginGuard } from "./prevent-login.guard";
import {InvoiceComponent} from "./invoice/invoice.component"

export const router: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "about", component: AboutComponent },
	{ path: "products", component: ProductsComponent, canActivate:[AuthGuard]},
	{ path: "home", component: HomeComponent },
	{path:"login", component:LoginComponent, canActivate:[PreventLoginGuard]},
	{ path: "cart", component: CartComponent, canActivate:[AuthGuard] },
	{path:"invoice", component:InvoiceComponent},
	{ path: "sidebar-component", component: SidebarComponent }
	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
