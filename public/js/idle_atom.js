let currentElementIndex = 0;
let atomicWeight = 0;
const atomic_weight = document.getElementById('atomic_weight');
const element_container = document.getElementById('element_container');
const elementsData = [
    {
        initialWeight: 1,
        isotopes: ['Hydrogen-1 (Protium)', 'Hydrogen-2 (Deuterium)', 'Hydrogen-3 (Tritium)', 'Hydrogen-4', 'Hydrogen-5', 'Hydrogen-6', 'Hydrogen-7'],
        isotopeWeights: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        initialWeight: 2,
        isotopes: ['Helium-2 (Diproton)', 'Helium-3', 'Helium-4', 'Helium-5', 'Helium-6', 'Helium-7', 'Helium-8', 'Helium-9', 'Helium-10'],
        isotopeWeights: [2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        initialWeight: 3,
        isotopes: ['Lithium-3 (Triproton', 'Lithium-4', 'Lithium-5', 'Lithium-6', 'Lithium-7', 'Lithium-8', 'Lithium-9', 'Lithium-10', 'Lithium-11', 'Lithium-12', 'Lithium-13'],
        isotopeWeights: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
        initialWeight: 5,
        isotopes: ['Beryllium-5', 'Beryllium-6', 'Beryllium-7', 'Beryllium-8', 'Beryllium-9', 'Beryllium-10', 'Beryllium-11', 'Beryllium-12', 'Beryllium-13', 'Beryllium-14', 'Beryllium-15', 'Beryllium-16'],
        isotopeWeights: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        initialWeight: 6,
        isotopes: ['Boron-6', 'Boron-7', 'Boron-8', 'Boron-9', 'Boron-10', 'Boron-11', 'Boron-12', 'Boron-13', 'Boron-14', 'Boron-15', 'Boron-16', 'Boron-17', 'Boron-18', 'Boron-19', 'Boron-20', 'Boron-21'],
        isotopeWeights: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
        initialWeight: 8,
        isotopes: ['Carbon-8', 'Carbon-9', 'Carbon-10', 'Carbon-11', 'Carbon-12', 'Carbon-13', 'Carbon-14', 'Carbon-15', 'Carbon-16', 'Carbon-17', 'Carbon-18', 'Carbon-19', 'Carbon-20', 'Carbon-21', 'Carbon-22'],
        isotopeWeights: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    },
    {
        initialWeight: 9,
        isotopes: ['Nitrogen-9', 'Nitrogen-10', 'Nitrogen-11', 'Nitrogen-12', 'Nitrogen-13', 'Nitrogen-14', 'Nitrogen-15', 'Nitrogen-16', 'Nitrogen-17', 'Nitrogen-18', 'Nitrogen-19', 'Nitrogen-20', 'Nitrogen-21', 'Nitrogen-22', 'Nitrogen-23'],
        isotopeWeights: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    },
    {
        initialWeight: 11,
        isotopes: ['Oxygen-11', 'Oxygen-12', 'Oxygen-13', 'Oxygen-14', 'Oxygen-15', 'Oxygen-16', 'Oxygen-17', 'Oxygen-18', 'Oxygen-19', 'Oxygen-20', 'Oxygen-21', 'Oxygen-22', 'Oxygen-23', 'Oxygen-24', 'Oxygen-25', 'Oxygen-26', 'Oxygen-27', 'Oxygen-28'],
        isotopeWeights: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    },
    {
        initialWeight: 13,
        isotopes: ['Flourine-13', 'Flourine-14', 'Flourine-15', 'Flourine-16', 'Flourine-17', 'Flourine-18', 'Flourine-19', 'Flourine-20', 'Flourine-21', 'Flourine-22', 'Flourine-23', 'Flourine-24', 'Flourine-25', 'Flourine-26', 'Flourine-27', 'Flourine-28', 'Flourine-29', 'Flourine-31'],
        isotopeWeights: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31]
    },
    {
        initialWeight: 15,
        isotopes: ['Neon-15', 'Neon-16', 'Neon-17', 'Neon-18', 'Neon-19', 'Neon-20', 'Neon-21', 'Neon-22', 'Neon-23', 'Neon-24', 'Neon-25', 'Neon-26', 'Neon-27', 'Neon-28', 'Neon-29', 'Neon-30', 'Neon-31', 'Neon-32', 'Neon-33', 'Neon-34'],
        isotopeWeights: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
    },
    {
        initialWeight: 17,
        isotopes: ['Sodium-17', 'Sodium-18', 'Sodium-19', 'Sodium-20', 'Sodium-21', 'Sodium-22', 'Sodium-23', 'Sodium-24', 'Sodium-25', 'Sodium-26', 'Sodium-27', 'Sodium-28', 'Sodium-29', 'Sodium-30', 'Sodium-31', 'Sodium-32', 'Sodium-33', 'Sodium-34', 'Sodium-35', 'Sodium-37', 'Sodium-39'],
        isotopeWeights: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 39]
    },
    {
        initialWeight: 18,
        isotopes: ['Magnesium-18', 'Magnesium-19', 'Magnesium-20', 'Magnesium-21', 'Magnesium-22', 'Magnesium-23', 'Magnesium-24', 'Magnesium-25', 'Magnesium-26', 'Magnesium-27', 'Magnesium-28', 'Magnesium-29', 'Magnesium-30', 'Magnesium-31', 'Magnesium-32', 'Magnesium-33', 'Magnesium-34', 'Magnesium-35', 'Magnesium-36', 'Magnesium-37', 'Magnesium-38', 'Magnesium-40'],
        isotopeWeights: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40]
    },
    {
        initialWeight: 22,
        isotopes: ['Aluminium-22', 'Aluminium-23', 'Aluminium-24', 'Aluminium-25', 'Aluminium-26', 'Aluminium-27', 'Aluminium-28', 'Aluminium-29', 'Aluminium-30', 'Aluminium-31', 'Aluminium-32', 'Aluminium-33', 'Aluminium-34', 'Aluminium-35', 'Aluminium-36', 'Aluminium-37', 'Aluminium-38', 'Aluminium-39', 'Aluminium-40', 'Aluminium-41', 'Aluminium-42', 'Aluminium-43'],
        isotopeWeights: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]
    },
    {
        initialWeight: 22,
        isotopes: ['Silicon-22', 'Silicon-23', 'Silicon-24', 'Silicon-25', 'Silicon-26', 'Silicon-27', 'Silicon-28', 'Silicon-29', 'Silicon-30', 'Silicon-31', 'Silicon-32', 'Silicon-33', 'Silicon-34', 'Silicon-35', 'Silicon-36', 'Silicon-37', 'Silicon-38', 'Silicon-39', 'Silicon-40', 'Silicon-41', 'Silicon-42', 'Silicon-43', 'Silicon-44'],
        isotopeWeights: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42 , 43, 44]
    },
    {
        initialWeight: 26,
        isotopes: ['Phosphorus-26', 'Phosphorus-27', 'Phosphorus-28', 'Phosphorus-29', 'Phosphorus-30', 'Phosphorus-31', 'Phosphorus-32', 'Phosphorus-33', 'Phosphorus-34', 'Phosphorus-35', 'Phosphorus-36', 'Phosphorus-37', 'Phosphorus-38', 'Phosphorus-39', 'Phosphorus-40', 'Phosphorus-41', 'Phosphorus-42', 'Phosphorus-43', 'Phosphorus-44', 'Phosphorus-45', 'Phosphorus-46', 'Phosphorus-47'],
        isotopeWeights:[26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
    },
    {
        initialWeight: 27,
        isotopes: ['Sulfur-27', 'Sulfur-28', 'Sulfur-29', 'Sulfur-30', 'Sulfur-31', 'Sulfur-32', 'Sulfur-33', 'Sulfur-34', 'Sulfur-35', 'Sulfur-36', 'Sulfur-37', 'Sulfur-38', 'Sulfur-39', 'Sulfur-40', 'Sulfur-41', 'Sulfur-42', 'Sulfur-43', 'Sulfur-44', 'Sulfur-45', 'Sulfur-46', 'Sulfur-47', 'Sulfur-48', 'Sulfur-49'],
        isotopeWeights: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
    },
    {
        initialWeight: 28,
        isotopes: ['Chlorine-28', 'Chlorine-29', 'Chlorine-30', 'Chlorine-31', 'Chlorine-32', 'Chlorine-33', 'Chlorine-34', 'Chlorine-35', 'Chlorine-36', 'Chlorine-37', 'Chlorine-38', 'Chlorine-39', 'Chlorine-40', 'Chlorine-41', 'Chlorine-42', 'Chlorine-43', 'Chlorine-44', 'Chlorine-45', 'Chlorine-46', 'Chlorine-47', 'Chlorine-48', 'Chlorine-49', 'Chlorine-50', 'Chlorine-51', 'Chlorine-52'],
        isotopeWeights: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
    }
];
class Element {
    constructor({initialWeight, isotopes, isotopeWeights}) {
        this.startingWeight = initialWeight
        this.atomicWeight = initialWeight;
        this.tickTime = 3000;
        this.currentTickTimeUpgrade = 0;
        this.tickTimePrice = tickTimePriceScaling(this.startingWeight, this.currentTickTimeUpgrade);
        this.isotopes = isotopes;
        this.isotopeWeights = isotopeWeights;
        this.currentIsotope = 0;
        this.isotopePrice = isotopePriceScaling(this.startingWeight, this.currentIsotope, this.isotopeWeights);
        this.nextElementPrice = 5 * this.startingWeight * isotopeWeights.length;
        this.nextUnlocked = false;
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
                this.atomicWeight = this.isotopeWeights[this.currentIsotope];
                atomicWeight -= this.isotopePrice;
                this.isotopePrice = isotopePriceScaling(this.startingWeight, this.currentIsotope, this.isotopes);
                this.updateUI();
            }
        });
        this.next_element_button.addEventListener('click', () => {
            if (atomicWeight >= this.nextElementPrice) {
                this.nextUnlocked = true;
                atomicWeight -= this.nextElementPrice
                loadNextElement();
                this.updateUI();
            }
        });
    }
    updateUI() {
        this.title.innerText = this.isotopes[this.currentIsotope];
        this.weight.innerText = `Atomic Weight: ${this.atomicWeight}`;
        this.tick_time.innerText = `Tick Time: ${this.tickTime}`;
        this.tick_time_price.innerText = this.tickTime > 1 ? `AW: ${this.tickTimePrice}` : 'Max Upgrade';
        this.isotope_price.innerText = this.isotopeWeights[this.currentIsotope + 1] ? `AW: ${this.isotopePrice}` : 'Max Upgrade';
        if (this.nextUnlocked) this.next_element_price.innerText = 'Unlocked';
        else this.next_element_price.innerText = `AW: ${this.nextElementPrice}`;
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
    return Math.floor(baseWeight * Math.exp((Math.log(3000) / 2999) * currentUpgrade));
}
function isotopePriceScaling(baseWeight, currentUpgrade, isotopeAmount) {
    return Math.floor(baseWeight * Math.exp(Math.log(baseWeight * Math.pow(isotopeAmount.length, 2)) / (isotopeAmount.length - 2) * currentUpgrade));
}