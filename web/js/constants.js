const changelogTemplate = document.createElement("template");
changelogTemplate.innerHTML = `
<h4 class="mt-3">
    <span class="p-2"> Version 1.0.0</span> - 04/09/2023
</h4>
<ul class="mt-3 mb-5">
    <li class="ms-3">Creating the project structure</li>
    <li class="ms-3">Configure the pages</li>
    <ul>
        <li class="ms-3">Index</li>
        <li class="ms-3">About</li>
        <li class="ms-3">Contact</li>
        <li class="ms-3">Guide</li>
        <li class="ms-3">Projects</li>
    </ul>
</ul>
<hr />

<h4 class="mt-3">
    <span class="p-2"> Version 1.0.1</span> - 24/12/2023
</h4>
<ul class="mt-3 mb-5">
    <li class="ms-3">Update report with locomotive section</li>
</ul>
<hr />
`;

class Changelog extends HTMLElement {
  constructor() {
    // Always call super first in the constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(changelogTemplate.content);
  }
}
customElements.define("changelog-component", Changelog);

// Set constants
$(".site-logo .bg-primary").text("V 1.0.1");
$(".docs-time").text("last update: 24-12-2023");
