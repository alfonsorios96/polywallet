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

        connectedCallback() {
            super.connectedCallback();
            const state = this.getState();
            console.log(state);
        }

        static get properties() {
            return {
                catalog: {
                    type: Array,
                    statePath: 'catalog',
                },
            };
        }

        saveCategories(event) {
            console.log(event.detail);
        }
    }
    window.customElements.define(PreferencesUserView.is, PreferencesUserView);
})();
