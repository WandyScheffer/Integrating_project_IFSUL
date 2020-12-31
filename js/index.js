window.onload = () => {
    alert("Está aplicação ainda está em desenvolvimento, logo algumas funcionalidades ainda não estão completas.");
}

var resume = false;

function openCloseResume() {
    const resume_container = document.querySelector(".content-right");
    if (!resume) {
        resume_container.classList.add("ative-in-mobile");
        resume_container.classList.remove("desactive-in-mobile");
        resume=true;
        return;
    }

    resume_container.classList.remove("ative-in-mobile");
    resume_container.classList.add("desactive-in-mobile");
    resume=false;
}