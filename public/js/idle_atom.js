let currentElementIndex = 0;
let atomicWeight = 0;
const atomic_weight = document.getElementById('atomic_weight');
const element_container = document.getElementById('element_container');
const elementsData = [
    {
        initialWeight: 1,
        isotopePrice: 10,
        nextElementPrice: 100,
        isotopes: ['Hydrogen-1 (Protium)', 'Hydrogen-2 (Deuterium)', 'Hydrogen-3 (Tritium)', 'Hydrogen-4', 'Hydrogen-5', 'Hydrogen-6', 'Hydrogen-7']
    },
    {
        initialWeight: 2,
        isotopePrice: 10,
        nextElementPrice: 100,
        isotopes: ['Helium-2 (Diproton)', 'Helium-3', 'Helium-4', 'Helium-5', 'Helium-6', 'Helium-7', 'Helium-8', 'Helium-9', 'Helium-10']
    }
];
class Element {
    constructor({initialWeight, isotopePrice, nextElementPrice, isotopes}) {
        this.startingWeight = initialWeight
        this.atomicWeight = initialWeight;
        this.tickTime = 5000;
        this.currentTickTimeUpgrade = 0;
        this.tickTimePrice = tickTimePriceScaling(this.startingWeight, this.currentTickTimeUpgrade);
        this.isotopePrice = isotopePrice;
        this.nextElementPrice = nextElementPrice;
        this.isotopes = isotopes;
        this.nextUnlocked = false;
        this.currentIsotope = 0;
        this.lastTickStart = Date.now();
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
                this.tickTimePrice = tickTimePriceScaling(this.startingWeight, this.currentTickTimeUpgrade);
                this.currentTickTimeUpgrade += 1;
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
        this.tick();
    }
    stopTicking() {
        if (this.timeoutId) {
            clearInterval(this.timeoutId);
        }
    }
    tick() {
        let now = Date.now();
        let elapsed = now - this.lastTickStart;
        if (elapsed >= this.tickTime) {
            atomicWeight += this.atomicWeight;
            this.lastTickStart = now;
            this.timeoutId = setTimeout(() => this.tick(), this.tickTime);
        } else this.timeoutId = setTimeout(() => this.tick(), this.tickTime - elapsed);
    }
    buttonAvailable() {
        setInterval(() => {
            this.tick_time_button.disabled = atomicWeight < this.tickTimePrice || this.tickTime < 1;
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
function tickTimePriceScaling(baseWeight, currentUpgrade) {
    return Math.floor(baseWeight * Math.exp((Math.log(5000) / 5000) * currentUpgrade));
}