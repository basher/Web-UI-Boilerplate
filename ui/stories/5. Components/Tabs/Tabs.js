export const TabsHtml = () => `
<div class="tabs" data-module="tabs">
    <div class="tabs__tablist" data-tablist>
        <a href="#tab1" class="tabs__link" data-tab>
                Tab 1
        </a>
        <a href="#tab2" class="tabs__link" data-tab>
            Tab 2
        </a>
        <a href="#tab3" class="tabs__link" data-tab>
            Tab 3
        </a>
        <a href="#tab4" class="tabs__link" data-tab>
            Tab 4 with a very long title to test overflow
        </a>
    </div>
    <div class="tabs__content" id="tab1" data-tabpanel>
        <p>1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br>
        <b><a href="#">Use the TAB key to access this link inside the tab content</a></b>.
        <br>
        Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div class="tabs__content" id="tab2" data-tabpanel>
        <p>2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div class="tabs__content" id="tab3" data-tabpanel>
        <p>3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div class="tabs__content" id="tab4" data-tabpanel>
        <p>4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
</div>
`;

export const VerticalTabsHtml = () => `
<div class="tabs tabs--vertical" data-module="tabs">
    <div class="tabs__tablist" data-tablist>
        <a href="#tab1v" class="tabs__link" data-tab>
                Tab 1
        </a>
        <a href="#tab2v" class="tabs__link" data-tab>
            Tab 2
        </a>
        <a href="#tab3v" class="tabs__link" data-tab>
            Tab 3
        </a>
        <a href="#tab4v" class="tabs__link" data-tab>
            Tab 4 with a very long title to test overflow
        </a>
    </div>
    <div class="tabs__content" id="tab1v" data-tabpanel>
        <p>1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br>
        <b><a href="#">Use the TAB key to access this link inside the tab content</a></b>.
        <br>
        Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div class="tabs__content" id="tab2v" data-tabpanel>
        <p>2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div class="tabs__content" id="tab3v" data-tabpanel>
        <p>3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div class="tabs__content" id="tab4v" data-tabpanel>
        <p>4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
</div>
`;
