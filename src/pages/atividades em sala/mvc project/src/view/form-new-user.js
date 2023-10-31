const formNewUser = {
  build: () => {
    const root = document.getElementById('root');
    const formTemplate = document.createElement('form');
    formTemplate.className = "form-control";
    formTemplate.setAttribute("id", "signForm   ")
    formTemplate.innerHTML = `
    <label for="nome" class="form-label">Nome</label>
 <input class="form-control" type = "text" id = "nome">
 <label for="idade" class="form-label">Idade</label>
 <input class="form-control" type = "number" id = "idade">
 <label for="Login" class="form-label">Login</label>
 <input class="form-control" type = "text" id = "login">
 <label for="senha" class="form-label">Senha</label>
 <input class="form-control" type = "password" id = "senha">
`;
    root.appendChild(formTemplate);
  },
}
export { formNewUser };
