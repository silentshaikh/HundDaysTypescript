type Circle = {
    type:'circle',
    radius:number
};
type Rectangular = {
    type:'rectangular',
    height:number,
    width:number,
}
type ShapeShif = Circle | Rectangular;
const findType = (shape:ShapeShif) => {
    if(shape.type === 'circle'){
        console.log(`The Radius of Circle is ${shape.radius} radius.`)
    }else if(shape.type === 'rectangular'){
        console.log(`The height of Rectangular is ${shape.height} and width is ${shape.width}.`)
    }else{
        console.log('This type is unavailable.')
    }
}
let typeCircle:Circle = {
    type:'circle',
    radius:10
} 
let typeRectangular:Rectangular = {
    type:'rectangular',
    height:10,
    width:5,
}
findType(typeCircle);
findType(typeRectangular);