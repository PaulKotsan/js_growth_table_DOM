'use strict';

// Access table
const table = document.querySelector('.field');

// Use this to for simplicity
const cube = document.createElement('td');

// Access each button
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRowButton.addEventListener('click', (e) => {
  const newRow = table.insertRow(-1);

  removeRowButton.disabled = false;

  const columntCount = table.rows[0].cells.length;

  for (let i = 0; i < columntCount; i++) {
    const newCell = newRow.insertCell(0);

    newCell.appendChild(cube);
  }

  if (table.rows.length >= 10) {
    addRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', (e) => {
  table.deleteRow(-1);

  addRowButton.disabled = false;

  if (table.rows.length === 2) {
    removeRowButton.disabled = true;
  }
});

addColumn.addEventListener('click', (e) => {
  for (const row of table.rows) {
    row.insertCell(0);
  }

  removeColumn.disabled = false;

  if (table.rows[0]?.cells.length >= 10) {
    addColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', (e) => {
  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  addColumn.disabled = false;

  if (table.rows[0]?.cells.length === 2) {
    removeColumn.disabled = true;
  }
});
