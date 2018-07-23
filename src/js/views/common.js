'use-strict';

export default class common {
    constructor() { }
    
    createHTMLElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
    }
}