import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMenuItem } from '../../Models/menuIte';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    searchForm = new FormGroup({
      category: new FormControl(1),
      text: new FormControl()
    })

    search(){
      alert(this.searchForm.controls.text.value)
    }
    data: IMenuItem[] = [
      { id: 1, text: '$ Dollar' },
      { id: 2, text: '€ Euro' },
      { id: 3, text: '£ Pound' },
      { id: 4, text: '₾ Lari' },
    ];

    register(){
      alert("register")
    }

    login(){
      alert("login")
    }
}

