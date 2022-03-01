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

class AddPost extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        .yellow-button {
          text-transform: none;
          color: #eeff41;
        }

        #content_notification {
          --paper-toast-background-color: red;
          --paper-toast-color: white;
        }

        #content_notification_success {
          --paper-toast-background-color: green;
          --paper-toast-color: white;
        }

        a {
          text-decoration: none;
          font-size: inherit;
          color: inherit;
        }

        .toolbar {
          @apply --layout-horizontal;
          @apply --layout-end-justified;
          background-color: rgba(255, 255, 255, 0.95);
        }

        .custom-parent {
          /*font-size: 12px;*/
        }
        paper-input.custom:hover {
          /*border: 1px solid #29B6F6;*/
        }
        paper-input.custom {
          /*margin-bottom: 14px;*/
          --primary-text-color: #01579b;
          --paper-input-container-color: pink;
          --paper-input-container-focus-color: pink;
          --paper-input-container-invalid-color: pink;
          /*border: 1px solid #fff;*/
          border-radius: 5px;
          width: 385px;
          text-align: center;
          /*padding: 8px 15px;*/
          margin: 0 auto;

          /* Reset some defaults */
          /*--paper-input-container: { padding: 0;};*/
          /*--paper-input-container-underline: { display: none; height: 0;};*/
          /*--paper-input-container-underline-focus: { display: none; };*/
          /*text-align: center;*/

          /* New custom styles */
          --paper-input-container-input: {
            box-sizing: border-box;
            font-size: inherit;
            padding: 4px;
          }
          --paper-input-container-input-focus: {
            color: white;
          }
          --paper-input-container-input-invalid: {
            background: rgba(255, 0, 0, 0.3);
          }
          --paper-input-container-label: {
            /*top: -8px;*/
            /*left: 4px;*/
            /*background: white;*/
            /*padding: 2px;*/
            /*font-weight: bold;*/
            font-family: avenir, Arial, sans-serif;
            color: white;
            text-align: center;
            display: block;
            position: inherit !important;
            width: 100%;
            /*background: red;*/
          }
          --paper-input-container-label-floating: {
            width: auto;
            /*background: aqua;*/
          }
        }

        paper-button.custom {
          --paper-button-ink-color: var(--paper-pink-a200);
          /* These could also be individually defined for each of the
        specific css classes, but we'll just do it once as an example */
          --paper-button-flat-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }
        paper-button.custom:hover {
          background-color: var(--paper-indigo-100);
        }

        paper-button.indigo {
          background-color: var(--paper-indigo-500);
          color: white;
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }

        .tabs {
          height: 100%;
          @apply --layout-horizontal;
        }

        .tabs > a {
          @apply --layout-vertical;
          @apply --layout-center-center;
          margin: 12px 16px 12px;
          border-bottom: 1px solid #222;
        }

        header {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: calc(100vh - 64px);
          padding: 0 16px;
          // background-image: url('//app-layout-assets.appspot.com/assets/landing-page/glass_explorer_food_2.png');
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
          text-align: center;
          border-top: solid 1px white;
          border-left: solid 30px white;
          border-right: solid 30px white;
          /*border-radius: 20px;*/
          background: linear-gradient(160deg, #32067c, #8d0b93) !important;
          /*background-image: url("./assets/pineapplecut.png");*/
          //    background :linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);
          /*background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%221440%22%20height=%22661.1%22%20viewBox=%220%200%201440%20661.1%22%3E%3Cstyle%20type=%22text/css%22%3Ecircle,%20ellipse,%20line,%20path,%20polygon,%20polyline,%20rect,%20text%20%7B%20fill:%20%235c6ac4%20!important;%20%7D%3C/style%3E%3Cpath%20fill=%22%235c6ac4%22%20d=%22M1440%20488c-19.3%204.3-39.2%208.6-60%2013-174.2%2036.5-228.8%20288-467%2076.2-153.6-136.6-424-22.8-660.4-5.8-130.2%209.3-252.6-75-252.6-75V0h1440%22/%3E%3C/svg%3E");*/
          /*background-size: cover;*/
          overflow: hidden;
          position: relative;

          /*   animation: colorchange 50s; !* animation-name followed by duration in seconds*!*/
          /*     !* you could also use milliseconds (ms) or something like 2.5s *!*/
          /*  -webkit-animation: colorchange 50s; !* Chrome and Safari *!*/
          /*}*/

          /*@keyframes colorchange*/
          /*{*/
          /*  0%   {background: #FF057C;}*/
          /*  25%  {background: #8D0B93;}*/
          /*  50%  {background: #321575;}*/
          /*  75%  {background: green;}*/
          /*  100% {background: red;}*/
          /*}*/

          /*@-webkit-keyframes colorchange !* Safari and Chrome - necessary duplicate *!*/
          /*{*/
          /*  0%   {background: red;}*/
          /*  25%  {background: yellow;}*/
          /*  50%  {background: blue;}*/
          /*  75%  {background: green;}*/
          /*  100% {background: red;}*/
          /*}*/
        }

        header:after {
          background: transparent
            url("https://www.mozilla.org/media/img/firefox/new/wave.6e6e5026bcc9.svg")
            top center no-repeat;
          background-size: 5223px 186px;
          bottom: 0;
          content: "";
          display: block;
          height: 168px;
          left: 0;
          position: absolute;
          width: 100%;
        }

        header > h1 {
          font-size: 3.25em;
          margin: 0;
          line-height: 1.25;

          /*background :linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);*/
          /*  -webkit-background-clip: text;*/
          /*  -webkit-text-fill-color: transparent;*/
        }

        header > p {
          font-size: 2.25em;
          margin: 0;
          cursor: s-resize;
          /*background :linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);*/
          /*  -webkit-background-clip: text;*/
          /*  -webkit-text-fill-color: transparent;*/
        }

        .logo svg {
          width: 70%;
        }

        .button {
          align-items: center;
          border: 1px solid #dbdbdb;
          border-radius: 3px;
          box-shadow: none;
          display: inline-flex;
          font-size: 1rem;
          height: 2.25em;
          padding-bottom: calc(0.375em - 1px);
          padding-top: calc(0.375em - 1px);
          position: relative;
          vertical-align: top;
          user-select: none;
          justify-content: center;
          padding-left: 0.75em;
          padding-right: 0.75em;
          text-align: center;
          white-space: nowrap;
          background: white;
          color: black;
        }

        .button.is-primary {
          background-color: #8d0b93;
          border-color: transparent;
          color: #fff;

          padding: 0 3rem;
        }

        .digital {
          position: relative;
          z-index: 10;
        }

        section {
          padding: 40px 16px;
        }

        .container {
          @apply --layout-horizontal;
          max-width: 1000px;
          margin: 0 auto;
        }

        .container > * {
          @apply --layout-flex;
        }

        .container img {
          max-width: 100%;
          max-height: 100%;
        }

        .container h3 {
          font-size: 32px;
          font-weight: 300;
          margin: 24px 0;
        }

        .container p {
          line-height: 1.5;
          font-weight: 100;
        }

        @media (max-width: 600px) {
          .container {
            @apply --layout-vertical;
          }
        }

        #about {
          background: #ffffff;
        }

        .content {
          display: block;
          position: relative;
          max-width: 1000px;
          margin: 5px auto;
          background-color: #ddd;
        }

        .boxes {
          box-shadow: none;
        }

        .card-container {
          display: inline-block;
          width: 33.33%;
          color: black;
          text-decoration: none;
        }
        paper-card {
          display: block;
          margin: 0 15px;
          --paper-card-header-image: {
            height: 200px;
          }
        }
        paper-card h2 {
          margin: 4px;
          font-weight: normal;
        }
        paper-card h4 {
          margin: 20px 0 0 20px;
          font-weight: lighter;
          font-size: 20px;
          color: #646464;
          font-family: avenir, Arial, sans-serif;
        }
        paper-card p {
          margin: 4px;
          color: #646464;
        }
        paper-fab {
          position: fixed;
          right: 24px;
          bottom: 24px;
          --paper-fab-background: #ef5458;
          --paper-fab-keyboard-focus-background: #df4448;
        }

        .center {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2em;
          color: #646464;
          font-weight: 100;
        }

        @media (max-width: 960px) {
          .content {
            max-width: 800px;
          }
          .card-container {
            width: 50%;
          }
        }

        .contact {
          text-align: center;
          margin-bottom: 80px;
          background: #fff;
        }

        .contact h4 {
          text-align: center;
          background: #fff;
          font-size: 1.75em;
          font-weight: 100;
          line-height: 1;
        }

        .contact > .container {
          padding: 10px 0 35px;
          border-top: 1px solid #dfe3e8;
          border-bottom: 1px solid #dfe3e8;
          color: #646464;
        }

        .icon {
          color: #8d0b93;
        }
        paper-button.custom {
          --paper-button-ink-color: var(--paper-pink-a200);
          /* These could also be individually defined for each of the
        specific css classes, but we'll just do it once as an example */
          --paper-button-flat-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
          --paper-button-raised-keyboard-focus: {
            background-color: var(--paper-pink-a200) !important;
            color: white !important;
          }
        }
        paper-button.custom:hover {
          background-color: var(--paper-indigo-100);
        }
        paper-button.pink {
          /*color: var(--paper-pink-a200);*/
          color: #321575;
          background-color: white;
          border: 1px solid white;
        }

        paper-button.green {
          /*color: var(--paper-pink-a200);*/
          color: #fff;
          background-color: #8d0b93;
          border: 1px solid white;
          border-radius: 20px;
          padding: 0.7em 2.57em;
        }

        .footer {
          max-width: 1000px;
          margin: 15px auto 40px;
          text-align: center;
          box-sizing: content-box;
          font-size: 1em;
          color: #646464;
        }

        .footer a {
          font-weight: 100;
        }

        .section-shape {
          bottom: -8px;
          left: 0;
          position: absolute;
          right: 0;
          z-index: 1;
        }

        .section-shape img {
          max-width: 100%;
          min-width: 100%;
          width: 100%;
        }
      </style>
      <app-header-layout>
        <app-header reveals effects="waterfall" slot="header">
          <!--        <app-toolbar class="toolbar">-->
          <!--          <div class="tabs">-->
          <!--            <a href="#about">About</a>-->
          <!--            <a href="#services">Services</a>-->
          <!--            <a href="#contact">Contact</a>-->
          <!--          </div>-->
          <!--        </app-toolbar>-->
        </app-header>

        <header>
          <a
            href="#"
            class="logo"
            title="NOW TV"
            data-tracking-variable="event76Btn"
            data-tracking-value="//www.nowtv.com"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="208.933"
              height="47.795"
              viewBox="0 0 208.933 47.795"
            >
              <path
                d="M208.757 2.04c-.223-.517-.636-.917-1.16-1.123-.248-.1-.508-.147-.772-.147-.873 0-1.644.524-1.964 1.335l-5.487 13.91-5.49-13.91c-.002-.01-.006-.017-.01-.026-.008-.018-.017-.034-.022-.05-.02-.047-.04-.094-.064-.14l-.016-.025c-.3-.546-.814-.927-1.418-1.05l-.01-.002c-.063-.012-.125-.02-.186-.03-.012 0-.02 0-.03-.003-.067-.006-.136-.01-.206-.01h-18.188c-1.164 0-2.11.946-2.11 2.11s.946 2.11 2.11 2.11h5.973v16.773c0 1.165.947 2.11 2.11 2.11 1.163 0 2.108-.945 2.108-2.11V4.99h6.562l6.923 17.55c.01.02.02.04.027.06.003.003.003.006.003.01.28.643.85 1.092 1.525 1.223l.03.008c.048.01.1.017.15.022.013 0 .026.002.043.004.06.006.12.01.18.01h.005c.063 0 .126-.004.186-.01l.042-.004c.053-.006.102-.014.15-.02l.032-.01c.67-.13 1.24-.58 1.52-1.223.005-.004.005-.007.007-.01.01-.02.018-.04.026-.06l7.45-18.886c.208-.525.198-1.097-.026-1.615M42.232.914c-3.838-.78-7.59 1.695-8.374 5.535l-3.05 14.948L19.597 4.02l-.024-.03c-.084-.13-.177-.254-.27-.377-.05-.066-.094-.135-.145-.198-.093-.113-.192-.22-.29-.327-.162-.174-.33-.34-.502-.5-.06-.05-.113-.107-.174-.16-.093-.08-.196-.15-.295-.225-.09-.064-.17-.134-.262-.195-.077-.054-.162-.102-.245-.152-.116-.072-.228-.146-.348-.212-.036-.02-.076-.036-.113-.056-.253-.133-.52-.248-.793-.352-.12-.046-.24-.094-.363-.135-.08-.022-.164-.042-.246-.063-.144-.04-.292-.082-.44-.112-.01-.003-.022-.008-.037-.01-.078-.017-.156-.023-.235-.038-.14-.022-.28-.048-.422-.063-.104-.01-.207-.015-.312-.02-.128-.01-.255-.02-.384-.02-.108 0-.215.005-.32.008-.126.005-.25.01-.376.02-.105.01-.206.022-.308.04-.128.016-.256.03-.384.057-.096.017-.19.04-.283.06-.133.032-.266.063-.397.1-.09.028-.174.06-.26.09-.133.044-.264.088-.395.14-.09.037-.174.077-.26.12-.126.054-.248.108-.367.17-.097.052-.19.11-.287.167-.09.053-.188.1-.277.158-.014.008-.026.02-.04.03-.095.06-.184.13-.274.196-.1.073-.204.14-.3.218-.028.025-.055.052-.085.076-.458.38-.856.81-1.193 1.277-.04.055-.08.105-.12.16-.07.104-.133.214-.197.322-.057.09-.117.18-.17.273-.043.08-.077.164-.117.244-.102.206-.197.417-.28.634-.05.13-.1.26-.144.39-.023.08-.04.16-.062.237-.04.152-.086.302-.116.452-.002.014-.007.024-.01.037L.145 38.452c-.782 3.84 1.694 7.59 5.536 8.374.478.097.956.146 1.426.146 3.302 0 6.262-2.32 6.948-5.682l3.05-14.946 11.21 17.375c.007.01.013.02.02.028.15.23.312.446.487.658.052.062.108.12.16.18.13.145.265.285.407.42.065.064.134.128.202.19.152.134.313.262.48.382.05.04.1.08.15.117.218.154.446.293.685.423.048.024.1.047.147.07.19.097.383.187.583.27.083.03.164.06.248.088.17.062.343.115.52.165.094.024.187.052.282.073.057.013.114.033.173.044.123.024.248.037.37.058.085.012.17.027.254.036.27.032.537.053.802.053.02 0 .044-.004.065-.004.163 0 .328-.01.49-.022.068-.006.133-.017.198-.022.123-.014.245-.027.364-.046l.207-.037c.12-.024.243-.05.364-.08.06-.017.12-.03.182-.046.14-.04.28-.083.416-.13l.118-.038c.177-.066.356-.138.53-.218h.005c.165-.08.33-.163.492-.254.054-.03.107-.064.162-.096.082-.048.164-.094.244-.146.02-.012.04-.028.06-.04.147-.1.29-.204.432-.31.037-.03.077-.057.113-.086.167-.135.328-.28.483-.43.06-.057.112-.117.168-.174.097-.1.19-.2.283-.304.06-.07.112-.14.17-.21.08-.104.158-.207.235-.312.05-.074.1-.146.148-.22.073-.11.142-.226.21-.343.04-.072.082-.144.122-.218.062-.123.125-.25.182-.377l.096-.217c.054-.13.103-.265.148-.4.027-.074.054-.147.077-.223.044-.13.077-.268.11-.402.02-.078.042-.16.06-.24.002-.013.008-.026.01-.04l6.534-32.002c.787-3.84-1.69-7.59-5.532-8.374M163.288 1.54c-3.64-1.81-8.055-.323-9.863 3.317l-7.834 15.78-5.063-14.877c-.022-.07-.054-.134-.08-.202-.05-.135-.103-.27-.16-.403-.042-.098-.09-.19-.136-.283-.06-.122-.12-.243-.187-.36-.055-.1-.115-.194-.174-.29-.068-.105-.136-.21-.208-.316-.068-.1-.14-.19-.213-.284-.075-.094-.15-.188-.226-.278-.083-.098-.168-.188-.256-.28-.077-.08-.156-.162-.238-.24-.098-.093-.197-.18-.3-.27-.08-.067-.16-.138-.24-.203-.115-.088-.234-.172-.354-.254-.06-.043-.114-.086-.173-.127-.025-.016-.05-.026-.072-.042-.12-.078-.243-.146-.368-.215-.09-.05-.182-.105-.275-.152-.11-.055-.223-.103-.333-.15-.11-.05-.222-.103-.335-.146-.1-.037-.2-.068-.3-.102-.127-.042-.254-.088-.38-.122-.105-.03-.212-.05-.317-.075-.125-.027-.247-.06-.374-.08-.13-.023-.267-.037-.4-.054-.1-.01-.2-.027-.3-.035-.15-.012-.31-.014-.466-.016-.078-.002-.158-.008-.24-.006-.148.003-.3.017-.453.03-.085.007-.175.01-.26.02-.13.014-.26.04-.388.062-.113.018-.226.035-.335.06-.108.024-.214.054-.318.083-.135.034-.27.07-.402.112-.025.01-.05.014-.08.022-.067.024-.133.056-.2.08-.138.05-.27.104-.403.16-.098.043-.19.09-.283.136-.122.06-.244.12-.36.188-.1.056-.19.114-.286.173-.11.07-.215.137-.32.21-.096.067-.19.14-.28.21-.098.075-.19.15-.284.23-.094.08-.183.164-.27.25-.085.078-.17.158-.25.244-.09.094-.176.19-.263.29-.07.084-.142.165-.21.253-.086.11-.168.225-.247.34-.044.062-.093.12-.132.182L117.295 19.6l-1.79-11.687c-.617-4.018-4.376-6.777-8.388-6.16-4.02.617-6.776 4.373-6.16 8.39l4.707 30.714c.012.07.03.137.04.205.022.108.042.217.066.323.03.126.06.25.098.375.025.094.05.187.082.278.044.136.094.266.145.396.03.082.062.162.097.242.06.137.124.27.19.4.04.073.074.146.113.22.072.134.154.26.234.386.042.07.08.14.127.203.1.147.207.288.315.426.062.08.128.16.196.235.114.13.23.262.353.386.065.064.135.126.202.19.104.096.207.19.314.28.072.06.146.116.22.173.118.088.234.174.354.256.037.022.068.052.105.075.057.037.115.068.172.104l.2.12c.117.067.236.13.355.188.057.03.113.06.174.088.364.172.738.31 1.117.418.057.016.114.03.172.043.14.036.275.066.41.096l.21.037c.136.022.27.04.4.055.068.006.138.016.206.02.187.017.374.025.56.027h.025c.275 0 .543-.02.812-.048.057-.006.117-.012.175-.02.05-.007.1-.01.146-.018.168-.026.33-.064.492-.102.066-.014.134-.023.198-.04.277-.07.542-.153.8-.25.046-.017.088-.038.13-.058.215-.085.424-.18.63-.282.076-.04.15-.084.228-.125.167-.096.332-.197.49-.305.08-.052.16-.104.237-.16.17-.123.333-.256.49-.394.053-.043.11-.086.16-.133.202-.185.39-.383.572-.59.05-.06.103-.125.153-.19.134-.162.262-.33.38-.508.03-.042.06-.076.09-.12l12.367-18.952 5.882 17.278v.002l.008.024c.07.206.15.406.236.6.024.054.052.102.075.154.068.15.145.298.22.442l.11.18c.076.134.157.263.244.388.038.06.08.12.124.18.092.128.19.253.29.373.04.05.08.1.122.145.14.164.29.322.443.47.033.034.07.063.104.095.128.117.256.23.393.34.06.047.123.094.186.14.123.093.248.18.375.265.06.04.12.08.184.12.19.115.385.228.584.326l.002.002.01.004c.225.11.457.21.695.297.06.02.123.045.186.066.23.08.464.15.702.207.035.008.072.013.11.02.206.047.418.083.63.11l.203.023c.244.025.49.04.736.04l.076-.002c.155 0 .312-.007.465-.02.074-.003.145-.015.216-.02.113-.012.228-.025.34-.043.075-.01.15-.024.224-.037.115-.02.23-.047.34-.07.07-.018.142-.034.21-.053.128-.033.256-.07.382-.112.04-.013.082-.02.12-.035l.035-.015c.208-.07.41-.152.612-.242.05-.02.098-.047.15-.07.15-.074.307-.153.456-.24.05-.026.098-.054.146-.08.18-.108.354-.222.524-.345.043-.03.086-.064.128-.096.135-.103.265-.21.393-.318l.13-.112c.313-.287.606-.602.872-.947l.095-.127c.102-.136.196-.276.29-.422.025-.043.056-.086.083-.13.106-.18.21-.36.304-.55l15.694-31.61c1.81-3.64.323-8.058-3.318-9.865M73.92 0C60.724 0 50.023 10.7 50.023 23.898c0 13.195 10.7 23.896 23.896 23.896 13.198 0 23.897-10.7 23.897-23.896C97.817 10.698 87.12 0 73.92 0"
                fill="#fff"
              ></path>
            </svg>
          </a>
          <h1>Read & write simulations</h1>
          <p>Write simulations about all king of situations</p>

          <!--       <iron-form id="formOne" on-iron-form-response="onResponse">-->
          <!--            <form method="post" action="http://localhost:8000/addname" is="iron-form">-->
          <!--&lt;!&ndash;              <paper-input id="foo" error-message="Invalid email!" value="{{email}}" type="email" name="email" placeholder="email"></paper-input>&ndash;&gt;-->
          <!--              <paper-input type="email" value="{{email}}" name="email" placeholder="email"></paper-input>-->
          <!--              <paper-button auto-validate on-tap="submitHandler">Be in touch</paper-button>-->
          <!--            </form>-->
          <!--        </iron-form>-->
          <!--        <pre>s{{response}}</pre>-->

          <!--        <paper-button raised on-click="_notification">Persistent toast</paper-button>-->

          <paper-toast
            id="content_notification"
            duration="0"
            text="This toast will stay opened until you close it, or open another toast."
          >
            <paper-button on-click="_notification" class="yellow-button"
              >Close now!</paper-button
            >
          </paper-toast>

          <paper-toast
            id="content_notification_success"
            duration="0"
            text="This toast will stay opened until you close it, or open another toast."
          >
            <paper-button on-click="_notification_succes" class="yellow-button"
              >Close now!</paper-button
            >
          </paper-toast>

          <!--        <form method="post" action="http://localhost:8000/addname">-->
          <!--            <label>Enter Your Name</label><br>-->
          <!--            <input type="text" name="firstName" placeholder="Enter first name..." required>-->
          <!--            <input class="button is-large" type="submit" value="Add Name" on-click="_notification_succes">-->
          <!--        </form>-->

          <!--        <paper-input class="custom" always-float-label label="By entering your email entering you will be informed by the start" type="email"></paper-input>-->
          <br />
          <!--        <paper-button raised class="custom indigo">Be in touch</paper-button>-->

          <a class="button is-large" href="">
            <svg
              id="i-download"
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30"
              ></path>
            </svg>
            &nbsp; Be in touch
          </a>
          <br />
          <br />

          <div class="text-center digital">
            <picture class="picture"
              ><source
                srcset="
                  https://cdn.shopify.com/assets2/landers/short-lander/free-trial/default@tablet-83f017c08356e1b69d531716b99faa0ff7ff6cee61097d7f5169a55032d79e73.png    1x,
                  https://cdn.shopify.com/assets2/landers/short-lander/free-trial/default@tablet-2x-c9cab32812fc9202e12a79e9e22dbe05c3966476c7aa16e57d491c5fdc8565ec.png 2x
                "
                media="(min-width: 750px)"/>
              <img
                srcset="
                  https://cdn.shopify.com/assets2/landers/short-lander/free-trial/default@mobile-3fe887017342aa5a2a0d2ad2d4d4755382e331ec1bebfb4c68579bbe89d4532b.png    1x,
                  https://cdn.shopify.com/assets2/landers/short-lander/free-trial/default@mobile-2x-1e95e12dd1cec4201eecf6f4f4001317b06dcfb8cfc9b6001f46030940a49cc2.png 2x
                "
                alt=""
            /></picture>
          </div>
        </header>

        <section id="about">
          <h2 class="center">
            Write simulations about all king of situations:
          </h2>

          <div class="container">
            <paper-card class="boxes">
              <h4>
                <iron-icon class="icon" icon="search"></iron-icon> Where was it?
              </h4>
              <p class="card-content">
                There are many classic places and interesting to do it, like in
                the bed or in a theatre, on the beach, boat, etc.
              </p>
            </paper-card>

            <paper-card class="boxes">
              <h4>
                <iron-icon class="icon" icon="search"></iron-icon> When was it?
              </h4>
              <p class="card-content">
                In the morning, after a diner even before go to bed event before
                an important event or during one?
              </p>
            </paper-card>

            <paper-card class="boxes">
              <h4>
                <iron-icon class="icon" icon="search"></iron-icon> How did you
                make it?
              </h4>
              <p class="card-content">
                Explain if you did you use your voice for your simulation, or
                talk with your body, used object, etc.
              </p>
            </paper-card>
          </div>
        </section>

        <section class="contact" id="contact">
          <div class="container">
            <div>
              <h4>Ready to write your first simulation?</h4>
              <!--            <paper-button raised class="custom green">Be in touch</paper-button>-->
              <a class="button is-primary is-large" href="#">
                Be in touch
              </a>
            </div>
          </div>
        </section>

        <footer class="footer">
          <!--         Giraffe.com - Copyright ®2019-->
          <a href="#">Cookie Policy</a> - <a href="#">Privacy Notice</a>
        </footer>
      </app-header-layout>
    `;
  }

  submitHandler() {
    this.$.formOne.submit();
  }

  onResponse(e) {
    this.response = JSON.stringify(e.detail.response, null, 2);
  }
}

window.customElements.define("add-post", AddPost);

/**
 @license
 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
 found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
 part of the polymer project is also subject to an additional IP rights grant
 found at http://polymer.github.io/PATENTS.txt
 */
// import "@polymer/iron-flex-layout/iron-flex-layout.js";
// import "@polymer/iron-icons/iron-icons.js";

// import "@polymer/paper-icon-button/paper-icon-button.js";

// import "@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
// import "@polymer/app-layout/app-header/app-header.js";
// import "@polymer/app-layout/app-header-layout/app-header-layout.js";
// import "@polymer/app-layout/app-toolbar/app-toolbar.js";

// import "@polymer/paper-input/paper-input.js";

// import "@polymer/paper-card/paper-card.js";

// import "@polymer/paper-button/paper-button.js";

// import "@polymer/app-layout/demo/sample-content.js";
// import "@polymer/paper-toast/paper-toast.js";
// // import '@polymer/iron-icon/iron-icon.js';
// import "@polymer/iron-icons/iron-icons.js";

// import "@polymer/iron-ajax/iron-ajax.js";

// import "@polymer/iron-form/iron-form.js";

// import { Polymer } from "@polymer/polymer/lib/legacy/polymer-fn.js";

// import { html } from "@polymer/polymer/lib/utils/html-tag.js";
