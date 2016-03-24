const app = (() => {
    const item = 'client';

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

export default app;
