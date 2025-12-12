const style = /*html*/ `
<style>
    .carousel > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 5rem;
    }
</style>
`;

export const WebUICarouselHtml = (args) => /*html*/ `
${style}
<webui-carousel
    ${args.showSlideCount === true ? 'data-slide-count' : ''}
    ${args.showSlideCountPips === true ? 'data-slide-count-pips' : ''}
>
    <section
        class="carousel-container"
        aria-label="[meaningful label]"
        aria-roledescription="carousel"
    >
        <ul
            class="carousel ${args.makeSlidesFullwidth === true ? 'carousel--fullwidth' : ''}"
            tabindex="0"
        >
            <li class="carousel__slide">
                Content 1
                <br>Slides have equal height
                <br><br>
                <a
                    href="#"
                    class="button" data-variant="text" data-style="primary"
                >
                    Link 1
                </a>
            </li>
            <li class="carousel__slide">
                Content 2
                <br><br>
                <a
                    href="#"
                    class="button" data-variant="text" data-style="primary"
                >
                    Link 2
                </a>
            </li>
            <li class="carousel__slide">
                Content 3
                <br><br>
                <a
                    href="#"
                    class="button" data-variant="text" data-style="primary"
                >
                    Link 3
                </a>
            </li>
            <li class="carousel__slide">
                Content 4
                <br><br>
                <a
                    href="#"
                    class="button" data-variant="text" data-style="primary"
                >
                    Link 4
                </a>
            </li>
            <li class="carousel__slide">
                Content 5
                <br><br>
                <a
                    href="#"
                    class="button" data-variant="text" data-style="primary"
                >
                    Link 5
                </a>
            </li>
            <li class="carousel__slide">
                Content 6
                <br><br>
                <a
                    href="#"
                    class="button" data-variant="text" data-style="primary"
                >
                    Link 6
                </a>
            </li>
        </ul>
        <p class="carousel-instructions">
            Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
        </p>
        <p class="carousel__counter visually-hidden" data-counter aria-live="polite">
        </p>
    </section>
</webui-carousel>
`;
