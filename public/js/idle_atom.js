let atomicWeight = 0;
const atomic_weight = document.getElementById('atomic_weight');
const element_container = document.getElementById('element_container');
const hydrogen_title = document.getElementById('hydrogen_title');
const hydrogen_weight = document.getElementById('hydrogen_weight');
const hydrogen_tick_time = document.getElementById('hydrogen_tick_time');
const hydrogen_tick_time_button = document.getElementById('hydrogen_tick_time_button');
const hydrogen_tick_time_price = document.getElementById('hydrogen_tick_time_price');
const hydrogen_isotope_button = document.getElementById('hydrogen_isotope_button');
const hydrogen_isotope_price = document.getElementById('hydrogen_isotope_price');
const hydrogen_next_element_button = document.getElementById('hydrogen_next_element_button');
const hydrogen_next_element_price = document.getElementById('hydrogen_next_element_price');
let hydrogenTickTime = 5000;
let hydrogenWeight = 1;
let hydrogenTickTimePrice = 1
let hydrogenIsotopePrice = 10;
let hydrogenNextElementPrice = 100;
let hydrogenIsotopes = ['Hydrogen (Protium)', 'Hydrogen-2 (Deuterium)', 'Hydrogen-3 (Tritium)', 'Hydrogen-4', 'Hydrogen-5', 'Hydrogen-6', 'Hydrogen-7'];
window.addEventListener('load', () => {
    setInterval(() => {atomicWeight += hydrogenWeight;}, hydrogenTickTime);
    setInterval(() => {
        atomic_weight.innerText = `Atomic Weight: ${atomicWeight}`;
        if (atomicWeight >= hydrogenTickTimePrice) {hydrogen_tick_time_button.disabled = false;}
        else if (atomicWeight <= hydrogenTickTimePrice) {hydrogen_tick_time_button.disabled = true;}
    }, 100);
});
hydrogen_tick_time_button.addEventListener("click", () => {
    hydrogenTickTime = hydrogenTickTime - 1;
    hydrogen_tick_time.innerText = `Tick Time: ${hydrogenTickTime}`;
});
hydrogen_isotope_button.addEventListener("click", () => {});