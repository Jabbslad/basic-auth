HttpBasicAuth = (function() {
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
        WebApp.connectHandlers.stack.splice(i, 0, {
          route: routes[i],
          handle: WebApp.__basicAuth__(this.callback, this.realm)
        });
      }
    }
  };
  
  return HttpBasicAuth;
})();
