const style = /*html*/ `
<style>
    .carousel > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 5rem;
    }
</style>
`;

const style2 = /*html*/ `
<style>
    .carousel > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
    }
    .carousel--has-clickable-slides a {
        display: block;
        padding: 5rem;
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
            Content 1
            <br>Slides have equal height
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 1
            </a>
        </li>
        <li class="carousel__slide">
            Content 2
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 2
            </a>
        </li>
        <li class="carousel__slide">
            Content 3
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 3
            </a>
        </li>
        <li class="carousel__slide">
            Content 4
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 4
            </a>
        </li>
        <li class="carousel__slide">
            Content 5
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 5
            </a>
        </li>
        <li class="carousel__slide">
            Content 6
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 6
            </a>
        </li>
    </ul>
    <p class="carousel-instructions">
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
        class="carousel carousel--fullwidth"
        tabindex="0"
    >
         <li class="carousel__slide">
            Fullwidth 1
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 1
            </a>
        </li>
        <li class="carousel__slide">
            Fullwidth 2
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 2
            </a>
        </li>
        <li class="carousel__slide">
            Fullwidth 3
            <br><br>
            <a
                href="#"
                class="button"
                data-variant="text"
                data-style="primary"
            >
                Link 3
            </a>
        </li>
    </ul>
    <p class="carousel-instructions">
        Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
    </p>
</section>
`;

export const CarouselClickableSlidesHtml = () => /*html*/ `
${style2}
<section
    class="carousel-container"
    aria-label="[meaningful label]"
    aria-roledescription="carousel"
>
    <ul
        class="carousel carousel--has-clickable-slides"
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
    <p class="carousel-instructions">
        Scroll or use your <kbd>left</kbd> or <kbd>right</kbd> arrow keys for more
    </p>
</section>
`;
