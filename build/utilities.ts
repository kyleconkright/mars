const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);
const mars = require(__dirname + './../src/MARS/mars.js');

export const sassLoaderFunctions = {
    'get($keys)': (keys: any) => {
        keys = keys.getValue().split('.');
        let result = mars;
        let i;
        for (i = 0; i < keys.length; i++) {
            result = result[keys[i]];
        }
        result = sassUtils.castToSass(result);
        return result;
    }
}