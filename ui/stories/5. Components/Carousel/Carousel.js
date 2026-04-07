const style = /*html*/ `
<style>
    .carousel > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 2rem;
    }
</style>
`;

export const CarouselHtml = () => /*html*/ `
${style}
<section
    class="carousel-container"
    aria-label="[meaningful label]"
    aria-roledescription="carousel"
>
    <ul
        class="carousel"
        tabindex="0"
    >
        <li class="carousel__slide">
            <div>
                Content 1
                <br>Slides have equal height
                <br><br>
                <a
                    href="#"
                    class="button"
                    data-button="text"
                    data-button-style="primary"
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
                    class="button"
                    data-button="text"
                    data-button-style="primary"
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
                    class="button"
                    data-button="text"
                    data-button-style="primary"
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
                    class="button"
                    data-button="text"
                    data-button-style="primary"
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
                    class="button"
                    data-button="text"
                    data-button-style="primary"
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
                    class="button"
                    data-button="text"
                    data-button-style="primary"
                >
                    Link 6
                </a>
            </div>
        </li>
    </ul>
    <p class="carousel__instructions">
        Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
    </p>
</section>
`;

export const CarouselFullwidthSlidesHtml = () => /*html*/ `
${style}
<section
    class="carousel-container"
    aria-label="[meaningful label]"
    aria-roledescription="carousel"
>
    <ul
        class="carousel"
        data-carousel="fullwidth-slides"
        tabindex="0"
    >
         <li class="carousel__slide">
            <div>
                Fullwidth 1
                <br><br>
                <a
                    href="#"
                    class="button"
                    data-button="text"
                    data-button-style="primary"
                >
                    Link 1
                </a>
            </div>
        </li>
        <li class="carousel__slide">
            <div>
                Fullwidth 2
                <br><br>
                <a
                    href="#"
                    class="button"
                    data-button="text"
                    data-button-style="primary"
                >
                    Link 2
                </a>
            </div>
        </li>
        <li class="carousel__slide">
            <div>
                Fullwidth 3
                <br><br>
                <a
                    href="#"
                    class="button"
                    data-button="text"
                    data-button-style="primary"
                >
                    Link 3
                </a>
            </div>
        </li>
    </ul>
    <p class="carousel__instructions">
        Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
    </p>
</section>
`;

export const CarouselClickableSlidesHtml = () => /*html*/ `
${style}
<section
    class="carousel-container"
    aria-label="[meaningful label]"
    aria-roledescription="carousel"
>
    <ul
        class="carousel"
        data-carousel="clickable-slides"
        tabindex="0"
    >
        <li class="carousel__slide">
            <a href="#">
                Clickable 1
                <br>Slides have equal height
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable 2
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable 3
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable 4
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable 5
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable 6
            </a>
        </li>
    </ul>
    <p class="carousel__instructions">
        Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
    </p>
</section>
`;
