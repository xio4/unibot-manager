const fs = require('fs');
const exec = require('child_process').execSync;
const _ = require('lodash');
const excludeList = [
    /-loader/,
    /-plugin/
];

execTypings = (moduleName, useDt) => exec(`node ./node_modules/typings/dist/bin i ${useDt ? '--global' : ''} --save ${useDt ? 'dt~' : ''}${moduleName}`).toString('utf-8');

fs.readFile('./package.json', 'utf-8', (err, strData) => {
    if (err) {
        console.log(err);
    }

    var data = JSON.parse(strData),
        safeExec = moduleName => {
            if (!_.isEmpty(_.filter(excludeList, exclude => exclude.test(moduleName)))) {
                return;
            }

            try {
                console.log(execTypings(moduleName, true));
            } catch (err) {
                try {
                    console.log(execTypings(moduleName, false));
                } catch (err) {
                }
            }
         };

    console.log('start typings process...');

    _.forEach(data.typings, moduleName => safeExec(moduleName));
//    _.forEach(data.dependencies, (val, moduleName) => safeExec(moduleName));
//    _.forEach(data.devDependencies, (val, moduleName) => safeExec(moduleName));

    console.log('typings process completed');
});
