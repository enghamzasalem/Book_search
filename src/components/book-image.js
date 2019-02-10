/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';

class BookImage extends LitElement {
  static get styles() {
    return [
      css`
      :host {
        display: block;
        position: relative;
      }

      #placeholder {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        background-size: cover;
        background-position: center;
      }

      :host([blur-up]) #placeholder {
        background-position: center 10%;
        background-size: 80%;
        background-repeat: no-repeat;
        filter: blur(3px);
        will-change: filter;
      }

      :host([blur-up]) #placeholder[loaded] {
        filter: blur(0);
        transition: 0.2s filter ease-in-out;
      }

      img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        opacity: 0;
      }

      :host([center]) img {
        left: -9999px;
        right: -9999px;
        max-width: none;
      }

      #placeholder[loaded] img {
        opacity: 1;
        transition: 0.5s opacity;
      }
      `
    ];
  }

  render() {
    const { alt, placeholder, src, _loaded } = this;
    return html`
      <div id="placeholder" style="${placeholder ? `background-image: url('${placeholder}');` : ''}" ?loaded="${_loaded}">
        <img src="${src}" alt="${alt}"
            @load="${() => this._loaded = true}"
            @error="${() => this._onImgError()}">
      </div>
    `;
  }

  static get properties() { return {
    alt: { type: String },
    src: { type: String },
    placeholder: { type: String },
    _loaded: { type: Boolean }
  }}

  update(changedProps) {
    if (changedProps.has('src')) {
      this._loaded = false;
    }
    super.update(changedProps);
  }

  _onImgError() {
    if (!this.placeholder) {
      this.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#CCC" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>');
    }
  }
}

customElements.define('book-image', BookImage);
