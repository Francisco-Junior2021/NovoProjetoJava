function adicionarCliente(cliente) {
    const li = document.createElement("li");
    
    li.innerHTML = `
        Nome: ${cliente.nome}, Documento: ${cliente.documento}, Saldo: $<span>${cliente.saldo.toFixed(2)}</span> 
        <button class="depositar">Depositar 100</button>
        <button class="sacar">Sacar 100</button>
    `;
    clienteList.appendChild(li);

    const depositarBotoes = document.querySelectorAll(".depositar");
    depositarBotoes.forEach((botao, index) => {
        botao.addEventListener("click", function () {
            clientes[index].depositar();
            const saldoSpan = li.querySelector("span");
            saldoSpan.textContent = clientes[index].saldo.toFixed(2);         });
    });

    const sacarBotoes = document.querySelectorAll(".sacar");
    sacarBotoes.forEach((botao, index) => {
        botao.addEventListener("click", function () {
            if (clientes[index].saldo >= 100) {
                clientes[index].sacar();
                const saldoSpan = li.querySelector("span");
                saldoSpan.textContent = clientes[index].saldo.toFixed(2); 
            }
        });
    });
}