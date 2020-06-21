const context = require.context("./",false,/\.js$/);

export default context.keys().filter((item)=>{
    return item !== "./index.js"
}).map((key)=>{
    return context(key);
})