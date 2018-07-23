'use-strict';

import common from './common';

const objCommon = new common();

export default class chatWidget {
  constructor() { }

  createBotWidget(text) {
    const widget = document.getElementById('chat');

    let html = `<li class="receive-msg float-left mb-2">
                  <div class="sender-img">
                    <i class="fa fa-github fa-4x float-left" aria-hidden="true">
                    </i>
                  </div>
                  <div class="receive-msg-desc float-left ml-2">
                    <p class="bg-white m-0 pt-1 pb-1 pl-2 pr-2 rounded">
                    ${text}                                           
                    </p>
                  </div>
                </li>`;
    const repo = objCommon.createHTMLElement(html);
    widget.appendChild(repo);
  }
  createUserWidget(text) {
    const widget = document.getElementById('chat');

    let html = `<li class="send-msg float-right mb-2">                                
                  <div class="sender-img">
                    <i class="fa fa-user fa-4x float-left" aria-hidden="true">
                    </i>
                  </div>                  
                  <div class="receive-msg-desc float-right ml-2">
                    <p class="pt-1 pb-1 pl-2 pr-2 m-0 rounded">
                    ${text}
                    </p>
                  </div>
                </li>`;
    const repo = objCommon.createHTMLElement(html);
    widget.appendChild(repo);
  }
}