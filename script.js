'use sctrict';

const DomElement = function(selectorValue, heightValue, widthValue, bgValue, fontSizeValue) {
    this.selector = selectorValue;
    this.height = heightValue + 'px';
    this.width = widthValue + 'px';
    this.bg = bgValue;
    this.fontSize = fontSizeValue + 'px';
    this.addElement = function(str) {
       if (selectorValue[0] === '.') {        
            let div = document.createElement('div');
            let selectorCopy = selectorValue.slice(1);

            div.className = selectorCopy;
            document.body.appendChild(div);

       } else if (selectorValue[0] === '#') {        
            let selectorCopy = selectorValue.slice(1);
            let elementNew = document.createElement('p');

            elementNew.id = selectorCopy;
            elementNew.textContent = str;
            elementNew.style.cssText = `height : ${this.height}; width : ${this.width}; background : ${this.bg}; font-size : ${this.fontSize}`;
            document.body.appendChild(elementNew);
            console.dir(elementNew);
       } else {
            alert('Ввод начинать с "." либо "#');
       }
    };
};

let text = prompt('Введите текст');

let fitstElememt = new DomElement('.block', 200, 200, 'blue', 22);
fitstElememt.addElement(text);
let secondElememt = new DomElement('#best', 200, 200, 'blue', 52);
secondElememt.addElement(text);