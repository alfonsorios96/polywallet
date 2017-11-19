(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
class PreferencesUserView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'preferences-user-view';
        }

        static get properties() {
            return {
                catalog: {
                    type: Array,
                    statePath: 'catalog'
                },
                user: {
                    type: Object,
                    statePath: 'user'
                }
            };
        }

        static get actions() {
            return {
                addCategories(categories) {
                    return {
                        type: 'USER_ADD_SUBCATEGORIES',
                        categories: categories
                    }
                },
                addIncomes(incomes) {
                    return {
                        type: 'USER_ADD_INCOMES',
                        incomes: incomes
                    }
                }
            }
        }

        saveCategories(event) {
            this.dispatch('addCategories', event.detail);
        }

        saveIncomes(event){
            this.dispatch('addIncomes', this.$.idIncomes.value);
        }
    }
    window.customElements.define(PreferencesUserView.is, PreferencesUserView);
})();
