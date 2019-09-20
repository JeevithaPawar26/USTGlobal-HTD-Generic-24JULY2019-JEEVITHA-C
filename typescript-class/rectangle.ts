namespace MatOper{
export namespace rectangle{
   export function area(len:number,brth:number){
        console.log("area:"+len*brth);
    }
   export function peri(len:number,brth:number){
        console.log("area:"+2*(len*brth));
    }
}
}
// command
//tsc --outfile
//it will import all file into js file
