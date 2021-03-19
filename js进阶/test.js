function inherit(father,son){
            son.prototype = Object.create(father.prototype);
            son.prototype.constructor = son;
            son.uber = father.prototype
}

function inheritT(father,son){
    var Temp = function(){};
    Temp.prototype = father.prototype;
    son.prototype = new Temp();
    son.prototype.constructor = son;
    son.uber = father.prototype
}