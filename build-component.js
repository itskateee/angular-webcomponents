const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/angular-webcomponents/runtime-es2015.js',
        './dist/angular-webcomponents/polyfills-es2015.js',
        './dist/angular-webcomponents/polyfills-es5.js',
        './dist/angular-webcomponents/scripts.js',
        './dist/angular-webcomponents/main-es2015.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/custom-component.js');
}
build();