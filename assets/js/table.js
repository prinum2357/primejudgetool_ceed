// addTable
export function addTable(inputText, number, prime) {
    const tableLog = document.getElementById("judgelog-table");

    let row = tableLog.insertRow(0);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);

    cell0.appendChild(document.createTextNode(inputText));
    cell1.appendChild(document.createTextNode(number));

    cell0.classList.add("tablebody-text");
    cell1.classList.add("tablebody-text");

    if(prime) {
        cell2.appendChild(document.createTextNode("Prime"));

    } else {
        cell2.appendChild(document.createTextNode("Not Prime"));

    }
}