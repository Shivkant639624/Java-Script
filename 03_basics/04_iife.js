//  1. () => definition || 2. () => execution
// to avoid from the polution or variable of global scope 
// semicolon is mendatory after execution brackets of iffi function
(function msg()
{
    // named IIFI
    console.log(`DB with iffi function Connected succesfully`)
})();

( () => {
    console.log(`DB2 with arrow function Connected succesfully`)
})();

( (name) => {
    // IFFI
    console.log(`DB3 with arrow function with a parameter  Connected ${name}`)
})("Shivkant");
