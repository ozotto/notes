import angular from 'angular';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'angular-animate'
import 'angular-aria'
import 'angular-material'
import 'angular-material/angular-material.css';

import '../style/app.css';
import '../style/print.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngAnimate', 'ngAria', 'ngMaterial'])
.directive('app', app)
  //.controller('AppCtrl', AppCtrl);

.constant('DEFAULT_INVOICE', {
  reportDate : new Date(),
  employee: {
    surname: '',
    prefix: '',
    suffix: ''
  },
  author: {
    surname: '',
    prefix: '',
    suffix: ''
  },
  manager: {
    singleName: ''
  },
  items:[
    { description: '' }
  ]
})

.service('LocalStorage', [function() {

  var Service = {};

  // Checks to see if an invoice is stored
  var hasInvoice = function() {
    return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
  };

  // Returns a stored invoice (false if none is stored)
  Service.getInvoice = function() {
    if (hasInvoice()) {
      return JSON.parse(localStorage['invoice']);
    } else {
      return false;
    }
  };

  Service.setInvoice = function(invoice) {
    localStorage['invoice'] = JSON.stringify(invoice);
  };


  // Clears a stored invoice
  Service.clearinvoice = function() {
    localStorage['invoice'] = '';
  };

  // Clears all local storage
  Service.clear = function() {
    localStorage['invoice'] = '';
  };

  return Service;

}])

.service('Currency', [function(){

  var service = {};

  service.all = function() {
    return [
        {
          "CurrencyCoded": "CHF",
          "CurrencyName": "Swiss franc",
          "CurrencyDisplayName": "CHF - Swiss franc"
        },
        {
          "CurrencyCoded": "EUR",
          "CurrencyName": "Euro",
          "CurrencyDisplayName": "EUR - Euro"
        },
        {
          "CurrencyCoded": "GBP",
          "CurrencyName": "Pound sterling",
          "CurrencyDisplayName": "GBP - Pound sterling"
        },
        {
          "CurrencyCoded": "USD",
          "CurrencyName": "US Dollar",
          "CurrencyDisplayName": "USD - US Dollar"
        },
        {
          "CurrencyCoded": "CAD",
          "CurrencyName": "Canadian Dollar",
          "CurrencyDisplayName": "CAD - Canadian Dollar"
        },
        {
          "CurrencyCoded": "AUD",
          "CurrencyName": "Australian dollar",
          "CurrencyDisplayName": "AUD - Australian dollar"
        },
        {
          "CurrencyCoded": "JPY",
          "CurrencyName": "Japanese yen",
          "CurrencyDisplayName": "JPY - Japanese yen"
        },
        {
          "CurrencyCoded": "BGN",
          "CurrencyName": "Bulgarian lev",
          "CurrencyDisplayName": "BGN - Bulgarian lev"
        },
        {
          "CurrencyCoded": "CYP",
          "CurrencyName": "Cyprus pound",
          "CurrencyDisplayName": "CYP - Cyprus pound"
        },
        {
          "CurrencyCoded": "CZK",
          "CurrencyName": "Czech koruna",
          "CurrencyDisplayName": "CZK - Czech koruna"
        },
        {
          "CurrencyCoded": "DKK",
          "CurrencyName": "Danish krone",
          "CurrencyDisplayName": "DKK - Danish krone"
        },
        {
          "CurrencyCoded": "EEK",
          "CurrencyName": "Estonian kroon",
          "CurrencyDisplayName": "EEK - Estonian kroon"
        },
        {
          "CurrencyCoded": "HUF",
          "CurrencyName": "Hungarian forint",
          "CurrencyDisplayName": "HUF - Hungarian forint"
        },
        {
          "CurrencyCoded": "LTL",
          "CurrencyName": "Lithuanian litas",
          "CurrencyDisplayName": "LTL - Lithuanian litas"
        },
        {
          "CurrencyCoded": "LVL",
          "CurrencyName": "Latvian lats",
          "CurrencyDisplayName": "LVL - Latvian lats"
        },
        {
          "CurrencyCoded": "MTL",
          "CurrencyName": "Maltese lira",
          "CurrencyDisplayName": "MTL - Maltese lira"
        },
        {
          "CurrencyCoded": "PLN",
          "CurrencyName": "Polish zloty",
          "CurrencyDisplayName": "PLN - Polish zloty"
        },
        {
          "CurrencyCoded": "RON",
          "CurrencyName": "RON",
          "CurrencyDisplayName": "RON - RON"
        },
        {
          "CurrencyCoded": "SEK",
          "CurrencyName": "Swedish krona",
          "CurrencyDisplayName": "SEK - Swedish krona"
        },
        {
          "CurrencyCoded": "SKK",
          "CurrencyName": "Slovak koruna",
          "CurrencyDisplayName": "SKK - Slovak koruna"
        },
        {
          "CurrencyCoded": "ISK",
          "CurrencyName": "Icelandic krona",
          "CurrencyDisplayName": "ISK - Icelandic krona"
        },
        {
          "CurrencyCoded": "NOK",
          "CurrencyName": "Norwegian krone",
          "CurrencyDisplayName": "NOK - Norwegian krone"
        },
        {
          "CurrencyCoded": "HRK",
          "CurrencyName": "Croatian kuna",
          "CurrencyDisplayName": "HRK - Croatian kuna"
        },
        {
          "CurrencyCoded": "RUB",
          "CurrencyName": "Russian rouble",
          "CurrencyDisplayName": "RUB - Russian rouble"
        },
        {
          "CurrencyCoded": "TRY",
          "CurrencyName": "New Turkish lira",
          "CurrencyDisplayName": "TRY - New Turkish lira"
        },
        {
          "CurrencyCoded": "CNY",
          "CurrencyName": "Chinese yuan renminbi",
          "CurrencyDisplayName": "CNY - Chinese yuan renminbi"
        },
        {
          "CurrencyCoded": "HKD",
          "CurrencyName": "Hong Kong dollar",
          "CurrencyDisplayName": "HKD - Hong Kong dollar"
        },
        {
          "CurrencyCoded": "IDR",
          "CurrencyName": "Indonesian rupiah",
          "CurrencyDisplayName": "IDR - Indonesian rupiah"
        },
        {
          "CurrencyCoded": "KRW",
          "CurrencyName": "South Korean won",
          "CurrencyDisplayName": "KRW - South Korean won"
        },
        {
          "CurrencyCoded": "MYR",
          "CurrencyName": "Malaysian ringgit",
          "CurrencyDisplayName": "MYR - Malaysian ringgit"
        },
        {
          "CurrencyCoded": "NZD",
          "CurrencyName": "New Zealand dollar",
          "CurrencyDisplayName": "NZD - New Zealand dollar"
        },
        {
          "CurrencyCoded": "PHP",
          "CurrencyName": "Philippine peso",
          "CurrencyDisplayName": "PHP - Philippine peso"
        },
        {
          "CurrencyCoded": "SGD",
          "CurrencyName": "Singapore dollar",
          "CurrencyDisplayName": "SGD - Singapore dollar"
        },
        {
          "CurrencyCoded": "THB",
          "CurrencyName": "Thai baht",
          "CurrencyDisplayName": "THB - Thai baht"
        },
        {
          "CurrencyCoded": "ZAR",
          "CurrencyName": "South African rand",
          "CurrencyDisplayName": "ZAR - South African rand"
        }
      ]
  }

  return service;
  
}])


.controller('AppCtrl', ['$scope', 'LocalStorage', 'DEFAULT_INVOICE', 'Currency',
  function($scope, LocalStorage, DEFAULT_INVOICE, Currency) {
    
    $scope.currencySymbol = '$';
    $scope.printMode   = false;
    $scope.payment = false;

    (function init() {
      // Attempt to load invoice from local storage
      !function() {
        var invoice = LocalStorage.getInvoice();
        $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;
      }();

      $scope.availableCurrencies = Currency.all();
    })()
    

    $scope.addItem = function() {
      $scope.invoice.items.push({ description:"" });
    }
    
    $scope.removeItem = function(item) {
      $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
    };

    $scope.invoiceTotalNotes = function() {
      var total = 0;
      angular.forEach($scope.invoice.items, function(item, key){
        total += (1 * item.cost);
      });
      return total;
    };

    $scope.invoiceTotal = function(){
      return $scope.invoiceTotalNotes() - $scope.invoice.advanced;
    }

    $scope.printInfo = function() {
      console.log($scope.invoice)
      window.print();
    };

    $scope.clearLocalStorage = function() {
      var confirmClear = confirm('Are you sure you would like to clear the invoice?');
      if(confirmClear) {
        LocalStorage.clear();
        setInvoice(DEFAULT_INVOICE);
      }
    };

}])

export default MODULE_NAME;
