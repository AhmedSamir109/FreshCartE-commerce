import { Component } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brands } from '../interface/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

brandsContainer :Brands[] = [];

  constructor(private _BrandsService:BrandsService){}

  ngOnInit(): void {
    this._BrandsService.getAllBrans().subscribe({
      next:(response)=>{
        this.brandsContainer = response.data ; 
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
