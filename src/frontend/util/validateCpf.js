export function validateCharCpf(cpfElement) {
    //Checks the size of the cpf field and does not exceed 11 characters and prevents backspace or delete behavior, including ctrl+A
    let qtdCharacters = 0;
    const allowedCharacters = ['0','1','2','3','4','5','6','7','8','9'];
    var validLenCpf = document.getElementById(cpfElement);
    validLenCpf.addEventListener('keydown', (event) => {
        if (allowedCharacters.includes(event.key)) {
            qtdCharacters >= 11 ? event.preventDefault() : qtdCharacters = validLenCpf.value.length + 1;
            cpfAlertSmallElement.textContent = '';
            validLenCpf.classList.remove('border-danger');
        } else if (event.key == 'Backspace' || event.key == 'Delete') {
            qtdCharacters <= 1 ? qtdCharacters = 0 : qtdCharacters--;
        } else if (event.key.toLowerCase() == 'e') {
            event.preventDefault();
        }
    })
}

export function validateLenCpf(len, element) {
    if (len.length < 11) {
        cpfAlertSmallElement.textContent = 'O CPF é formato por 11 dígitos, confira seu CPF!';
        cpfAlertSmallElement.classList.add('text-danger', 'fw-bold');
        element.classList.add('border-danger');
        element.focus();
        return true;
    }
}