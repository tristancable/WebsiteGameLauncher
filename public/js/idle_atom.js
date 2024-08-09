// const hydrogen_title = document.getElementById('hydrogen_title');
// const hydrogen_weight = document.getElementById('hydrogen_weight');
// const hydrogen_tick_time = document.getElementById('hydrogen_tick_time');
// const hydrogen_tick_time_button = document.getElementById('hydrogen_tick_time_button');
// const hydrogen_tick_time_price = document.getElementById('hydrogen_tick_time_price');
// const hydrogen_isotope_button = document.getElementById('hydrogen_isotope_button');
// const hydrogen_isotope_price = document.getElementById('hydrogen_isotope_price');
// const hydrogen_next_element_button = document.getElementById('hydrogen_next_element_button');
// const hydrogen_next_element_price = document.getElementById('hydrogen_next_element_price');
// let hydrogenTickTime = 5000;
// let hydrogenWeight = 1;
// let hydrogenTickTimePrice = 1
// let hydrogenIsotopePrice = 10;
// let hydrogenNextElementPrice = 100;
// let hydrogenIsotopes = ['Hydrogen-1 (Protium)', 'Hydrogen-2 (Deuterium)', 'Hydrogen-3 (Tritium)', 'Hydrogen-4', 'Hydrogen-5', 'Hydrogen-6', 'Hydrogen-7'];
// let currentHydrogenIsotope = 0;
// let hydrogenNextUnlocked = false;
// window.addEventListener('load', () => {
//     setInterval(() => {atomicWeight += hydrogenWeight;}, hydrogenTickTime);
//     setInterval(() => {
//         atomic_weight.innerText = `Atomic Weight: ${atomicWeight}`;
//         if (atomicWeight >= hydrogenTickTimePrice && hydrogenTickTime >= 1) hydrogen_tick_time_button.disabled = false;
//         else hydrogen_tick_time_button.disabled = true;
//         if (atomicWeight >= hydrogenIsotopePrice && currentHydrogenIsotope < hydrogenIsotopes.length - 1) hydrogen_isotope_button.disabled = false;
//         else hydrogen_isotope_button.disabled = true;
//         if (atomicWeight >= hydrogenNextElementPrice && hydrogenNextUnlocked == false) hydrogen_next_element_button.disabled = false;
//         else hydrogen_next_element_button.disabled = true;
//         if (hydrogenNextUnlocked) {
//             if (atomicWeight >= heliumTickTimePrice && heliumTickTime >= 1) helium_tick_time_button.disabled = false;
//             else helium_tick_time_button.disabled = true;
//             if (atomicWeight >= heliumIsotopePrice && currentHeliumIsotope < heliumIsotopes.length - 1) helium_isotope_button.disabled = false;
//             else helium_isotope_button.disabled = true;
//             if (atomicWeight >= heliumNextElementPrice && heliumNextUnlocked == false) helium_next_element_button.disabled = false;
//             else helium_next_element_button.disabled = true;
//         }
//     }, 10);
// });
// hydrogen_tick_time_button.addEventListener("click", () => {
//     hydrogenTickTime = hydrogenTickTime - 1;
//     atomicWeight = atomicWeight - hydrogenTickTimePrice;
//     hydrogen_tick_time.innerText = `Tick Time: ${hydrogenTickTime}`;
// });
// hydrogen_isotope_button.addEventListener("click", () => {
//     currentHydrogenIsotope = currentHydrogenIsotope + 1;
//     hydrogen_title.innerText = hydrogenIsotopes[currentHydrogenIsotope];
//     hydrogenWeight = hydrogenWeight + 1;
//     hydrogen_weight.innerText = `Atomic Weight: ${hydrogenWeight}`;
//     atomicWeight = atomicWeight - hydrogenIsotopePrice;
// });
// hydrogen_next_element_button.addEventListener("click", () => {
//     hydrogenNextUnlocked = true;
//     var container = document.createElement('div');
//     helium_title = document.createElement('h3');
//     helium_weight = document.createElement('p');
//     helium_tick_time = document.createElement('p');
//     helium_tick_time_button = document.createElement('button');
//     helium_tick_time_price = document.createElement('span');
//     helium_isotope_button = document.createElement('button');
//     helium_isotope_price = document.createElement('span');
//     helium_next_element_button = document.createElement('button');
//     helium_next_element_price = document.createElement('span');
//     document.getElementById('element_container').appendChild(container);
//     container.appendChild(helium_title);
//     container.appendChild(helium_weight);
//     container.appendChild(helium_tick_time);
//     container.appendChild(helium_tick_time_button);
//     container.appendChild(helium_tick_time_price);
//     container.appendChild(helium_isotope_button);
//     container.appendChild(helium_isotope_price);
//     container.appendChild(helium_next_element_button);
//     container.appendChild(helium_next_element_price);
//     helium_title.innerText = heliumIsotopes[currentHeliumIsotope];
//     helium_weight.innerText = `Atomic Weight: ${heliumWeight}`;
//     helium_tick_time.innerText = `Tick Time: ${heliumTickTime}`;
//     helium_tick_time_button.innerText = 'Reduce Tick Time';
//     helium_tick_time_price.innerText = `AW: ${heliumTickTimePrice}`;
//     helium_isotope_button.innerText = 'Next Isotope';
//     helium_isotope_price.innerText = `AW: ${heliumIsotopePrice}`;
//     helium_next_element_button.innerText = 'Unlock Next Element';
//     helium_next_element_price.innerText = `AW: ${heliumNextElementPrice}`;
//     setInterval(() => {atomicWeight += heliumWeight;}, heliumTickTime);
//     helium_tick_time_button.addEventListener("click", () => {
//         heliumTickTime = heliumTickTime - 1;
//         atomicWeight = atomicWeight - heliumTickTimePrice;
//         helium_tick_time.innerText = `Tick Time: ${heliumTickTime}`;
//     });
//     helium_isotope_button.addEventListener("click", () => {
//         currentHeliumIsotope = currentHeliumIsotope + 1;
//         helium_title.innerText = heliumIsotopes[currentHeliumIsotope];
//         heliumWeight = heliumWeight + 1;
//         helium_weight.innerText = `Atomic Weight: ${heliumWeight}`;
//         atomicWeight = atomicWeight - heliumIsotopePrice;
//     });
//     helium_next_element_button.addEventListener("click", () => {
//         heliumNextUnlocked = true;
//     });
// });
// let helium_title;
// let helium_weight;
// let helium_tick_time;
// let helium_tick_time_button;
// let helium_tick_time_price;
// let helium_isotope_button;
// let helium_isotope_price;
// let helium_next_element_button;
// let helium_next_element_price;
// let heliumTickTime = 5000;
// let heliumWeight = 2;
// let heliumTickTimePrice = 1
// let heliumIsotopePrice = 10;
// let heliumNextElementPrice = 100;
// let heliumIsotopes = ['Helium-2 (Diproton)', 'Helium-3', 'Helium-4', 'Helium-5', 'Helium-6', 'Helium-7', 'Helium-8', 'Helium-9', 'Helium-10'];
// let currentHeliumIsotope = 0;
// let heliumNextUnlocked = false;
let currentElementIndex = 0;
let atomicWeight = 0;
const atomic_weight = document.getElementById('atomic_weight');
const element_container = document.getElementById('element_container');
const elementsData = [
    {
        initialWeight: 1,
        tickTimePrice: 1,
        isotopePrice: 10,
        nextElementPrice: 100,
        isotopes: ['Hydrogen-1 (Protium)', 'Hydrogen-2 (Deuterium)', 'Hydrogen-3 (Tritium)', 'Hydrogen-4', 'Hydrogen-5', 'Hydrogen-6', 'Hydrogen-7']
    },
    {
        initialWeight: 2,
        tickTimePrice: 1,
        isotopePrice: 10,
        nextElementPrice: 100,
        isotopes: ['Helium-2 (Diproton)', 'Helium-3', 'Helium-4', 'Helium-5', 'Helium-6', 'Helium-7', 'Helium-8', 'Helium-9', 'Helium-10']
    }
];
class Element {
    constructor({initialWeight, tickTimePrice, isotopePrice, nextElementPrice, isotopes}) {
        this.atomicWeight = initialWeight;
        this.tickTime = 5000;
        this.tickTimePrice = tickTimePrice;
        this.isotopePrice = isotopePrice;
        this.nextElementPrice = nextElementPrice;
        this.isotopes = isotopes;
        this.nextUnlocked = false;
        this.currentIsotope = 0;
        this.createHTML();
        this.startTicking();
        this.buttonAvailable();
    }
    createHTML() {
        this.container = document.createElement('div');
        this.title = document.createElement('h3');
        this.weight = document.createElement('p');
        this.tick_time = document.createElement('p');
        this.tick_time_button = document.createElement('button');
        this.tick_time_price = document.createElement('span');
        this.isotope_button = document.createElement('button');
        this.isotope_price = document.createElement('span');
        this.next_element_button = document.createElement('button');
        this.next_element_price = document.createElement('span');
        document.getElementById('element_container').appendChild(this.container);
        this.container.appendChild(this.title);
        this.container.appendChild(this.weight);
        this.container.appendChild(this.tick_time);
        this.container.appendChild(this.tick_time_button);
        this.container.appendChild(this.tick_time_price);
        this.container.appendChild(this.isotope_button);
        this.container.appendChild(this.isotope_price);
        this.container.appendChild(this.next_element_button);
        this.container.appendChild(this.next_element_price);
        this.setUI();
        this.setEventListeners();
        this.updateUI();
    }
    setUI() {
        this.tick_time_button.innerText = 'Reduce Tick Time';
        this.isotope_button.innerText = 'Next Isotope';
        this.next_element_button.innerText = 'Unlock Next Element';
    }
    setEventListeners() {
        this.tick_time_button.addEventListener('click', () => {
            if (atomicWeight >= this.tickTimePrice) {
                this.tickTime -= 1;
                atomicWeight -= this.tickTimePrice;
                this.updateUI();
                this.startTicking();
            }
        });
        this.isotope_button.addEventListener('click', () => {
            if (atomicWeight >= this.isotopePrice && this.currentIsotope < this.isotopes.length - 1) {
                this.currentIsotope += 1;
                this.atomicWeight += 1;
                this.updateUI();
                atomicWeight -= this.isotopePrice;
            }
        });
        this.next_element_button.addEventListener('click', () => {
            if (atomicWeight >= this.nextElementPrice) {
                this.nextUnlocked = true;
                atomicWeight -= this.nextElementPrice
                this.updateUI();
                loadNextElement();
            }
        });
    }
    updateUI() {
        this.title.innerText = this.isotopes[this.currentIsotope];
        this.weight.innerText = `Atomic Weight: ${this.atomicWeight}`;
        this.tick_time.innerText = `Tick Time: ${this.tickTime}`;
        this.tick_time_price.innerText = `AW: ${this.tickTimePrice}`;
        this.isotope_price.innerText = `AW: ${this.isotopePrice}`;
        this.next_element_price.innerText = `AW: ${this.nextElementPrice}`;
    }
    startTicking() {
        this.stopTicking();
        this.intervalId = setInterval(() => {
            atomicWeight += this.atomicWeight;
        }, this.tickTime);
    }
    stopTicking() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    buttonAvailable() {
        setInterval(() => {
            this.tick_time_button.disabled = atomicWeight < this.tickTimePrice || this.tickTime <= 1;
            this.isotope_button.disabled = atomicWeight < this.isotopePrice || this.currentIsotope >= this.isotopes.length - 1;
            this.next_element_button.disabled = atomicWeight < this.nextElementPrice || this.nextUnlocked;
        }, 50);
    }
}
function loadNextElement() {
    if (currentElementIndex < elementsData.length - 1) {
        currentElementIndex += 1;
        const nextElementData = elementsData[currentElementIndex];
        new Element(nextElementData);
    }
}
window.addEventListener('load', () => {
    new Element(elementsData[currentElementIndex]);
    setInterval(() => {atomic_weight.innerText = `Atomic Weight: ${atomicWeight}`;}, 50);
});