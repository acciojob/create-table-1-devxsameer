function insert_Row() {
    const table = document.getElementById("sampleTable");

    const newRow = table.insertRow(-1); // insert at end

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.appendChild(document.createTextNode("New Cell1"));
    cell2.appendChild(document.createTextNode("New Cell2"));
}