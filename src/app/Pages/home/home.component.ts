import { Component } from '@angular/core';
import { IMenuItem } from '../../Models/menuIte';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bannerItems: IMenuItem[] = [
    {id: 1,text: "", image: "../assets/images/slider-1-1230x647.jpg"},
    {id: 2,text: "", image: "../assets/images/slider-2-1230x647.jpg"}
  ]
  ourCategories: IMenuItem[] = [
    {id: 1,text: "bags", image: "../../../assets/images/categories/bag-60x60.png"},
    {id: 2,text: "camera", image: "../../../assets/images/categories/camera-60x60.png"},
    {id: 3,text: "chair", image: "../../../assets/images/categories/chair-60x60.png"},
    {id: 4,text: "cloth", image: "../../../assets/images/categories/cloth-60x60.png"},
    {id: 5,text: "comod", image: "../../../assets/images/categories/comod-60x60.png"},
    {id: 6,text: "glasses", image: "../../../assets/images/categories/glasses-60x60.png"},
    {id: 7,text: "lamps", image: "../../../assets/images/categories/lamp-60x60.png"},
    {id: 8,text: "sofa", image: "../../../assets/images/categories/sofa-60x60.png"},
    {id: 9,text: "trouser", image: "../../../assets/images/categories/trouser-60x60.png"},
    {id: 10,text: "watch", image: "../../../assets/images/categories/watch-60x60.png"},
  ]
  categoryClick(item: IMenuItem){
    
    alert(item.text)
  }
}
