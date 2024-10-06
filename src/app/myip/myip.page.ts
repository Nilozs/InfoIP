import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-myip',
  templateUrl: './myip.page.html',
  styleUrls: ['./myip.page.scss'],
})
export class MyipPage implements OnInit {
  query: string = '';
  ipData: any = {};
  myIp: string = ''; 
  errorMessage: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getMyIP(); // Obter meu IP quando a página inicializa
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
// Método para consumir a API
  getMyIP() {
    this.apiService.getMyIp().subscribe({
      next: (response) => {
        this.myIp = response.ip; 
        this.query = this.myIp; 
        this.errorMessage = ''; 
        this.searchIpInfo(); 
      },
      error: (error) => {
        console.error('Erro ao consumir a API', error);
        this.errorMessage = 'Erro ao buscar informações. Tente novamente.';
      }
    });
  }
}