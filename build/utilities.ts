const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);
const mars = require('./../src/MARS/mars');

export const sassFunction = {
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