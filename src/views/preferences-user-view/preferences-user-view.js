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

        saveCategories(event) {
            console.log(event.detail);
        }
    }
    window.customElements.define(PreferencesUserView.is, PreferencesUserView);
})();
