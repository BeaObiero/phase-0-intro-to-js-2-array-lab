let cats = ['Milo', 'Otis', 'Garfield'];


// Functions to append the cats list at the end of the array(destructively)
function destructivelyAppendCat(catName) {
    cats.push(catName);
}
destructivelyAppendCat('Ralph');
//console.log(cats);

//Function to prepend cat at the start of the array
function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}
destructivelyPrependCat('Bob');
//console.log(cats);

//Function to remove last cat (destructively)
function destructivelyRemoveLastCat() {
    const removeLastCat = cats.pop();
}
destructivelyRemoveLastCat();
//console.log(cats);

//function to destructively remove first cat
function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();
//console.log(cats);

//append cat name 'Broom'
function appendCat(name) {
    return cats.concat(name);
    
}
const newCats = appendCat('Broom');
//console.log(newCats);

//prepend cat name 'Arnold'
function prependCat(){
    const newCats = ['Arnold', ...cats];
    return newCats;
}
//call the function
const newCatsArray = prependCat();
//console.log(newCatsArray);
//console.log(cats);

//removing last cat, creating new array and leaving original array unchanghed
function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return newCats;
}
const newCatsArrayz = removeLastCat();
//console.log(newCatsArrayz);
//console.log(cats);

//removing first cat,creating new array and leaving original array unchanged
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats
}
const removedCatsArrays = removeFirstCat();
//console.log(removedCatsArrays);
//console.log(cats);




