
        id = 0
        let materias = [];
        let user = { nome: "", instituicao: "", curso: "" };
        let notas = []
        let totalNotas = 0;

        function saveAluno(){
            if(!verificaVazio("alunoInputs")){
                user.nome = nomeUsuario.value
            user.instituicao = nomeInstituicao.value
            user.curso = nomeCurso.value
            document.querySelector("#materiaAdd").style.display = "block"
            document.querySelector("#alunoInputs").style.display = "none"
            document.querySelector("#card").style.display = "none"
            
        
            }
            
        }


        function save() {
            if (!verificaVazio("input-group") && !matJaAdd() && !notasdif0() && !maxinotas()) {

                user.nome = nomeUsuario.value;
                user.instituicao = nomeInstituicao.value;
                let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;
                console.log(resultados)
                document.querySelector("#resultNotas").style.display = "block"
                materias.push(
                    {
                        id: id++,
                        nome: nomeMateria.value,
                        notas: notas,
                        total: totalNotas,
                        info: `<hr>
                        RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
                        <table class="table table-striped list-group">
                       
                            
                                <tr><th class="tr" >1º Bimestre:</th> <td> ${notas[0]}</td></tr>
                                <tr><th class="tr" >2º Bimestre:</th> <td>${notas[1]}</td></tr>
                                <tr><th class="tr" >3º Bimestre:</th> <td>${notas[2]}</td></tr>
                                <tr><th class="tr" >4º Bimestre:</th> <td>${notas[3]}</td></tr>
                                <tr><th>TOTAL FINAL: </th><td>${totalNotas}</td></tr>
                                <tr>STATUS: <b>${isAprovadoOuReprovado(totalNotas)}</b></tr>
                                </table>
                            </ul>
                            `
                    }
                )


          

                materias.forEach(e => {
                    resultados += `<br>` + e.info;
                })

                resultNotas.innerHTML = resultados;






            }


        }

        function maxinotas() {
            let erro = false
            for (let i = 0; i < notas.length; i++) {
                if (i == 0 && notas[0] > 20) {
                    alert("1")
                    erro = true;
                }
                else if (i == 1 && notas[1] > 25) {
                    erro = true;
                    alert("2")
                }
                else if (i == 2 && notas[2] > 25) {
                    erro = true;
                    alert("3")
                }
                else if (i == 3 && notas[3] > 30) {
                    erro = true;
                    alert("4")
                }
            }
            return erro;
        }

        function notasdif0() {
            notas = []
            let inputNotas = document.querySelectorAll("#materiaAddNotas input");
            inputNotas.forEach(e => {
                notas.push(parseFloat(e.value))
                totalNotas += parseFloat(e.value);

            })
            let erro = false
            notas.forEach(nota => {
                nota < 0 ? erro = true : null
            })
            erro ? alert("Os valores não podem ser negativos!") : null

            return erro
        }

        function verificaVazio(div) {
            let erro = false
            let inputs = document.querySelectorAll(`.${div} input`)
            inputs.forEach(input => {
                input.value == "" ? erro = true : null
            })
            erro ? alert("Por favor, preencha todos os campos!") : null

            return erro;
        }

        function matJaAdd() {
            let erro = false
            let materiaSeleconada = nomeMateria.value

            materias.forEach(item => {
                item.nome == materiaSeleconada ? erro = true : null
            })
            erro ? alert("Matéria já adicionada!") : null

            return erro
        }


        function isAprovadoOuReprovado(valor) {
            if (valor >= 60) {
                return "APROVADO"
            } else {
                return "REPROVADO"
            }
        }



    