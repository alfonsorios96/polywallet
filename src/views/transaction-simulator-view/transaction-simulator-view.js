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
            const state = this.getState();
            console.log(state);

            this.addEventListener("dataExpenses", (e)=>{
                
                /*Detail trae
                   Category
                   expense
                   expenseCount
                */
               this.dataExpense = e.detail; 
            }); 
        }

        static get properties() {
            return {
                prop1: {
                    type: String,
                    statePath: 'title',
                },

                dataExpense:{type:Object, value:{}}
            };
        }

        _nextDate(){
            console.log("pasar a siguiente fecha");
        }


    }
    window.customElements.define(TransactionSimulatorView.is, TransactionSimulatorView);
})();
