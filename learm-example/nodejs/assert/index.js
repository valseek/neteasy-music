import Assert from 'assert'

const testAssert = () => {
    try{
        Assert(false,"this is a failed assert");
    }catch(ex){
        console.error(ex);
    }
};

const testAssertDeepEqual = () => {
    Assert.deepEqual(/b/gi, new Date());
    Assert.deepStrictEqual(1,1);
};

const testAssertDoesNotThrow = () => {
    Assert.doesNotThrow(()=>{
        throw new TypeError("错误");
    },TypeError,"error");
};

const testAssertEqual = () => {
    Assert.equal(1,1);
    Assert.equal(1,2);
};

const testAssertFail = () => {
    Assert.fail("test fail");
};

const testAssertFailEqual = () => {

    Assert.fail(1,3,undefined , "<");

    Assert.fail(1,3,"test fail equal" , "<");

};

const testAssertIfError = () => {

    Assert.ifError(0);

    Assert.ifError(1);

};

module.exports = _=>{
    console.log("\n\n\n test assert \n*****************************************************\n\n");

    // testAssert();

    // testAssertDeepEqual();

    // testAssertDoesNotThrow();

    // testAssertEqual();

    // testAssertFail();

    // testAssertFailEqual();

    // testAssertIfError();






};

