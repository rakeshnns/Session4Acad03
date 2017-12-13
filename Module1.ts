//Interface
interface Module1lst{
    name: string;
    Assignment: number;
}

//Function1
function ModuleFn1(myParam: Module1lst){
    console.log(`Example With Module, Assignment Name:${myParam.name} 
    and Assignment number:${myParam.Assignment}.`)    
}

//Function2
function ModuleFn2(){
    console.log("Second function in NameSpace2 has been evoked.");
}

//Exporting all together.
export {Module1lst,ModuleFn1,ModuleFn2};