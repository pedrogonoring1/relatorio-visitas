document.addEventListener('DOMContentLoaded', () => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    console.log(formData)
    if (formData) {
        document.getElementById('razaoSocial').textContent = formData.razaoSocial;
        document.getElementById('cnpj').textContent = formData.cnpj;
        document.getElementById('data').textContent = formData.data;
        document.getElementById('ramoAtividade').textContent = formData.ramoAtividade;
        document.getElementById('contato').textContent = formData.contato;
        document.getElementById('dataFundacao').textContent = formData.dataFundacao;
        document.getElementById('cargo').textContent = formData.cargo;
        document.getElementById('telefone').textContent = formData.telefone;
        document.getElementById('celular').textContent = formData.celular;
        document.getElementById('email').textContent = formData.email;
        document.getElementById('endereco').textContent = formData.endereco;
        document.getElementById('bairro').textContent = formData.bairro;
        document.getElementById('cidade').textContent = formData.cidade;
        document.getElementById('uf').textContent = formData.uf;
        document.getElementById('cep').textContent = formData.cep;
        document.getElementById('email').textContent = formData.email;

        document.getElementById('areaAtuacao').textContent = formData.areaAtuacao;

        document.getElementById('prazoETicketMedioVendas').textContent = formData.prazoETicketMedioVendas;
        document.getElementById('porcentoCheques').textContent = formData.porcentoCheques;
        document.getElementById('porcentoDpl').textContent = formData.porcentoDpl;
        document.getElementById('porcentoCartao').textContent = formData.porcentoCartao;
        document.getElementById('porcentoOutros').textContent = formData.porcentoOutros;

        document.getElementById('estoquesReais').textContent = formData.estoquesReais;
        document.getElementById('numeroFuncionarios').textContent = formData.numeroFuncionarios;
        document.getElementById('valorDaFolha').textContent = formData.valorDaFolha;
        document.getElementById('relacaoFrotasEquipamentos').textContent = formData.relacaoFrotasEquipamentos;
        document.getElementById('instalacoes').textContent = formData.instalacoes;

        document.getElementById('naoConfirmarAte').textContent = formData.naoConfirmarAte;
        document.getElementById('posConfirmadas').textContent = formData.posConfirmadas;
        document.getElementById('preConfirmadas').textContent = formData.preConfirmadas;

        document.getElementById('areaTerreno').textContent = formData.areaTerreno;
        document.getElementById('areaConstruida').textContent = formData.areaConstruida;
        document.getElementById('areaConstruidaValor').textContent = formData.areaConstruidaValor;
        
        document.getElementById('prazoProtestoVencimento').textContent = formData.prazoProtestoVencimento;

        document.getElementById('beneficiarioDasOperacoes').textContent = formData.beneficiarioDasOperacoes;
        document.getElementById('banco').textContent = formData.banco;
        document.getElementById('contaCorrente').textContent = formData.contaCorrente;
        document.getElementById('agencia').textContent = formData.agencia;



        document.getElementById('possuiRestritivos').textContent = formData.possuiRestritivos;
        document.getElementById('riscoCedente').textContent = formData.riscoCedente;
        document.getElementById('taxaServicosAdvalorem').textContent = formData.taxaServicosAdvalorem;
        document.getElementById('tarifaCheque').textContent = formData.tarifaCheque;
        document.getElementById('tarifaDpl').textContent = formData.tarifaDpl;

        document.getElementById('opConvencional').textContent = formData.opConvencional;
        document.getElementById('desagio').textContent = formData.desagio;
        document.getElementById('opComissaria').textContent = formData.opComissaria;
        document.getElementById('desagioOpComissaria').textContent = formData.desagioOpComissaria;
        document.getElementById('opIntercompany').textContent = formData.opIntercompany;
        document.getElementById('desagioIntercompany').textContent = formData.desagioIntercompany;
        document.getElementById('notaComercial').textContent = formData.notaComercial;
        document.getElementById('desagioNotaComercial').textContent = formData.desagioNotaComercial;
        document.getElementById('ccb').textContent = formData.ccb;
        document.getElementById('desagioCcb').textContent = formData.desagioCcb;
        document.getElementById('cheque').textContent = formData.cheque;
        document.getElementById('desagioCheque').textContent = formData.desagioCheque;
        document.getElementById('floating').textContent = formData.floating;
        document.getElementById('tipoDeLastro').textContent = formData.tipoDeLastro;
        document.getElementById('confirmacao').textContent = formData.confirmacao;
        document.getElementById('boleto').textContent = formData.boleto;
    }
});

function voltar() {
    window.location.href = '../index.html';
}

async function gerarPDF() {
    const content = document.getElementById('pdfContent');
    
    // Cria um novo documento PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Definir as dimensões da página A4
    const pageWidth = pdf.internal.pageSize.getWidth() - 7;
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Obter as dimensões do conteúdo HTML
    const contentWidth = content.offsetWidth;
    const contentHeight = content.offsetHeight;

    // Calcular a escala horizontal baseada na largura da página A4 e do conteúdo
    const scaleX = pageWidth / contentWidth;

    // Usar a menor escala para garantir que o conteúdo não ultrapasse a página
    const scale = Math.min(scaleX, 1);  // O máximo que podemos aplicar é uma escala de 1

    // Usando o método 'html' para renderizar o HTML com formatação
    await pdf.html(content, {
        margin: [3, 3, 3, 3], // Margens (superior, direita, inferior, esquerda)
        callback: function (pdf) {
            // Salvar o PDF após a renderização do conteúdo HTML
            pdf.save('relatorio-visita.pdf');
        },
        x: 0, // Posição inicial no eixo X
        y: 0, // Posição inicial no eixo Y
        html2canvas: {
            scale: scale // Aplica a escala calculada
        }
    });
}