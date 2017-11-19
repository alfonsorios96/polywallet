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
