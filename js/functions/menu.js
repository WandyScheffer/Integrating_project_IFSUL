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