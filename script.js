
function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  const texto = input.value.trim();

  if (texto !== "") {
    const lista = document.getElementById("listaTarefas");
    const item = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;
    span.onclick = () => {
      item.classList.toggle("completed");
    };

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "✕";
    btnExcluir.onclick = () => {
      lista.removeChild(item);
    };

    item.appendChild(span);
    item.appendChild(btnExcluir);
    lista.appendChild(item);

    input.value = "";
    input.focus();
  }
}
