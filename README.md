# basic-auth

A Meteor package of [Connect Basic Auth](http://www.senchalabs.org/connect/basicAuth.html), allowing you to easily Add HTTP Basic Auth support to your application.



## Add Package 

`meteor add basic-auth`

## Usage

### Username and Password

Create new `HttpBasicAuth` instance passing in a username and password then call `protect` method.

    var basicAuth = new HttpBasicAuth("guest", "password");
    basicAuth.protect();

### Authentication Function

Create new `HttpBasicAuth` instance passing in a function (that returns `true` or `false`) then call `protect` method.

    var basicAuth = new HttpBasicAuth(function(username, password) {
        return 'guest' == username & 'password' == password;
    });
    basicAuth.protect();
    
### Protecting Certain Urls

By default, when you call `protect` with no arguments it will protect your entire site. If you want to protect certain routes do as follows:-

	var basicAuth = new HttpBasicAuth("guest", "password");
    basicAuth.protect(['/secretstuff', '/homemovies']);

or you can do this:-

	var basicAuth = new HttpBasicAuth("guest", "password");
    basicAuth.protect(['/homemovies']);
    basicAuth.protect(['/secretstuff']);
    
or this to use different passwords:-

    var basicAuthMovies = new HttpBasicAuth("movies", "password");
    basicAuthMovies(['/homemovies']);
    
    var basicAuthStuff = new HttpBasicAuth("stuff", "password");
    basicAuthStuff.protect(['/secretstuff']);

    
### Other Stuff

#### Realms

	var basicAuth = new HttpBasicAuth("guest", "password", "My Realm");
    basicAuth.protect();

    
