const usuarios = JSON.parse(localStorage.getItem("cadastro_usuarios")) || [];

// Elementos
const telaLista = document.querySelector
("#tela-lista");
const telaCadastro = document.querySelector
("#tela-cadastro");
const btnAdicionar = document.querySelector
("#btn-adicionar");
const btnVoltar = document.querySelector
("#btn-voltar-lista");

// inputs usuario
const inputId = document.querySelector
("#user-id")
const inputNome = document.querySelector
("#user-nome");
const inputSobreNome = document.querySelector
("#user-sobrenome");
const inputEmail = document.querySelector
("#user-Email");
const inputCep = document.querySelector
("#user-Cep");
const inputRua = document.querySelector
("#user-rua");
const inputNumero = document.querySelector
("#user-numero");
const inputComplemento = document.querySelector
("#user-Complemento");
const inputBairro = document.querySelector
("#user-bairro");
const inputCidade = document.querySelector
("#user-Cidade");
const inputEstado = document.querySelector
("#user-estado");
const inputObs = document.querySelector
("#user-obs")

const form = document.querySelector("#user-form");
const tabela = document.querySelector("#user-table-body");

// Funções
function mostrarTelaLista (){
    telaLista.classList.remove("d-none");
    telaCadastro.classList.add("d-none");
}

function mostrarTelaCadastro (){
    telaLista.classList.add("d-none");
    telaCadastro.classList.remove("d-none");
    renderizarTabela();
}

function salvarUsuario(){
    const id = Number(inputId.value);
    const nome = inputNome.value;
    const sobrenome = inputSobreNome.value;
    const email = inputEmail.value;
    const Cep = inputCep.value;
    const rua = inputRua.value;
    const numero = inputNumero.value;
    const Complemento = inputComplemento.value;
    const bairro = inputBairro.value;
    const cidade = inputCidade.value;
    const estado = inputEstado.value;
    const obs = inputObs.value;

    const usuario = {
        id: id || Date.now(),
        nome, sobrenome, email, Cep, rua, numero, Complemento, bairro, cidade, estado, obs
    }

    usuarios.push(usuario);
    salvarNoStorage();
}

    function salvarNoStorage (){
        localStorage.setItem("Cadastro_usuarios", JSON.stringify(usuarios));
    }

    function editarUsario(){

    }

    function excluirUsuario(){

    }


    function renderizarTabela(){
        tabelaCorpo.innerHTML = "";
        usuarios.forEach(user => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.sobrenome}</td>
            <td>${user.email}</td>
            <td>
            <button class="btn btn-warning" data-id="${user.id}">Editar</button>
            <button class="btn btn-danger" data-id="${user.id}">Excluir</button>
            </td>

            `;
            tabelaCorpo.appendChild(tr);
        });
        

    }

function salvarUsuario(){}

function Inicializacao(){
    btnAdicionar.addEventListener("click",
        mostrarTelaCadastro
    );
    btnVoltar.addEventListener("click",
        mostrarTelaLista
 
    );

    form.addEventListener("submit",salvarUsuario);
    mostrarTelaLista();

}


Inicializacao();

