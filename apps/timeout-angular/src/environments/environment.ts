// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '0.0.16',
  appDataStore: {
    url: 'http://localhost:3000/api',
    baseProductsURL: '/actions/ViewAjax-Start?PageNumber=0&PageSize=100&SortingAttribute=&ViewType=&TargetPipeline=ViewStandardCatalog-ProductPaging&CategoryName=12&SearchParameter=%26%40QueryTerm%3D*%26ContextCategoryUUID%3D0s8KAQCN_2MAAAFWAOlMRzCy%26OnlineFlag%3D1&CatalogID=COOP&AjaxCall=true',
    apiNameFeedBack: '/feedbacks',
  },
  masterDataStore: {
    url: 'http://localhost:4201/assets/api',
    apiNameMasterData: '/masterdata',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
