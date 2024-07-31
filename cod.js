function calcularValor() {
    // Obter o valor do input e garantir que seja um número
    var salarioInputado = parseFloat(document.getElementById("valorInputado").value);
    var mesesTrabalhados = parseInt(document.getElementById("mesesTrabalhados").value);

    // Verificar se o valor e os meses são números e positivos
    if (isNaN(salarioInputado) || salarioInputado < 0 || isNaN(mesesTrabalhados) || mesesTrabalhados <= 0 || mesesTrabalhados > 12) {
        document.getElementById("Adiantamento").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Definir o valor máximo para o fixo e o total
    var valorMaximoFixo = 4500;
    var valorMaximoTotal = 17000;

    // Calcular o valor fixo
    var valorFixo = salarioInputado > valorMaximoFixo ? valorMaximoFixo : salarioInputado;

    // Calcular o valor variável
    var valorVariavel = salarioInputado * 1.7;

    // Calcular o total e garantir que não ultrapasse o máximo permitido
    var total = valorFixo + valorVariavel;
    if (total > valorMaximoTotal) {
        total = valorMaximoTotal;
    }

    // Calcular o adiantamento como 40% do total
    var adiamento = total * 0.40;

    // Calcular o bônus proporcional ao número de meses trabalhados
    var adiamentoProporcional = adiamento * (mesesTrabalhados / 12);

    // Exibir o resultado formatado como moeda em reais
    document.getElementById("Adiantamento").innerHTML = "Adiantamento: " + adiamentoProporcional.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
