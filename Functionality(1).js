function calculateVolume() {
    const length = document.getElementById('length').value;
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    const unit = document.getElementById('unit').value;

    if (length && height && width && unit) {
        const volume = length * width * height;
        const output = `The Volume of your cube is ${volume} ${unit}`;
        document.getElementById('output').innerText = output;
    } else {
        document.getElementById('output').innerText = 'Please fill in all fields.';
    }
}
