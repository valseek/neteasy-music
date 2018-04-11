// import Buffer from 'buffer';

const testBufferFrom = () => {
    const arr = new Uint16Array(2);

    arr[0] = 5000;
    arr[1] = 4000;

    // 与 `arr` 共享内存
    const buf = Buffer.from(arr.buffer);

    // 输出: <Buffer 88 13 a0 0f>
    console.log(buf);


};


module.exports = _ =>{

    testBufferFrom();




};










































