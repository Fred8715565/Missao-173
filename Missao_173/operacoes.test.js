//D-1
const {
    calcularAcrescimo,
    classificarDesempenho,
    validarJogador,
    calcularEntrega,
    converterRealParaDolar,
    calcularPedido,
    validarTamanhoSenha,
    verificarDisponibilidade,
    calcularMediaFinal
} = require('./src/operacoes');

describe('Testes da função calcularAcrescimo', () => {
  
  // Cenário 1
  test('deve calcular corretamente o acréscimo padrão sobre o valor', () => {
    const resultado = calcularAcrescimo(200, 15);
    expect(resultado).toBe(230);
  });

  // Cenário 2
  test('deve retornar o próprio valor quando o percentual for 0', () => {
    const resultado = calcularAcrescimo(100, 0);
    expect(resultado).toBe(100);
  });

  // Cenário 3
  test('deve lançar erro quando o valor for menor ou igual a zero', () => {
    expect(() => {
      calcularAcrescimo(0, 10);
    }).toThrow('Dados inválidos');
  });

  // Cenário 4
  test('deve lançar erro quando o percentual for maior que 100', () => {
    expect(() => {
      calcularAcrescimo(100, 105);
    }).toThrow('Dados inválidos');
  });

});
//

//D-2
describe('Testes da função classificarDesempenho', () => {
  
  test('CT01: Deve retornar "Excelente" para nota maior ou igual a 9', () => {
    expect(classificarDesempenho(9.5)).toBe('Excelente');
  });

  test('CT02: Deve retornar "Bom" para nota entre 7 e 8.9', () => {
    expect(classificarDesempenho(7.5)).toBe('Bom');
  });

  test('CT03: Deve retornar "Regular" para nota entre 5 e 6.9', () => {
    expect(classificarDesempenho(6.0)).toBe('Regular');
  });

  test('CT04: Deve retornar "Insuficiente" para nota menor que 5', () => {
    expect(classificarDesempenho(4.0)).toBe('Insuficiente');
  });

  test('CT05: Deve lançar erro "Nota inválida" para nota fora do intervalo (0 a 10)', () => {
    expect(() => classificarDesempenho(-1)).toThrow('Nota inválida');
    expect(() => classificarDesempenho(11)).toThrow('Nota inválida');
  });

});

// // CT01 - Excelente
// console.assert(classificarDesempenho(9.5) === "Excelente", "Falha no CT01");

// // CT02 - Bom
// console.assert(classificarDesempenho(7.5) === "Bom", "Falha no CT02");

// // CT03 - Regular
// console.assert(classificarDesempenho(6.0) === "Regular", "Falha no CT03");

// // CT04 - Insuficiente
// console.assert(classificarDesempenho(4.0) === "Insuficiente", "Falha no CT04");

// // CT05 - Entrada Inválida
// try {
//     classificarDesempenho(-1);
//     console.error("Falha no CT05: Deveria ter lançado um erro.");
// } catch (erro) {
//     console.assert(erro.message === "Nota inválida", "Falha no CT05: Mensagem incorreta.");
// }

// console.log("Execução dos testes concluída!");
// //

//D-3
describe('Testes da função validarJogador', () => {
  test('1. Deve retornar true quando todos os dados são válidos', () => {
    expect(validarJogador('Jogador1', 25, 100)).toBe(true);
  });

  test('2. Deve retornar false quando o nome de usuário está vazio', () => {
    expect(validarJogador('', 25, 100)).toBe(false);
  });

  test('3. Deve retornar false quando o nome de usuário contém apenas espaços', () => {
    expect(validarJogador('   ', 25, 100)).toBe(false);
  });

  test('4. Deve retornar false quando a idade está abaixo do limite permitido', () => {
    expect(validarJogador('Jogador1', 12, 100)).toBe(false);
  });

  test('5. Deve retornar false quando a idade está acima do limite permitido', () => {
    expect(validarJogador('Jogador1', 81, 100)).toBe(false);
  });

  test('6. Deve retornar false quando a pontuação é negativa', () => {
    expect(validarJogador('Jogador1', 25, -1)).toBe(false);
  });

  test('7. Deve retornar true quando a pontuação é igual a zero', () => {
    expect(validarJogador('Jogador1', 25, 0)).toBe(true);
  });

  test('8. Deve retornar true quando a idade está exatamente no limite mínimo permitido (13)', () => {
    expect(validarJogador('Jogador1', 13, 100)).toBe(true);
  });

  test('9. Deve retornar true quando a idade está exatamente no limite máximo permitido (80)', () => {
    expect(validarJogador('Jogador1', 80, 100)).toBe(true);
  });
});
//


//D-4
describe('Testes da função calcularEntrega', () => {
  test('Caso 1: Compra acima de 300 com distância de 10 deve ter frete grátis (0)', () => {
    expect(calcularEntrega(350, 10)).toBe(0);
  });

  test('Caso 2: Compra abaixo de 300 com distância até 5 deve custar 10', () => {
    expect(calcularEntrega(100, 3)).toBe(10);
  });

  test('Caso 3: Compra abaixo de 300 com distância acima de 5 deve custar distância * 2 (16)', () => {
    expect(calcularEntrega(100, 8)).toBe(16);
  });

  test('Caso 4: Compra exatamente igual a 300 e distância 5 deve ter frete grátis (0)', () => {
    expect(calcularEntrega(300, 5)).toBe(0);
  });

  test('Caso 5: Compra de valor 0 e distância 5 deve custar 10', () => {
    expect(calcularEntrega(0, 5)).toBe(10);
  });

  test('Caso 6: Valor da compra negativo deve lançar um erro', () => {
    expect(() => calcularEntrega(-50, 10)).toThrow("Valores inválidos");
  });

  test('Caso 7: Distância negativa deve lançar um erro', () => {
    expect(() => calcularEntrega(100, -2)).toThrow("Valores inválidos");
  });
});
//

//D-5
describe('Testes da função converterRealParaDolar', () => {
  test('Caso 1: Deve converter 100 reais na cotação 5 para 20 dólares', () => {
    expect(converterRealParaDolar(100, 5)).toBe(20);
  });

  test('Caso 2: Deve converter 250 reais na cotação 5 para 50 dólares', () => {
    expect(converterRealParaDolar(250, 5)).toBe(50);
  });

  test('Caso 3: Deve converter 0 reais na cotação 5 para 0 dólares', () => {
    expect(converterRealParaDolar(0, 5)).toBe(0);
  });

  test('Caso 4: Deve converter 100 reais na cotação 4 para 25 dólares', () => {
    expect(converterRealParaDolar(100, 4)).toBe(25);
  });

  test('Caso 5: Deve lançar erro quando valorReal for uma string ("100")', () => {
    expect(() => converterRealParaDolar("100", 5)).toThrow("Os valores devem ser numéricos");
  });

  test('Caso 6: Deve lançar erro quando cotacao for uma string ("5")', () => {
    expect(() => converterRealParaDolar(100, "5")).toThrow("Os valores devem ser numéricos");
  });

  test('Caso 7: Deve lançar erro quando valorReal for negativo (-50)', () => {
    expect(() => converterRealParaDolar(-50, 5)).toThrow("Valores inválidos");
  });

  test('Caso 8: Deve lançar erro quando cotacao for zero (0)', () => {
    expect(() => converterRealParaDolar(100, 0)).toThrow("Valores inválidos");
  });
});
//



//D-6
describe('Testes da função calcularPedido', () => {

  test('deve calcular o valor total corretamente', () => {
    expect(calcularPedido(4, 20)).toBe(80);
  });

  test('deve retornar zero quando o preço for zero', () => {
    expect(calcularPedido(3, 0)).toBe(0);
  });

  test('deve lançar erro quando a quantidade for zero', () => {
    expect(() => calcularPedido(0, 10)).toThrow("Dados inválidos");
  });
  //(Corrigido para esperar o erro da função)
  test('deve lançar erro quando o preço for negativo', () => {
    expect(() => calcularPedido(2, -5)).toThrow("Dados inválidos");
  });
});
//

//D-7
test("deve aceitar senha com 6 caracteres", () => {
    expect(validarTamanhoSenha("abc123")).toBe(true);
});

test("deve rejeitar senha com 5 caracteres", () => {
    expect(validarTamanhoSenha("abc12")).toBe(false);
});

test("deve rejeitar senha com 12 caracteres", () => {
    expect(validarTamanhoSenha("abc123456789")).toBe(false);
});

test("deve aceitar senha com 10 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567")).toBe(true);
});

test("deve rejeitar senha com 13 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567890")).toBe(false);
});
//

//D-8
test("deve autorizar retirada quando há estoque suficiente", () => {
    expect(verificarDisponibilidade(20, 5))
        .toBe("Retirada autorizada");
});

test("deve informar estoque insuficiente", () => {
    expect(verificarDisponibilidade(5, 10))
        .toBe("Estoque insuficiente");
});

test("deve autorizar retirada de toda a quantidade disponível", () => {
    expect(verificarDisponibilidade(10, 10))
        .toBe("Retirada autorizada");
});

test("deve informar estoque insuficiente para quantidade zero", () => {
    expect(verificarDisponibilidade(10, 0))
        .toBe("Estoque insuficiente");
});

test("deve lançar erro para estoque negativo", () => {
    expect(() => verificarDisponibilidade(-5, 2))
        .toThrow("Estoque inválido");
});

test("deve lançar erro para quantidade negativa", () => {
    expect(() => verificarDisponibilidade(10, -3))
        .toThrow("Quantidade inválida");
});
//

//D-9
test("deve calcular a média corretamente", () => {
    expect(calcularMediaFinal(6, 8)).toBe(7);
});

test("deve retornar média máxima", () => {
    expect(calcularMediaFinal(10, 10)).toBe(10);
});

test("deve calcular média com nota zero", () => {
    expect(calcularMediaFinal(0, 8)).toBe(4);
});

test("deve rejeitar nota negativa", () => {
    expect(() => calcularMediaFinal(-2, 8))
        .toThrow("Notas inválidas");
});

test("deve rejeitar nota superior a 10", () => {
    expect(() => calcularMediaFinal(8, 12))
        .toThrow("Notas inválidas");
});
//