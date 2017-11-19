(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
class TransactionSimulatorView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'transaction-simulator-view';
        }

        connectedCallback() {
            super.connectedCallback();

            this.addEventListener("dataExpenses", (e)=>{

                /*Detail trae
                   category,
                  subCategory,
                  expense,
                  expenseCount
                */
            });
        }

        static get properties() {
            return {
                toDay:{type:String, value:"19/11/2017"},
                dataExpense:{type:Object, value:{}}
            };
        }

        _nextDate(){
        }

    }
    window.customElements.define(TransactionSimulatorView.is, TransactionSimulatorView);
})();
