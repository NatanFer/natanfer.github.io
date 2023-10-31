class usuario {
  constructor(nome, idade, login, senha) {
    this.nome = "";
    this.idade = 0;
    this.login = "";
    this.senha = "";
  }
  getnome() {
    return this.nome;
  }
  setnome(nome) {
    this.nome = nome;
  }
  getidade() {
    return this.idade;
  }

  setidade(idade) {
    this.idade = idade;
  }

  getlogin() {
    return this.login;
  }

  setlogin(login) {
    this.login = login;
  }

  getsenha() {
    return this.senha;
  }

  setsenha(senha) {
    this.senha = senha;
  }
}

export { usuario };
