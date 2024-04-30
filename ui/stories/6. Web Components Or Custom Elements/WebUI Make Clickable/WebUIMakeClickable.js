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
            <p>This whole component is clickable, and goes to the primary link URL.</p>
            <p>This is a <a href="https://www.google.com">secondary link</a> that goes to a different URL.</p>
            <p>This is a <code>&lt;webui-share&gt;</code> web component to test (nested) button events.</p>

            <webui-share>
                <webui-disclosure>
                    <button
                        type="button"
                        class="button button--text"
                        data-trigger
                        hidden
                    >
                        Share
                    </button>

                    <div data-content>
                        <label for="share-input" class="label">Share page</label>
                        <input
                            type="text"
                            id="share-input"
                            class="input"
                            value=""
                            data-input
                        />
                        <button
                            type="button"
                            class="button button--text button--secondary"
                            data-copy
                        >
                            Copy
                        </button>
                    </div>
                </webui-disclosure>
            </webui-share>
        </div>
    </article>
</webui-make-clickable>
`;
