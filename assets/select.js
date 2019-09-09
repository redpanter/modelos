/**
 * Funcion para seleccionar un texto y copiarlo
 */
function select(element){
  if(element.nodeName.toLowerCase()=='textarea' || (element.nodeName.toLowerCase()=='input' && element.type=='text')){
    element.select();
    document.execCommand("copy");
    return;
  }
  if (window.getSelection) {
    var sel = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(element);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
  }
  else if (document.selection) {
    document.selection.empty();
    var range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
    document.execCommand("copy");
  }
}

