const server = (() => {
    const item = 'server';

    function init() {
        return {
            item
        };
    }

    const getPrivate = () => init();

    return {
        getPrivate
    };
})();

export default server;
