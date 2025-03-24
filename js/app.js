// Get DOM elements
const drinkSize = document.getElementById('drink-size');
const quantity = document.getElementById('quantity');
const abv = document.getElementById('abv');
const alcoholUnits = document.getElementById('alcohol-units');
const unitsFromPassout = document.getElementById('units-from-passout');
const equivShots = document.getElementById('equiv-shots');
const equivWine = document.getElementById('equiv-wine');
const equiv330ml = document.getElementById('equiv-330ml');
const equiv440ml = document.getElementById('equiv-440ml');
const equiv500ml = document.getElementById('equiv-500ml');
const equivPints = document.getElementById('equiv-pints');

// Event listeners for input changes
drinkSize.addEventListener('change', calculate);
quantity.addEventListener('input', calculate);
abv.addEventListener('input', calculate);

// Calculate function
function calculate() {
  const size = parseFloat(drinkSize.value);
  const qty = parseFloat(quantity.value);
  const alcoholPercentage = parseFloat(abv.value);

  if (isNaN(size) || isNaN(qty) || isNaN(alcoholPercentage)) {
    return;
  }

  // Calculate alcohol units
  const totalVolume = size * qty;
  const units = (totalVolume * alcoholPercentage) / 1000;
  alcoholUnits.textContent = units.toFixed(2);

  // Calculate units from blackout
  const passoutUnits = 22 - units;
  unitsFromPassout.textContent = passoutUnits.toFixed(2);

  // Calculate equivalents
  equivShots.textContent = (units / ((25 * 40) / 1000)).toFixed(2);
  equivWine.textContent = (units / ((175 * 13) / 1000)).toFixed(2);
  equiv330ml.textContent = (units / ((330 * 6) / 1000)).toFixed(2);
  equiv440ml.textContent = (units / ((440 * 5) / 1000)).toFixed(2);
  equiv500ml.textContent = (units / ((500 * 5) / 1000)).toFixed(2);
  equivPints.textContent = (units / ((568 * 5) / 1000)).toFixed(2);
}

// Initial calculation
calculate();
