export default class WebUICarousel extends HTMLElement {
    private carousel: HTMLUListElement | null;
    private slides: NodeListOf<HTMLElement>;
    private hasSlideCount?: boolean;
    private hasSlideCountPips?: boolean;
    private visibleSlideClass: string;
    private currentSlideClass: string;
    private currentPipClass: string;
    private slideCounter: HTMLParagraphElement | null;

    constructor() {
        super();

        this.carousel = this.querySelector('.carousel');
        this.slides = this.querySelectorAll('.carousel__slide');
        this.hasSlideCount = this.hasAttribute('data-slide-count');
        this.hasSlideCountPips = this.hasAttribute('data-slide-count-pips');
        this.slideCounter = this.querySelector('[data-counter]');

        this.visibleSlideClass = 'is-visible';
        this.currentSlideClass = 'is-current';
        this.currentPipClass = 'is-current';

        if (!this.carousel || this.slides.length === 0) return;

        this.carousel.addEventListener('keydown', this);
        this.carousel.addEventListener('touchend', this);

        this.init();
    }

    private init(): void {
        this.setVisibleSlide();

        // Update slide counter aria-live region.
        this.updateSlideCounter();

        // Show slide counter (text).
        if (this.hasSlideCount) {
            this.showSlideCount();
        }

        // Show slide counter (coins/pips).
        if (this.hasSlideCountPips) {
            this.showSlideCountPips();
        }

        // Show PREV/NEXT buttons.
        this.showPrevNextButtons();

        // Manage :FOCUS states on slides.
        this.handleFocus();
    }

    private setVisibleSlide(): void {
        const observerSettings = {
            root: this.carousel,
            // Fire callback when when observed item is 99% in view.
            threshold: [0.99],
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // Elements inside each slide that could be focusable.
                    const focusableItems =
                        entry.target.querySelectorAll('a, button');

                    if (entry.isIntersecting) {
                        entry.target.classList.add(this.visibleSlideClass);

                        // Make visible slides keyboard focusable.Screen readers will read out content.
                        entry.target.setAttribute('tabIndex', '0');

                        // Re-instate focusability of interactive child elements.
                        focusableItems.forEach((focusableItem) => {
                            focusableItem.removeAttribute('tabIndex');
                        });
                    } else {
                        entry.target.classList.remove(this.visibleSlideClass);
                        entry.target.removeAttribute('tabIndex');

                        // When using PREV/NEXT buttons, make interactive child elements inside non-visible slides non-focusable. This enables keyboard :FOCUS via TAB key to the "current" slide.
                        focusableItems.forEach((focusableItem) => {
                            focusableItem.setAttribute('tabIndex', '-1');
                        });
                    }
                });
            }, observerSettings);

            this.slides.forEach((slide) => observer.observe(slide));
        }
    }

    private updateSlideCounter(): void {
        if (this.slideCounter) {
            this.slideCounter.innerHTML = `slide 1 of ${this.slides.length}`;
        }
    }

    private showSlideCount(): void {
        this.slideCounter &&
            this.slideCounter.classList.remove('visually-hidden');
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
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('carousel__controls', 'button-group');
        buttonGroup.setAttribute('role', 'region');
        buttonGroup.setAttribute('aria-label', 'carousel controls');
        this.carousel?.before(buttonGroup);

        buttonGroup.innerHTML = `
            <button class="button button--text" data-button="prev">
                Previous
            </button>
            <button class="button button--text" data-button="next">
                Next
            </button>
        `;

        const buttonPrev = buttonGroup.querySelector(
            '[data-button="prev"]',
        ) as HTMLButtonElement;
        const buttonNext = buttonGroup.querySelector(
            '[data-button="next"]',
        ) as HTMLButtonElement;

        buttonPrev &&
            buttonPrev.addEventListener('click', () => this.goToPrevSlide());

        buttonNext &&
            buttonNext.addEventListener('click', () => this.goToNextSlide());
    }

    private getCurrentSlide(): number {
        // Store references to visible & current slides.
        const arrIsVisible: Array<number> = [];
        const arrIsCurrent: Array<number> = [];
        this.slides.forEach((slide: HTMLElement, i: number) => {
            // Add 1 to index so 1st slide = slide 1.
            if (slide.classList.contains(this.visibleSlideClass)) {
                arrIsVisible.push(i + 1);
            }
            if (slide.classList.contains(this.currentSlideClass)) {
                arrIsCurrent.push(i + 1);
            }
        });

        const currentSlide = arrIsCurrent.shift() || arrIsVisible.shift() || 1;
        return currentSlide;
    }

    private goToPrevSlide(): void {
        const prevSlide = this.getCurrentSlide();

        if (prevSlide && prevSlide > 1) {
            this.slides[prevSlide - 1].classList.remove(this.currentSlideClass);
            this.slides[prevSlide - 2].classList.add(this.currentSlideClass);
            this.setCurrentSlideCounter(prevSlide - 2);
            this.scrollToSlide(this.slides[prevSlide - 2], prevSlide - 2);
        }
    }

    private goToNextSlide(): void {
        const nextSlide = this.getCurrentSlide();

        if (nextSlide && nextSlide < this.slides.length) {
            this.slides[nextSlide - 1].classList.remove(this.currentSlideClass);
            this.slides[nextSlide].classList.add(this.currentSlideClass);
            this.setCurrentSlideCounter(nextSlide);
            this.scrollToSlide(this.slides[nextSlide], nextSlide);
        }
    }

    private setCurrentSlideCounter(i: number): void {
        if (this.slideCounter) {
            this.slideCounter.innerHTML = `slide ${i + 1} of ${this.slides.length}`;
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

    private handleKeyboardEvent(key: KeyboardEvent): void {
        switch (key.code) {
            case 'ArrowRight':
                key.preventDefault();
                this.goToNextSlide();
                break;
            case 'ArrowLeft':
                key.preventDefault();
                this.goToPrevSlide();
                break;
            default:
                break;
        }
    }

    private handleTouchEvent(touch: TouchEvent): void {
        if (touch.type !== 'touchend') return;

        // We don't need to calculate swipe distance/direction.
        // 1. getCurrentSlide() already determines which slide is visible after the swipe.
        // 2. Set a timeout to allow for scroll animation to finish before updating slide counter.
        setTimeout(() => {
            this.setCurrentSlideCounter(this.getCurrentSlide());
        }, 500);
    }

    // Handle constructor() event listeners.
    public handleEvent(e: KeyboardEvent | TouchEvent): void {
        const key = e as KeyboardEvent;
        const touch = e as TouchEvent;

        if (key) {
            this.handleKeyboardEvent(key);
        }

        if (touch) {
            this.handleTouchEvent(touch);
        }
    }
}
