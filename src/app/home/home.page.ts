import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  query: string = '8.8.8.8'; 
  ipData: any = {};  
  errorMessage: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.searchIpInfo(); 
  }

  searchIpInfo() {
    this.apiService.getIpInfo(this.query).subscribe({
      next: (response) => {
        this.ipData = response; 
        this.errorMessage = ''; 
      },
      error: (error) => {
        console.error('Erro ao consumir a API', error);
        this.errorMessage = 'Erro ao buscar informações. Tente novamente.';
      }
    });
  }
}