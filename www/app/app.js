angular.module("cupplesApp", ["ionic", "angular-cache"])

.run(function($ionicPlatform,CacheFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    CacheFactory("finderCache", { storageMode: "localStorage" });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

	.state('app.home', {
      url: "/home",
      views: {
        'mainContent': {
          templateUrl: "app/home/home.html"
        }
      }
    })
    .state('cupple', {
      abstract: true,
      url: "/cupple",
      templateUrl: "app/cupple/cupple.html"
    })

    .state('cupple.persona', {
      url: "/persona",
      views: {
        "tab-persona": {
          templateUrl: "app/cupple/persona.html"
        }
      }
    })

    .state('cupple.personb', {
      url: "/personb",
      views: {
        "tab-personb": {
          templateUrl: "app/cupple/personb.html"
        }
      }
    })

    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

    /*.state('app.teams', {
      url: "/teams",
      views: {
        'mainContent': {
          templateUrl: "app/teams/teams.html"
        }
      }
    })

    .state('app.team-detail', {
      url: "/teams/:id",
      views: {
        'mainContent': {
          templateUrl: "app/teams/team-detail.html"
        }
      }
    })

    .state('app.game', {
      url: "/game/:id",
      views: {
        'mainContent': {
          templateUrl: "app/game/game.html"
        }
      }
    })

    .state('app.standings', {
      url: "/standings",
      views: {
        'mainContent': {
          templateUrl: "app/standings/standings.html"
        }
      }
    })

    .state('app.locations', {
      url: "/locations",
      views: {
        'mainContent': {
          templateUrl: "app/locations/locations.html"
        }
      }
    })

    .state('app.rules', {
      url: "/rules",
      views: {
        'mainContent': {
          templateUrl: "app/rules/rules.html",
        }
      }
    })*/;

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});