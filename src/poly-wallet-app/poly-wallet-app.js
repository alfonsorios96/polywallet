(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class PolyWalletApp extends Polymer.Element {
        static get is() {
            return 'poly-wallet-app';
        }

        static get properties() {
            return {};
        }
        logout(){
            console.log("logout")
            return this.$.auth.signOut();
        }
    }

    window.customElements.define(PolyWalletApp.is, PolyWalletApp);
})();
