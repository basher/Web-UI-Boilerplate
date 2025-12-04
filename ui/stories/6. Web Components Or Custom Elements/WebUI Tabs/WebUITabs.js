export const WebUITabsHtml = () => /*html*/ `
<webui-tabs>
    <div data-tablist>
        <a href="#tab1" data-tab>
            Tab 1
        </a>
        <a href="#tab2" data-tab>
            Tab 2
        </a>
        <a href="#tab3" data-tab>
            Tab 3
        </a>
        <a href="#tab4" data-tab>
            Tab 4 with a very long title to test overflow
        </a>
    </div>
    <div id="tab1" data-tabpanel>
        <p>1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br>
        <b><a href="#">Use the <kbd>tab</kbd> key to access this link inside the tab content</a></b>.
        <br>
        Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div id="tab2" data-tabpanel>
        <p>2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div id="tab3" data-tabpanel>
        <p>3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div id="tab4" data-tabpanel>
        <p>4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
</webui-tabs>
`;

export const WebUIVerticalTabsHtml = () => /*html*/ `
<webui-tabs data-vertical>
    <div data-tablist>
        <a href="#tab1vertical" data-tab>
            Tab 1
        </a>
        <a href="#tab2vertical" data-tab>
            Tab 2
        </a>
        <a href="#tab3vertical" data-tab>
            Tab 3
        </a>
        <a href="#tab4vertical" data-tab>
            Tab 4 with a very long title to test overflow
        </a>
    </div>
    <div id="tab1vertical" data-tabpanel>
        <p>1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br>
        <b><a href="#">Use the <kbd>tab</kbd> key to access this link inside the tab content</a></b>.
        <br>
        Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div id="tab2vertical" data-tabpanel>
        <p>2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div id="tab3vertical" data-tabpanel>
        <p>3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
    <div id="tab4vertical" data-tabpanel>
        <p>4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum maxime amet omnis numquam voluptatem exercitationem nemo deleniti dolorem perferendis vitae? Qui molestias inventore illum ad ullam eum unde omnis temporibus.</p>
    </div>
</webui-tabs>
`;
