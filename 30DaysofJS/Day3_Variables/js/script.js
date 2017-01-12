const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';  // Grab the "px" to add it as a suffix for spacing and blur, attach '' for color
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);  
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));