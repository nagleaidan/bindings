const BOOTSIZES = Object.freeze({
  '<=230': [0, 230],
  '231-250': [231, 250],
  '251-270': [251, 270],
  '271-290': [271, 290],
  '291-310': [291, 310],
  '311-330': [311, 330],
  '331-350': [331, 250],
  '>=351': [351, 999],
});
const DIN = Object.freeze([
  {
    code: '-',
    minWeight: null,
    maxWeight: null,
    minHeight: null,
    maxHeight: null,
    twist: 5,
    lean: 18,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: null,
    [BOOTSIZES['271-290']]: null,
    [BOOTSIZES['291-310']]: null,
    [BOOTSIZES['311-330']]: null,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'A',
    minWeight: 22,
    maxWeight: 29,
    minHeight: null,
    maxHeight: null,
    twist: 8,
    lean: 29,
    [BOOTSIZES['<=230']]: 0.75,
    [BOOTSIZES['231-250']]: 0.75,
    [BOOTSIZES['251-270']]: 0.75,
    [BOOTSIZES['271-290']]: null,
    [BOOTSIZES['291-310']]: null,
    [BOOTSIZES['311-330']]: null,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'B',
    minWeight: 30,
    maxWeight: 38,
    minHeight: null,
    maxHeight: null,
    twist: 11,
    lean: 40,
    [BOOTSIZES['<=230']]: 1,
    [BOOTSIZES['231-250']]: 0.75,
    [BOOTSIZES['251-270']]: 0.75,
    [BOOTSIZES['271-290']]: 0.75,
    [BOOTSIZES['291-310']]: null,
    [BOOTSIZES['311-330']]: null,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'C',
    minWeight: 39,
    maxWeight: 47,
    minHeight: null,
    maxHeight: null,
    twist: 14,
    lean: 52,
    [BOOTSIZES['<=230']]: 1.5,
    [BOOTSIZES['231-250']]: 1.25,
    [BOOTSIZES['251-270']]: 1.25,
    [BOOTSIZES['271-290']]: 1,
    [BOOTSIZES['291-310']]: null,
    [BOOTSIZES['311-330']]: null,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'D',
    minWeight: 48,
    maxWeight: 56,
    minHeight: null,
    maxHeight: null,
    twist: 17,
    lean: 64,
    [BOOTSIZES['<=230']]: 2,
    [BOOTSIZES['231-250']]: 1.75,
    [BOOTSIZES['251-270']]: 1.5,
    [BOOTSIZES['271-290']]: 1.5,
    [BOOTSIZES['291-310']]: 1.25,
    [BOOTSIZES['311-330']]: null,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'E',
    minWeight: 57,
    maxWeight: 66,
    minHeight: null,
    maxHeight: null,
    twist: 20,
    lean: 75,
    [BOOTSIZES['<=230']]: 2.5,
    [BOOTSIZES['231-250']]: 2.25,
    [BOOTSIZES['251-270']]: 2,
    [BOOTSIZES['271-290']]: 1.75,
    [BOOTSIZES['291-310']]: 1.5,
    [BOOTSIZES['311-330']]: 1.5,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'F',
    minWeight: 67,
    maxWeight: 78,
    minHeight: null,
    maxHeight: null,
    twist: 23,
    lean: 87,
    [BOOTSIZES['<=230']]: 3,
    [BOOTSIZES['231-250']]: 2.75,
    [BOOTSIZES['251-270']]: 2.5,
    [BOOTSIZES['271-290']]: 2.25,
    [BOOTSIZES['291-310']]: 2,
    [BOOTSIZES['311-330']]: 1.75,
    [BOOTSIZES['331-350']]: 1.75,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'G',
    minWeight: 79,
    maxWeight: 91,
    minHeight: null,
    maxHeight: null,
    twist: 27,
    lean: 102,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: 3.5,
    [BOOTSIZES['251-270']]: 3,
    [BOOTSIZES['271-290']]: 2.75,
    [BOOTSIZES['291-310']]: 2.5,
    [BOOTSIZES['311-330']]: 2.25,
    [BOOTSIZES['331-350']]: 2,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'H',
    minWeight: 92,
    maxWeight: 107,
    minHeight: 0,
    maxHeight: 58,
    twist: 31,
    lean: 120,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: 3.5,
    [BOOTSIZES['271-290']]: 3,
    [BOOTSIZES['291-310']]: 3,
    [BOOTSIZES['311-330']]: 2.75,
    [BOOTSIZES['331-350']]: 2.5,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'I',
    minWeight: 108,
    maxWeight: 125,
    minHeight: 59,
    maxHeight: 61,
    twist: 37,
    lean: 141,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: 4.5,
    [BOOTSIZES['271-290']]: 4,
    [BOOTSIZES['291-310']]: 3.5,
    [BOOTSIZES['311-330']]: 3.5,
    [BOOTSIZES['331-350']]: 3,
    [BOOTSIZES['>=351']]: null,
  },
  {
    code: 'J',
    minWeight: 126,
    maxWeight: 147,
    minHeight: 62,
    maxHeight: 65,
    twist: 43,
    lean: 165,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: 5.5,
    [BOOTSIZES['271-290']]: 5,
    [BOOTSIZES['291-310']]: 4.5,
    [BOOTSIZES['311-330']]: 4,
    [BOOTSIZES['331-350']]: 3.5,
    [BOOTSIZES['>=351']]: 3,
  },
  {
    code: 'K',
    minWeight: 148,
    maxWeight: 174,
    minHeight: 66,
    maxHeight: 70,
    twist: 50,
    lean: 194,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: 6.5,
    [BOOTSIZES['271-290']]: 6,
    [BOOTSIZES['291-310']]: 5.5,
    [BOOTSIZES['311-330']]: 5,
    [BOOTSIZES['331-350']]: 4.5,
    [BOOTSIZES['>=351']]: 4,
  },
  {
    code: 'L',
    minWeight: 175,
    maxWeight: 209,
    minHeight: 71,
    maxHeight: 76,
    twist: 58,
    lean: 229,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: 7.5,
    [BOOTSIZES['271-290']]: 7,
    [BOOTSIZES['291-310']]: 6.5,
    [BOOTSIZES['311-330']]: 6,
    [BOOTSIZES['331-350']]: 5.5,
    [BOOTSIZES['>=351']]: 5,
  },
  {
    code: 'M',
    minWeight: 210,
    maxWeight: 99,
    minHeight: 77,
    maxHeight: 99,
    twist: 67,
    lean: 271,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: null,
    [BOOTSIZES['271-290']]: 8.5,
    [BOOTSIZES['291-310']]: 8,
    [BOOTSIZES['311-330']]: 7,
    [BOOTSIZES['331-350']]: 6.5,
    [BOOTSIZES['>=351']]: 6,
  },
  {
    code: 'N',
    minWeight: null,
    maxWeight: null,
    minHeight: null,
    maxHeight: null,
    twist: 78,
    lean: 320,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: null,
    [BOOTSIZES['271-290']]: 10,
    [BOOTSIZES['291-310']]: 9.5,
    [BOOTSIZES['311-330']]: 8.5,
    [BOOTSIZES['331-350']]: 8,
    [BOOTSIZES['>=351']]: 7.5,
  },
  {
    code: 'O',
    minWeight: null,
    maxWeight: null,
    minHeight: null,
    maxHeight: null,
    twist: 91,
    lean: 380,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: null,
    [BOOTSIZES['271-290']]: 11.5,
    [BOOTSIZES['291-310']]: 11,
    [BOOTSIZES['311-330']]: 10,
    [BOOTSIZES['331-350']]: 9.5,
    [BOOTSIZES['>=351']]: 9,
  },
  {
    code: 'P',
    minWeight: null,
    maxWeight: null,
    minHeight: null,
    maxHeight: null,
    twist: 105,
    lean: 452,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: null,
    [BOOTSIZES['271-290']]: null,
    [BOOTSIZES['291-310']]: null,
    [BOOTSIZES['311-330']]: 12,
    [BOOTSIZES['331-350']]: 11,
    [BOOTSIZES['>=351']]: 10.5,
  },
  {
    code: '-',
    minWeight: null,
    maxWeight: null,
    minHeight: null,
    maxHeight: null,
    twist: 121,
    lean: 520,
    [BOOTSIZES['<=230']]: null,
    [BOOTSIZES['231-250']]: null,
    [BOOTSIZES['251-270']]: null,
    [BOOTSIZES['271-290']]: null,
    [BOOTSIZES['291-310']]: null,
    [BOOTSIZES['311-330']]: null,
    [BOOTSIZES['331-350']]: null,
    [BOOTSIZES['>=351']]: null,
  },
]);

document.addEventListener('DOMContentLoaded', () => {
  const ageInput = document.getElementById('age');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const bootLengthInput = document.getElementById('bootLength');
  const skierTypeSelect = document.getElementById('skierType');
  const submitButton = document.getElementById('submit');

  const fields = [
    ageInput,
    heightInput,
    weightInput,
    bootLengthInput,
    skierTypeSelect,
  ];
  fields.forEach(field => {
    field.addEventListener(
      'keyup',
      () => (submitButton.disabled = !fields.every(field => field.value))
    );
  });

  document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    calculateDIN({
      age: ageInput.value,
      height: heightInput.value,
      weight: weightInput.value,
      bootLength: bootLengthInput.value,
      skierType: skierTypeSelect.value,
    });
  });
});

function calculateDIN(data) {
  console.log(data);
  let index = DIN.findIndex(
    row =>
      (row.minHeight <= data.height && data.height <= row.maxHeight) ||
      (row.minWeight <= data.weight && data.weight <= row.maxWeight)
  );
  console.log('initial', index, DIN[index]);
  index += parseInt(data.skierType);
  console.log('skierType', index, DIN[index]);
  if (data.age < 10 || data.age > 49) {
    console.log('too young');
    index -= 1;
  }
  console.log('age', index, DIN[index]);

  const skierType = DIN[index];
  const minType = DIN[index - 1];
  const maxType = DIN[index + 1];

  const sizeCategory = Object.entries(BOOTSIZES).find(
    size => size[1][0] <= data.bootLength && data.bootLength <= size[1][1]
  )[1];
  console.log(sizeCategory);

  document.getElementById('skierTypeValue').textContent = skierType.code
    ? skierType.code
    : 'error';
  document.getElementById('dinValue').textContent = skierType[sizeCategory]
    ? skierType[sizeCategory]
    : 'error';
  document.getElementById('minTwistValue').textContent = minType.twist
    ? minType.twist
    : 'error';
  document.getElementById('minLeanValue').textContent = minType.lean
    ? minType.lean
    : 'error';
  document.getElementById('midTwistValue').textContent = skierType.twist
    ? skierType.twist
    : 'error';
  document.getElementById('midLeanValue').textContent = skierType.lean
    ? skierType.lean
    : 'error';
  document.getElementById('maxTwistValue').textContent = maxType.twist
    ? maxType.twist
    : 'error';
  document.getElementById('maxLeanValue').textContent = maxType.lean
    ? maxType.lean
    : 'error';
}
