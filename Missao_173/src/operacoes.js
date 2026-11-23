
 // D-1 - Calcular acréscimo
function calcularAcrescimo(valor, percentual) {
    if (typeof valor !== "number" || typeof percentual !== "number" ||
        valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }

    const acrescimo = valor * (percentual / 100);
    return valor + acrescimo;
}

// D-2 - Classificar desempenho
function classificarDesempenho(nota) {
    if (typeof nota !== "number" || nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }

    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7) {
        return "Bom";
    } else if (nota >= 5) {
        return "Regular";
    } else {
        return "Insuficiente";
    }
}

// D-3 - Validar jogador
function validarJogador(usuario, idade, pontuacao) {
    if (typeof usuario !== "string" || usuario.trim() === "") {
        return false;
    }

    if (typeof idade !== "number" || idade < 13 || idade > 80) {
        return false;
    }

    if (typeof pontuacao !== "number" || pontuacao < 0) {
        return false;
    }

    return true;
}

// D-4 - Calcular entrega
function calcularEntrega(valorCompra, distancia) {
    if (typeof valorCompra !== "number" || typeof distancia !== "number" ||
        valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }

    if (valorCompra >= 300) return 0;
    if (distancia <= 5) return 10;

    return distancia * 2;
}

// D-5 - Converter real para dólar
function converterRealParaDolar(valorReal, cotacao) {
    if (typeof valorReal !== "number" || typeof cotacao !== "number") {
        throw new Error("Os valores devem ser numéricos");
    }

    if (valorReal < 0 || cotacao <= 0) {
        throw new Error("Valores inválidos");
    }

    return valorReal / cotacao;
}

// D-6 - Calcular pedido
function calcularPedido(quantidade, precoUnitario) {
    if (typeof quantidade !== "number" || typeof precoUnitario !== "number" ||
        quantidade <= 0 || precoUnitario < 0) {
        throw new Error("Dados inválidos");
    }

    return quantidade * precoUnitario;
}

// D-7 - Validar tamanho da senha
function validarTamanhoSenha(senha) {
    return typeof senha === "string" &&
        senha.length >= 6 &&
        senha.length <= 12;
}
// D-8 - Verificar disponibilidade
function verificarDisponibilidade(estoque, quantidade) {

    if (typeof estoque !== "number" || estoque < 0) {
        throw new Error("Estoque inválido");
    }

    if (typeof quantidade !== "number" || quantidade < 0) {
        throw new Error("Quantidade inválida");
    }

    if (quantidade === 0 || quantidade > estoque) {
        return "Estoque insuficiente";
    }

    return "Retirada autorizada";
}

// D-9 - Calcular média final
function calcularMediaFinal(nota1, nota2) {
    if (typeof nota1 !== "number" || typeof nota2 !== "number" ||
        nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }

    return (nota1 + nota2) / 2;
}

// Funções utilizadas pelos testes antigos

// Calcular desconto
function calcularDesconto(valor, percentual) {
    if (typeof valor !== "number" || typeof percentual !== "number" ||
        valor < 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }

    return valor - (valor * percentual / 100);
}

// Verificar aprovação
function verificarAprovacao(nota) {
    if (typeof nota !== "number" || nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }

    return nota >= 7 ? "Aprovado" : "Reprovado";
}

// Validar cadastro
function validarCadastro(nome, idade, email) {
    return typeof nome === "string" &&
        nome.trim() !== "" &&
        Number.isInteger(idade) &&
        idade >= 18 &&
        idade <= 100 &&
        typeof email === "string" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Calcular frete
function calcularFrete(valorCompra, distancia) {
    if (typeof valorCompra !== "number" || typeof distancia !== "number" ||
        valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }

    if (valorCompra >= 200) return 0;

    return distancia * 2;
}

// Converter Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(temperatura) {
    if (typeof temperatura !== "number") {
        throw new Error("A temperatura deve ser numérica");
    }

    return (temperatura * 9 / 5) + 32;
}

// Calcular média
function calcularMedia(nota1, nota2) {
    if (typeof nota1 !== "number" || typeof nota2 !== "number" ||
        nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }

    return (nota1 + nota2) / 2;
}

// Exportação de todas as funções
module.exports = {
    calcularAcrescimo,
    classificarDesempenho,
    validarJogador,
    calcularEntrega,
    converterRealParaDolar,
    calcularPedido,
    validarTamanhoSenha,
    verificarDisponibilidade,
    calcularMediaFinal,
    calcularDesconto,
    verificarAprovacao,
    validarCadastro,
    calcularFrete,
    converterCelsiusParaFahrenheit,
    calcularMedia
};
