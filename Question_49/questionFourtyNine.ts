console.log('Original Function');
function calculateArea(height: number, width: number) {
  console.log(`Area: ${height * width}`);
}
calculateArea(3, 5);
console.log('Refactor into a Arrow Function');   
const calculateArea2 = (height: number, width: number): void =>{
  console.log(`Area: ${height * width}`);
}
    
calculateArea2(3, 5);
