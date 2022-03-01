/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";

import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/paper-spinner/paper-spinner.js";

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <iron-ajax
        auto
        id="dataAjax"
        url="http://127.0.0.1:8000/api"
        handle-as="json"
        on-response="handleResponse"
        loading="{{wait}}"
      >
      </iron-ajax>

        <h1>View Three</h1>
        <template is="dom-repeat" items="{{freeApi}}">
        <div class="card">
    
        <paper-spinner alt="Loading" active="[[wait]]"></paper-spinner>
          <h2><span>{{item.title}}</span></h2>
          <p><span>{{item.content}}</span></p>
          <p>Created at: <span>{{item.created_at}}</span></p>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      freeApi: {
        type: String
      }
    };
  }
  handleResponse(event, res) {
    this.freeApi = res.response;
    //  console.log(res.response.map(val => val.title));
  }
}

window.customElements.define("my-view3", MyView3);
