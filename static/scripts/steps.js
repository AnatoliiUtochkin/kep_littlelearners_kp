async function fetchSteps() {
    const response = await fetch('https://anatoliiutochkin.github.io/kep_kp_json_source/data_steps.json');
    const data = await response.json();
    const steps = data.steps;

    const stepsContainer = document.getElementById('steps-container');
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.classList.add('step');

        stepElement.innerHTML = `
            <div class="number">${String(index + 1).padStart(2, '0')}</div>
            <div class="card">
                <div class="card-title">${step.title}</div>
                <div class="card-description">${step.description}</div>
            </div>
         `;

        stepsContainer.appendChild(stepElement);
    });
}

fetchSteps();