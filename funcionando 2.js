const empreendimentos = {
  Mônaco: {
    plantas: [
      "APTO 202, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 301, 2 suítes, 1 vaga, 73,25m² privativo",
      "APTO 303, 2 suítes, 1 vaga, 77,05m² privativo",
      "APTO 401, 2 suítes, 1 vaga, 73,25m² privativo",
      "APTO 403, 2 suítes, 1 vaga, 77,05m² privativo",
      "APTO 502, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 602, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 1002, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 1004, 2 suítes, 1 vaga, 79,55m² privativo",
      "APTO 1101, 2 suítes, 1 vaga, 73,25m² privativo",
      "APTO 1102, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 1104, 2 suítes, 1 vaga, 79,55m² privativo",
      "APTO 1201, 2 suítes, 1 vaga, 73,25m² privativo",
      "APTO 1202, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 1203, 2 suítes, 1 vaga, 77,05m² privativo",
      "APTO 1204, 2 suítes, 1 vaga, 79,55m² privativo",
      "APTO 1301, 2 suítes, 1 vaga, 73,25m² privativo",
      "APTO 1302, 2 suítes, 1 vaga, 73,45m² privativo",
      "APTO 1304, 2 suítes, 1 vaga, 79,55m² privativo",
      "APTO 1402, 2 suítes, 1 vaga, 73,45m² privativo",
    ],
    valores: {
      "APTO 202, 2 suítes, 1 vaga, 73,45m² privativo": 906464.96,
      "APTO 301, 2 suítes, 1 vaga, 73,25m² privativo": 909333.52,
      "APTO 303, 2 suítes, 1 vaga, 77,05m² privativo": 857699.44,
      "APTO 401, 2 suítes, 1 vaga, 73,25m² privativo": 923676.32,
      "APTO 403, 2 suítes, 1 vaga, 77,05m² privativo": 872042.24,
      "APTO 502, 2 suítes, 1 vaga, 73,45m² privativo": 949493.36,
      "APTO 602, 2 suítes, 1 vaga, 73,45m² privativo": 963836.16,
      "APTO 1002, 2 suítes, 1 vaga, 73,45m² privativo": 1021207.36,
      "APTO 1004, 2 suítes, 1 vaga, 79,55m² privativo": 963836.16,
      "APTO 1101, 2 suítes, 1 vaga, 73,25m² privativo": 1024075.92,
      "APTO 1102, 2 suítes, 1 vaga, 73,45m² privativo": 1035550.16,
      "APTO 1104, 2 suítes, 1 vaga, 79,55m² privativo": 978178.96,
      "APTO 1201, 2 suítes, 1 vaga, 73,25m² privativo": 1038418.72,
      "APTO 1202, 2 suítes, 1 vaga, 73,45m² privativo": 1049892.96,
      "APTO 1203, 2 suítes, 1 vaga, 77,05m² privativo": 986784.64,
      "APTO 1204, 2 suítes, 1 vaga, 79,55m² privativo": 992521.76,
      "APTO 1301, 2 suítes, 1 vaga, 73,25m² privativo": 1052761.52,
      "APTO 1302, 2 suítes, 1 vaga, 73,45m² privativo": 1064235.76,
      "APTO 1304, 2 suítes, 1 vaga, 79,55m² privativo": 1006864.56,
      "APTO 1402, 2 suítes, 1 vaga, 73,45m² privativo": 1078578.56,
    },
    obrasIniciadas: true,
  },

  Catalunya: {
    plantas: [
      "APTO 602, 3 suítes, 2 vagas, 141,00m² privativo",
      "APTO 701, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 702, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 801, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 802, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 901, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 902, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 1001, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 1002, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 1101, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 1102, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 1201, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 1202, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 1501, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 1502, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 1601, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 2001, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 2002, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 2101, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 2102, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 2201, 3 suítes, 2 vagas, 113,93m² privativo",
      "APTO 2202, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 2302, 2 suítes, 2 vagas, 80,34m² privativo",
      "APTO 2402, 2 suítes, 2 vagas, 80,34m² privativo",
    ],
    valores: {
      "APTO 602, 3 suítes, 2 vagas, 141,00m² privativo": 1741215.92,
      "APTO 701, 3 suítes, 2 vagas, 113,93m² privativo": 1405594.4,
      "APTO 702, 2 suítes, 2 vagas, 80,34m² privativo": 992521.76,
      "APTO 801, 3 suítes, 2 vagas, 113,93m² privativo": 1419937.2,
      "APTO 802, 2 suítes, 2 vagas, 80,34m² privativo": 1006864.56,
      "APTO 901, 3 suítes, 2 vagas, 113,93m² privativo": 1434280.0,
      "APTO 902, 2 suítes, 2 vagas, 80,34m² privativo": 1021207.36,
      "APTO 1001, 3 suítes, 2 vagas, 113,93m² privativo": 1448622.8,
      "APTO 1002, 2 suítes, 2 vagas, 80,34m² privativo": 1035550.16,
      "APTO 1101, 3 suítes, 2 vagas, 113,93m² privativo": 1462965.6,
      "APTO 1102, 2 suítes, 2 vagas, 80,34m² privativo": 1049892.96,
      "APTO 1201, 3 suítes, 2 vagas, 113,93m² privativo": 1477308.4,
      "APTO 1202, 2 suítes, 2 vagas, 80,34m² privativo": 1064235.76,
      "APTO 1501, 3 suítes, 2 vagas, 113,93m² privativo": 1520336.8,
      "APTO 1502, 2 suítes, 2 vagas, 80,34m² privativo": 1107264.16,
      "APTO 1601, 3 suítes, 2 vagas, 113,93m² privativo": 1534679.6,
      "APTO 2001, 3 suítes, 2 vagas, 113,93m² privativo": 1592050.8,
      "APTO 2002, 2 suítes, 2 vagas, 80,34m² privativo": 1178978.16,
      "APTO 2101, 3 suítes, 2 vagas, 113,93m² privativo": 1606393.6,
      "APTO 2102, 2 suítes, 2 vagas, 80,34m² privativo": 1193320.96,
      "APTO 2201, 3 suítes, 2 vagas, 113,93m² privativo": 1620736.4,
      "APTO 2202, 2 suítes, 2 vagas, 80,34m² privativo": 1207663.76,
      "APTO 2302, 2 suítes, 2 vagas, 80,34m² privativo": 1222006.56,
      "APTO 2402, 2 suítes, 2 vagas, 80,34m² privativo": 1236349.36,
    },
    obrasIniciadas: false,
  },
};

const empreendimentosSelect = document.getElementById("empreendimentos");
const plantasSelect = document.getElementById("plantas");
const valorImovelSpan = document.querySelector(".valorImovel span");
const valorEntradaRange = document.getElementById("valorEntrada");
const spanValorAtualEntrada = document.getElementById("spanValorAtualEntrada");
const valorMinSpan = document.getElementById("valorMin");
const valorMaxSpan = document.getElementById("valorMax");
const parcelasRange = document.getElementById("parcelas");
const valorAtualParcela = document.getElementById("valorAtualParcela");
const valorMinParcelasSpan = document.getElementById("valorMinParcelas");
const valorMaxParcelasSpan = document.getElementById("valorMaxParcelas");
const mensagemEntradaMaior = document.getElementById("mensagemEntradaMaior");
const entradaMaiorRadio = document.getElementById("entradaMaior");
const telefoneInput = document.getElementById("telefone");

let valorAtualImovel = 0; // Valor inicial do imóvel
let valorAtualEntrada = 0; // Valor inicial da entrada
let maxParcelas = 1; // Para evitar divisão por zero

// Função para inicializar os selects com opções default
function inicializarSelects() {
  empreendimentosSelect.innerHTML =
    '<option value="">Selecione um empreendimento</option>';
  plantasSelect.innerHTML = '<option value="">Selecione uma planta</option>';

  for (const empreendimento in empreendimentos) {
    const option = document.createElement("option");
    option.value = empreendimento;
    option.textContent = empreendimento;
    empreendimentosSelect.appendChild(option);
  }
}

// Atualiza as plantas de acordo com o empreendimento selecionado
function atualizarPlantas() {
  const empreendimentoSelecionado = empreendimentosSelect.value;
  plantasSelect.innerHTML = '<option value="">Selecione uma planta</option>';

  if (empreendimentoSelecionado && empreendimentos[empreendimentoSelecionado]) {
    const plantas = empreendimentos[empreendimentoSelecionado].plantas;
    plantas.forEach((planta) => {
      const option = document.createElement("option");
      option.value = planta;
      option.textContent = planta;
      plantasSelect.appendChild(option);
    });
  }

  // Limpar valores ao alterar empreendimento
  limparValores();
}

// Exibe o valor do imóvel selecionado
function mostrarValorImovel() {
  const empreendimentoSelecionado = empreendimentosSelect.value;
  const plantaSelecionada = plantasSelect.value;

  if (empreendimentoSelecionado && plantaSelecionada) {
    const valores = empreendimentos[empreendimentoSelecionado].valores;
    valorAtualImovel = valores[plantaSelecionada] || 0;

    if (valorAtualImovel) {
      valorImovelSpan.textContent = `R$ ${valorAtualImovel.toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
      )}`;

      // Calcular range de entrada
      const valorMinEntrada = (valorAtualImovel * 0.25).toFixed(2);
      const valorMaxEntrada = (valorAtualImovel * 0.7).toFixed(2);

      valorEntradaRange.min = valorMinEntrada;
      valorEntradaRange.max = valorMaxEntrada;
      valorEntradaRange.value = valorMinEntrada;
      valorAtualEntrada = parseFloat(valorMinEntrada);

      spanValorAtualEntrada.textContent = `R$ ${valorAtualEntrada.toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
      )}`;
      valorMinSpan.textContent = `R$ ${parseFloat(
        valorMinEntrada
      ).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
      valorMaxSpan.textContent = `R$ ${parseFloat(
        valorMaxEntrada
      ).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;

      // Calcular número máximo de parcelas
      const empreendimentoInfo = empreendimentos[empreendimentoSelecionado];
      maxParcelas = empreendimentoInfo.obrasIniciadas ? 48 : 84;
      parcelasRange.max = maxParcelas;
      parcelasRange.value = maxParcelas;
      spanNumeroParcelas.textContent = maxParcelas;

      atualizarParcelas();
      atualizarMensagemEntradaMaior();
      atualizarMensagemParcelaMaior();
    } else {
      limparValores();
    }
  }
}

// Atualiza o valor da entrada baseado no input do usuário
function atualizarValorEntrada() {
  valorAtualEntrada = parseFloat(valorEntradaRange.value);
  spanValorAtualEntrada.textContent = `R$ ${valorAtualEntrada.toLocaleString(
    "pt-BR",
    { minimumFractionDigits: 2 }
  )}`;
  atualizarParcelas();
}

// Atualiza os valores das parcelas
function atualizarParcelas() {
  const numeroParcelas = parseInt(parcelasRange.value);
  const valorRestante = valorAtualImovel - valorAtualEntrada;

  // Calculando o valor de cada parcela com 2 casas decimais
  let valorParcela = valorRestante / numeroParcelas;
  valorParcela = parseFloat(valorParcela.toFixed(2)); // Arredonda para 2 casas decimais

  // Calculando o total das parcelas
  const totalParcelas = valorParcela * numeroParcelas;

  // Calcular a diferença, que será adicionada à entrada
  const valorDif = valorRestante - totalParcelas;

  // Atualiza a entrada com o valor da diferença
  valorAtualEntrada += valorDif;

  // Atualiza os elementos na interface
  spanNumeroParcelas.textContent = `${numeroParcelas}x`;
  valorAtualParcela.textContent = `R$ ${valorParcela.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })}`;

  // Atualiza o valor da entrada
  spanValorAtualEntrada.textContent = `R$ ${valorAtualEntrada.toLocaleString(
    "pt-BR",
    { minimumFractionDigits: 2 }
  )}`;

  // Atualiza a proposta do cliente
  atualizarPropostaCliente();
  // Atualiza a mensagem da Entrada Maior
  atualizarMensagemEntradaMaior();
}

function atualizarPropostaCliente() {
  const propostaClienteInput = document.getElementById("propostaCliente");
  const mensagemPropostaCliente = document.getElementById(
    "mensagemPropostaCliente"
  );

  // Calcula o montante das parcelas
  const numeroParcelas = parseInt(parcelasRange.value) || 0; // Default para 0
  const valorParcela =
    numeroParcelas > 0
      ? (valorAtualImovel - valorAtualEntrada) / numeroParcelas
      : 0;

  // Ajusta o valor da entrada com o restante
  const totalParcelas = valorParcela * numeroParcelas;
  const novoValorEntrada =
    numeroParcelas > 0 ? valorAtualImovel - totalParcelas : 0;

  valorAtualEntrada = novoValorEntrada || 0; // Atualiza o valor atual da entrada
  spanValorAtualEntrada.textContent = `R$ ${valorAtualEntrada.toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
    }
  )}`; // Atualiza na interface

  // Gera a mensagem
  const mensagem =
    `Entrada: R$ ${valorAtualEntrada.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}, \n` +
    `Parcela: ${numeroParcelas}x de R$ ${valorParcela.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  propostaClienteInput.value = mensagem; // Atualiza o valor do input
  mensagemPropostaCliente.textContent = mensagem; // Exibe a mensagem no span
}

// Atualiza a mensagem para "Entrada Maior"
function atualizarMensagemEntradaMaior() {
  if (!valorAtualImovel || !valorAtualEntrada || !parcelasRange.value) {
    // Mensagem padrão caso os valores necessários não estejam definidos
    const mensagemEntradaMaior = document.getElementById(
      "mensagemEntradaMaior"
    );
    if (mensagemEntradaMaior) {
      mensagemEntradaMaior.innerHTML =
        "Entrada: R$ 0,00 <br>Parcela: 0x de R$ 0,00";
    }
    return;
  }

  // Calcula a entrada com acréscimo de 15%
  let entradaComAcrescimo = valorAtualEntrada * 1.5;

  // Determina o número de parcelas com base no range atual
  const numeroParcelas = parseInt(parcelasRange.value) || 0;

  // Calcula o valor restante e o valor da parcela
  const valorRestante = valorAtualImovel - entradaComAcrescimo;
  let valorParcelaEntradaMaior = valorRestante / numeroParcelas || 0;
  valorParcelaEntradaMaior = parseFloat(valorParcelaEntradaMaior.toFixed(2)); // Arredonda para 2 casas decimais

  // Calcula o total das parcelas
  const totalParcelas = valorParcelaEntradaMaior * numeroParcelas;

  // Ajusta o valor da entrada para compensar a diferença
  const diferenca = valorAtualImovel - (entradaComAcrescimo + totalParcelas);
  entradaComAcrescimo += diferenca;

  // Atualiza a mensagem
  const mensagem = `Entrada: R$ ${entradaComAcrescimo.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}\n Parcela: ${numeroParcelas}x R$ ${valorParcelaEntradaMaior.toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}`;

  // Exibe a mensagem na interface
  const mensagemEntradaMaior = document.getElementById("mensagemEntradaMaior");
  if (mensagemEntradaMaior) {
    mensagemEntradaMaior.textContent = mensagem;
  }
}

// Atualiza a mensagem para "Parcela Maior"
function atualizarMensagemParcelaMaior() {
  if (!valorAtualImovel || !valorAtualEntrada || !parcelasRange.value) {
    // Mensagem padrão caso os valores necessários não estejam definidos
    const mensagemParcelaMaior = document.getElementById(
      "mensagemParcelaMaior"
    );
    if (mensagemParcelaMaior) {
      mensagemParcelaMaior.innerHTML =
        "Entrada: R$ 0,00 <br> Parcela: 0x de R$ 0,00";
    }
    return;
  }

  // Calcula a entrada com redução de 5%
  let entradaComReducao = valorAtualEntrada * 0.95;

  // Determina o número máximo de parcelas apenas para a mensagemParcelaMaior
  const empreendimentoSelecionado = empreendimentosSelect.value;
  const empreendimentoInfo = empreendimentos[empreendimentoSelecionado];
  const maxParcelasParcelaMaior = empreendimentoInfo?.obrasIniciadas ? 36 : 63;

  // Usa o número de parcelas atual, mas limita ao máximo permitido para "Parcela Maior"
  const numeroParcelasParcelaMaior = Math.min(
    parseInt(parcelasRange.value) || 0,
    maxParcelasParcelaMaior
  );

  // Calcula o valor restante e o valor da parcela
  const valorRestante = valorAtualImovel - entradaComReducao;
  let valorParcelaParcelaMaior =
    valorRestante / numeroParcelasParcelaMaior || 0;
  valorParcelaParcelaMaior = parseFloat(valorParcelaParcelaMaior.toFixed(2)); // Arredonda para 2 casas decimais

  // Calcula o total das parcelas
  const totalParcelas = valorParcelaParcelaMaior * numeroParcelasParcelaMaior;

  // Ajusta o valor da entrada para compensar a diferença
  const diferenca = valorAtualImovel - (entradaComReducao + totalParcelas);
  entradaComReducao += diferenca;

  // Atualiza a mensagem
  const mensagem = `Entrada: R$ ${entradaComReducao.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}\n Parcela: ${numeroParcelasParcelaMaior}x R$ ${valorParcelaParcelaMaior.toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}`;

  // Exibe a mensagem na interface
  const mensagemParcelaMaior = document.getElementById("mensagemParcelaMaior");
  if (mensagemParcelaMaior) {
    mensagemParcelaMaior.textContent = mensagem;
  }
}

// Inicializa a mensagem padrão para "Parcela Maior"
function inicializarMensagemParcelaMaior() {
  const mensagemParcelaMaior = document.getElementById("mensagemParcelaMaior");
  if (mensagemParcelaMaior) {
    mensagemParcelaMaior.innerHTML =
      "Entrada: R$ 0,00 <br> Parcela: 0x de R$ 0,00";
  }
}

// Inicializa a mensagem com valores padrão 0
function inicializarMensagemProposta() {
  const propostaClienteInput = document.getElementById("propostaCliente");
  const mensagem = "Entrada: R$ 0,00 <br> Parcela: 0x de R$ 0,00";
  propostaClienteInput.value = mensagem; // Atualiza o valor do input
  document.getElementById("mensagemPropostaCliente").innerHTML = mensagem;
}

function selecionarRadioAoClicar(classeDiv, idRadio) {
  const divs = document.querySelectorAll(`.${classeDiv}`);

  divs.forEach((div) => {
    div.addEventListener("click", () => {
      const radio = document.getElementById(idRadio);
      radio.checked = true;
    });
  });
}

// Chamando a função para cada conjunto de radio button
selecionarRadioAoClicar("opcaoProposta", "propostaCliente");
selecionarRadioAoClicar("opcaoEntradaMaior", "entradaMaior");
selecionarRadioAoClicar("opcaoParcelaMaior", "parcelaMaior");

// Limpa os valores exibidos
function limparValores() {
  valorImovelSpan.textContent = "";
  valorMinSpan.textContent = "";
  valorMaxSpan.textContent = "";
  spanValorAtualEntrada.textContent = "";
  parcelasRange.value = 0;
  spanNumeroParcelas.textContent = "";
  valorAtualParcela.textContent = "";
  valorMinParcelasSpan.textContent = "";
  valorMaxParcelasSpan.textContent = "";
}

// Função para validar os campos do formulário
function validarCamposContato() {
  // Limpar as mensagens de erro
  const erros = document.querySelectorAll(".erro");
  erros.forEach((erro) => (erro.textContent = ""));

  let valido = true;

  // Validar nome
  const nome = document.getElementById("nome");
  if (nome.value.trim() === "") {
    document.querySelector("#nome + .erro").textContent =
      "Nome não pode estar em branco.";
    valido = false;
  }

  // Validar e-mail
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.querySelector("#email + .erro").textContent =
      "Por favor, insira um e-mail válido.";
    valido = false;
  }

  // Validar telefone
  const telefone = document.getElementById("telefone");
  const telefoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
  if (!telefoneRegex.test(telefone.value)) {
    document.querySelector("#telefone + .erro").textContent =
      "Telefone inválido. Exemplo: (11) 9876-5432";
    valido = false;
  }

  // Validar se o empreendimento foi selecionado
  const empreendimento = document.getElementById("empreendimentos").value;
  if (!empreendimento) {
    document.querySelector("#empreendimentos + .erro").textContent =
      "Por favor, selecione um empreendimento.";
    valido = false;
  }

  // Validar se a planta foi selecionada
  const planta = document.getElementById("plantas").value;
  if (!planta) {
    document.querySelector("#plantas + .erro").textContent =
      "Por favor, selecione uma planta.";
    valido = false;
  }

  // Validar opção selecionada
  const opcoes = document.querySelectorAll('input[name="opcoes"]');
  const opcaoSelecionada = Array.from(opcoes).some((opcao) => opcao.checked); // Verifica se algum dos radio buttons foi marcado

  if (!opcaoSelecionada) {
    document.querySelector(".opcoes .erro").textContent =
      "Por favor, selecione uma opção.";
    valido = false;
  }

  // Se todos os campos são válidos, gera a mensagem
  if (valido) {
    gerarMensagem();
  }

  return valido; // Retorna se o formulário é válido ou não
}

// Função para gerar a mensagem com os dados preenchidos
function gerarMensagem() {
  // Obter os valores dos campos de empreendimento, planta e valor do imóvel
  const empreendimento = document.getElementById("empreendimentos").value;
  const planta = document.getElementById("plantas").value;
  const valor = document.getElementById("valorImovel").textContent;

  // Obter a opção escolhida no rádio
  const opcaoSelecionada = document.querySelector(
    'input[name="opcoes"]:checked'
  );
  let opcao = "Nenhuma"; // Valor padrão, caso nenhuma opção seja escolhida

  if (opcaoSelecionada) {
    opcao = opcaoSelecionada.nextElementSibling.textContent.trim(); // Obtém o texto associado à opção escolhida
  }

  // Obter os dados de contato
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  // Montar a mensagem
  const mensagem =
    `Empreendimento: ${empreendimento}\n` +
    `Planta: ${planta}\n` +
    `Valor do Imóvel: ${valor}\n` +
    `Opção escolhida: ${opcao}\n\n` +
    `Contato:\n` +
    `Nome: ${nome}\n` +
    `E-mail: ${email}\n` +
    `Telefone: ${telefone}`;

  // Codificar a mensagem para ser usada na URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Criar a URL do WhatsApp com o número e a mensagem
  const numeroWhatsApp = "+5541988192581";
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  // Abrir o WhatsApp com a mensagem pronta
  window.open(url, "_blank");
}

// Eventos
empreendimentosSelect.addEventListener("change", () => {
  atualizarPlantas();
  atualizarPropostaCliente();
});

plantasSelect.addEventListener("change", () => {
  mostrarValorImovel();
  atualizarPropostaCliente();
});

valorEntradaRange.addEventListener("input", () => {
  atualizarValorEntrada();
  atualizarPropostaCliente();
  atualizarMensagemEntradaMaior();
  atualizarMensagemParcelaMaior();
});

parcelasRange.addEventListener("input", () => {
  atualizarParcelas();
  atualizarPropostaCliente();
  atualizarMensagemEntradaMaior();
  atualizarMensagemParcelaMaior();
});

// Atualiza automaticamente se o valor da entrada ou das parcelas mudar
valorEntradaRange.addEventListener("input", () => {
  if (entradaMaiorRadio.checked) {
    atualizarMensagemEntradaMaior();
  }
});

parcelasRange.addEventListener("input", () => {
  if (entradaMaiorRadio.checked) {
    atualizarMensagemEntradaMaior();
  }
});

telefoneInput.addEventListener("input", () => {
  let telefone = telefoneInput.value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
  if (telefone.length <= 2) {
    telefone = `(${telefone}`;
  } else if (telefone.length <= 6) {
    telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
  } else {
    telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(
      2,
      7
    )}-${telefone.slice(7, 11)}`;
  }
  telefoneInput.value = telefone; // Atualiza o valor do campo
});

// Inicialização
inicializarSelects();
inicializarMensagemProposta(); // Configura mensagem default
atualizarMensagemEntradaMaior();
atualizarMensagemParcelaMaior();
