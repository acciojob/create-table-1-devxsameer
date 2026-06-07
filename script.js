function insert_Row() {
    const table = document.getElementById("sampleTable");

    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = "New Cell1";

    const cell2 = document.createElement("td");
    cell2.textContent = "New Cell2";

    row.appendChild(cell1);
    row.appendChild(cell2);

    table.insertBefore(row, table.firstElementChild);
}