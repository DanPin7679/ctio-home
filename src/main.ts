import "./style.css";
import { CtioHome } from "../src/views/home";
import { CtioSidebar } from "./views/sideBar";
import { CtioTopbar } from "./views/topBar";

let app = document.getElementById("app")!;

const home = new CtioHome();
home.className = "main";

const sidebar = new CtioSidebar();
sidebar.className = "side-bar";

const topbar = new CtioTopbar();
topbar.className = "top-bar";

app.appendChild(home);
app.appendChild(sidebar);
app.appendChild(topbar);
