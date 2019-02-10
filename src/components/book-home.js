/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';

import './book-image.js';

class BookHome extends LitElement {
  static get styles() {
    return [
      css`
      :host {
        display: block;
      }

      .books-bg {
        height: 300px;
        max-width: 570px;
        margin: 0 auto;
      }

      .books-desc {
        padding: 24px 16px 0;
        text-align: center;
      }

      /* Wide Layout */
      @media (min-width: 648px) {
        .books-desc {
          padding: 96px 16px 0;
        }
      }
      `
    ];
  }

  render() {
    return html`
	<br><br><br>
     <center> 
	 <img src="https://vignette.wikia.nocookie.net/ichc-channel/images/7/70/Powered_by_google.png/revision/latest?cb=20160331203712" />
	 <h5 >أبحث عن اي كتاب بأي عنوان وتصفحه بكل سهولة , كزاكتاب اسرع محرك بحث للكتب </h5>
	 </center>

      
    `;
  }
}

window.customElements.define('book-home', BookHome);
