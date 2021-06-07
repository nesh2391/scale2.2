// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  client_id: '6t7lkrq2h5ugbf2a2qdcu2sm7s',
  redirectURL: 'http://localhost:4200/callback',
  loginUrl: 'https://simple-scale-app-1.auth.us-east-1.amazoncognito.com/login?' +
    'client_id=6t7lkrq2h5ugbf2a2qdcu2sm7s&' +
    'response_type=code&' +
    'scope=openid+email' +
    '&redirect_uri=http://localhost:4200/callback',
  cognitoTokenURL: 'https://simple-scale-app-1.auth.us-east-1.amazoncognito.com/oauth2/token',
  logout: 'https://simple-scale-app-1.auth.us-east-1.amazoncognito.com/logout?' +
    'client_id=6t7lkrq2h5ugbf2a2qdcu2sm7s&' +
    'response_type=code&' +
    'scope=openid+email' +
    '&redirect_uri=http://localhost:4200/callback',
  // monoServerUrl:'http://ec2-3-239-83-95.compute-1.amazonaws.com:8080/'
  monoServerUrl:'http://localhost:8080'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
