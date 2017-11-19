(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class PolyWalletApp extends ReduxMixin(Polymer.Element) {
        static get is() {
            return 'poly-wallet-app';
        }


        static get actions() {
            return {
                update(user) {
                    return {
                        type: 'UPDATE_USER',
                        user: user
                    }
                }
            }
        }

        logout(){
            this.$.auth.signOut();
            this.dispatch('update', null);
        }
    }

    window.customElements.define(PolyWalletApp.is, PolyWalletApp);
})();
