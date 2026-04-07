const style = /*html*/ `
<style>
    .carousel__slide {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);

        > * {
            padding: 2rem;
        }
    }
</style>
`;

export const WebUICarouselHtml = (args) => /*html*/ `
${style}
<webui-carousel
    ${args.showSlideCount ? 'data-show-slide-count' : ''}
    ${args.showSlideCountPips ? 'data-show-slide-count-pips' : ''}
>
    <section
        class="carousel-container"
        aria-label="[meaningful label]"
        aria-roledescription="carousel"
    >
        <ul
            class="carousel"
            ${args.makeSlidesFullwidth ? 'data-carousel="fullwidth-slides"' : ''}
            tabindex="0"
        >
            <li class="carousel__slide">
                <div>
                    Content 1
                    <br>Slides have equal height
                    <br><br>
                    <a
                        href="#"
                        class="button" data-button="text" data-button-style="primary"
                    >
                        Link 1
                    </a>
                </div>
            </li>
            <li class="carousel__slide">
                <div>
                    Content 2
                    <br><br>
                    <a
                        href="#"
                        class="button" data-button="text" data-button-style="primary"
                    >
                        Link 2
                    </a>
                </div>
            </li>
            <li class="carousel__slide">
                <div>
                    Content 3
                    <br><br>
                    <a
                        href="#"
                        class="button" data-button="text" data-button-style="primary"
                    >
                        Link 3
                    </a>
                </div>
            </li>
            <li class="carousel__slide">
                <div>
                    Content 4
                    <br><br>
                    <a
                        href="#"
                        class="button" data-button="text" data-button-style="primary"
                    >
                        Link 4
                    </a>
                </div>
            </li>
            <li class="carousel__slide">
                <div>
                    Content 5
                    <br><br>
                    <a
                        href="#"
                        class="button" data-button="text" data-button-style="primary"
                    >
                        Link 5
                    </a>
                </div>
            </li>
            <li class="carousel__slide">
                <div>
                    Content 6
                    <br><br>
                    <a
                        href="#"
                        class="button" data-button="text" data-button-style="primary"
                    >
                        Link 6
                    </a>
                </div>
            </li>
        </ul>
        <p class="carousel__instructions">
            Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
        </p>
        <p class="carousel__counter visually-hidden" data-counter aria-live="polite">
        </p>
    </section>
</webui-carousel>
`;
