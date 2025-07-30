function createProgressWidget(containerSelector) {
    const progressContainer = document.querySelector(containerSelector);

    if (!progressContainer) {
        console.error(`Контейнер виджета прогресса не найден: ${containerSelector}`);
        return {
            setValue: () => {},
            setAnimated: () => {},
            setHidden: () => {},
        };
    };

    const progressPath = progressContainer.querySelector(".progress");

    if (!progressPath) {
        console.error(`Элемент progress path с классом ".progress" не найден внутри ${containerSelector}`);
        return {
            setValue: () => {},
            setAnimated: () => {},
            setHidden: () => {},
        };
    };
    return {
        setValue(val) {
            const clamped = Math.max(0, Math.min(100, val));
            const offset = 100 - clamped;
            progressPath.style.strokeDashoffset = offset;
        },
        setAnimated(on) {
            progressContainer.classList.toggle("animated", on);
        },
        setHidden(hidden) {
            progressContainer.style.visibility = hidden ? "hidden" : "visible";
        },
    };
};

document.addEventListener("DOMContentLoaded", () => {
    const myProgressWidget = createProgressWidget("#progress-container");
    const valueInput = document.getElementById("value-input");
    const animateToggle = document.getElementById("animate");
    const hideToggle = document.getElementById("hide");

    valueInput.addEventListener("input", (e) => {
        myProgressWidget.setValue(Number(e.target.value));
    });

    animateToggle.addEventListener("change", (e) => {
        myProgressWidget.setAnimated(e.target.checked);
    });

    hideToggle.addEventListener("change", (e) => {
        myProgressWidget.setHidden(e.target.checked);
    });

    myProgressWidget.setValue(Number(valueInput.value));
    myProgressWidget.setAnimated(animateToggle.checked);
    myProgressWidget.setHidden(hideToggle.checked);
    window.myProgressWidget = myProgressWidget; 
});
