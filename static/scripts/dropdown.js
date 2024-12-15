document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownArrow = dropdownButton?.querySelector('.dropdown-arrow');
    const dropdownOptions = document.querySelector('.dropdown-options');
    const hiddenSelect = document.querySelector('#hidden-select');

    dropdownButton.addEventListener('click', () => {
        const isOpen = dropdownOptions.style.display === 'block';

        dropdownOptions.style.display = isOpen ? 'none' : 'block';

        if (dropdownArrow) {
            dropdownArrow.classList.toggle('open', !isOpen);
        }
    });

    dropdownOptions.addEventListener('click', (event) => {
        const target = event.target;

        if (target.tagName === 'LI') {
            const selectedValue = target.dataset.value;
            const selectedText = target.textContent;

            hiddenSelect.value = selectedValue; 
            dropdownButton.querySelector('span').textContent = selectedText;

            dropdownOptions.style.display = 'none';

            if (dropdownArrow) {
                dropdownArrow.classList.remove('open');
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownOptions.contains(event.target)) {
            dropdownOptions.style.display = 'none';

            if (dropdownArrow) {
                dropdownArrow.classList.remove('open');
            }
        }
    });
});
