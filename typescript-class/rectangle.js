var MatOper;
(function (MatOper) {
    var rectangle;
    (function (rectangle) {
        function area(len, brth) {
            console.log("area:" + len * brth);
        }
        rectangle.area = area;
        function peri(len, brth) {
            console.log("area:" + 2 * (len * brth));
        }
        rectangle.peri = peri;
    })(rectangle = MatOper.rectangle || (MatOper.rectangle = {}));
})(MatOper || (MatOper = {}));
// command
//tsc --outfile
//it will import all file into js file
/// <reference path="./rectangle.ts"/>
MatOper.rectangle.area(2, 3);
