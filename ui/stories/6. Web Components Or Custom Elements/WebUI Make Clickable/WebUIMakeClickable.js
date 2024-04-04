export const WebUIMakeClickableHtml = () => `
<webui-make-clickable>
    <article class="card">
        <figure class="card__media">
            <picture>
                <source
                    srcset="https://dummyimage.com/400x300"
                    type="image/webp"
                >
                <img
                    class="image"
                    src="https://dummyimage.com/400x300"
                    alt="[alt]"
                    loading="lazy"
                    height="300"
                    width="400"
                />
            </picture>
        </figure>
        <div class="card__content stack">
            <h3 class="card__title">
                <a
                    href="#"
                    data-url
                >
                    Title is the primary link
                </a>
            </h3>
            <p>This whole component is clickable.</p>
            <p>This is a <a href="https://www.google.com">secondary link</a>.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam molestiae. Soluta voluptatem deleniti excepturi laudantium. Officia at repudiandae quo nulla reiciendis optio modi nemo.</p>
        </div>
    </article>
</webui-make-clickable>
`;
