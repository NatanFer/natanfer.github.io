
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
        
            }
            
        }


        function save() {
            if (!verificaVazio("input-group") && !matJaAdd() && !notasdif0() && !maxinotas()) {

                user.nome = nomeUsuario.value;
                user.instituicao = nomeInstituicao.value;
                let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;
                console.log(resultados)

                materias.push(
                    {
                        id: id++,
                        nome: nomeMateria.value,
                        notas: notas,
                        total: totalNotas,
                        info: `<hr>
                            RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
                            <ul class="list-group">
                                <li class="list-group-item"><b>1º Bimestre:</b> ${notas[0]}</li>
                                <li class="list-group-item"><b>2º Bimestre:</b> ${notas[1]}</li>
                                <li class="list-group-item"><b>3º Bimestre:</b> ${notas[2]}</li>
                                <li class="list-group-item"><b>4º Bimestre:</b> ${notas[3]}</li>
                                <li class="list-group-item">TOTAL FINAL: <b>${totalNotas}</b></li>
                                <li class="list-group-item">STATUS: <b>${isAprovadoOuReprovado(totalNotas)}</b></li>
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



    