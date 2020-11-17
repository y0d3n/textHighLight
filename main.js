var pattern = "[-] "

window.document.onkeydown = function(event) {
    if (event.altKey) {
        switch (event.key) {
            case 'Enter':
            case 'y':
            case '1':
                highlight('yellow');
                break;
            case 'r':
                highlight('red');
                break;
            case 'b':
                highlight('royalblue');
                break;
            case 'g':
                highlight('lime');
                break;
            case '0':
                // 情報を隠す
                highlight('#000', '#000');
                break;
            case 'w':
                let b = document.getElementsByTagName('body');
                // 編集可能かわかりにくかったので、titleで判別するようにした。
                if (b[0].isContentEditable) {
                    document.title = document.title.substr(4);
                    b[0].setAttribute('contentEditable', false);
                } else {
                    document.title = pattern + document.title;
                    b[0].setAttribute('contentEditable', true);
                }
                break;
        }
    }
}

function highlight(bC, tC) {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let newNode = document.createElement('span');
    if (tC === undefined) {
        newNode.setAttribute('style', 'background-color:' + bC + ';');
    } else {
        newNode.setAttribute('style', 'background-color:' + bC + ';color: ' + tC + ';');
    }
    newNode.innerHTML = selection.toString();
    range.deleteContents();
    range.insertNode(newNode);
}