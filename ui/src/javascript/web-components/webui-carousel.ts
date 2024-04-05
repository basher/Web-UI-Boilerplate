type CarouselConfig = {
    showSlideCount: boolean;
    showSlideCountPips: boolean;
    showPrevNextButtons: boolean;
};

export default class WebUICarousel extends HTMLElement {
    private carousel: HTMLUListElement | null;
    private slides: NodeListOf<HTMLElement>;
    private visibleSlideClass: string;
    private currentSlideClass: string;
    private currentPipClass: string;

    private config: CarouselConfig = {
        showSlideCount: false,
        showSlideCountPips: false,
        showPrevNextButtons: false,
    };

    constructor() {
        super();

        this.carousel = this.querySelector('.carousel');
        this.slides = this.querySelectorAll('.carousel__slide');
        this.visibleSlideClass = 'is-visible';
        this.currentSlideClass = 'is-current';
        this.currentPipClass = 'is-current';

        if (!this.carousel || this.slides.length === 0) return;

        this.initConfiguration();
        this.init();
    }

    private initConfiguration(): void {
        // HTML 'data-' attribute flags.
        const flags = {
            showSlideCount: 'data-slide-count',
            showSlideCountPips: 'data-slide-count-pips',
            showPrevNextButtons: 'data-prev-next-buttons',
        };

        for (const prop in flags) {
            if (Object.prototype.hasOwnProperty.call(flags, prop)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.config[prop] = this.getBoolAttribute(flags[prop]);
            }
        }
    }

    private init(): void {
        this.setupA11y();
        this.setVisibleSlide();

        // Show slide counter (text).
        if (this.config.showSlideCount) {
            this.showSlideCount();
        }

        // Show slide counter (coins/pips).
        if (this.config.showSlideCountPips) {
            this.showSlideCountPips();
        }

        // Show PREV/NEXT buttons.
        if (this.config.showPrevNextButtons) {
            this.showPrevNextButtons();
        }

        // Manage :FOCUS event on slides.
        this.handleFocus();

        // Manage keyboard (ARROW keys) events on carousel.
        this.handleKeyboard();
    }

    private setupA11y(): void {
        // Add slide counter labels for screen readers.
        this.slides.forEach((slide: HTMLElement, i: number) => {
            slide.setAttribute(
                'aria-label',
                `slide ${i + 1} of ${this.slides.length}`,
            );
        });
    }

    private setVisibleSlide(): void {
        const observerSettings = {
            root: this.carousel,
            // Fire callback when when observed item is 100% in view.
            threshold: [1.0],
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // Elements inside each slide that could be focusable.
                    const focusableItems =
                        entry.target.querySelectorAll('a, button');

                    if (!entry.isIntersecting) {
                        entry.target.classList.remove(this.visibleSlideClass);

                        // When using PREV/NEXT buttons, make clickable elements inside non-visible slides non-focusable. This enables keyboard :FOCUS via TAB key to the "current" slide.
                        if (this.config.showPrevNextButtons) {
                            focusableItems.forEach((focusableItem) => {
                                focusableItem.setAttribute('tabIndex', '-1');
                            });
                        }
                        return;
                    }
                    entry.target.classList.add(this.visibleSlideClass);

                    // Reinstate focusability when slides are visible.
                    if (this.config.showPrevNextButtons) {
                        focusableItems.forEach((focusableItem) => {
                            focusableItem.removeAttribute('tabIndex');
                        });
                    }
                });
            }, observerSettings);

            this.slides.forEach((slide) => observer.observe(slide));
        }
    }

    private showSlideCount(): void {
        const counter = document.createElement('p');
        counter.classList.add('carousel__counter');
        counter.setAttribute('data-counter', '');
        counter.innerHTML = `slide 1 of ${this.slides.length}`;
        this.carousel?.after(counter);
    }

    private showSlideCountPips(): void {
        const counterPips = document.createElement('p');
        counterPips.classList.add('carousel__counter--pips');
        counterPips.setAttribute('data-counter-pips', '');

        this.slides.forEach((_slide, i) => {
            counterPips.innerHTML += `
                <span class="carousel__counter__pip" data-pip>
                    ${i + 1}
                </span>
            `;
        });

        const firstPip = counterPips.querySelector('[data-pip]');
        firstPip && firstPip.classList.add(this.currentPipClass);

        this.carousel?.after(counterPips);
    }

    private showPrevNextButtons(): void {
        // Prevent keyboard :FOCUS on carousel when displaying PREV/NEXT buttons.
        this.carousel?.setAttribute('tabIndex', '-1');

        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('carousel__controls', 'button-group');
        buttonGroup.setAttribute('role', 'region');
        buttonGroup.setAttribute('aria-label', 'carousel controls');
        this.carousel?.before(buttonGroup);

        buttonGroup.innerHTML = `
            <button class="button button--text" data-button="prev">
                Previous slide
                <span class="sr-only"></span>
            </button>
            <button class="button button--text" data-button="next">
                Next slide
                <span class="sr-only"></span>
            </button>
        `;

        const buttonPrev = buttonGroup.querySelector(
            '[data-button="prev"]',
        ) as HTMLButtonElement;
        const buttonNext = buttonGroup.querySelector(
            '[data-button="next"]',
        ) as HTMLButtonElement;

        buttonPrev &&
            buttonPrev.addEventListener('click', () =>
                this.goToPrevSlide(buttonPrev),
            );

        buttonNext &&
            buttonNext.addEventListener('click', () =>
                this.goToNextSlide(buttonNext),
            );
    }

    private getCurrentSlide(): number {
        // Store references to visible & current slides.
        const arrIsVisible: Array<number> = [];
        const arrIsCurrent: Array<number> = [];
        this.slides.forEach((slide: HTMLElement, i: number) => {
            if (slide.classList.contains(this.visibleSlideClass)) {
                arrIsVisible.push(i + 1);
            }
            if (slide.classList.contains(this.currentSlideClass)) {
                arrIsCurrent.push(i + 1);
            }
        });

        const currentSlide = arrIsCurrent.shift() || arrIsVisible.shift() || 0;
        return currentSlide;
    }

    private goToPrevSlide(button?: HTMLButtonElement): void {
        const prevSlide = this.getCurrentSlide();
        const btnLabelA11y = button?.querySelector('.sr-only');

        if (prevSlide && prevSlide > 1) {
            this.slides[prevSlide - 1].classList.remove(this.currentSlideClass);
            this.slides[prevSlide - 2].classList.add(this.currentSlideClass);
            this.setCurrentSlideCounter(prevSlide - 2);
            this.scrollToSlide(this.slides[prevSlide - 2], prevSlide - 2);

            if (btnLabelA11y) {
                btnLabelA11y.innerHTML = `${prevSlide - 1} of ${
                    this.slides.length
                }`;
            }
        }
    }

    private goToNextSlide(button?: HTMLButtonElement): void {
        const nextSlide = this.getCurrentSlide();
        const btnLabelA11y = button?.querySelector('.sr-only');

        if (nextSlide && nextSlide < this.slides.length) {
            this.slides[nextSlide - 1].classList.remove(this.currentSlideClass);
            this.slides[nextSlide].classList.add(this.currentSlideClass);
            this.setCurrentSlideCounter(nextSlide);
            this.scrollToSlide(this.slides[nextSlide], nextSlide);

            if (btnLabelA11y) {
                btnLabelA11y.innerHTML = `${nextSlide + 1} of ${
                    this.slides.length
                }`;
            }
        }
    }

    private setCurrentSlideCounter(i: number): void {
        const counter =
            this.carousel?.parentElement?.querySelector('[data-counter]');
        if (counter) {
            counter.innerHTML = `slide ${i + 1} of ${this.slides.length}`;
        }

        const counterPips = this.carousel?.parentElement?.querySelector(
            '[data-counter-pips]',
        );
        if (counterPips) {
            const pips = counterPips.querySelectorAll('[data-pip]');
            pips.forEach((pip) => {
                pip.classList.remove(this.currentPipClass);
            });
            pips[i].classList.add(this.currentPipClass);
        }
    }

    private scrollToSlide(slide: HTMLElement, i: number): void {
        const scrollWidth = this.carousel?.scrollWidth || 0;
        const slidePosition = Math.floor(
            scrollWidth * (i / this.slides.length),
        );
        if (
            !slide.classList.contains(this.visibleSlideClass) ||
            slide.classList.contains(this.currentSlideClass)
        ) {
            this.carousel?.scrollTo({
                left: slidePosition,
                behavior: 'smooth',
            });
        }
    }

    private handleFocus(): void {
        this.slides.forEach((slide: HTMLElement, i: number) => {
            const focusableItem = slide.querySelector('a, button');
            focusableItem &&
                focusableItem.addEventListener('focus', () => {
                    this.setCurrentSlideCounter(i);
                    this.scrollToSlide(slide, i);
                });
        });
    }

    private handleKeyboard(): void {
        this.carousel?.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowRight':
                    e.preventDefault();
                    this.goToNextSlide();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.goToPrevSlide();
                    break;
                default:
                    break;
            }
        });
    }

    private getBoolAttribute(name: string): boolean {
        return this.getAttribute(name) === 'true';
    }

    // Handle constructor() event listeners.
    handleEvent(e: MouseEvent) {
        //
    }
}
