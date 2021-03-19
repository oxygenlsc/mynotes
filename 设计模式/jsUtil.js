var jsUtil = {
    //利用闭包实现单例模式s
    getSingle: function (func) {
        var result;
        return function () {
            if (!result) {
                result = func.apply(this, arguments);
            }
            return result;
        }
    }
}