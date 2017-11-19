(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
class WalletTipsView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'wallet-tips-view';
        }

        static get properties() {
            return {
                prop1: {
                    type: String,
                    statePath: 'title',
                },
            };
        }
    }
    window.customElements.define(WalletTipsView.is, WalletTipsView);
})();
