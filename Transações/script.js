class Transacao {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
}

const transactionList = document.getElementById("transaction-list");
const totalBalance = document.getElementById("total-balance");

document.getElementById("add-transaction").addEventListener("click", () => {
    const descricao = document.getElementById("description").value;
    const valor = parseFloat(document.getElementById("amount").value);

    if (descricao && !isNaN(valor)) {
        const newTransaction = new Transacao(descricao, valor);

        const transactionRow = document.createElement("tr");
        transactionRow.innerHTML = `
            <td>${newTransaction.descricao}</td>
            <td class="${newTransaction.valor >= 0 ? 'positive' : 'negative'}">${newTransaction.valor.toFixed(2)}</td>
        `;

        transactionList.appendChild(transactionRow);

        const currentBalance = parseFloat(totalBalance.textContent);
        const newBalance = currentBalance + newTransaction.valor;
        totalBalance.textContent = newBalance.toFixed(2);

        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";
    }
});
