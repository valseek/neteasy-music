require('babel-register')

import {isEmpty} from './common/helper/tool'

if(module === require.main){
    let argvs = process.argv.splice(2);
    let runModule = argvs[0];;
    argvs = argvs.length > 1 ? argvs.splice(1) : [];
    if(!isEmpty(runModule)){
        require('./apps/'+runModule)(argvs);
    }

}



