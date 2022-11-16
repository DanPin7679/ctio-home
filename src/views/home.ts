import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ctio-home")
export class CtioHome extends LitElement {
  render() {
    return html`
      <div>
        <h1>Home</h1>
      </div>
    `;
  }

  static styles = css`
    :host {
      color: red;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "ctio-home": CtioHome;
  }
}
