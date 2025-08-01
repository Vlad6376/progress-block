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
            let numValue = Number(val);
            if (isNaN(numValue)) {
                numValue = 0;
            }
            const totalPathLength = 100.2;
            const clamped = Math.max(0, Math.min(100, numValue));
            const offset = totalPathLength - (clamped * (totalPathLength / 100));
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
        const input = e.target;
        let value = input.value.replace(/[^0-9]/g, '');

        if (Number(value) > 100) {
            value = '100';
        }
        input.value = value;
        myProgressWidget.setValue(value);
    });

    valueInput.addEventListener("blur", (e) => {
        const input = e.target;
        let value = Number(input.value);
        if (isNaN(value) || value < 0) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        }
        input.value = value;
        myProgressWidget.setValue(value);
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
