webpackJsonp([1],{

/***/ "2f81f5369d339e005904":
/***/ (function(module, exports) {

__signin_callback = function (_popup, response) {
  angular.element(document.getElementById('mainController')).scope().main.login.signin_response(response);

  _popup.close();
};

/*** EXPORTS FROM exports-loader ***/


/***/ }),

/***/ "2f823a6889890ebdbfad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__("5a809b195591bf00d4d5");
__webpack_require__("2f81f5369d339e005904");

__webpack_require__("cfa4d2969ec4798cc507");

__webpack_require__("021658d2ecb4018274f9");

__webpack_require__("60b2f4d49b055bccbca6");

__webpack_require__("a9fe10793c0169d52fad");

__webpack_require__("9b5edb9e4aa59a63738d");

__webpack_require__("e95a8f090408276a319e");

__webpack_require__("ca133707063c6331a1e8");

__webpack_require__("bbe9733f5bb9385a58e8");

__webpack_require__("0204f718de43de27d598");

__webpack_require__("978b05f10de88acd6622");

__webpack_require__("f6a50cf1c8317ca97318");

__webpack_require__("a0903571e027f4fd235c");

__webpack_require__("25fbbd4b2402f161f45e");

__webpack_require__("35f2b9fa643686058120");

__webpack_require__("6c5f10e2d2d9e77859fa");

__webpack_require__("d9894cb77c84793e0da6");

__webpack_require__("2f984159d6347a933483");

__webpack_require__("b9adf41643b117f0cf7a");

var templates = __webpack_require__("da79f4fd00994f6d96be");

templates.keys().forEach(function (key) {
  templates(key);
});


__webpack_require__("489551a94fce5d644d6b");

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("f3415e2a194fbe09cf3e"));
var app = angular.module('app', ['main_controller', 'include_template', 'tmh.dynamicLocale']);
app.config(['$logProvider', '$provide', '$mdThemingProvider', 'tmhDynamicLocaleProvider', function ($logProvider, $provide, $mdThemingProvider, tmhDynamicLocaleProvider) {
  $logProvider.debugEnabled(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].enableDebug);
  $provide.decorator('$log', function ($delegate) {
    var origInfo = $delegate.info;

    $delegate.info = function () {
      if ($logProvider.debugEnabled()) {
        origInfo.apply(null, arguments);
      }
    };

    return $delegate;
  });
  $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('blue');
  $mdThemingProvider.theme('docs-dark', 'default').primaryPalette('yellow').dark();
  $mdThemingProvider.theme('profile').primaryPalette('blue').accentPalette('amber');
  var whiteMap = $mdThemingProvider.extendPalette('grey', {
    '500': 'fafafa',
    'contrastDefaultColor': 'dark'
  });
  $mdThemingProvider.definePalette('white', whiteMap);
  tmhDynamicLocaleProvider.appendScriptTo(document.getElementsByTagName("head")[0]);
  tmhDynamicLocaleProvider.localeLocationPattern(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].apiData.adminHost + '/build/i18n/angular-locale_{{locale}}.js');
}]);

/***/ }),

/***/ "2f984159d6347a933483":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("6d8089820eedc734c4ea");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config__ = __webpack_require__("5a809b195591bf00d4d5");




var apiData = __WEBPACK_IMPORTED_MODULE_1_config__["a" /* default */].apiData;
var mainController = ['$location', '$cookies', '$routeParams', '$route', '$window', '$log', '$scope', '$rootScope', '$timeout', '$mdSidenav', '$translate', function ($location, $cookies, $routeParams, $route, $window, $log, $scope, $rootScope, $timeout, $mdSidenav, $translate) {
  var options = {};
  var self = this;

  this.initialize = function (options) {};

  this.initialize(options);
}];
var app = angular.module('main_controller', ['ngCookies', 'ngRoute', 'ngResource', 'ngMaterial', 'ngMessages', 'ngSanitize', 'translations']);
app.controller('mainController', mainController);
app.filter('nl2br', function ($sce) {
  return function (msg, is_xhtml) {
    var is_xhtml = is_xhtml || true;
    var breakTag = is_xhtml ? '<br />' : '<br>';
    var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    return $sce.trustAsHtml(msg);
  };
});
app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "/templates/main.tmpl.html"
  });
});

/***/ }),

/***/ "35f2b9fa643686058120":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3bbb3261b3d58cf30e70":
/***/ (function(module, exports) {

var _module_exports = "<div layout-fill ng-view></div>";;
var path = '/templates/index.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "5a809b195591bf00d4d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CONFIG = {
  env: 'dev',
  enableDebug: true,
  apiData: {
    'host': 'https://neurostone.github.io'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),

/***/ "5bd97f591d3aaffd3680":
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__("cfa4d2969ec4798cc507");
var translations = {
	"app.main_menu": "Main menu"
};
var module;
try {
	module = angular.module("translations");
} catch(err) {
	module = angular.module("translations", ["pascalprecht.translate"]);
}
module.config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations("en", translations);
}]);
module.exports = translations;

/***/ }),

/***/ "6c5f10e2d2d9e77859fa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b24471f8638dd639367d":
/***/ (function(module, exports) {

var _module_exports = "    <div layout=\"row\" layout-fill layout-align=\"center center\">\r\n        <img ng-src=\"build/images/logo.gif\">\r\n    </div>\r\n";;
var path = '/templates/main.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "b9adf41643b117f0cf7a":
/***/ (function(module, exports) {

function includeTemplate() {
  return [function () {
    var link = function (scope, elem, attrs) {
      var cache = scope.ngIncludeVariables();
      Object.keys(cache).forEach(function (key) {
        scope[key] = cache[key];
      });
      scope.$watch(function () {
        var val = scope.ngIncludeVariables();

        if (angular.equals(val, cache)) {
          return cache;
        }

        cache = val;
        return val;
      }, function (newValue, oldValue) {
        if (!angular.equals(newValue, oldValue)) {
          Object.keys(newValue).forEach(function (key) {
            scope[key] = newValue[key];
          });
        }
      });
    };

    var classObject = {
      templateUrl: function (elem, attrs) {
        return attrs.ngIncludeTemplate;
      },
      restrict: 'A',
      scope: {
        'ngIncludeVariables': '&'
      },
      link: function (scope, elem, attrs) {
        link(scope, elem, attrs);
      }
    };
    return classObject;
  }];
}

var app = angular.module('include_template', []);
app.directive('ngIncludeTemplate', includeTemplate());

/***/ }),

/***/ "d9894cb77c84793e0da6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "da79f4fd00994f6d96be":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.tmpl.html": "3bbb3261b3d58cf30e70",
	"./main.tmpl.html": "b24471f8638dd639367d"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "da79f4fd00994f6d96be";

/***/ }),

/***/ "ecb209045e0769c18561":
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__("cfa4d2969ec4798cc507");
var translations = {
	"app.main_menu": "huvudmeny"
};
var module;
try {
	module = angular.module("translations");
} catch(err) {
	module = angular.module("translations", ["pascalprecht.translate"]);
}
module.config(["$translateProvider", function($translateProvider) {
	$translateProvider.translations("se", translations);
}]);
module.exports = translations;

/***/ }),

/***/ "f3415e2a194fbe09cf3e":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./locale_en.json": "5bd97f591d3aaffd3680",
	"./locale_se.json": "ecb209045e0769c18561"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "f3415e2a194fbe09cf3e";

/***/ })

},["2f823a6889890ebdbfad"]);