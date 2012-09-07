var HttpBasicAuth = (function() {
  //////////////// Requires /////////////
  var require = __meteor_bootstrap__.require;
  var connect = require('connect');

  var HttpBasicAuth = function(callback, realm) {
    this.callback = callback;
    this.realm = realm;
  }

  HttpBasicAuth.prototype = {
    constructor: HttpBasicAuth,
    protect: function(routes) {
      routes = routes || [''];
      if (!_.isArray(routes))
        throw new Error("'routes' must be an array of route Strings");
      
      // Splice the middleware stack and slip in the auth function
      // so it is called first at desired routes (in specified order)
      for(var i=0; i<routes.length; i++) {
        __meteor_bootstrap__.app.stack.splice(i, 0, {
          route: routes[i],
          handle: connect.basicAuth(this.callback, this.realm)
        });
      }
    }
  };
  
  return HttpBasicAuth;
})();
