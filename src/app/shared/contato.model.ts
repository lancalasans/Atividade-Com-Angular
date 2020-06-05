export default class Contato{
    private nome: string;
    private email: string;
    private dataNascimento: string;
    private idade: string;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getDataNascimento(): string {
        return this.dataNascimento;
    }

    public setDataNascimento(dataNascimento: string): void {
        this.dataNascimento = dataNascimento;
    }

    public getIdade(): string {
        return this.idade;
    }

    public setIdade(idade: string): void {
        this.idade = idade;
    }

}