async function loadCustomerData() {
    await fetch(`/customers`)
    .then((result) => (result.json()))
    .then((resultJson) => {
        console.log('What Now');
        const table = document.createElement('table');
        table.setAttribute('id', 'customerInfo');

        const tableRow = document.createElement('tr');

        const tableHeadingFirstName = document.createElement('th');
        tableHeadingFirstName.innerHTML ="First Name";
        tableRow.appendChild(tableHeadingFirstName);

        const tableHeadingLastName = document.createElement('th');
        tableHeadingLastName.innerHTML = "Last Name";
        tableRow.appendChild(tableHeadingLastName);

        const tableHeadingState = document.createElement('th');
        tableHeadingState.innerHTML = "State";
        tableRow.appendChild(tableHeadingState);

        table.appendChild(tableRow);
        

        resultJson.forEach((customer) => {
            const customerTableRow = document.createElement('tr')
            
            const customerFirstName = document.createElement('td')
            customerFirstName.innerHTML = customer.customer_first_name;
            
            const customerLastName = document.createElement('td')
            customerLastName.innerHTML = customer.customer_last_name;

            const customerState = document.createElement('td')
            customerState.innerHTML = customer.customer_state;

            customerTableRow.appendChild(customerFirstName)
            customerTableRow.appendChild(customerLastName)
            customerTableRow.appendChild(customerState)
            
            table.appendChild(customerTableRow)

        });

        document.body.appendChild(table);

    })
}

window.onload = loadCustomerData;