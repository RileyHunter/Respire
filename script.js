const steps = [
    {
        title: "IN",
        primary: "Gentle breath in",
        secondary: "Breathe slowly in through your nose, deep into your stomach",
        count: 8
    },
    {
        title: "OUT",
        primary: "Gentle breath out",
        secondary: "Let your breath escape through pursed lips",
        count: 8
    },
    {
        title: "HOLD",
        primary: "Hold your breath out",
        secondary: "Stay still, be quiet",
        count: 8
    },
]

let currentIndex = 0;
let currentCount = 0;

let getStarted = () => {
    let startButton = document.getElementById("startButton");
    let primary = document.createElement("div");
    let secondary = document.createElement("div");
    let counter = document.createElement("div");
    primary.classList.add("primary");
    secondary.classList.add("secondary");
    counter.classList.add("counter");
    document.body.removeChild(startButton);
    document.body.appendChild(primary);
    document.body.appendChild(secondary);
    document.body.appendChild(counter);
    let currentStep = steps[currentIndex];
    let next = () => {
        currentCount++;
        if (currentCount > currentStep.count) {
            currentCount = 1;
            currentIndex++;
            currentIndex = currentIndex % steps.length;
            currentStep = steps[currentIndex];
        }
        primary.innerHTML = currentStep.primary;
        secondary.innerHTML = currentStep.secondary;
        counter.innerHTML = currentCount;
        document.title = currentStep.title + '.'.repeat(currentCount);
        setTimeout(() => next(), 1000);
    }
    next();
}