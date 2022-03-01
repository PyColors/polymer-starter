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

import "@polymer/iron-form/iron-form.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-input/paper-textarea.js";

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        paper-button.indigo {
          background-color: var(--paper-indigo-500);
          color: white;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }
      </style>
      <iron-form id="formOne" on-iron-form-response="onResponse">
        <form
          method="post"
          action="http://127.0.0.1:8000/api/create/"
          is="iron-form"
        >
          <paper-input
            name="title"
            required
            placeholder="Title"
            error-message="Hey!!! Write something here!!"
          ></paper-input>

          <paper-textarea
            rows="4"
            name="content"
            required
            error-message="Hey!!! Write something here!!"
            placeholder="A brief description (500 words or less)"
          ></paper-textarea>

          <paper-button raised class="custom indigo" on-tap="submitHandler"
            >Submit</paper-button
          >
        </form>
      </iron-form>
      <pre>{{response}}</pre>
    `;
  }

  submitHandler() {
    this.$.formOne.submit();
  }

  onResponse(e) {
    this.response = JSON.stringify(e.detail.response, null, 2);
  }
}

window.customElements.define("my-view2", MyView2);
