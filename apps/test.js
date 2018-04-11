import {isEmpty} from '../common/helper/tool';

module.exports =  (testModule,args)=>{
    let nodeTestModules ;
    try {
        nodeTestModules = require('../learm-example/nodejs/' + testModule);
    }catch (ex){
        console.error(ex);
    }
    nodeTestModules.apply(this,args);

}









