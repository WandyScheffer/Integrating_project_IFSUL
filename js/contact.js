function inInput(event, pos) {
    console.log(event.currentTarget.parentNode.children[pos]);
    event.currentTarget.parentNode.children[pos].classList.add("label_min");
}

function outInput(event, pos) {
    if (event.currentTarget.value == '') {
        event.currentTarget.parentNode.children[pos].classList.remove("label_min");
    }
}

if (window.innerWidth <= 948) {
    const inputs = document.querySelectorAll("input");
    inputs[0].placeholder = "Nome";
    inputs[1].placeholder = "Sobrenome";
    inputs[2].placeholder = "Telefone";
    inputs[3].placeholder = "E-mail";
    inputs[4].placeholder = "Assunto";
    const textarea = document.querySelector("textarea");
    textarea.placeholder = "Mensagem";
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 948) {
        const inputs = document.querySelectorAll("input");
        inputs[0].placeholder = "Nome";
        inputs[1].placeholder = "Sobrenome";
        inputs[2].placeholder = "Telefone";
        inputs[3].placeholder = "E-mail";
        inputs[4].placeholder = "Assunto";
        // console.log(inputs);
        const textarea = document.querySelector("textarea");
        textarea.placeholder = "Mensagem";
        // console.log(textarea);
    }else{
        const inputs = document.querySelectorAll("input");
        inputs[0].placeholder = " ";
        inputs[1].placeholder = " ";
        inputs[2].placeholder = " ";
        inputs[3].placeholder = " ";
        inputs[4].placeholder = " ";
        
        const textarea = document.querySelector("textarea");
        textarea.placeholder = " ";
        
    }
})

