function calculateBMR() {
    // Get input values
    const gender = 'male';
    const age = 22;
    const weight = 65;
    const height = 170;

    let bmr;

    // Harris-Benedict Equation for BMR
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Display the result
    document.getElementById('result').textContent = `Your BMR is ${bmr.toFixed(2)} calories/day.`;
}
