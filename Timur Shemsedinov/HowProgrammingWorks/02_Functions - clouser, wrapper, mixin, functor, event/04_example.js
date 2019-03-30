// https://www.youtube.com/watch?v=AiHiJL-fvNI&list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0&index=9&t=0s
// самый простой wrapper
'use srtict';

function wrapFunction(fn) {
    console.log('Wrap function: ' + fn.name);
    return (...args) => {
        console.log('Called wrapper for: ' + fn.name);
        console.dir({args});
        const result = fn(...args);
        console.log('Ended wrapper for: ' + fn.name);
        console.dir({result});
        return result;
    };
};

const interfaceName = {
    methodName(par1, par2) {
        console.dir({method: {par1, par2} });
        return [par1, par2];
    }
};

const cloned = wrapFunction(interfaceName.methodName);
cloned('One', 'Two');