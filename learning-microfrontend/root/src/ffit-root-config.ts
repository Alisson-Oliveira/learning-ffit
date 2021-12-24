import { registerApplication, start } from "single-spa";

import fakeAPI from './api-local.json';

fakeAPI.applications.forEach(application => {
  registerApplication({
    name: application.name,
    app: () => System.import(application.package),
    activeWhen: application.exact 
      ? (location) => location.pathname === application.activeWhen
      : [application.activeWhen]
  });
});

start({
  urlRerouteOnly: true,
});
