function calcularValor() {
    // Obter o valor do input e garantir que seja um número
    var valorInputado = parseFloat(document.getElementById("valorInputado").value);
    var mesesTrabalhados = parseInt(document.getElementById("mesesTrabalhados").value);

    // Verificar se o valor e os meses são números e positivos
    if (isNaN(valorInputado) || valorInputado < 0 || isNaN(mesesTrabalhados) || mesesTrabalhados <= 0 || mesesTrabalhados > 12) {
        document.getElementById("Adiantamento").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Definir o valor máximo para a soma
    var valorMaximoParaSoma = 4500;

    // Calcular o valor a ser usado na soma
    var valorParaSoma = valorInputado > valorMaximoParaSoma ? valorMaximoParaSoma : valorInputado;

    // Calcular o bônus total anual
    var valorFormula = (valorInputado * 1.7) + valorParaSoma;

    // Calcular 40% do valor da fórmula
    var valorBônusAnual = valorFormula * 0.40;

    // Limitar o bônus anual a 17.000
    if (valorBônusAnual > 17000) {
        valorBônusAnual = 17000;
    }

    // Calcular o bônus proporcional ao número de meses trabalhados
    var valorBônusProporcional = valorBônusAnual * (mesesTrabalhados / 12);

    // Exibir o resultado formatado como moeda em reais
    document.getElementById("Adiantamento").innerHTML = "Adiantamento: " + valorBônusProporcional.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
