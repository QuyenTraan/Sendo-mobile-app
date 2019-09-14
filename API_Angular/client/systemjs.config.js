var isPublic = typeof window != "undefined";

(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    '@angular': (isPublic) ? '@angular' : 'node_modules/@angular',
    'rxjs': (isPublic) ? 'rxjs' : 'node_modules/rxjs',
    'ng2-pagination': (isPublic) ? 'ng2-pagination/dist' : 'node_modules/ng2-pagination/dist',
    'ng2-select2': (isPublic) ? 'ng2-select2' : 'node_modules/ng2-select2',
    'ng2-webstorage': (isPublic) ? 'ng2-webstorage' : 'node_modules/ng2-webstorage',
    'lodash': (isPublic) ? 'lodash' : 'node_modules/lodash',
    'ng-spin-kit': (isPublic) ? 'ng-spin-kit/dist' : 'node_modules/ng-spin-kit/dist',
    'angular2-cookie': (isPublic) ? 'angular2-cookie' : 'node_modules/angular2-cookie',
    'sweetalert2': (isPublic) ? 'sweetalert2/dist' : 'node_modules/sweetalert2/dist',
    'angular2-modal': (isPublic) ? 'angular2-modal/bundles' : 'node_modules/angular2-modal/bundles',
    'angular2-modal/plugins/bootstrap': (isPublic) ? 'angular2-modal/plugins/bootstrap' : 'node_modules/angular2-modal/plugins/bootstrap',
    'traceur': (isPublic) ? 'traceur/bin' : 'node_modules/traceur/bin',
    'ng2-select': (isPublic) ? 'ng2-select/bundles' : 'node_modules/ng2-select/bundles',
    'ngx-quill': (isPublic) ? 'ngx-quill/bundles' : 'node_modules/ngx-quill',
    'quill': (isPublic) ? 'quill/dist' : 'node_modules/quill/dist'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {
      main: 'main.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'ng2-pagination': {
      main: 'ng2-pagination.js',
      defaultExtension: 'js'
    },
    'ng2-select2': {
      main: 'ng2-select2.js',
      defaultExtension: 'js'
    },
    'ng2-webstorage': {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    },
    'lodash': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'ng-spin-kit': {
      main: 'spinners.js',
      defaultExtension: 'js'
    },
    'angular2-cookie': {
      main: 'core.js',
      defaultExtension: 'js'
    },
    'sweetalert2': {
      main: 'sweetalert2.min.js',
      defaultExtension: 'js'
    },
    'angular2-modal': {
      main: 'angular2-modal.umd.js',
      defaultExtension: 'js'
    },
    'angular2-modal/plugins/bootstrap': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'traceur': {
      main: 'traceur.js',
      defaultExtension: 'js'
    },
    'ng2-select': {
      main: 'ng2-select.umd.js',
      defaultExtension: 'js'
    },
    'ngx-quill': {
      main: 'ngx-quill.umd.js',
      defaultExtension: 'js',
      format: 'cjs',
      meta: {
        deps: ['quill']
      }
    },
    'quill': {
      main: 'quill.js',
      defaultExtension: 'js',
      format: 'cjs'
    }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'index.js',
      defaultExtension: 'js'
    };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js'
    };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);