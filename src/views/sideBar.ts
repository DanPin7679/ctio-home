import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ctio-side-bar")
export class CtioSidebar extends LitElement {
  render() {
    return html`
      <div>
        <h1>SideBar</h1>
      </div>
    `;
  }

  static styles = css`
    :host {
      color: Orange;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "ctio-side-bar": CtioSidebar;
  }
}
