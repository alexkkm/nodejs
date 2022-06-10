import util from 'util';

async function fn() {
    return 'hello world';
}

const callbackFunction = util.callbackify(fn);

// if there is any error
callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});

