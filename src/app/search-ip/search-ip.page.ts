import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-ip',
  templateUrl: 'search-ip.page.html',
  styleUrls: ['search-ip.page.scss'],
})
export class SearchIpPage {

  query: string = ''; // Armazena o valor do input
  ipData: any = {}; // Armazena os dados da API
  errorMessage: string = ''; // Armazena mensagem de erro

  constructor(private apiService: ApiService) {}

  // Método para consumir a API
  searchIpInfo() {
    // Verifica se o campo de entrada está vazio ou contém apenas espaços em branco
    if (this.query.trim() === '') {
      this.errorMessage = 'Por favor, insira um IP ou domínio válido';
      return;
    }
  
    // Chamada à API
    this.apiService.getIpInfo(this.query).subscribe({
      next: (response) => {
        // Verifica se a resposta tem um status de falha
        if (response.status === 'fail') {
          this.errorMessage = 'Por favor, insira um IP ou domínio válido';
          console.log(response);
        } else {
          // Armazena os dados se a requisição for bem-sucedida
          this.ipData = response;
          this.errorMessage = '';  // Limpa a mensagem de erro
        }
      },
      error: (error) => {
        // Lida com erros de rede ou problemas na requisição
        console.error('Erro ao consumir a API', error);
        this.errorMessage = 'Erro ao buscar informações. Verifique sua conexão ou tente novamente mais tarde.';
      }
    });
  }
}