import { injectGlobal } from 'styled-components';


export default function inject() {
// eslint-disable-next-line
 injectGlobal`
    
    html, body {
      width: 100%;
      height: 100%;
    }

    body {
      margin: 0px;
      background-color: white;
    }

    div:focus {
      outline: none;
    }
  `;
}