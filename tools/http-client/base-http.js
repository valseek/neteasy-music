import HTTP from 'http';

const testNewAgent = () => {
    const keepAliveAgent = new HTTP.Agent({keepAlive:true});

};

const testCreateConnection = () =>{
    const keepAliveAgent = new HTTP.Agent({keepAlive:true});
    keepAliveAgent.createConnection({
        port:80,
        host:"www.baidu.com",
    },res=>{
        console.log(res);
    });
};

export const testAgent = () => {

    testCreateConnection();

};










