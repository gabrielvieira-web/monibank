export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    const dataAtual = new Date(); //vai pegar exatamente a data atual dos dias de hoje
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()); // FULL YEAR = ano completo, MONTH = Mês, Date = Dia.

    return dataAtual >= dataMais18; //Se a dataAtual realmente for maior ou igual à dataMais18, significa que essa pessoa já fez 18 anos. Se não se essa dataAtual for menor que dataMais18, significa que essa pessoa ainda vai fazer 18 anos.
}