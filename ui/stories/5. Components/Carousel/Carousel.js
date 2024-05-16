const style = `
<style>
    .carousel > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 5rem;
    }
</style>
`;

const style2 = `
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

export const CarouselHtml = () => `
${style}
<section class="carousel-wrapper" aria-label="[meaningful label for carousel]"
>
    <ul
        class="carousel"
        tabindex="0"
    >
        <li class="carousel__slide">
            Slide 1<br>More content<br>Slides have equal height
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="carousel__slide">
            Slide 2 content
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="carousel__slide">
            Slide 3 content
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="carousel__slide">
            Slide 4 content
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="carousel__slide">
            Slide 5 content
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
        <li class="carousel__slide">
            Slide 6 content
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
    </ul>
    <p class="carousel-instructions">Scroll or use your arrow keys for more</p>
</section>
`;

export const CarouselFullwidthSlidesHtml = () => `
${style}
<section class="carousel-wrapper" aria-label="[meaningful label for carousel]"
>
    <ul
        class="carousel carousel--fullwidth"
        tabindex="0"
    >
         <li class="carousel__slide">
            Slide 1 - e.g. banner
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
         <li class="carousel__slide">
            Slide 2 - e.g. banner
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
         <li class="carousel__slide">
            Slide 3 - e.g. banner
            <br><br>
            <a
                href="#"
                class="button button--text button--primary"
            >
                Button
            </a>
        </li>
    </ul>
    <p class="carousel-instructions">Scroll or use your arrow keys for more</p>
</section>
`;

export const CarouselClickableSlidesHtml = () => `
${style2}
<section class="carousel-wrapper" aria-label="[meaningful label for carousel]"
>
    <ul
        class="carousel carousel--has-clickable-slides"
        tabindex="0"
    >
        <li class="carousel__slide">
            <a href="#">
                Clickable slide 1<br>More content<br>Slides have equal height
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable slide 2
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable slide 3
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable slide 4
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable slide 5
            </a>
        </li>
        <li class="carousel__slide">
            <a href="#">
                Clickable slide 6
            </a>
        </li>
    </ul>
    <p class="carousel-instructions">Scroll or use your arrow keys for more</p>
</section>
`;
