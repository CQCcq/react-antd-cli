console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
module.exports = {
    dev: process.env.NODE_ENV === 'development',
    prod: process.env.NODE_ENV === 'production',
    current: process.env.NODE_ENV
};
