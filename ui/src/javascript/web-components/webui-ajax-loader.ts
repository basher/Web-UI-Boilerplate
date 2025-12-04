export default class WebUIAjaxLoader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = /*html*/ `
            <svg
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                part="svg"
            >
                <title>loading</title>
                <circle cx="50" cy="50" r="47" />
            </svg>
        `;
    }
}
