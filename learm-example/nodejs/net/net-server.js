import Net from 'net';


export const testCreateServer = () => {
    const server = Net.createServer({allowHalfOpen: true, pauseOnConnect: false}, c => {

        console.log("client connect");

        c.on("end", _ => {
            console.log("client disconnected");
        })

        c.write("hello world");

        c.pipe(c);

    });

    server.on("error", err => {
        throw err;
    });

    server.listen(8124, () => {
        console.log("server bound");
    });

};

export const testCreateFileSock = () => {
    const server = Net.createServer({allowHalfOpen: true, pauseOnConnect: false}, c => {

        console.log("client connect");

        c.on("end", _ => {
            console.log("client disconnected");
        });

        c.write("hello world");

        c.pipe(c);


    });

    server.on("error", err => {
        throw err;
    });

    server.listen('/tmp/echo.sock', () => {
        console.log('server file socket bound');
    });

};

export const testCreateNetServer = () => {
    const server = new Net.Server({allowHalfOpen: true, pauseOnConnect: false}, c => {

        console.log("client connect");

        c.on("end", _ => {
            console.log("client disconnected");
        })

        c.write("hello world");

        c.pipe(c);

    });

    server.on("error", err => {
        throw err;
    });

    server.listen('/tmp/echo.sock', () => {
        console.log('server file socket bound');
    });
};


export const testServerEvent = () => {
    const server = Net.createServer(serverClient => {
        console.log("this is a socket");
    });

    server.on("error", err => {

        console.log("this is a error server");

        throw err;
    });

    server.on("close", arg => {
        console.log(arg, 'server close');
    });

    server.on('connection', socket => {
        console.log("this is another socket");
    });

    server.listen({
            port: '44534',
            host: "127.0.0.1",
        },
        _ => {
            console.log(JSON.stringify(server.address()));
            server.close(_ => {
                console.log("in close callback");
            });
        });


};

export const testServerGetConnections = () => {
    // TODO 等学完 child_process.fork() 在做这个

};

export const testServerListenHandle = () => {
    // TODO 等学完 handle 是啥的时候在做

};

export const testServerListeningAndConnection = () => {

    const server = new Net.Server({allowHalfOpen: true, pauseOnConnect: false}, c => {

        console.log("client connect");

        c.on("end", _ => {
            console.log("client disconnected");
        })
        console.log(server.listening);

        c.write("hello world");

        c.pipe(c);

    });

    server.on("error", err => {
        throw err;
    });

    server.maxConnections = 1;
    console.log(server.listening);

    server.listen('/tmp/echo.sock', () => {
        console.log('server file socket bound');
    });
};

export const testServerRef = () => {

    const server = new Net.Server({allowHalfOpen: true, pauseOnConnect: false}, c => {

        console.log("client connect");

        c.on("end", _ => {
            console.log("client disconnected");

            server.unref();

        })
        console.log(server.listening);

        c.write("hello world");

        c.pipe(c);

    });

    server.on("error", err => {
        throw err;
    });

    server.maxConnections = 3;
    console.log(server.listening);

    server.listen('/tmp/echo.sock', () => {
        console.log('server file socket bound');
    });

};





