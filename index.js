function min(a, ...b) {
    if(typeof(a)=== "number"){
        return Math.min(a, ...b)
    }else if(Array.isArray(a)){
        return Math.min(...a,...b.flat(Infinity))
    }else if(typeof(a)=== 'object'){
        let vals = Object.values(a)
        let vals2 = b.map(item => Object.values(item)).flat(Infinity)
        return Math.min(...vals,...vals2)
    }
    console.log(a,b);
}

console.log(
    min(1,2) ,// 1 
    min([1,2]), // 1
    min({a: 1, b: 2}), // 1
    min({a: 1, b: 2}, {a: -11, b: 12}) // -11    
)

function max_name(a,b,c){
    let names = [a,b,c]
    let names_length = [a.length,b.length,c.length]
    return names[names_length.indexOf(Math.max(...names_length))]
}

console.log(
    max_name("Alex","George","Michael")
);