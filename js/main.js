var blueberries = {
  fullName: 'Vaccinium Corymbosum',
  growsOnShrub: true,
  energy: 240,
  carbohydrates: 14.49,
  protein: 0.74
};
console.log(blueberries.fullName);

var grapes = {
  fullName: 'Vitis vinifera',
  growsOnShrub: false,
  energy: 288,
  carbohydrates: 18.1,
  protein: 0.72
};
console.log(grapes.fullName);

var redcurrent = {
  fullName: 'Ribes rubrum',
  growsOnShrub: true,
  energy: 234,
  carbohydrates: 13.8,
  protein:  1.4
};
console.log(redcurrent.fullName);

var writeBerries = function (berries) {
  document.write('<h1>' + berries.fullName + '</h1>');
  
  document.write('<dl>');
  
  document.write('<dt>Grows on Shrubs</dt>');
  document.write('<dd>' + berries.growsOnShrub + '</dd>');
  
  document.write('<dt>Energy</dt>');
  document.write('<dd>' + berries.energy + '</dd>');
  
  document.write('<dt>Carbohydrates</dt>');
  document.write('<dd>' + berries.carbohydrates + '</dd>');
  
  document.write('<dt>Protien</dt>');
  document.write('<dd>' + berries.protein + '</dd>');
  
  document.write('</dl>');
  
};

var allberries = [blueberries, grapes, redcurrent];

allberries.forEach(writeBerries);

// Code above replaces the amount of code below
//(blueberries);
//writeBerries(grapes);
//writeBerries(redcurrent);

