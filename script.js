const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Assim que saiu da base você se depara com propostas de alguns clubes, um com grande expressão e um de menor expressão"
        alternativas: [
            {
                texto: "Real Madrid",
                afirmacao: "Nesse time você será reserva "
            },
            {
                texto: "Barcelona",
                afirmacao: "Você chega pra disputar posição."
            }
        ]
    },
    {
        enunciado: "Após ficar muito tempo sem jogar, você recebeu uma proposta de empréstimo, para qual clube você vai?"
        alternativas: [
            {
                texto: "Santos",
                afirmacao: "Você chegou pra compor elenco, mas se destacou e virou tutular"
            },
            {
                texto: "Corinthians"
                afirmacao: "Você chegou com alta expectativa, mas acabou não entregando nada"
            }
        ]
    },
    {
        enunciado: "Depois de um boa temporada no Brasil você voltou a Europa,seu clube colocou você na lista de transferência, você recebeu 2 propostas de clubes, pra qual vc vai?"
        alternativas: [
            {
                texto: "Benfica"
                afirmacao: "começou como reserva, entrou em alguns jogos e nao se tornou titular"
            },
            {
                texto: "Girona",
                afirmacao: "você chegou pra compor elenco e se tornou uma peça fundamental para o time"
            }
        ]
    },
    {
        enunciado: "você esta em uma final de copa da liga, você recabeu um passe de seu companheiro e saiu cara a cara com o goleiro, o que você faria",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();s
