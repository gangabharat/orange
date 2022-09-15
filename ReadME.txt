Step 1:
angular.json add styles for

  "styles":    "./node_modules/ngx-toastr/toastr.css",

step 2:
package.json

 "@ngrx/store": "^12.5.1",
 "lodash": "^4.17.21",
 "ngx-toastr": "^14.2.1",

step 3: run following command
npm i

step 4: appsettings.json  change to false
 "UseInMemoryDatabase": false,