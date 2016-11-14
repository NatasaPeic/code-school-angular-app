(function(){

  var app = angular.module('gemStore', []);
      app.controller('StoreController', function(){
        // this.product = gem;
        this.products = gems;
      });

      // var gem = {
      //   name: 'Azurite',
      //   price: 2.95,
      //   canPurchase: true,
      //   soldOut: true };

      var gems = [
        {
          name: 'Azurite',
          price: 2.95
        },
        {
          name: 'Bloodstone',
          price: 5.95
        },
        {
          name: 'Zircon',
          price: 3.95
        }
 ];

})();
