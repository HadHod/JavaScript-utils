Array.prototype.partition = function (predicate) {
    return this.reduce((result, a) => {
        result[predicate(a) ? 0 : 1].push(a);
        return result;
    }, [[], []]);
};
