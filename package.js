Package.describe({
  summary: "Add HTTP Basic Auth support to your application"
});

Package.on_use(function (api) {
  api.add_files("basic-auth.js", 'server');
});
