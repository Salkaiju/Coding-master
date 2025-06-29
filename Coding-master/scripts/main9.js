function marcarItem(item){
    if(item.checked){
        item.parentElement.style.textDecoration = "line-through";
    } else {
        item.parentElement.style.textDecoration = "none";
    }
}