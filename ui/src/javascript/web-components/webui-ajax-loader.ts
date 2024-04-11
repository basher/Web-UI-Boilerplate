export default class WebUIAjaxLoader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <svg
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
            >
                <title>loading</title>
                <circle cx="50" cy="50" r="47"/>
            </svg>

            <style>
                circle {
                    animation: 1.4s ease-in-out infinite both circle-animation;
                    display: block;
                    fill: transparent;
                    stroke: currentColor;
                    stroke-dasharray: 283;
                    stroke-dashoffset: 280;
                    stroke-linecap: round;
                    stroke-width: 0.375rem;
                    transform-origin: 50% 50%;
                }

                @keyframes circle-animation {
                    0%,
                    25% {
                        stroke-dashoffset: 280;
                        transform: rotate(0);
                    }

                    50%,
                    75% {
                        stroke-dashoffset: 75;
                        transform: rotate(45deg);
                    }

                    100% {
                        stroke-dashoffset: 280;
                        transform: rotate(360deg);
                    }
                }
            </style>
        `;
    }
}
