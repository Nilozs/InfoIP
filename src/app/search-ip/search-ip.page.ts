import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-ip',
  templateUrl: 'search-ip.page.html',
  styleUrls: ['search-ip.page.scss'],
})
export class SearchIpPage {

  query: string = ''; 
  ipData: any = {}; 
  errorMessage: string = ''; 

  constructor(private apiService: ApiService) {}

  // Método para consumir a API
  searchIpInfo() {
    if (this.query.trim() === '') {
      this.errorMessage = 'Por favor, insira um IP ou domínio válido';
      return;
    }
  
    // Chamada à API
    this.apiService.getIpInfo(this.query).subscribe({
      next: (response) => {
        if (response.status === 'fail') {
          this.errorMessage = 'Por favor, insira um IP ou domínio válido';
          console.log(response);
        } else {
          this.ipData = response;
          this.errorMessage = '';  
        }
      },
      error: (error) => {
        console.error('Erro ao consumir a API', error);
        this.errorMessage = 'Erro ao buscar informações. Verifique sua conexão ou tente novamente mais tarde.';
      }
    });
  }
}