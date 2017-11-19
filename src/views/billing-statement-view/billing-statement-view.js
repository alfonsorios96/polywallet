(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
class BillingStatementView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'billing-statement-view';
        }

        connectedCallback() {
            super.connectedCallback();
            const state = this.getState();
            console.log(state);
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
    window.customElements.define(BillingStatementView.is, BillingStatementView);
})();
