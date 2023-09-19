const add = (a,b) =>{
    return a + b;
}

const sub = (a,b) =>{
    return a - b;
}

const name = 'vinod';

// module.exports = add;
// OR 

// module.exports.add = add;
// module.exports.name = name;
// module.exports.sub = sub;
// OR 

module.exports = {add,name,sub}

