const style = `
<style>
    .carousel > * {
        background: hsl(51, 100%, 45%, 15%);
        border: 1px dashed hsl(51, 100%, 45%);
        padding: 5rem;
    }
</style>
`;

export const WebUICarouselHtml = (args) => `
${style}
<webui-carousel
    ${args.showPrevNextButtons === true ? 'data-prev-next-buttons' : ''}
    ${args.showSlideCount === true ? 'data-slide-count' : ''}
    ${args.showSlideCountPips === true ? 'data-slide-count-pips' : ''}
>
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
                Slide 2
                <br><br>
                <a
                    href="#"
                    class="button button--text button--primary"
                >
                    Button
                </a>
            </li>
            <li class="carousel__slide">
                Slide 3
                <br><br>
                <a
                    href="#"
                    class="button button--text button--primary"
                >
                    Button
                </a>
            </li>
            <li class="carousel__slide">
                Slide 4
                <br><br>
                <a
                    href="#"
                    class="button button--text button--primary"
                >
                    Button
                </a>
            </li>
            <li class="carousel__slide">
                Slide 5
                <br><br>
                <a
                    href="#"
                    class="button button--text button--primary"
                >
                    Button
                </a>
            </li>
            <li class="carousel__slide">
                Slide 6
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
</webui-carousel>
`;
