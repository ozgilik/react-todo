const user = {
    name : "Emrah Özgilik",
    email : "here@emrah.me",
    city : "Konya",
    roles : ["admin","customer"],
    getRoles : function () {
        this.roles.forEach((role) => {
            console.log(role);
            console.log(this.name);
        });
    }
}

const funcES5 = function(){
    let total = 0;
    for(let i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    
    return total;
}

console.log(funcES5(1,2,3,4,5,10));

const funcES6 = () => {
    console.log(arguments);
}

funcES6(1,2,3,4,5,10);