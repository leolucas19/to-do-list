const inputTask = document.getElementById('txttf')
const lista = document.getElementById('lista')

function adicionar() {
    if (inputTask.value === '') {
        alert("Nenhuma tarefa adicionada")

    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        lista.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);

    }
    inputTask.value = "";
    saveData(); //sempre que add uma nova tarefa sera salva no browser(navegador)
}

lista.addEventListener('click', function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData() //sempre que marcarmos ou desmarcar alguma tarefa, sera salvo tambem no navegador.
    
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData() //sempre que um item for removido da lista sera salvo no navegador.
    }

}, false);

function saveData() {
    localStorage.setItem("data",lista.innerHTML); //salvar todo o conteudo atraves de (data), o conteudo digitado (innerHTML) q se encontra em (lista). 
}

function showtask() {
    lista.innerHTML = localStorage.getItem("data"); 
}
showtask();

