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
  $routeProvider.when("/elitserien-95", {
    templateUrl: "/templates/elitserien-95.tmpl.html"
  });
  $routeProvider.when("/elitserien-96", {
    templateUrl: "/templates/elitserien-96.tmpl.html"
  });
  $routeProvider.when("/auto-destruct", {
    templateUrl: "/templates/auto-destruct.tmpl.html"
  });
});

/***/ }),

/***/ "35f2b9fa643686058120":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3bbb3261b3d58cf30e70":
/***/ (function(module, exports) {

var _module_exports = "\r\n<section layout=\"row\" flex layout-fill ng-cloak>\r\n\r\n    <md-sidenav\r\n    class=\"md-sidenav-left\"\r\n    md-component-id=\"left\"\r\n    md-is-locked-open=\"1\"\r\n    md-whiteframe=\"4\">\r\n    \r\n    <div>\r\n        <a ng-href=\"#!/\">\r\n            <img ng-src=\"build/images/logo.gif\" width=\"100%\">\r\n        </a>\r\n    </div>\r\n    \r\n    <md-menu>\r\n        <md-menu-content >\r\n          <md-menu-item>\r\n            <md-button ng-href=\"#!/elitserien-95\"> <span md-menu-align-target>Elitserien 95</span> </md-button>\r\n          </md-menu-item>\r\n          <md-menu-item>\r\n            <md-button ng-href=\"#!/elitserien-96\"> <span md-menu-align-target>Elitserien 96</span> </md-button>\r\n          </md-menu-item>\r\n          <md-menu-item>\r\n            <md-button ng-href=\"#!/auto-destruct\"> <span md-menu-align-target>Auto destruct</span> </md-button>\r\n          </md-menu-item>\r\n        </md-menu-content>\r\n      </md-menu>\r\n\r\n    </md-sidenav>\r\n    \r\n    <md-content flex layout-fill>\r\n    \r\n<div layout-fill ng-view></div>\r\n\r\n</md-content>\r\n\r\n</section>\r\n";;
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

/***/ "7d2ba51ff9a053bf16aa":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Elitserien 96\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291372-elitserien-96-genesis-screenshot-main-menu.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291373-elitserien-96-genesis-screenshot-title-screen.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291374-elitserien-96-genesis-screenshot-team-select.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291375-elitserien-96-genesis-screenshot-roster.png\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291377-elitserien-96-genesis-screenshot-crossing-the-red-line.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291378-elitserien-96-genesis-screenshot-entering-the-zone.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291379-elitserien-96-genesis-screenshot-andersson-scores.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291380-elitserien-96-genesis-screenshot-mal.png\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291381-elitserien-96-genesis-screenshot-instant-replay.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291382-elitserien-96-genesis-screenshot-game-statistics.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291383-elitserien-96-genesis-screenshot-team-statistics.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291384-elitserien-96-genesis-screenshot-creating-a-player.png\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291385-elitserien-96-genesis-screenshot-changing-created-players.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291386-elitserien-96-genesis-screenshot-shootout.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291387-elitserien-96-genesis-screenshot-missed-shootout-shot.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/elitserien-96.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "9168d4e0fc6e063af020":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Auto destruct\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad0f.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad1a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad1b.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad1c.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad2a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad3e.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad04.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad4b.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad5a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad5f.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad6a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad6e.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad08.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad12.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad23.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad29.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad30.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad31.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad34.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad35.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad36.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad39.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad45.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad87.jpg\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/auto-destruct.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "b24471f8638dd639367d":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-fill layout-align=\"center center\">\r\n        <div>\r\n            <a ng-href=\"#!/\">\r\n                <img ng-src=\"build/images/logo.gif\">\r\n            </a>\r\n        </div>\r\n        <div>\r\n            <h2>\r\n            Developer History Resources\r\n            </h2>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <a ng-href=\"#!/elitserien-95\">\r\n                    <img ng-src=\"build/images/elitserien-95/covers/1168021-elit95_3.jpg\" height=\"128\">\r\n                </a>\r\n            </div>\r\n            <div>\r\n                <a ng-href=\"#!/elitserien-96\">\r\n                    <img ng-src=\"build/images/elitserien-96/covers/1167335-elit96.jpg\" height=\"128\">\r\n                </a>\r\n            </div>\r\n            <div>\r\n                <a ng-href=\"#!/auto-destruct\">\r\n                    <img ng-src=\"build/images/auto-destruct/covers/5908-auto-destruct-playstation-front-cover.jpg\" height=\"128\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            Updated in 2021\r\n        </div>\r\n    </div>\r\n\r\n";;
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

/***/ "d17de718191d75ff8b3c":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Elitserien 95\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323487-elitserien-95-genesis-screenshot-title-screen.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323488-elitserien-95-genesis-screenshot-main-menu.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323489-elitserien-95-genesis-screenshot-controller-setup.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323490-elitserien-95-genesis-screenshot-scouting-report-before-a.gif\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323491-elitserien-95-genesis-screenshot-game-menu.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323492-elitserien-95-genesis-screenshot-editing-lines.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323493-elitserien-95-genesis-screenshot-face-off.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323494-elitserien-95-genesis-screenshot-skating-with-the-puck.gif\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323495-elitserien-95-genesis-screenshot-goal.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323496-elitserien-95-genesis-screenshot-heading-towards-the-goal.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323497-elitserien-95-genesis-screenshot-a-player-knocked-down-by.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323498-elitserien-95-genesis-screenshot-replay-mode.gif\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323499-elitserien-95-genesis-screenshot-game-statistics.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323500-elitserien-95-genesis-screenshot-period-statistics.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323501-elitserien-95-genesis-screenshot-individual-player-stats.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323502-elitserien-95-genesis-screenshot-a-run-down-of-the-goals-scored.gif\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";;
var path = '/templates/elitserien-95.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "d9894cb77c84793e0da6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "da79f4fd00994f6d96be":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auto-destruct.tmpl.html": "9168d4e0fc6e063af020",
	"./elitserien-95.tmpl.html": "d17de718191d75ff8b3c",
	"./elitserien-96.tmpl.html": "7d2ba51ff9a053bf16aa",
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