import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ctio-topbar")
export class CtioTopbar extends LitElement {
  render() {
    return html`
      <div>
        <h1>Topbar</h1>
      </div>
    `;
  }

  static styles = css`
    :host {
      color: yellow;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "ctio-topbar": CtioTopbar;
  }
}
