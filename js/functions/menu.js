window.onload = () => {
    
    if (sessionStorage.getItem("noticed")) {
        document.getElementsByClassName("notice_back")[0].style = "display: none;"
    } else {
        const body = document.getElementsByTagName("body")[0];
        const notice_back = document.createElement("div");
        const notice = document.createElement("div");
        const close_icon = document.createElement("img");
        const title = document.createElement("h1");
        const alert_icon = document.createElement("img");
        const content_alert = document.createElement("p");

        notice_back.classList.add("notice_back");
        notice.classList.add("notice");
        close_icon.src = "./img/icons/close.svg";
        close_icon.addEventListener("click", closeNotice);
        alert_icon.src = "./img/icons/alert.svg";
        title.appendChild(alert_icon);
        title.textContent = "Atenção!";
        content_alert.textContent = "Esta aplicação ainda está em desenvolvimento, logo algumas funcionalidades ainda não estão completas.";

        body.appendChild(notice_back);
        notice_back.appendChild(notice);
        notice.appendChild(close_icon);
        notice.appendChild(title);
        notice.appendChild(content_alert);
    }

}

function closeNotice() {
    document.getElementsByClassName("notice_back")[0].style = "display: none;"
    sessionStorage.setItem("noticed", true);
}



var show = false;
function menuMobile() {
    const menu = document.getElementById("mobile");
    if(!show){
        console.log(menu);
        menu.style = "transition: transform 1500ms; transform: translateX(0%);";
        show=true;
        return;
    }
    menu.style = "transition: transform 1500ms; transform: translateX(-110%);";
    show=false;
}