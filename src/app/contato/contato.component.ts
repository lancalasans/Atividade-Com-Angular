import { Component, OnInit } from '@angular/core';
import Contato from '../shared/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  private contato: Contato;

  constructor() {
    this.contato = new Contato();
    this.contato.setNome("");
    this.contato.setEmail("");
    this.contato.setDataNascimento("");
    this.contato.setIdade("");

   }

   public pegarNome(nome: Event): void{
    this.contato.setNome
  ((<HTMLInputElement>nome.target).value);
}

public pegarEmail(email: Event): void{
  this.contato.setEmail
((<HTMLInputElement>email.target).value);
}

public pegarDataNascimento(dataNascimento: Event): void{
  this.contato.setDataNascimento
((<HTMLInputElement>dataNascimento.target).value);
}

public pegarIdade(idade: Event): void{
  this.contato.setIdade
((<HTMLInputElement>idade.target).value);
}

public mostrarDados(): void{
  alert(
    "Nome: " + this.contato.getNome() + "\n" +
    "Email: " + this.contato.getEmail() + "\n" +
    "Data de Nascimento: " + this.contato.getDataNascimento() + "\n" +
    "Idade: " + this.contato.getIdade()
  );

}
  ngOnInit() {
  }

}
