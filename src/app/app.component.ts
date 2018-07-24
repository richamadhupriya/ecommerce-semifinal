import { Component, OnInit } from "@angular/core";
import { UserService } from './userservice.service'

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {


	ngOnInit(){
		
	}

	title = "app";
	url = "";
	listItems: any;
	constructor(private user:UserService) {
		this.listItems = [
			{
				"name": "Home",
				"link": "#/home"
			},
			{
				"name": "Products",
				"link": "#/products"
			},
			{
				"name": "Cart",
				"link": "#/cart"
			},
			{
				"name": "About",
				"link": "#/about"
			},
			/*{
				name: "Login",
				link: "#/login"
			}*/
		];
		/*if(AppComponent.logger.get(1)=="yes"){
			this.listItems[4].name="Log Out";
		}*/
		//alert(sessionStorage.getItem('loggedIn'));
	}

	add(title, url) {
		if (title !== "" && url !== "") {
			url = "http://" + url;
			this.listItems.push({
				name: title,
				link: url,
				isNew: true
			});
			this.title = "";
			this.url = "";
		}
	}
}
