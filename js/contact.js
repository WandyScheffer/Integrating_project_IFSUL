function inInput(event, pos) {
    console.log(event.currentTarget.parentNode.children[pos]);
    event.currentTarget.parentNode.children[pos].classList.add("label_min");
}

function outInput(event, pos) {
    if (event.currentTarget.value == '') {
        event.currentTarget.parentNode.children[pos].classList.remove("label_min");
    }
}