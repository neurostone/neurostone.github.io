webpackJsonp([1],{

/***/ "03fa89991e20a39cb6a6":
/***/ (function(module, exports) {

var _module_exports = "<md-button ng-class=\"{'{{section.icon}}' : true,'active' : section.state}\" ui-sref-active=\"active\" ui-sref=\"{{section.state}}\" \r\n    ng-href=\"{{ section.uri }}\">\r\n    {{section | humanizeDoc}}\r\n</md-button>";;
var path = '/templates/index/menu/menu-link.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "03fe1f2a3cf7c0ca3d06":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            During development of Auto destruct\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Beloved_Cpu's.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Beloved cpu's</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Che_Coding.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Che coding</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Conta_Smedis_Part_II.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Patrik &amp; Smedis</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Johan_Working.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Johan</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/John_Egil_Ulf_Juan.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">John, Egil, Ulf &amp; Juan</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/My_Desk.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Desk</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Patrik_At_His_Cpu.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Patrik</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Robert_Working.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Robert</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Ulf_&_Robert.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Ulf &amp; Robert</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/Andy.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">Andy</span>\r\n            </div>\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/archive/photos/The_Game_In_Development.jpg\" height=\"320\">\r\n                <span class=\"md-caption\">The game in development</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/pages/archive/photos.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "1d5dda03082391ccf555":
/***/ (function(module, exports) {

var menuLinkDirective = ['$log', '$window', '$location', function ($log, $window, $location) {
  return {
    scope: {
      section: '='
    },
    templateUrl: '/templates/index/menu/menu-link.tmpl.html',
    link: function ($scope, $element) {
      var controller = $element.parent().controller();
      var uri = $window.location.pathname + $window.location.search; //			if($scope.section.uri !== undefined) {

      var searchString = $scope.section.uri;

      if (uri.substr(0, searchString.length) === searchString) {
        $scope.section.state = true;
      } //            }


      $scope.focusSection = function () {
        $window.location.href = this.section.uri;
        controller.autoFocusContent = true;
      };
    }
  };
}];
var app = angular.module('menu_link', []);
app.directive('menuLink', menuLinkDirective);

/***/ }),

/***/ "234b2644a875fbeb1ecc":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Auto destruct - Reviews\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/auto-destruct/reviews/ad_play_review_l.jpg\" height=\"480\">\r\n                <span class=\"md-caption\">Play Magazine - January 1998</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/auto-destruct/reviews/ad_playstation_plus_review_l.jpg\" height=\"480\">\r\n                <span class=\"md-caption\">Playstation Plus - December 1997</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/auto-destruct/reviews/ad_playstation_power_review_l.jpg\" height=\"480\">\r\n                <span class=\"md-caption\">Playstation Power - December 1997</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/auto-destruct/reviews/ad_superplay_review_l.jpg\" height=\"480\">\r\n                <span class=\"md-caption\">Superplay - December 1997</span>\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n                <img ng-src=\"build/images/auto-destruct/reviews/ad_total_playstation_review_l.jpg\" height=\"480\">\r\n                <span class=\"md-caption\">Total Playstation - December 1997</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/pages/auto-destruct/reviews.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

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

__webpack_require__("0204f718de43de27d598");

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
app.config(['$logProvider', '$provide', '$mdThemingProvider', 'tmhDynamicLocaleProvider', '$mdIconProvider', '$$mdSvgRegistry', function ($logProvider, $provide, $mdThemingProvider, tmhDynamicLocaleProvider, $mdIconProvider, $$mdSvgRegistry) {
  $logProvider.debugEnabled(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].enableDebug);
  $mdIconProvider.icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);
  $provide.decorator('$log', function ($delegate) {
    var origInfo = $delegate.info;

    $delegate.info = function () {
      if ($logProvider.debugEnabled()) {
        origInfo.apply(null, arguments);
      }
    };

    return $delegate;
  });
  $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('blue'); //	$mdThemingProvider.theme('docs-dark', 'default').primaryPalette('yellow').dark();
  //	$mdThemingProvider.theme('profile').primaryPalette('blue').accentPalette('amber');
  //	var whiteMap = $mdThemingProvider.extendPalette('grey', { '500': 'fafafa', 'contrastDefaultColor': 'dark' });
  //	$mdThemingProvider.definePalette('white', whiteMap);

  tmhDynamicLocaleProvider.appendScriptTo(document.getElementsByTagName("head")[0]);
  tmhDynamicLocaleProvider.localeLocationPattern(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* default */].apiData.adminHost + '/build/i18n/angular-locale_{{locale}}.js');
}]);
app.filter('nospace', function () {
  return function (value) {
    return !value ? '' : value.replace(/ /g, '');
  };
});
app.filter('humanizeDoc', function () {
  return function (doc) {
    if (!doc) return;

    if (doc.type === 'directive') {
      return doc.name.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
      });
    }

    return doc.label || doc.name;
  };
});
/*
app.run(function($rootScope, $window, $anchorScroll) {
	$rootScope.$on("$routeChangeSuccess", function() {
		$window.scrollTo(0,0);
//		$anchorScroll();
	})
});
*/

/***/ }),

/***/ "2f984159d6347a933483":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("6d8089820eedc734c4ea");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config__ = __webpack_require__("5a809b195591bf00d4d5");


__webpack_require__("4418ff57dd2792f37c53");



var apiData = __WEBPACK_IMPORTED_MODULE_1_config__["a" /* default */].apiData;
var mainController = ['$location', '$cookies', '$routeParams', '$route', '$window', '$log', '$scope', '$rootScope', '$timeout', '$mdSidenav', '$mdMedia', '$translate', 'menuFactory', function ($location, $cookies, $routeParams, $route, $window, $log, $scope, $rootScope, $timeout, $mdSidenav, $mdMedia, $translate, menuFactory) {
  var options = {};
  var self = this;
  this.menuData = [{
    "name": "Elitserien 95",
    "uri": null,
    "type": "toggle",
    "pages": [{
      "name": "Screenshots",
      "uri": '#!/elitserien-95/screenshots/',
      "type": "link",
      "pages": []
    }, {
      "name": "Reviews",
      "uri": '#!/elitserien-95/reviews/',
      "type": "link",
      "pages": []
    }]
  }, {
    "name": "Elitserien 96",
    "uri": '#!/elitserien-96/',
    "type": "link",
    "pages": []
  }, {
    "name": "Auto destruct",
    "uri": null,
    "type": "toggle",
    "pages": [{
      "name": "Screenshots",
      "uri": '#!/auto-destruct/screenshots/',
      "type": "link",
      "pages": []
    }, {
      "name": "Reviews",
      "uri": '#!/auto-destruct/reviews/',
      "type": "link",
      "pages": []
    }]
  }, {
    "name": "Archive",
    "uri": '#!/archive/#',
    "type": "toggle",
    "pages": [{
      "name": "Photos",
      "uri": '#!/archive/photos/',
      "type": "link",
      "pages": []
    }]
  }];
  this.menu = new menuFactory({
    menuData: this.menuData,
    $scope: $scope,
    $mdMedia: $mdMedia,
    $mdSidenav: $mdSidenav
  });
}];
var app = angular.module('main_controller', ['ngCookies', 'ngRoute', 'ngResource', 'ngMaterial', 'ngMessages', 'ngSanitize', 'ngMdIcons', 'translations', 'menu_factory']);
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
  $routeProvider.when("/elitserien-95/screenshots", {
    templateUrl: "/templates/pages/elitserien-95/screenshots.tmpl.html"
  });
  $routeProvider.when("/elitserien-95/reviews", {
    templateUrl: "/templates/pages/elitserien-95/reviews.tmpl.html"
  });
  $routeProvider.when("/elitserien-96", {
    templateUrl: "/templates/elitserien-96.tmpl.html"
  });
  $routeProvider.when("/auto-destruct/screenshots", {
    templateUrl: "/templates/pages/auto-destruct/screenshots.tmpl.html"
  });
  $routeProvider.when("/auto-destruct/reviews", {
    templateUrl: "/templates/pages/auto-destruct/reviews.tmpl.html"
  });
  $routeProvider.when("/archive/photos", {
    templateUrl: "/templates/pages/archive/photos.tmpl.html"
  });
});

/***/ }),

/***/ "3299f236f47eb0712e2c":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Elitserien 95 - Screenshots\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323487-elitserien-95-genesis-screenshot-title-screen.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323488-elitserien-95-genesis-screenshot-main-menu.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323489-elitserien-95-genesis-screenshot-controller-setup.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323490-elitserien-95-genesis-screenshot-scouting-report-before-a.gif\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323491-elitserien-95-genesis-screenshot-game-menu.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323492-elitserien-95-genesis-screenshot-editing-lines.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323493-elitserien-95-genesis-screenshot-face-off.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323494-elitserien-95-genesis-screenshot-skating-with-the-puck.gif\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323495-elitserien-95-genesis-screenshot-goal.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323496-elitserien-95-genesis-screenshot-heading-towards-the-goal.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323497-elitserien-95-genesis-screenshot-a-player-knocked-down-by.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323498-elitserien-95-genesis-screenshot-replay-mode.gif\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323499-elitserien-95-genesis-screenshot-game-statistics.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323500-elitserien-95-genesis-screenshot-period-statistics.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323501-elitserien-95-genesis-screenshot-individual-player-stats.gif\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/screenshots/323502-elitserien-95-genesis-screenshot-a-run-down-of-the-goals-scored.gif\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";;
var path = '/templates/pages/elitserien-95/screenshots.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "35f2b9fa643686058120":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3bbb3261b3d58cf30e70":
/***/ (function(module, exports) {

var _module_exports = "<section layout=\"row\" flex layout-fill ng-cloak>\r\n    <md-sidenav class=\"md-sidenav-left\" md-component-id=\"left\" md-is-locked-open=\"1\" md-whiteframe=\"4\">\r\n      <div>\r\n        <a ng-href=\"#!/\">\r\n          <img ng-src=\"build/images/logo.gif\" width=\"100%\">\r\n        </a>\r\n      </div>\r\n    \r\n      <md-content role=\"navigation\">\r\n        <ul class=\"side-menu\">\r\n          <li ng-repeat=\"section in main.menu.menuTree.sections\" class=\"parent-list-item\" ng-class=\"{'parentActive' : main.menu.menuTree.isSectionSelected(section)}\">\r\n            <h2 class=\"menu-heading md-subhead\" ng-if=\"section.type === 'heading'\" id=\"heading_{{ section.name | nospace }}\">\r\n              {{section.name}}\r\n            </h2>\r\n            <menu-link section=\"section\" ng-if=\"section.type === 'link'\"></menu-link>\r\n            <menu-toggle section=\"section\" ng-if=\"section.type === 'toggle'\"></menu-toggle>\r\n          </li>\r\n        </ul>\r\n      </md-content>\r\n      \r\n    </md-sidenav>\r\n    \r\n    <md-content flex layout-fill layout-align=\"center center\">\r\n      <div class=\"ng-view\"></div>\r\n\r\n      <div layout=\"row\" flex=\"noshrink\" layout-align=\"center center\">\r\n        <div id=\"license-footer\" flex>\r\n          Updated in 2021\r\n        </div>\r\n      </div>\r\n\r\n    </md-content>\r\n\r\n</section>\r\n";;
var path = '/templates/index.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "4418ff57dd2792f37c53":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d17e930107831ace9aa9");

var menuFactory = ['$log', '$timeout', 'menuTreeFactory', function ($log, $timeout, menuTreeFactory) {
  var menuFactoryClass = function (options) {
    var self = this;
    this.$scope = options.$scope;
    this.$mdMedia = options.$mdMedia;
    this.$mdSidenav = options.$mdSidenav;
    this.options = options;
    this.menuTree = new menuTreeFactory(options);
    this.menuData = options.menuData;
    this.menuState = true;

    this.openLeft = function () {
      if (this.menuState && this.$mdMedia('gt-md')) {
        return true;
      }

      return false;
    };

    this.buildDelayedToggler = function (navID) {
      return debounce(function () {
        if (self.openLeft()) {
          self.menuState = false;
        } else {
          self.menuState = true;
        }

        if (self.$mdMedia('gt-md')) {
          return;
        }

        self.$mdSidenav(navID).toggle().then(function () {});
      }, 200);
    };

    this.toggleLeft = this.buildDelayedToggler('left');

    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = self.$scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function () {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
  };

  return menuFactoryClass;
}];
var app = angular.module('menu_factory', ['menu_tree_factory']);
app.factory('menuFactory', menuFactory);

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

/***/ "5d9e28a05db681626aab":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Elitserien 95 - Reviews\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-95/reviews/tvb_1.jpg\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/pages/elitserien-95/reviews.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "6c5f10e2d2d9e77859fa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6e2fefd7ab31d1f95194":
/***/ (function(module, exports) {

var _module_exports = "<md-content role=\"navigation\">\r\n    <ul class=\"side-menu\">\r\n      <li ng-repeat=\"section in main.menu.menuTree.sections\" class=\"parent-list-item\" ng-class=\"{'parentActive' : main.menu.menuTree.isSectionSelected(section)}\">\r\n        <h2 class=\"menu-heading md-subhead\" ng-if=\"section.type === 'heading'\" id=\"heading_{{ section.name | nospace }}\">\r\n          {{section.name}}\r\n        </h2>\r\n        <menu-link section=\"section\" ng-if=\"section.type === 'link'\"></menu-link>\r\n        <menu-toggle section=\"section\" ng-if=\"section.type === 'toggle'\"></menu-toggle>\r\n      </li>\r\n    </ul>\r\n  </md-content>";;
var path = '/templates/index/menu.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "7c3b4c7bf7a83b89a9fa":
/***/ (function(module, exports) {

var app = angular.module('menu_toggle', []);
app.directive('menuToggle', ['$timeout', function ($timeout) {
  return {
    scope: {
      section: '='
    },
    templateUrl: '/templates/index/menu/menu-toggle.tmpl.html',
    link: function ($scope, $element) {
      var controller = $element.parent().controller();

      $scope.isOpen = function () {
        return controller.menu.menuTree.isOpen($scope.section);
      };

      $scope.toggle = function () {
        controller.menu.menuTree.toggleOpen($scope.section);
      };

      var parentNode = $element[0].parentNode.parentNode.parentNode;

      if (parentNode.classList.contains('parent-list-item')) {
        var heading = parentNode.querySelector('h2');
        $element[0].firstChild.setAttribute('aria-describedby', heading.id);
      }
    }
  };
}]);

/***/ }),

/***/ "7d2ba51ff9a053bf16aa":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Elitserien 96\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291372-elitserien-96-genesis-screenshot-main-menu.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291373-elitserien-96-genesis-screenshot-title-screen.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291374-elitserien-96-genesis-screenshot-team-select.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291375-elitserien-96-genesis-screenshot-roster.png\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291377-elitserien-96-genesis-screenshot-crossing-the-red-line.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291378-elitserien-96-genesis-screenshot-entering-the-zone.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291379-elitserien-96-genesis-screenshot-andersson-scores.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291380-elitserien-96-genesis-screenshot-mal.png\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291381-elitserien-96-genesis-screenshot-instant-replay.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291382-elitserien-96-genesis-screenshot-game-statistics.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291383-elitserien-96-genesis-screenshot-team-statistics.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291384-elitserien-96-genesis-screenshot-creating-a-player.png\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291385-elitserien-96-genesis-screenshot-changing-created-players.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291386-elitserien-96-genesis-screenshot-shootout.png\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/elitserien-96/screenshots/291387-elitserien-96-genesis-screenshot-missed-shootout-shot.png\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/elitserien-96.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "86d5740ec05b2c292b43":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <h1>\r\n            Auto destruct - Screenshots\r\n            </h1>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad0f.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad1a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad1b.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad1c.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad2a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad3e.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad04.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad4b.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad5a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad5f.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad6a.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad6e.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad08.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad12.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad23.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad29.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad30.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad31.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad34.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad35.jpg\">\r\n            </div>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad36.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad39.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad45.jpg\">\r\n            </div>\r\n            <div>\r\n                <img ng-src=\"build/images/auto-destruct/ad87.jpg\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n";;
var path = '/templates/pages/auto-destruct/screenshots.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "b24471f8638dd639367d":
/***/ (function(module, exports) {

var _module_exports = "\r\n    <div layout=\"column\" layout-fill layout-padding layout-align=\"center center\">\r\n        <div>\r\n            <a ng-href=\"#!/\">\r\n                <img ng-src=\"build/images/logo.gif\">\r\n            </a>\r\n        </div>\r\n        <div>\r\n            <h2>\r\n            Developer History Resources\r\n            </h2>\r\n        </div>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <div>\r\n                <a ng-href=\"#!/elitserien-95/screenshots\">\r\n                    <img ng-src=\"build/images/elitserien-95/covers/1168021-elit95_3.jpg\" height=\"128\">\r\n                </a>\r\n            </div>\r\n            <div>\r\n                <a ng-href=\"#!/elitserien-96\">\r\n                    <img ng-src=\"build/images/elitserien-96/covers/1167335-elit96.jpg\" height=\"128\">\r\n                </a>\r\n            </div>\r\n            <div>\r\n                <a ng-href=\"#!/auto-destruct/screenshots\">\r\n                    <img ng-src=\"build/images/auto-destruct/covers/5908-auto-destruct-playstation-front-cover.jpg\" height=\"128\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";;
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

/***/ "bbc9b4fbfecf7b47f1bd":
/***/ (function(module, exports) {

var _module_exports = "<md-button class=\"md-button-toggle\" ng-class=\"{'toggled' : isOpen()}\" ng-click=\"toggle()\" aria-controls=\"docs-menu-{{section.name | nospace}}\" flex layout=\"row\" aria-expanded=\"{{isOpen()}}\">\r\n  <div layout=\"row\" flex>\r\n    <span>{{section.name}}</span>\r\n    <span class=\"flex\"></span>\r\n    <span class=\"md-toggle-icon\" aria-hidden=\"true\" ng-class=\"{'toggled' : isOpen()}\">\r\n    <md-icon md-svg-icon=\"md-toggle-arrow\" aria-label=\"md-toggle-arrow\" ></md-icon>\r\n  </span>\r\n</div>\r\n</md-button>\r\n  <ul ng-show=\"isOpen()\" id=\"docs-menu-{{section.name | nospace}}\" class=\"menu-toggle-list\">\r\n    <li ng-repeat=\"page in section.pages\">\r\n      <menu-link section=\"page\"></menu-link>\r\n    </li>\r\n  </ul>";;
var path = '/templates/index/menu/menu-toggle.tmpl.html';
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, _module_exports) }]);
module.exports = path;

/***/ }),

/***/ "d17e930107831ace9aa9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7c3b4c7bf7a83b89a9fa");

__webpack_require__("1d5dda03082391ccf555");

var menuTreeFactory = ['$log', '$window', '$timeout', function ($log, $window, $timeout) {
  var menuTreeFactoryClass = function (options) {
    var self = this;
    this.$scope = options.$scope;
    this.$mdMedia = options.$mdMedia;
    this.$mdSidenav = options.$mdSidenav;
    this.menuData = options.menuData;
    this.sections = null;
    this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    this.uri = $window.location.pathname + $window.location.search + $window.location.hash;

    this.initialize = function () {
      this.openedSection = null;
      this.sections = this.menuData;
    };

    this.matchSection = function (section) {
      if (section.uri !== undefined) {
        var searchString = section.uri;

        if (this.uri.substr(0, searchString.length) === searchString) {
          return true;
        }
      }

      return false;
    };

    this.toggleSelectSection = function (section) {
      self.openedSection = self.openedSection === section ? null : section;
    };

    this.isSectionSelected = function (section) {
      return self.openedSection === section;
    };

    this.selectPage = function (section, page) {
      page && page.url && $location.path(page.url);
      self.currentSection = section;
      self.currentPage = page;
    };

    this.isOpen = function (section) {
      return this.menu.isSectionSelected(section);
    };

    this.toggleOpen = function (section) {
      this.menu.toggleSelectSection(section);
    };

    this.isOpen = this.isOpen;
    this.toggleOpen = this.toggleOpen;
    this.autoFocusContent = false;
    this.menu = this;
    this.initialize();
  };

  return menuTreeFactoryClass;
}];
var app = angular.module('menu_tree_factory', ['menu_toggle', 'menu_link']);
app.factory('menuTreeFactory', menuTreeFactory);

/***/ }),

/***/ "d9894cb77c84793e0da6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "da79f4fd00994f6d96be":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./elitserien-96.tmpl.html": "7d2ba51ff9a053bf16aa",
	"./index.tmpl.html": "3bbb3261b3d58cf30e70",
	"./index/menu.tmpl.html": "6e2fefd7ab31d1f95194",
	"./index/menu/menu-link.tmpl.html": "03fa89991e20a39cb6a6",
	"./index/menu/menu-toggle.tmpl.html": "bbc9b4fbfecf7b47f1bd",
	"./main.tmpl.html": "b24471f8638dd639367d",
	"./pages/archive/photos.tmpl.html": "03fe1f2a3cf7c0ca3d06",
	"./pages/auto-destruct/reviews.tmpl.html": "234b2644a875fbeb1ecc",
	"./pages/auto-destruct/screenshots.tmpl.html": "86d5740ec05b2c292b43",
	"./pages/elitserien-95/reviews.tmpl.html": "5d9e28a05db681626aab",
	"./pages/elitserien-95/screenshots.tmpl.html": "3299f236f47eb0712e2c"
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