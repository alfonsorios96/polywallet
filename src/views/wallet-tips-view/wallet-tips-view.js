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
                incomes: {
                    type: Number,
                    statePath: 'user.incomes'
                },
                catalog: {
                    type: Array,
                    statePath: 'catalog'
                }
            };
        }
    }
    window.customElements.define(WalletTipsView.is, WalletTipsView);
})();
