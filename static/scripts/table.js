async function fetchData() {
    const response = await fetch('https://anatoliiutochkin.github.io/kep_kp_json_source/data.json');
    const feeStructureData = await response.json();
    const feeStructure = feeStructureData.feeStructure;

    const feeStructureTable = document.getElementById('fee_table').querySelector('tbody');
    feeStructure.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.program}</td>
            <td>${item.ageGroup}</td>
            <td>${item.annualTuition}</td>
            <td>${item.registrationFee}</td>
            <td>${item.activityFee}</td>
        `;
        feeStructureTable.appendChild(row);
    });

    const additionalServices = feeStructureData.additionalServices;
    const additionalServicesTable = document.getElementsByClassName("add-services")[0].querySelector('tbody');;
    additionalServices.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.service}</td>
            <td>${item.cost}</td>
        `;
        additionalServicesTable.appendChild(row);
    });
}

fetchData().catch(error => console.error('Error fetching data:', error));