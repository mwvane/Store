import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebarItem } from '../../Models/sidbarItem';
import { ICategory } from '../../../Models/category';
import { INavItem } from '../../../Models/menu';
import { SidePanelService } from '../../Services/side-panel.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  constructor(private http: HttpClient, private router: Router, private sidebarServoce: SidePanelService){}
  sidbarItems: ISidebarItem[] = [
    {
      id: 1,
      tittle: 'main home',
      item: [{ id: 1, name: 'dashborad', image: 'bi bi-grid', url: "Dashboard", autoClose : true }] 
    },
    {
      id: 2,
      tittle: 'all pages',
      item: [
        {
          id: 2,
          name: 'product',
          image: 'bi bi-cart',
          subCategories: [
            { id: 3, name: 'product list', image: 'bi bi-cart-plus', url: "ProductList", autoClose : true },
            { id: 4, name: 'new product', image: 'bi bi-cart-plus', url: "AddProduct", autoClose : true },
          ],
        },
        {
          id: 3,
          name: "catgory",
          image: "bi bi-layers",
          subCategories: [
            {id:5, name: "category list", image: "bi bi-list-nested", url: "CategoryList", autoClose : true },
            {id:6, name: "new category", image: "bi bi-plus-circle", url: "AddCategory", autoClose : true}
          ]
        },
        {
          id: 5,
          name: "Manufacturer",
          image: "bi bi-box",
          subCategories: [
            {id:12, name: "manufacturer list", image: "bi bi-list-nested", url: "ManufacturerList", autoClose : true},
            {id:13, name: "new manufacturer", image: "bi bi-plus-circle", url: "AddManufacturer", autoClose : true}
          ]
        },
        {
          id: 6,
          name: "Options",
          image: "bi bi-card-checklist",
          subCategories: [
            {id:14, name: "Option list", image: "bi bi-list-nested", url: "OptionList", autoClose : true},
            {id:15, name: "new option", image: "bi bi-plus-circle", url: "NewOption", autoClose : true}
          ]
        },
        {
          id: 7,
          name: "Option types",
          image: "bi bi-card-checklist",
          subCategories: [
            {id:16, name: "Option type list", image: "bi bi-list-nested", url: "OptionTypeList", autoClose : true},
            {id:17, name: "new option type", image: "bi bi-plus-circle", url: "AddOptionType", autoClose : true}
          ]
        },
        {
          id: 8,
          name: "Countries",
          image: "bi bi-globe-americas",
          subCategories: [
            {id:16, name: "country list", image: "bi bi-list-nested", url: "CountryList", autoClose : true},
            {id:17, name: "new country", image: "bi bi-plus-circle", url: "AddCountry", autoClose : true}
          ]
        },
        {
          id: 4,
          name: "order",
          image: "bi bi-file-earmark-plus",
          subCategories: [
            {id:7, name: "order list", image: "bi bi-list-task", url: "OrderList"},
            {id:8, name: "order details", image: "bi bi-ticket-detailed", url: "OdrerDetails", autoClose : true},
            {id:9, name: "order tracking", image: "bi bi-arrow-right", url: "OrdrTracking", autoClose : true}
          ]
        },
        {
          id: 5,
          name: "user",
          image: "bi bi-person",
          subCategories: [
            {id:10, name: "user list", image: "bi bi-person-lines-fill", url: "UserList", autoClose : true},
            {id:11, name: "new user", image: "bi bi-person-add", url: "AddUser", autoClose : true}
          ]
        },
      ],
    },
    {
      id: 3, 
      tittle: "settings",
      item: [
        {id: 6, name: "setting", image: "bi bi-gear", url: "Settings"}
      ]
    },
    {
      id: 4, 
      tittle: "support",
      item: [
        {id: 7, name: "FAQ", image: "bi bi-headset", url: "FAQ"},
        {id: 8, name: "privacy policy", image: "bi bi-file-earmark", url: "PrivacyPolicy"}
      ]
    }
  ];
  itemClick(item: INavItem){
    if(item.autoClose){
      this.sidebarServoce.hide()
    }
    this.router.navigate([item.url])
  }
}
