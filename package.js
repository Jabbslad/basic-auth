Package.describe({
  summary: "Add HTTP Basic Auth support to your application",
  version: "0.2.2",
  git: "https://github.com/Jabbslad/basic-auth.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('webapp', 'server');
  api.add_files("basic-auth.js", 'server');
  api.export(['HttpBasicAuth'], 'server');
});
