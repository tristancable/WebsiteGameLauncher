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
        isotopes: ['Lithium-3 (Triproton)', 'Lithium-4', 'Lithium-5', 'Lithium-6', 'Lithium-7', 'Lithium-8', 'Lithium-9', 'Lithium-10', 'Lithium-11', 'Lithium-12', 'Lithium-13'],
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
    },
    {
        initialWeight: 29,
        isotopes: ['Argon-29', 'Argon-30', 'Argon-31', 'Argon-32', 'Argon-33', 'Argon-34', 'Argon-35', 'Argon-36', 'Argon-37', 'Argon-38', 'Argon-39', 'Argon-40', 'Argon-41', 'Argon-42', 'Argon-43', 'Argon-44', 'Argon-45', 'Argon-46', 'Argon-47', 'Argon-48', 'Argon-49', 'Argon-50', 'Argon-51', 'Argon-52', 'Argon-53', 'Argon-54'],
        isotopeWeights: [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]
    },
    {
        initialWeight: 31,
        isotopes: ['Potassium-31', 'Potassium-35', 'Potassium-36', 'Potassium-37', 'Potassium-38', 'Potassium-39', 'Potassium-40', 'Potassium-41', 'Potassium-42', 'Potassium-43', 'Potassium-44', 'Potassium-45', 'Potassium-46', 'Potassium-47', 'Potassium-48', 'Potassium-49', 'Potassium-50', 'Potassium-51', 'Potassium-52', 'Potassium-53', 'Potassium-54', 'Potassium-55', 'Potassium-56', 'Potassium-57', 'Potassium-59'],
        isotopeWeights: [31, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59]
    },
    {
        initialWeight: 35,
        isotopes: ['Calcium-35', 'Calcium-36', 'Calcium-37', 'Calcium-38', 'Calcium-39', 'Calcium-40', 'Calcium-41', 'Calcium-42', 'Calcium-43', 'Calcium-44', 'Calcium-45', 'Calcium-46', 'Calcium-47', 'Calcium-48', 'Calcium-49', 'Calcium-50', 'Calcium-51', 'Calcium-52', 'Calcium-53', 'Calcium-54', 'Calcium-55', 'Calcium-56', 'Calcium-57', 'Calcium-58', 'Calcium-59', 'Calcium-60'],
        isotopeWeights: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
    },
    {
        initialWeight: 39,
        isotopes: ['Scandium-39', 'Scandium-40', 'Scandium-41', 'Scandium-42', 'Scandium-43', 'Scandium-44', 'Scandium-45', 'Scandium-46', 'Scandium-47', 'Scandium-48', 'Scandium-49', 'Scandium-50', 'Scandium-51', 'Scandium-52', 'Scandium-53', 'Scandium-54', 'Scandium-55', 'Scandium-56', 'Scandium-57', 'Scandium-58', 'Scandium-59', 'Scandium-60', 'Scandium-61', 'Scandium-62'],
        isotopeWeights: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]
    },
    {
        initialWeight: 39,
        isotopes: ['Titanium-39', 'Titanium-40', 'Titanium-41', 'Titanium-42', 'Titanium-43', 'Titanium-44', 'Titanium-45', 'Titanium-46', 'Titanium-47', 'Titanium-48', 'Titanium-49', 'Titanium-50', 'Titanium-51', 'Titanium-52', 'Titanium-53', 'Titanium-54', 'Titanium-55', 'Titanium-56', 'Titanium-57', 'Titanium-58', 'Titanium-59', 'Titanium-60', 'Titanium-61', 'Titanium-62', 'Titanium-63', 'Titanium-64'],
        isotopeWeights: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]
    },
    {
        initialWeight: 40,
        isotopes: ['Vanadium-40', 'Vanadium-41', 'Vanadium-42', 'Vanadium-43', 'Vanadium-44', 'Vanadium-45', 'Vanadium-46', 'Vanadium-47', 'Vanadium-48', 'Vanadium-49', 'Vanadium-50', 'Vanadium-51', 'Vanadium-52', 'Vanadium-53', 'Vanadium-54', 'Vanadium-55', 'Vanadium-56', 'Vanadium-57', 'Vanadium-58', 'Vanadium-59', 'Vanadium-60', 'Vanadium-61', 'Vanadium-62', 'Vanadium-63', 'Vanadium-64', 'Vanadium-65', 'Vanadium-66', 'Vanadium-67'],
        isotopeWeights: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]
    },
    {
        initialWeight: 42,
        isotopes: ['Chromium-42', 'Chromium-43', 'Chromium-44', 'Chromium-45', 'Chromium-46', 'Chromium-47', 'Chromium-48', 'Chromium-49', 'Chromium-50', 'Chromium-51', 'Chromium-52', 'Chromium-53', 'Chromium-54', 'Chromium-55', 'Chromium-56', 'Chromium-57', 'Chromium-58', 'Chromium-59', 'Chromium-60', 'Chromium-61', 'Chromium-62', 'Chromium-63', 'Chromium-64', 'Chromium-65', 'Chromium-66', 'Chromium-67', 'Chromium-68', 'Chromium-69', 'Chromium-70'],
        isotopeWeights: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
    },
    {
        initialWeight: 46,
        isotopes: ['Manganese-46', 'Manganese-47', 'Manganese-48', 'Manganese-49', 'Manganese-50', 'Manganese-51', 'Manganese-52', 'Manganese-53', 'Manganese-54', 'Manganese-55', 'Manganese-56', 'Manganese-57', 'Manganese-58', 'Manganese-59', 'Manganese-60', 'Manganese-61', 'Manganese-62', 'Manganese-63', 'Manganese-64', 'Manganese-65', 'Manganese-66', 'Manganese-67', 'Manganese-68', 'Manganese-69', 'Manganese-70', 'Manganese-71', 'Manganese-72', 'Manganese-73'],
        isotopeWeights: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]
    },
    {
        initialWeight: 45,
        isotopes: ['Iron-45', 'Iron-46', 'Iron-47', 'Iron-48', 'Iron-49', 'Iron-50', 'Iron-51', 'Iron-52', 'Iron-53', 'Iron-54', 'Iron-55', 'Iron-56', 'Iron-57', 'Iron-58', 'Iron-59', 'Iron-60', 'Iron-61', 'Iron-62', 'Iron-63', 'Iron-64', 'Iron-65', 'Iron-66', 'Iron-67', 'Iron-68', 'Iron-69', 'Iron-70', 'Iron-71', 'Iron-72'],
        isotopeWeights: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]
    },
    {
        initialWeight: 47,
        isotopes: ['Cobalt-47', 'Cobalt-48', 'Cobalt-49', 'Cobalt-50', 'Cobalt-51', 'Cobalt-52', 'Cobalt-53', 'Cobalt-54', 'Cobalt-55', 'Cobalt-56', 'Cobalt-57', 'Cobalt-58', 'Cobalt-59', 'Cobalt-60', 'Cobalt-61', 'Cobalt-62', 'Cobalt-63', 'Cobalt-64', 'Cobalt-65', 'Cobalt-66', 'Cobalt-67', 'Cobalt-68', 'Cobalt-69', 'Cobalt-70', 'Cobalt-71', 'Cobalt-72', 'Cobalt-73', 'Cobalt-74', 'Cobalt-75', 'Cobalt-76'],
        isotopeWeights: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]
    },
    {
        initialWeight: 48,
        isotopes: ['Nickel-48', 'Nickel-49', 'Nickel-50', 'Nickel-51', 'Nickel-52', 'Nickel-53', 'Nickel-54', 'Nickel-55', 'Nickel-56', 'Nickel-57', 'Nickel-58', 'Nickel-59', 'Nickel-60', 'Nickel-61', 'Nickel-62', 'Nickel-63', 'Nickel-64', 'Nickel-65', 'Nickel-66', 'Nickel-67', 'Nickel-68', 'Nickel-69', 'Nickel-70', 'Nickel-71', 'Nickel-72', 'Nickel-73', 'Nickel-74', 'Nickel-75', 'Nickel-76', 'Nickel-77', 'Nickel-78', 'Nickel-79', 'Nickel-80'],
        isotopeWeights: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]
    },
    {
        initialWeight: 55,
        isotopes: ['Copper-55', 'Copper-56', 'Copper-57', 'Copper-58', 'Copper-59', 'Copper-61', 'Copper-62', 'Copper-63', 'Copper-64', 'Copper-65', 'Copper-66', 'Copper-67', 'Copper-68', 'Copper-69', 'Copper-70', 'Copper-71', 'Copper-72', 'Copper-73', 'Copper-74', 'Copper-75', 'Copper-76', 'Copper-77', 'Copper-78', 'Copper-79', 'Copper-80', 'Copper-81', 'Copper-82', 'Copper-83', 'Copper-84'],
        isotopeWeights: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84]
    },
    {
        initialWeight: 54,
        isotopes: ['Zinc-54', 'Zinc-55', 'Zinc-56', 'Zinc-57', 'Zinc-58', 'Zinc-59', 'Zinc-60', 'Zinc-61', 'Zinc-62', 'Zinc-63', 'Zinc-64', 'Zinc-65', 'Zinc-66', 'Zinc-67', 'Zinc-68', 'Zinc-69', 'Zinc-70', 'Zinc-71', 'Zinc-72', 'Zinc-73', 'Zinc-74', 'Zinc-75', 'Zinc-76', 'Zinc-77', 'Zinc-78', 'Zinc-79', 'Zinc-80', 'Zinc-81', 'Zinc-82', 'Zinc-83', 'Zinc-84', 'Zinc-85', 'Zinc-86', 'Zinc-87'],
        isotopeWeights: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87]
    },
    {
        initialWeight: 60,
        isotopes: ['Gallium-60', 'Gallium-61', 'Gallium-62', 'Gallium-63', 'Gallium-64', 'Gallium-65', 'Gallium-66', 'Gallium-67', 'Gallium-68', 'Gallium-69', 'Gallium-70', 'Gallium-71', 'Gallium-72', 'Gallium-73', 'Gallium-74', 'Gallium-75', 'Gallium-76', 'Gallium-77', 'Gallium-78', 'Gallium-79', 'Gallium-80', 'Gallium-81', 'Gallium-82', 'Gallium-83', 'Gallium-84', 'Gallium-85', 'Gallium-86', 'Gallium-87', 'Gallium-88', 'Gallium-89'],
        isotopeWeights: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
    },
    {
        initialWeight: 59,
        isotopes: ['Germanium-59', 'Germanium-60', 'Germanium-61', 'Germanium-62', 'Germanium-63', 'Germanium-64', 'Germanium-65', 'Germanium-66', 'Germanium-67', 'Germanium-68', 'Germanium-69', 'Germanium-70', 'Germanium-71', 'Germanium-72', 'Germanium-73', 'Germanium-74', 'Germanium-75', 'Germanium-76', 'Germanium-77', 'Germanium-78', 'Germanium-79', 'Germanium-80', 'Germanium-81', 'Germanium-82', 'Germanium-83', 'Germanium-84', 'Germanium-85', 'Germanium-86', 'Germanium-87', 'Germanium-88', 'Germanium-89', 'Germanium-90', 'Germanium-91', 'Germanium-92'],
        isotopeWeights: [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92]
    },
    {
        initialWeight: 64,
        isotopes: ['Arsenic-64', 'Arsenic-65', 'Arsenic-66', 'Arsenic-67', 'Arsenic-68', 'Arsenic-69', 'Arsenic-70', 'Arsenic-71', 'Arsenic-72', 'Arsenic-73', 'Arsenic-74', 'Arsenic-75', 'Arsenic-76', 'Arsenic-77', 'Arsenic-78', 'Arsenic-79', 'Arsenic-80', 'Arsenic-81', 'Arsenic-82', 'Arsenic-83', 'Arsenic-84', 'Arsenic-85', 'Arsenic-86', 'Arsenic-87', 'Arsenic-88', 'Arsenic-89', 'Arsenic-90', 'Arsenic-91', 'Arsenic-92', 'Arsenic-93', 'Arsenic-94', 'Arsenic-95'],
        isotopeWeights: [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]
    },
    {
        initialWeight: 63,
        isotopes: ['Selenium-63', 'Selenium-64', 'Selenium-65', 'Selenium-66', 'Selenium-67', 'Selenium-68', 'Selenium-69', 'Selenium-70', 'Selenium-71', 'Selenium-72', 'Selenium-73', 'Selenium-74', 'Selenium-75', 'Selenium-76', 'Selenium-77', 'Selenium-78', 'Selenium-79', 'Selenium-80', 'Selenium-81', 'Selenium-82', 'Selenium-83', 'Selenium-84', 'Selenium-85', 'Selenium-86', 'Selenium-87', 'Selenium-88', 'Selenium-89', 'Selenium-90', 'Selenium-91', 'Selenium-92', 'Selenium-93', 'Selenium-94', 'Selenium-95', 'Selenium-96', 'Selenium-97'],
        isotopeWeights: [63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
    },
    {
        initialWeight: 68,
        isotopes: ['Bromine-68', 'Bromine-69', 'Bromine-70', 'Bromine-71', 'Bromine-72', 'Bromine-73', 'Bromine-74', 'Bromine-75', 'Bromine-76', 'Bromine-77', 'Bromine-78', 'Bromine-79', 'Bromine-80', 'Bromine-81', 'Bromine-82', 'Bromine-83', 'Bromine-84', 'Bromine-85', 'Bromine-86', 'Bromine-87', 'Bromine-88', 'Bromine-89', 'Bromine-90', 'Bromine-91', 'Bromine-92', 'Bromine-93', 'Bromine-94', 'Bromine-95', 'Bromine-96', 'Bromine-97', 'Bromine-98', 'Bromine-99', 'Bromine-100', 'Bromine-101'],
        isotopeWeights: [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101]
    },
    {
        initialWeight: 67,
        isotopes: ['Krypton-67', 'Krypton-68', 'Krypton-69', 'Krypton-70', 'Krypton-71', 'Krypton-72', 'Krypton-73', 'Krypton-74', 'Krypton-75', 'Krypton-76', 'Krypton-77', 'Krypton-78', 'Krypton-79', 'Krypton-80', 'Krypton-81', 'Krypton-82', 'Krypton-83', 'Krypton-84', 'Krypton-85', 'Krypton-86', 'Krypton-87', 'Krypton-88', 'Krypton-89', 'Krypton-90', 'Krypton-91', 'Krypton-92', 'Krypton-93', 'Krypton-94', 'Krypton-95', 'Krypton-96', 'Krypton-97', 'Krypton-98', 'Krypton-99', 'Krypton-100', 'Krypton-101', 'Krypton-102', 'Krypton-103'],
        isotopeWeights: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
    },
    {
        initialWeight: 71,
        isotopes: ['Rubidium-71', 'Rubidium-72', 'Rubidium-73', 'Rubidium-74', 'Rubidium-75', 'Rubidium-76', 'Rubidium-77', 'Rubidium-78', 'Rubidium-79', 'Rubidium-80', 'Rubidium-81', 'Rubidium-82', 'Rubidium-83', 'Rubidium-84', 'Rubidium-85', 'Rubidium-86', 'Rubidium-87', 'Rubidium-88', 'Rubidium-89', 'Rubidium-90', 'Rubidium-91', 'Rubidium-92', 'Rubidium-93', 'Rubidium-94', 'Rubidium-95', 'Rubidium-96', 'Rubidium-97', 'Rubidium-98', 'Rubidium-99', 'Rubidium-100', 'Rubidium-101', 'Rubidium-102', 'Rubidium-103', 'Rubidium-104', 'Rubidium-105', 'Rubidium-106'],
        isotopeWeights: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106]
    },
    {
        initialWeight: 73,
        isotopes: ['Strontium-73', 'Strontium-74', 'Strontium-75', 'Strontium-76', 'Strontium-77', 'Strontium-78', 'Strontium-79', 'Strontium-80', 'Strontium-81', 'Strontium-82', 'Strontium-83', 'Strontium-84', 'Strontium-85', 'Strontium-86', 'Strontium-87', 'Strontium-88', 'Strontium-89', 'Strontium-90', 'Strontium-91', 'Strontium-92', 'Strontium-93', 'Strontium-94', 'Strontium-95', 'Strontium-96', 'Strontium-97', 'Strontium-98', 'Strontium-99', 'Strontium-100', 'Strontium-101', 'Strontium-102', 'Strontium-103', 'Strontium-104', 'Strontium-105', 'Strontium-106', 'Strontium-107', 'Strontium-108'],
        isotopeWeights: [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108]
    },
    {
        initialWeight: 76,
        isotopes: ['Yttrium-76', 'Yttrium-77', 'Yttrium-78', 'Yttrium-79', 'Yttrium-80', 'Yttrium-81', 'Yttrium-82', 'Yttrium-83', 'Yttrium-84', 'Yttrium-85', 'Yttrium-86', 'Yttrium-87', 'Yttrium-88', 'Yttrium-89', 'Yttrium-90', 'Yttrium-91', 'Yttrium-92', 'Yttrium-93', 'Yttrium-94', 'Yttrium-95', 'Yttrium-96', 'Yttrium-97', 'Yttrium-98', 'Yttrium-99', 'Yttrium-100', 'Yttrium-101', 'Yttrium-102', 'Yttrium-103', 'Yttrium-104', 'Yttrium-105', 'Yttrium-106', 'Yttrium-107', 'Yttrium-108', 'Yttrium-109', 'Yttrium-110', 'Yttrium-111'],
        isotopeWeights: [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]
    },
    {
        initialWeight: 77,
        isotopes: ['Zirconium-77', 'Zirconium-78', 'Zirconium-79', 'Zirconium-80', 'Zirconium-81', 'Zirconium-82', 'Zirconium-83', 'Zirconium-84', 'Zirconium-85', 'Zirconium-86', 'Zirconium-87', 'Zirconium-88', 'Zirconium-89', 'Zirconium-90', 'Zirconium-91', 'Zirconium-92', 'Zirconium-93', 'Zirconium-94', 'Zirconium-95', 'Zirconium-96', 'Zirconium-97', 'Zirconium-98', 'Zirconium-99', 'Zirconium-100', 'Zirconium-101', 'Zirconium-102', 'Zirconium-104', 'Zirconium-105', 'Zirconium-106', 'Zirconium-107', 'Zirconium-108', 'Zirconium-109', 'Zirconium-110', 'Zirconium-111', 'Zirconium-112', 'Zirconium-113', 'Zirconium-114'],
        isotopeWeights: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]
    },
    {
        initialWeight: 81,
        isotopes: ['Niobium-81', 'Niobium-82', 'Niobium-83', 'Niobium-84', 'Niobium-85', 'Niobium-86', 'Niobium-87', 'Niobium-88', 'Niobium-89', 'Niobium-90', 'Niobium-91', 'Niobium-92', 'Niobium-93', 'Niobium-94', 'Niobium-95', 'Niobium-96', 'Niobium-97', 'Niobium-98', 'Niobium-99', 'Niobium-100', 'Niobium-101', 'Niobium-102', 'Niobium-103', 'Niobium-104', 'Niobium-105', 'Niobium-106', 'Niobium-107', 'Niobium-108', 'Niobium-109', 'Niobium-110', 'Niobium-111', 'Niobium-112', 'Niobium-113', 'Niobium-114', 'Niobium-115', 'Niobium-116', 'Niobium-117'],
        isotopeWeights: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117]
    },
    {
        initialWeight: 81,
        isotopes: ['Molybdenum-81', 'Molybdenum-82', 'Molybdenum-83', 'Molybdenum-84', 'Molybdenum-85', 'Molybdenum-86', 'Molybdenum-87', 'Molybdenum-88', 'Molybdenum-89', 'Molybdenum-90', 'Molybdenum-91', 'Molybdenum-92', 'Molybdenum-93', 'Molybdenum-94', 'Molybdenum-95', 'Molybdenum-96', 'Molybdenum-97', 'Molybdenum-98', 'Molybdenum-99', 'Molybdenum-100', 'Molybdenum-101', 'Molybdenum-102', 'Molybdenum-103', 'Molybdenum-104', 'Molybdenum-105', 'Molybdenum-106', 'Molybdenum-107', 'Molybdenum-108', 'Molybdenum-109', 'Molybdenum-110', 'Molybdenum-111', 'Molybdenum-112', 'Molybdenum-113', 'Molybdenum-114', 'Molybdenum-115', 'Molybdenum-116', 'Molybdenum-117', 'Molybdenum-118', 'Molybdenum-119'],
        isotopeWeights: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]
    },
    {
        initialWeight: 85,
        isotopes: ['Technetium-85', 'Technetium-86', 'Technetium-87', 'Technetium-88', 'Technetium-89', 'Technetium-90', 'Technetium-91', 'Technetium-92', 'Technetium-93', 'Technetium-94', 'Technetium-95', 'Technetium-96', 'Technetium-97', 'Technetium-98', 'Technetium-99', 'Technetium-100', 'Technetium-101', 'Technetium-102', 'Technetium-103', 'Technetium-104', 'Technetium-105', 'Technetium-106', 'Technetium-107', 'Technetium-108', 'Technetium-109', 'Technetium-110', 'Technetium-111', 'Technetium-112', 'Technetium-113', 'Technetium-114', 'Technetium-115', 'Technetium-116', 'Technetium-117', 'Technetium-118'],
        isotopeWeights: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]
    },
    {
        initialWeight: 87,
        isotopes: ['Ruthenium-87', 'Ruthenium-88', 'Ruthenium-89', 'Ruthenium-90', 'Ruthenium-91', 'Ruthenium-92', 'Ruthenium-93', 'Ruthenium-94', 'Ruthenium-95', 'Ruthenium-96', 'Ruthenium-97', 'Ruthenium-98', 'Ruthenium-99', 'Ruthenium-100', 'Ruthenium-101', 'Ruthenium-102', 'Ruthenium-103', 'Ruthenium-104', 'Ruthenium-105', 'Ruthenium-106', 'Ruthenium-107', 'Ruthenium-108', 'Ruthenium-109', 'Ruthenium-110', 'Ruthenium-111', 'Ruthenium-112', 'Ruthenium-113', 'Ruthenium-114', 'Ruthenium-115', 'Ruthenium-116', 'Ruthenium-117', 'Ruthenium-118', 'Ruthenium-119', 'Ruthenium-120'],
        isotopeWeights: [87 ,88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
    },
    {
        initialWeight: 90,
        isotopes: ['Rhodium-90', 'Rhodium-91', 'Rhodium-92', 'Rhodium-93', 'Rhodium-94', 'Rhodium-95', 'Rhodium-96', 'Rhodium-97', 'Rhodium-98', 'Rhodium-99', 'Rhodium-100', 'Rhodium-101', 'Rhodium-102', 'Rhodium-103', 'Rhodium-104', 'Rhodium-105', 'Rhodium-106', 'Rhodium-107', 'Rhodium-108', 'Rhodium-109', 'Rhodium-110', 'Rhodium-111', 'Rhodium-112', 'Rhodium-113', 'Rhodium-114', 'Rhodium-115', 'Rhodium-116', 'Rhodium-117', 'Rhodium-118', 'Rhodium-119', 'Rhodium-120', 'Rhodium-121', 'Rhodium-122', 'Rhodium-123', 'Rhodium-124', 'Rhodium-125', 'Rhodium-126', 'Rhodium-127', 'Rhodium-128'],
        isotopeWeights: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128]
    },
    {
        initialWeight: 91,
        isotopes: ['Palladium-91', 'Palladium-92', 'Palladium-93', 'Palladium-94', 'Palladium-95', 'Palladium-96', 'Palladium-97', 'Palladium-98', 'Palladium-99', 'Palladium-100', 'Palladium-101', 'Palladium-102', 'Palladium-103', 'Palladium-104', 'Palladium-105', 'Palladium-106', 'Palladium-107', 'Palladium-108', 'Palladium-109', 'Palladium-110', 'Palladium-111', 'Palladium-112', 'Palladium-113', 'Palladium-114', 'Palladium-115', 'Palladium-116', 'Palladium-117', 'Palladium-118', 'Palladium-119', 'Palladium-120', 'Palladium-121', 'Palladium-122', 'Palladium-123', 'Palladium-124', 'Palladium-125', 'Palladium-126', 'Palladium-127', 'Palladium-128', 'Palladium-129'],
        isotopeWeights: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129]
    },
    {
        initialWeight: 92,
        isotopes: ['Silver-92', 'Silver-93', 'Silver-94', 'Silver-95', 'Silver-96', 'Silver-97', 'Silver-98', 'Silver-99', 'Silver-100', 'Silver-101', 'Silver-102', 'Silver-103', 'Silver-104', 'Silver-105', 'Silver-106', 'Silver-107', 'Silver-108', 'Silver-109', 'Silver-110', 'Silver-111', 'Silver-112', 'Silver-113', 'Silver-114', 'Silver-115', 'Silver-116', 'Silver-117', 'Silver-118', 'Silver-119', 'Silver-120', 'Silver-121', 'Silver-122', 'Silver-123', 'Silver-124', 'Silver-125', 'Silver-126', 'Silver-127', 'Silver-128', 'Silver-129', 'Silver-130', 'Silver-131', 'Silver-132', 'Silver-133'],
        isotopeWeights: [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133]
    },
    {
        initialWeight: 95,
        isotopes: ['Cadmium-95', 'Cadmium-96', 'Cadmium-97', 'Cadmium-98', 'Cadmium-99', 'Cadmium-100', 'Cadmium-101', 'Cadmium-102', 'Cadmium-103', 'Cadmium-104', 'Cadmium-105', 'Cadmium-106', 'Cadmium-107', 'Cadmium-108', 'Cadmium-109', 'Cadmium-110', 'Cadmium-111', 'Cadmium-112', 'Cadmium-113', 'Cadmium-114', 'Cadmium-115', 'Cadmium-116', 'Cadmium-117', 'Cadmium-118', 'Cadmium-119', 'Cadmium-120', 'Cadmium-121', 'Cadmium-122', 'Cadmium-123', 'Cadmium-124', 'Cadmium-125', 'Cadmium-126', 'Cadmium-127', 'Cadmium-128', 'Cadmium-129', 'Cadmium-130', 'Cadmium-131', 'Cadmium-132'],
        isotopeWeights: [95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132]
    },
    {
        initialWeight: 97,
        isotopes: ['Indium-97', 'Indium-98', 'Indium-99', 'Indium-100', 'Indium-101', 'Indium-102', 'Indium-103', 'Indium-104', 'Indium-105', 'Indium-106', 'Indium-107', 'Indium-108', 'Indium-109', 'Indium-110', 'Indium-111', 'Indium-112', 'Indium-113', 'Indium-114', 'Indium-115', 'Indium-116', 'Indium-117', 'Indium-118', 'Indium-119', 'Indium-120', 'Indium-121', 'Indium-122', 'Indium-123', 'Indium-124', 'Indium-125', 'Indium-126', 'Indium-127', 'Indium-128', 'Indium-129', 'Indium-130', 'Indium-131', 'Indium-132', 'Indium-133', 'Indium-134', 'Indium-135', 'Indium-136', 'Indium-137'],
        isotopeWeights: [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137]
    },
    {
        initialWeight: 99,
        isotopes: ['Tin-99', 'Tin-100', 'Tin-101', 'Tin-102', 'Tin-103', 'Tin-104', 'Tin-105', 'Tin-106', 'Tin-107', 'Tin-108', 'Tin-109', 'Tin-110', 'Tin-111', 'Tin-112', 'Tin-113', 'Tin-114', 'Tin-115', 'Tin-116', 'Tin-117', 'Tin-118', 'Tin-119', 'Tin-120', 'Tin-121', 'Tin-122', 'Tin-123', 'Tin-124', 'Tin-125', 'Tin-126', 'Tin-127', 'Tin-128', 'Tin-129', 'Tin-130', 'Tin-131', 'Tin-132', 'Tin-133', 'Tin-134', 'Tin-135', 'Tin-136', 'Tin-137', 'Tin-138', 'Tin-139', 'Tin-140'],
        isotopeWeights: [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140]
    },
    {
        initialWeight: 103,
        isotopes: ['Antimony-103', 'Antimony-104', 'Antimony-105', 'Antimony-106', 'Antimony-107', 'Antimony-108', 'Antimony-109', 'Antimony-110', 'Antimony-111', 'Antimony-112', 'Antimony-113', 'Antimony-114', 'Antimony-115', 'Antimony-116', 'Antimony-117', 'Antimony-118', 'Antimony-119', 'Antimony-120', 'Antimony-121', 'Antimony-122', 'Antimony-123', 'Antimony-124', 'Antimony-125', 'Antimony-126', 'Antimony-127', 'Antimony-128', 'Antimony-129', 'Antimony-130', 'Antimony-131', 'Antimony-132', 'Antimony-133', 'Antimony-134', 'Antimony-135', 'Antimony-136', 'Antimony-137', 'Antimony-138', 'Antimony-139'],
        isotopeWeights: [103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139]
    },
    {
        initialWeight: 104,
        isotopes: ['Tellurium-104', 'Tellurium-105', 'Tellurium-106', 'Tellurium-107', 'Tellurium-108', 'Tellurium-109', 'Tellurium-110', 'Tellurium-111', 'Tellurium-112', 'Tellurium-113', 'Tellurium-114', 'Tellurium-115', 'Tellurium-116', 'Tellurium-117', 'Tellurium-118', 'Tellurium-119', 'Tellurium-120', 'Tellurium-121', 'Tellurium-122', 'Tellurium-123', 'Tellurium-124', 'Tellurium-125', 'Tellurium-126', 'Tellurium-127', 'Tellurium-128', 'Tellurium-129', 'Tellurium-130', 'Tellurium-131', 'Tellurium-132', 'Tellurium-133', 'Tellurium-134', 'Tellurium-135', 'Tellurium-136', 'Tellurium-137', 'Tellurium-138', 'Tellurium-139', 'Tellurium-140', 'Tellurium-141', 'Tellurium-142'],
        isotopeWeights: [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142]
    },
    {
        initialWeight: 108,
        isotopes: ['Iodine-108', 'Iodine-109', 'Iodine-110', 'Iodine-111', 'Iodine-112', 'Iodine-113', 'Iodine-114', 'Iodine-115', 'Iodine-116', 'Iodine-117', 'Iodine-118', 'Iodine-119', 'Iodine-120', 'Iodine-121', 'Iodine-122', 'Iodine-123', 'Iodine-124', 'Iodine-125', 'Iodine-126', 'Iodine-127', 'Iodine-128', 'Iodine-129', 'Iodine-130', 'Iodine-131', 'Iodine-132', 'Iodine-133', 'Iodine-134', 'Iodine-135', 'Iodine-136', 'Iodine-137', 'Iodine-138', 'Iodine-139', 'Iodine-140', 'Iodine-141', 'Iodine-142', 'Iodine-143', 'Iodine-144'],
        isotopeWeights: [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
    },
    {
        initialWeight: 108,
        isotopes: ['Xenon-108', 'Xenon-109', 'Xenon-110', 'Xenon-111', 'Xenon-112', 'Xenon-113', 'Xenon-114', 'Xenon-115', 'Xenon-116', 'Xenon-117', 'Xenon-118', 'Xenon-119', 'Xenon-120', 'Xenon-121', 'Xenon-122', 'Xenon-123', 'Xenon-124', 'Xenon-125', 'Xenon-126', 'Xenon-127', 'Xenon-128', 'Xenon-129', 'Xenon-130', 'Xenon-131', 'Xenon-132', 'Xenon-133', 'Xenon-134', 'Xenon-135', 'Xenon-136', 'Xenon-137', 'Xenon-138', 'Xenon-139', 'Xenon-140', 'Xenon-141', 'Xenon-142', 'Xenon-143', 'Xenon-144', 'Xenon-145', 'Xenon-146', 'Xenon-147', 'Xenon-148', 'Xenon-149', 'Xenon-150'],
        isotopeWeights: [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150]
    },
    {
        initialWeight: 112,
        isotopes: ['Caesium-112', 'Caesium-113', 'Caesium-114', 'Caesium-115', 'Caesium-116', 'Caesium-117', 'Caesium-118', 'Caesium-119', 'Caesium-120', 'Caesium-121', 'Caesium-122', 'Caesium-123', 'Caesium-124', 'Caesium-125', 'Caesium-126', 'Caesium-127', 'Caesium-128', 'Caesium-129', 'Caesium-130', 'Caesium-131', 'Caesium-132', 'Caesium-133', 'Caesium-134', 'Caesium-135', 'Caesium-136', 'Caesium-137', 'Caesium-138', 'Caesium-139', 'Caesium-140', 'Caesium-141', 'Caesium-142', 'Caesium-143', 'Caesium-144', 'Caesium-145', 'Caesium-146', 'Caesium-147', 'Caesium-148', 'Caesium-149', 'Caesium-150', 'Caesium-151'],
        isotopeWeights: [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151]
    },
    {
        initialWeight: 114,
        isotopes: ['Barium-114', 'Barium-115', 'Barium-116', 'Barium-117', 'Barium-118', 'Barium-119', 'Barium-120', 'Barium-121', 'Barium-122', 'Barium-123', 'Barium-124', 'Barium-125', 'Barium-126', 'Barium-127', 'Barium-128', 'Barium-129', 'Barium-130', 'Barium-131', 'Barium-132', 'Barium-133', 'Barium-134', 'Barium-135', 'Barium-136', 'Barium-137', 'Barium-138', 'Barium-139', 'Barium-140', 'Barium-141', 'Barium-142', 'Barium-143', 'Barium-144', 'Barium-145', 'Barium-146', 'Barium-147', 'Barium-148', 'Barium-149', 'Barium-150', 'Barium-151', 'Barium-152', 'Barium-153', 'Barium-154'],
        isotopeWeights: [114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154]
    },
    {
        initialWeight: 116,
        isotopes: ['Lanthanum-116', 'Lanthanum-117', 'Lanthanum-118', 'Lanthanum-119', 'Lanthanum-120', 'Lanthanum-121', 'Lanthanum-122', 'Lanthanum-123', 'Lanthanum-124', 'Lanthanum-125', 'Lanthanum-126', 'Lanthanum-127', 'Lanthanum-128', 'Lanthanum-129', 'Lanthanum-130', 'Lanthanum-131', 'Lanthanum-132', 'Lanthanum-133', 'Lanthanum-134', 'Lanthanum-135', 'Lanthanum-136', 'Lanthanum-137', 'Lanthanum-138', 'Lanthanum-139', 'Lanthanum-140', 'Lanthanum-141', 'Lanthanum-142', 'Lanthanum-143', 'Lanthanum-144', 'Lanthanum-145', 'Lanthanum-146', 'Lanthanum-147', 'Lanthanum-148', 'Lanthanum-149', 'Lanthanum-150', 'Lanthanum-151', 'Lanthanum-152', 'Lanthanum-153', 'Lanthanum-154', 'Lanthanum-155'],
        isotopeWeights: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155]
    },
    {
        initialWeight: 119,
        isotopes: ['Cerium-119', 'Cerium-120', 'Cerium-121', 'Cerium-122', 'Cerium-123', 'Cerium-124', 'Cerium-125', 'Cerium-126', 'Cerium-127', 'Cerium-128', 'Cerium-129', 'Cerium-130', 'Cerium-131', 'Cerium-132', 'Cerium-133', 'Cerium-134', 'Cerium-135', 'Cerium-136', 'Cerium-137', 'Cerium-138', 'Cerium-139', 'Cerium-140', 'Cerium-141', 'Cerium-142', 'Cerium-143', 'Cerium-144', 'Cerium-145', 'Cerium-146', 'Cerium-147', 'Cerium-148', 'Cerium-149', 'Cerium-150', 'Cerium-151', 'Cerium-152', 'Cerium-153', 'Cerium-154', 'Cerium-155', 'Cerium-156', 'Cerium-157'],
        isotopeWeights: [119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157]
    },
    {
        initialWeight: 121,
        isotopes: ['Praseodymium-121', 'Praseodymium-122', 'Praseodymium-123', 'Praseodymium-124', 'Praseodymium-125', 'Praseodymium-126', 'Praseodymium-127', 'Praseodymium-128', 'Praseodymium-129', 'Praseodymium-130', 'Praseodymium-131', 'Praseodymium-132', 'Praseodymium-133', 'Praseodymium-134', 'Praseodymium-135', 'Praseodymium-136', 'Praseodymium-137', 'Praseodymium-138', 'Praseodymium-139', 'Praseodymium-140', 'Praseodymium-141', 'Praseodymium-142', 'Praseodymium-143', 'Praseodymium-144', 'Praseodymium-145', 'Praseodymium-146', 'Praseodymium-147', 'Praseodymium-148', 'Praseodymium-149', 'Praseodymium-150', 'Praseodymium-151', 'Praseodymium-152', 'Praseodymium-153', 'Praseodymium-154', 'Praseodymium-155', 'Praseodymium-156', 'Praseodymium-157', 'Praseodymium-158', 'Praseodymium-159'],
        isotopeWeights: [121, 122, 123, 124, 125, 126, 217, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]
    },
    {
        initialWeight: 124,
        isotopes: ['Neodymium-124', 'Neodymium-125', 'Neodymium-126', 'Neodymium-127', 'Neodymium-128', 'Neodymium-129', 'Neodymium-130', 'Neodymium-131', 'Neodymium-132', 'Neodymium-133', 'Neodymium-134', 'Neodymium-135', 'Neodymium-136', 'Neodymium-137', 'Neodymium-138', 'Neodymium-139', 'Neodymium-140', 'Neodymium-141', 'Neodymium-142', 'Neodymium-143', 'Neodymium-144', 'Neodymium-145', 'Neodymium-146', 'Neodymium-147', 'Neodymium-148', 'Neodymium-149', 'Neodymium-150', 'Neodymium-151', 'Neodymium-152', 'Neodymium-153', 'Neodymium-154', 'Neodymium-155', 'Neodymium-156', 'Neodymium-157', 'Neodymium-158', 'Neodymium-159', 'Neodymium-160', 'Neodymium-161'],
        isotopeWeights: [124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161]
    },
    {
        initialWeight: 126,
        isotopes: ['Promethium-126', 'Promethium-127', 'Promethium-128', 'Promethium-129', 'Promethium-130', 'Promethium-131', 'Promethium-132', 'Promethium-133', 'Promethium-134', 'Promethium-135', 'Promethium-136', 'Promethium-137', 'Promethium-138', 'Promethium-139', 'Promethium-140', 'Promethium-141', 'Promethium-142', 'Promethium-143', 'Promethium-144', 'Promethium-145', 'Promethium-146', 'Promethium-147', 'Promethium-148', 'Promethium-149', 'Promethium-150', 'Promethium-151', 'Promethium-152', 'Promethium-153', 'Promethium-154', 'Promethium-155', 'Promethium-156', 'Promethium-157', 'Promethium-158', 'Promethium-159', 'Promethium-160', 'Promethium-161', 'Promethium-162', 'Promethium-163', 'Promethium-164', 'Promethium-165', 'Promethium-166'],
        isotopeWeights: [126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166]
    },
    {
        initialWeight: 129,
        isotopes: ['Samarium-129', 'Samarium-130', 'Samarium-131', 'Samarium-132', 'Samarium-133', 'Samarium-134', 'Samarium-135', 'Samarium-136', 'Samarium-137', 'Samarium-138', 'Samarium-139', 'Samarium-140', 'Samarium-141', 'Samarium-142', 'Samarium-143', 'Samarium-144', 'Samarium-145', 'Samarium-146', 'Samarium-147', 'Samarium-148', 'Samarium-149', 'Samarium-150', 'Samarium-151', 'Samarium-152', 'Samarium-153', 'Samarium-154', 'Samarium-155', 'Samarium-156', 'Samarium-157', 'Samarium-158', 'Samarium-159', 'Samarium-160', 'Samarium-161', 'Samarium-162', 'Samarium-162', 'Samarium-163', 'Samarium-164', 'Samarium-165', 'Samarium-166', 'Samarium-167', 'Samarium-168'],
        isotopeWeights: [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168]
    },
    {
        initialWeight: 130,
        isotopes: ['Europium-130', 'Europium-131', 'Europium-132', 'Europium-133', 'Europium-134', 'Europium-135', 'Europium-136', 'Europium-137', 'Europium-138', 'Europium-139', 'Europium-140', 'Europium-141', 'Europium-142', 'Europium-143', 'Europium-144', 'Europium-145', 'Europium-146', 'Europium-147', 'Europium-148', 'Europium-149', 'Europium-150', 'Europium-151', 'Europium-152', 'Europium-153', 'Europium-154', 'Europium-155', 'Europium-156', 'Europium-157', 'Europium-158', 'Europium-159', 'Europium-160', 'Europium-161', 'Europium-162', 'Europium-163', 'Europium-164', 'Europium-165', 'Europium-166', 'Europium-167', 'Europium-168', 'Europium-169', 'Europium-170'],
        isotopeWeights: [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170]
    },
    {
        initialWeight: 135,
        isotopes: ['Gadolinium-135', 'Gadolinium-136', 'Gadolinium-137', 'Gadolinium-138', 'Gadolinium-139', 'Gadolinium-140', 'Gadolinium-141', 'Gadolinium-142', 'Gadolinium-143', 'Gadolinium-144', 'Gadolinium-145', 'Gadolinium-146', 'Gadolinium-147', 'Gadolinium-148', 'Gadolinium-149', 'Gadolinium-150', 'Gadolinium-151', 'Gadolinium-152', 'Gadolinium-153', 'Gadolinium-154', 'Gadolinium-155', 'Gadolinium-156', 'Gadolinium-157', 'Gadolinium-158', 'Gadolinium-159', 'Gadolinium-160', 'Gadolinium-161', 'Gadolinium-162', 'Gadolinium-163', 'Gadolinium-164', 'Gadolinium-165', 'Gadolinium-166', 'Gadolinium-167', 'Gadolinium-168', 'Gadolinium-169', 'Gadolinium-170', 'Gadolinium-171', 'Gadolinium-171', 'Gadolinium-172'],
        isotopeWeights: [135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172]
    },
    {
        initialWeight: 135,
        isotopes: ['Terbium-135', 'Terbium-136', 'Terbium-137', 'Terbium-138', 'Terbium-139', 'Terbium-140', 'Terbium-141', 'Terbium-142', 'Terbium-143', 'Terbium-144', 'Terbium-145', 'Terbium-146', 'Terbium-147', 'Terbium-148', 'Terbium-149', 'Terbium-150', 'Terbium-151', 'Terbium-152', 'Terbium-153', 'Terbium-154', 'Terbium-155', 'Terbium-156', 'Terbium-157', 'Terbium-158', 'Terbium-159', 'Terbium-160', 'Terbium-161', 'Terbium-162', 'Terbium-163', 'Terbium-164', 'Terbium-165', 'Terbium-166', 'Terbium-167', 'Terbium-168', 'Terbium-169', 'Terbium-170', 'Terbium-171', 'Terbium-172'],
        isotopeWeights: [135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172]
    },
    {
        initialWeight: 138,
        isotopes: ['Dysprosium-138', 'Dysprosium-139', 'Dysprosium-140', 'Dysprosium-141', 'Dysprosium-142', 'Dysprosium-143', 'Dysprosium-144', 'Dysprosium-145', 'Dysprosium-146', 'Dysprosium-147', 'Dysprosium-148', 'Dysprosium-149', 'Dysprosium-150', 'Dysprosium-151', 'Dysprosium-152', 'Dysprosium-153', 'Dysprosium-154', 'Dysprosium-155', 'Dysprosium-156', 'Dysprosium-157', 'Dysprosium-158', 'Dysprosium-159', 'Dysprosium-160', 'Dysprosium-161', 'Dysprosium-162', 'Dysprosium-163', 'Dysprosium-164', 'Dysprosium-165', 'Dysprosium-166', 'Dysprosium-167', 'Dysprosium-168', 'Dysprosium-169', 'Dysprosium-170', 'Dysprosium-171', 'Dysprosium-172', 'Dysprosium-173'],
        isotopeWeights: [138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173]
    },
    {
        initialWeight: 140,
        isotopes: ['Holmium-140', 'Holmium-141', 'Holmium-142', 'Holmium-143', 'Holmium-144', 'Holmium-145', 'Holmium-146', 'Holmium-147', 'Holmium-148', 'Holmium-149', 'Holmium-150', 'Holmium-151', 'Holmium-152', 'Holmium-153', 'Holmium-154', 'Holmium-155', 'Holmium-156', 'Holmium-157', 'Holmium-158', 'Holmium-159', 'Holmium-160', 'Holmium-161', 'Holmium-162', 'Holmium-163', 'Holmium-164', 'Holmium-165', 'Holmium-166', 'Holmium-167', 'Holmium-168', 'Holmium-169', 'Holmium-170', 'Holmium-171', 'Holmium-172', 'Holmium-173', 'Holmium-174', 'Holmium-175'],
        isotopeWeights: [140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175]
    },
    {
        initialWeight: 142,
        isotopes: ['Erbium-142', 'Erbium-143', 'Erbium-144', 'Erbium-145', 'Erbium-146', 'Erbium-147', 'Erbium-148', 'Erbium-149', 'Erbium-150', 'Erbium-151', 'Erbium-152', 'Erbium-153', 'Erbium-154', 'Erbium-155', 'Erbium-156', 'Erbium-157', 'Erbium-158', 'Erbium-159', 'Erbium-160', 'Erbium-161', 'Erbium-162', 'Erbium-163', 'Erbium-164', 'Erbium-165', 'Erbium-166', 'Erbium-167', 'Erbium-168', 'Erbium-169', 'Erbium-170', 'Erbium-171', 'Erbium-172', 'Erbium-173', 'Erbium-174', 'Erbium-175', 'Erbium-176', 'Erbium-177', 'Erbium-178', 'Erbium-179', 'Erbium-180'],
        isotopeWeights: [142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180]
    },
    {
        initialWeight: 144,
        isotopes: ['Thulium-144', 'Thulium-145', 'Thulium-146', 'Thulium-147', 'Thulium-148', 'Thulium-149', 'Thulium-150', 'Thulium-151', 'Thulium-152', 'Thulium-153', 'Thulium-154', 'Thulium-155', 'Thulium-156', 'Thulium-157', 'Thulium-158', 'Thulium-159', 'Thulium-160', 'Thulium-161', 'Thulium-162', 'Thulium-163', 'Thulium-164', 'Thulium-165', 'Thulium-166', 'Thulium-167', 'Thulium-168', 'Thulium-169', 'Thulium-170', 'Thulium-171', 'Thulium-172', 'Thulium-173', 'Thulium-174', 'Thulium-175', 'Thulium-176', 'Thulium-177', 'Thulium-178', 'Thulium-179', 'Thulium-180', 'Thulium-181', 'Thulium-182', 'Thulium-183'],
        isotopeWeights: [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183]
    },
    {
        initialWeight: 149,
        isotopes: ['Ytterbium-149', 'Ytterbium-150', 'Ytterbium-151', 'Ytterbium-152', 'Ytterbium-153', 'Ytterbium-154', 'Ytterbium-155', 'Ytterbium-156', 'Ytterbium-157', 'Ytterbium-158', 'Ytterbium-159', 'Ytterbium-160', 'Ytterbium-161', 'Ytterbium-162', 'Ytterbium-163', 'Ytterbium-164', 'Ytterbium-165', 'Ytterbium-166', 'Ytterbium-167', 'Ytterbium-168', 'Ytterbium-169', 'Ytterbium-170', 'Ytterbium-171', 'Ytterbium-172', 'Ytterbium-173', 'Ytterbium-174', 'Ytterbium-175', 'Ytterbium-176', 'Ytterbium-177', 'Ytterbium-178', 'Ytterbium-179', 'Ytterbium-180', 'Ytterbium-181', 'Ytterbium-182', 'Ytterbium-183', 'Ytterbium-184', 'Ytterbium-185', 'Ytterbium-186', 'Ytterbium-187'],
        isotopeWeights: [149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187]
    },
    {
        initialWeight: 149,
        isotopes: ['Lutetium-149', 'Lutetium-150', 'Lutetium-151', 'Lutetium-152', 'Lutetium-153', 'Lutetium-154', 'Lutetium-155', 'Lutetium-156', 'Lutetium-157', 'Lutetium-158', 'Lutetium-159', 'Lutetium-160', 'Lutetium-161', 'Lutetium-162', 'Lutetium-163', 'Lutetium-164', 'Lutetium-165', 'Lutetium-166', 'Lutetium-167', 'Lutetium-168', 'Lutetium-169', 'Lutetium-170', 'Lutetium-171', 'Lutetium-172', 'Lutetium-173', 'Lutetium-174', 'Lutetium-175', 'Lutetium-176', 'Lutetium-177', 'Lutetium-178', 'Lutetium-179', 'Lutetium-180', 'Lutetium-181', 'Lutetium-182', 'Lutetium-183', 'Lutetium-184', 'Lutetium-185', 'Lutetium-186', 'Lutetium-187', 'Lutetium-188', 'Lutetium-189', 'Lutetium-190'],
        isotopeWeights: [149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190]
    },
    {
        initialWeight: 153,
        isotopes: ['Hafnium-153', 'Hafnium-154', 'Hafnium-155', 'Hafnium-156', 'Hafnium-157', 'Hafnium-158', 'Hafnium-159', 'Hafnium-160', 'Hafnium-161', 'Hafnium-162', 'Hafnium-163', 'Hafnium-164', 'Hafnium-165', 'Hafnium-166', 'Hafnium-167', 'Hafnium-168', 'Hafnium-169', 'Hafnium-170', 'Hafnium-171', 'Hafnium-172', 'Hafnium-173', 'Hafnium-174', 'Hafnium-175', 'Hafnium-176', 'Hafnium-177', 'Hafnium-178', 'Hafnium-179', 'Hafnium-180', 'Hafnium-181', 'Hafnium-182', 'Hafnium-183', 'Hafnium-184', 'Hafnium-185', 'Hafnium-186', 'Hafnium-187', 'Hafnium-188', 'Hafnium-189', 'Hafnium-190', 'Hafnium-191', 'Hafnium-192'],
        isotopeWeights: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192]
    },
    {
        initialWeight: 155,
        isotopes: ['Tantalum-155', 'Tantalum-156', 'Tantalum-157', 'Tantalum-158', 'Tantalum-159', 'Tantalum-160', 'Tantalum-161', 'Tantalum-162', 'Tantalum-163', 'Tantalum-164', 'Tantalum-165', 'Tantalum-166', 'Tantalum-167', 'Tantalum-168', 'Tantalum-169', 'Tantalum-170', 'Tantalum-171', 'Tantalum-172', 'Tantalum-173', 'Tantalum-174', 'Tantalum-175', 'Tantalum-176', 'Tantalum-177', 'Tantalum-178', 'Tantalum-179', 'Tantalum-180', 'Tantalum-181', 'Tantalum-182', 'Tantalum-183', 'Tantalum-184', 'Tantalum-185', 'Tantalum-186', 'Tantalum-187', 'Tantalum-188', 'Tantalum-189', 'Tantalum-190'],
        isotopeWeights: [155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190]
    },
    {
        initialWeight: 156,
        isotopes: ['Tungsten-156', 'Tungsten-157', 'Tungsten-158', 'Tungsten-159', 'Tungsten-160', 'Tungsten-161', 'Tungsten-162', 'Tungsten-163', 'Tungsten-164', 'Tungsten-165', 'Tungsten-166', 'Tungsten-167', 'Tungsten-168', 'Tungsten-169', 'Tungsten-170', 'Tungsten-171', 'Tungsten-172', 'Tungsten-173', 'Tungsten-174', 'Tungsten-175', 'Tungsten-176', 'Tungsten-177', 'Tungsten-178', 'Tungsten-179', 'Tungsten-180', 'Tungsten-181', 'Tungsten-182', 'Tungsten-183', 'Tungsten-184', 'Tungsten-185', 'Tungsten-186', 'Tungsten-187', 'Tungsten-188', 'Tungsten-189', 'Tungsten-190', 'Tungsten-191', 'Tungsten-192'],
        isotopeWeights: [156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192]
    },
    {
        initialWeight: 159,
        isotopes: ['Rhenium-159', 'Rhenium-160', 'Rhenium-161', 'Rhenium-162', 'Rhenium-163', 'Rhenium-164', 'Rhenium-165', 'Rhenium-166', 'Rhenium-167', 'Rhenium-168', 'Rhenium-169', 'Rhenium-170', 'Rhenium-171', 'Rhenium-172', 'Rhenium-173', 'Rhenium-174', 'Rhenium-175', 'Rhenium-176', 'Rhenium-177', 'Rhenium-178', 'Rhenium-179', 'Rhenium-180', 'Rhenium-181', 'Rhenium-182', 'Rhenium-183', 'Rhenium-184', 'Rhenium-185', 'Rhenium-186', 'Rhenium-187', 'Rhenium-188', 'Rhenium-189', 'Rhenium-190', 'Rhenium-191', 'Rhenium-192', 'Rhenium-193', 'Rhenium-194'],
        isotopeWeights: [159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194]
    },
    {
        initialWeight: 160,
        isotopes: ['Osmium-160', 'Osmium-161', 'Osmium-162', 'Osmium-163', 'Osmium-164', 'Osmium-165', 'Osmium-166', 'Osmium-167', 'Osmium-168', 'Osmium-169', 'Osmium-170', 'Osmium-171', 'Osmium-172', 'Osmium-173', 'Osmium-174', 'Osmium-175', 'Osmium-176', 'Osmium-177', 'Osmium-178', 'Osmium-179', 'Osmium-180', 'Osmium-181', 'Osmium-182', 'Osmium-183', 'Osmium-184', 'Osmium-185', 'Osmium-186', 'Osmium-187', 'Osmium-188', 'Osmium-189', 'Osmium-190', 'Osmium-191', 'Osmium-192', 'Osmium-193', 'Osmium-194', 'Osmium-195', 'Osmium-196', 'Osmium-197', 'Osmium-198', 'Osmium-199', 'Osmium-200', 'Osmium-201', 'Osmium-202', 'Osmium-203'],
        isotopeWeights: [160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203]
    },
    {
        initialWeight: 164,
        isotopes: ['Iridium-164', 'Iridium-165', 'Iridium-166', 'Iridium-167', 'Iridium-168', 'Iridium-169', 'Iridium-170', 'Iridium-171', 'Iridium-172', 'Iridium-173', 'Iridium-174', 'Iridium-175', 'Iridium-176', 'Iridium-177', 'Iridium-178', 'Iridium-179', 'Iridium-180', 'Iridium-181', 'Iridium-182', 'Iridium-183', 'Iridium-184', 'Iridium-185', 'Iridium-186', 'Iridium-187', 'Iridium-188', 'Iridium-189', 'Iridium-190', 'Iridium-191', 'Iridium-192', 'Iridium-193', 'Iridium-194', 'Iridium-195', 'Iridium-196', 'Iridium-197', 'Iridium-198', 'Iridium-199', 'Iridium-200', 'Iridium-201', 'Iridium-202'],
        isotopeWeights: [164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202]
    },
    {
        initialWeight: 165,
        isotopes: ['Platinum-165', 'Platinum-166', 'Platinum-167', 'Platinum-168', 'Platinum-169', 'Platinum-170', 'Platinum-171', 'Platinum-172', 'Platinum-173', 'Platinum-174', 'Platinum-175', 'Platinum-176', 'Platinum-177', 'Platinum-178', 'Platinum-179', 'Platinum-180', 'Platinum-181', 'Platinum-182', 'Platinum-183', 'Platinum-184', 'Platinum-185', 'Platinum-186', 'Platinum-187', 'Platinum-188', 'Platinum-189', 'Platinum-190', 'Platinum-191', 'Platinum-192', 'Platinum-193', 'Platinum-194', 'Platinum-195', 'Platinum-196', 'Platinum-197', 'Platinum-198', 'Platinum-199', 'Platinum-200', 'Platinum-201', 'Platinum-202', 'Platinum-203', 'Platinum-204', 'Platinum-205', 'Platinum-206', 'Platinum-207', 'Platinum-208'],
        isotopeWeights: [165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208]
    },
    {
        initialWeight: 170,
        isotopes: ['Gold-170', 'Gold-171', 'Gold-172', 'Gold-173', 'Gold-174', 'Gold-175', 'Gold-176', 'Gold-177', 'Gold-178', 'Gold-179', 'Gold-180', 'Gold-181', 'Gold-182', 'Gold-183', 'Gold-184', 'Gold-185', 'Gold-186', 'Gold-187', 'Gold-188', 'Gold-189', 'Gold-190', 'Gold-191', 'Gold-192', 'Gold-193', 'Gold-194', 'Gold-195', 'Gold-196', 'Gold-197', 'Gold-198', 'Gold-199', 'Gold-200', 'Gold-201', 'Gold-202', 'Gold-203', 'Gold-204', 'Gold-205', 'Gold-206', 'Gold-207', 'Gold-208', 'Gold-209', 'Gold-210'],
        isotopeWeights: [170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210]
    },
    {
        initialWeight: 170,
        isotopes: ['Mercury-170', 'Mercury-171', 'Mercury-172', 'Mercury-173', 'Mercury-174', 'Mercury-175', 'Mercury-176', 'Mercury-177', 'Mercury-178', 'Mercury-179', 'Mercury-180', 'Mercury-181', 'Mercury-182', 'Mercury-183', 'Mercury-184', 'Mercury-185', 'Mercury-186', 'Mercury-187', 'Mercury-188', 'Mercury-189', 'Mercury-190', 'Mercury-191', 'Mercury-192', 'Mercury-193', 'Mercury-194', 'Mercury-195', 'Mercury-196', 'Mercury-197', 'Mercury-198', 'Mercury-199', 'Mercury-200', 'Mercury-201', 'Mercury-202', 'Mercury-203', 'Mercury-204', 'Mercury-205', 'Mercury-206', 'Mercury-207', 'Mercury-208', 'Mercury-209', 'Mercury-210', 'Mercury-211', 'Mercury-212', 'Mercury-213', 'Mercury-214', 'Mercury-215', 'Mercury-216'],
        isotopeWeights: [170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216]
    },
    {
        initialWeight: 176,
        isotopes: ['Thallium-176', 'Thallium-177', 'Thallium-178', 'Thallium-179', 'Thallium-180', 'Thallium-181', 'Thallium-182', 'Thallium-183', 'Thallium-184', 'Thallium-185', 'Thallium-186', 'Thallium-187', 'Thallium-188', 'Thallium-189', 'Thallium-190', 'Thallium-191', 'Thallium-192', 'Thallium-193', 'Thallium-194', 'Thallium-195', 'Thallium-196', 'Thallium-197', 'Thallium-198', 'Thallium-199', 'Thallium-200', 'Thallium-201', 'Thallium-202', 'Thallium-203', 'Thallium-204', 'Thallium-205', 'Thallium-206 (Radium E)', 'Thallium-207 (Actinium C)', 'Thallium-208 (Thorium C")', 'Thallium-209', 'Thallium-210 (Radium C")', 'Thallium-211', 'Thallium-212', 'Thallium-213', 'Thallium-214', 'Thallium-215', 'Thallium-216'],
        isotopeWeights: [176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216]
    },
    {
        initialWeight: 178,
        isotopes: ['Lead-178', 'Lead-179', 'Lead-180', 'Lead-181', 'Lead-182', 'Lead-183', 'Lead-184', 'Lead-185', 'Lead-186', 'Lead-187', 'Lead-188', 'Lead-189', 'Lead-190', 'Lead-191', 'Lead-192', 'Lead-193', 'Lead-194', 'Lead-195', 'Lead-196', 'Lead-197', 'Lead-198', 'Lead-199', 'Lead-200', 'Lead-201', 'Lead-202', 'Lead-203', 'Lead-204', 'Lead-205', 'Lead-206 (Radium G)', 'Lead-207 (Actinium D)', 'Lead-208 (Thorium D)', 'Lead-209', 'Lead-210 (Radium D/Radiolead/Radio-lead)', 'Lead-211 (Actinium B)', 'Lead-212 (Thorium B)', 'Lead-213', 'Lead-214 (Radium B)', 'Lead-215', 'Lead-216', 'Lead-217', 'Lead-218'],
        isotopeWeights: [178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218]
    },
    {
        initialWeight: 184,
        isotopes: ['Bismuth-184', 'Bismuth-185', 'Bismuth-186', 'Bismuth-187', 'Bismuth-188', 'Bismuth-189', 'Bismuth-190', 'Bismuth-191', 'Bismuth-192', 'Bismuth-193', 'Bismuth-194', 'Bismuth-195', 'Bismuth-196', 'Bismuth-197', 'Bismuth-198', 'Bismuth-199', 'Bismuth-200', 'Bismuth-201', 'Bismuth-202', 'Bismuth-203', 'Bismuth-204', 'Bismuth-205', 'Bismuth-206', 'Bismuth-207', 'Bismuth-208', 'Bismuth-209', 'Bismuth-210 (Radium E)', 'Bismuth-211 (Actinium C)', 'Bismuth-212 (Thorium C)', 'Bismuth-213', 'Bismuth-214 (Radium C)', 'Bismuth-215', 'Bismuth-216', 'Bismuth-217', 'Bismuth-218', 'Bismuth-219', 'Bismuth-220', 'Bismuth-221', 'Bismuth-222', 'Bismuth-223', 'Bismuth-224'],
        isotopeWeights: [184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224]
    },
    {
        initialWeight: 186,
        isotopes: ['Polonium-186', 'Polonium-187', 'Polonium-188', 'Polonium-189', 'Polonium-190', 'Polonium-191', 'Polonium-192', 'Polonium-193', 'Polonium-194', 'Polonium-195', 'Polonium-196', 'Polonium-197', 'Polonium-198', 'Polonium-199', 'Polonium-200', 'Polonium-201', 'Polonium-202', 'Polonium-203', 'Polonium-204', 'Polonium-205', 'Polonium-206', 'Polonium-207', 'Polonium-208', 'Polonium-209', 'Polonium-210 (Radium F)', 'Polonium-211 (Actinium C\')', 'Polonium-212 (Thorium C\')', 'Polonium-213', 'Polonium-214 (Radium C\')', 'Polonium-215 (Actinium A)', 'Polonium-216 (Thorium A)', 'Polonium-217', 'Polonium-218 (Radium A)', 'Polonium-219', 'Polonium-220', 'Polonium-221', 'Polonium-222', 'Polonium-223', 'Polonium-224', 'Polonium-225', 'Polonium-226', 'Polonium-227'],
        isotopeWeights: [186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227]
    },
    {
        initialWeight: 188,
        isotopes: ['Astatine-188', 'Astatine-190', 'Astatine-191', 'Astatine-192', 'Astatine-193', 'Astatine-194', 'Astatine-195', 'Astatine-196', 'Astatine-197', 'Astatine-198', 'Astatine-199', 'Astatine-200', 'Astatine-201', 'Astatine-202', 'Astatine-203', 'Astatine-204', 'Astatine-205', 'Astatine-206', 'Astatine-207', 'Astatine-208', 'Astatine-209', 'Astatine-210', 'Astatine-211', 'Astatine-212', 'Astatine-213', 'Astatine-214', 'Astatine-215', 'Astatine-216', 'Astatine-217', 'Astatine-218', 'Astatine-219', 'Astatine-220', 'Astatine-221', 'Astatine-222', 'Astatine-223', 'Astatine-224', 'Astatine-225', 'Astatine-226', 'Astatine-227', 'Astatine-228', 'Astatine-229'],
        isotopeWeights: [188, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229]
    },
    {
        initialWeight: 193,
        isotopes: ['Radon-193', 'Radon-194', 'Radon-195', 'Radon-196', 'Radon-197', 'Radon-198', 'Radon-199', 'Radon-200', 'Radon-201', 'Radon-202', 'Radon-203', 'Radon-204', 'Radon-205', 'Radon-206', 'Radon-207', 'Radon-208', 'Radon-209', 'Radon-210', 'Radon-211', 'Radon-212', 'Radon-213', 'Radon-214', 'Radon-215', 'Radon-216', 'Radon-217', 'Radon-218', 'Radon-219 (Actinon/Actinium emanation)', 'Radon-220 (Thoron/Thorium emanation)', 'Radon-221', 'Radon-222 (Radon/Radium emanation/Emanation/Emanon/Niton)', 'Radon-223', 'Radon-224', 'Radon-225', 'Radon-226', 'Radon-227', 'Radon-228', 'Radon-229', 'Radon-230', 'Radon-231'],
        isotopeWeights: [193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231]
    },
    {
        initialWeight: 197,
        isotopes: ['Francium-197', 'Francium-198', 'Francium-199', 'Francium-200', 'Francium-201', 'Francium-202', 'Francium-203', 'Francium-204', 'Francium-205', 'Francium-206', 'Francium-207', 'Francium-208', 'Francium-209', 'Francium-210', 'Francium-211', 'Francium-212', 'Francium-213', 'Francium-214', 'Francium-215', 'Francium-216', 'Francium-217', 'Francium-218', 'Francium-219', 'Francium-220', 'Francium-221', 'Francium-222', 'Francium-223 (Actinium K)', 'Francium-224', 'Francium-225', 'Francium-226', 'Francium-227', 'Francium-228', 'Francium-229', 'Francium-230', 'Francium-231', 'Francium-232', 'Francium-233'],
        isotopeWeights: [197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233]
    },
    {
        initialWeight: 201,
        isotopes: ['Radium-201', 'Radium-202', 'Radium-203', 'Radium-204', 'Radium-205', 'Radium-206', 'Radium-207', 'Radium-208', 'Radium-209', 'Radium-210', 'Radium-211', 'Radium-212', 'Radium-213', 'Radium-214', 'Radium-215', 'Radium-216', 'Radium-217', 'Radium-218', 'Radium-219', 'Radium-220', 'Radium-221', 'Radium-222', 'Radium-223 (Actinium X)', 'Radium-224 (Thorium X)', 'Radium-225', 'Radium-226 (Radium)', 'Radium-227', 'Radium-228 (Mesothorium 1)', 'Radium-229', 'Radium-230', 'Radium-231', 'Radium-232', 'Radium-233', 'Radium-234'],
        isotopeWeights: [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234]
    },
    {
        initialWeight: 203,
        isotopes: ['Actinium-203', 'Actinium-204', 'Actinium-205', 'Actinium-206', 'Actinium-207', 'Actinium-208', 'Actinium-209', 'Actinium-210', 'Actinium-211', 'Actinium-212', 'Actinium-213', 'Actinium-214', 'Actinium-215', 'Actinium-216', 'Actinium-217', 'Actinium-218', 'Actinium-219', 'Actinium-220', 'Actinium-221', 'Actinium-222', 'Actinium-223', 'Actinium-224', 'Actinium-225', 'Actinium-226', 'Actinium-227 (Actinium)', 'Actinium-228 (Mesothorium 2)', 'Actinium-229', 'Actinium-230', 'Actinium-231', 'Actinium-232', 'Actinium-233', 'Actinium-234', 'Actinium-235', 'Actinium-236'],
        isotopeWeights: [203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236]
    },
    {
        initialWeight: 207,
        isotopes: ['Thorium-207', 'Thorium-208', 'Thorium-209', 'Thorium-210', 'Thorium-211', 'Thorium-212', 'Thorium-213', 'Thorium-214', 'Thorium-215', 'Thorium-216', 'Thorium-217', 'Thorium-218', 'Thorium-219', 'Thorium-220', 'Thorium-221', 'Thorium-222', 'Thorium-223', 'Thorium-224', 'Thorium-225', 'Thorium-226', 'Thorium-227 (Radioactinium)', 'Thorium-228 (Radiothorium)', 'Thorium-229', 'Thorium-230 (Ionium)', 'Thorium-231 (Uranium Y)', 'Thorium-232 (Thorium)', 'Thorium-233', 'Thorium-234 (Uranium X₁)', 'Thorium-235', 'Thorium-236', 'Thorium-237', 'Thorium-238'],
        isotopeWeights: [207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238]
    },
    {
        initialWeight: 211,
        isotopes: ['Protactinium-211', 'Protactinium-212', 'Protactinium-213', 'Protactinium-214', 'Protactinium-215', 'Protactinium-216', 'Protactinium-217', 'Protactinium-218', 'Protactinium-219', 'Protactinium-220', 'Protactinium-221', 'Protactinium-222', 'Protactinium-223', 'Protactinium-224', 'Protactinium-225', 'Protactinium-226', 'Protactinium-227', 'Protactinium-228', 'Protactinium-229', 'Protactinium-230', 'Protactinium-231 (Protoactinium)', 'Protactinium-232', 'Protactinium-233', 'Protactinium-234(m) (Uranium Z/Uranium X₂/Brevium)', 'Protactinium-235', 'Protactinium-236', 'Protactinium-237', 'Protactinium-238', 'Protactinium-239'],
        isotopeWeights: [211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239]
    },
    {
        initialWeight: 214,
        isotopes: ['Uranium-214', 'Uranium-215', 'Uranium-216', 'Uranium-217', 'Uranium-218', 'Uranium-219', 'Uranium-221', 'Uranium-222', 'Uranium-223', 'Uranium-224', 'Uranium-225', 'Uranium-226', 'Uranium-227', 'Uranium-228', 'Uranium-229', 'Uranium-230', 'Uranium-231', 'Uranium-232', 'Uranium-233', 'Uranium-234 (Uranium II)', 'Uranium-235 (Actin Uranium/Actino-Uranium)', 'Uranium-236 (Thoruranium)', 'Uranium-237', 'Uranium-238 (Uranium I)', 'Uranium-239', 'Uranium-240', 'Uranium-241', 'Uranium-242'],
        isotopeWeights: [214, 215, 216, 217, 218, 219, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242]
    },
    {
        initialWeight: 219,
        isotopes: ['Neptunium-219', 'Neptunium-220', 'Neptunium-222', 'Neptunium-223', 'Neptunium-234', 'Neptunium-235', 'Neptunium-236', 'Neptunium-237', 'Neptunium-238', 'Neptunium-239', 'Neptunium-240', 'Neptunium-241', 'Neptunium-242', 'Neptunium-243', 'Neptunium-244'],
        isotopeWeights: [219, 220, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242]
    },
    {
        initialWeight: 228,
        isotopes: ['Plutonium-228', 'Plutonium-229', 'Plutonium-230', 'Plutonium-231', 'Plutonium-232', 'Plutonium-233', 'Plutonium-234', 'Plutonium-235', 'Plutonium-236', 'Plutonium-237', 'Plutonium-238', 'Plutonium-239', 'Plutonium-240', 'Plutonium-241', 'Plutonium-242', 'Plutonium-243', 'Plutonium-244', 'Plutonium-245', 'Plutonium-246', 'Plutonium-247'],
        isotopeWeights: [228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247]
    },
    {
        initialWeight: 223,
        isotopes: ['Americium-223', 'Americium-229', 'Americium-230', 'Americium-232', 'Americium-233', 'Americium-234', 'Americium-235', 'Americium-236', 'Americium-237', 'Americium-238', 'Americium-239', 'Americium-240', 'Americium-241', 'Americium-242', 'Americium-243', 'Americium-244', 'Americium-245', 'Americium-246', 'Americium-247'],
        isotopeWeights: [223, 229, 230, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247]
    },
    {
        initialWeight: 233,
        isotopes: ['Curium-233', 'Curium-234', 'Curium-235', 'Curium-236', 'Curium-237', 'Curium-238', 'Curium-239', 'Curium-240', 'Curium-241', 'Curium-242', 'Curium-243', 'Curium-244', 'Curium-245', 'Curium-246', 'Curium-247', 'Curium-248', 'Curium-249', 'Curium-250', 'Curium-251'],
        isotopeWeights: [233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251]
    },
    {
        initialWeight: 233,
        isotopes: ['Berkelium-233', 'Berkelium-234', 'Berkelium-236', 'Berkelium-238', 'Berkelium-239', 'Berkelium-240', 'Berkelium-241', 'Berkelium-242', 'Berkelium-243', 'Berkelium-244', 'Berkelium-245', 'Berkelium-246', 'Berkelium-247', 'Berkelium-248', 'Berkelium-249', 'Berkelium-250', 'Berkelium-251', 'Berkelium-252', 'Berkelium-253'],
        isotopeWeights: [233, 234, 236, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253]
    },
    {
        initialWeight: 237,
        isotopes: ['Californium-237', 'Californium-238', 'Californium-239', 'Californium-240', 'Californium-241', 'Californium-242', 'Californium-243', 'Californium-244', 'Californium-245', 'Californium-246', 'Californium-247', 'Californium-248', 'Californium-249', 'Californium-250', 'Californium-251', 'Californium-252', 'Californium-253', 'Californium-254', 'Californium-255', 'Californium-256'],
        isotopeWeights: [237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256]
    },
    {
        initialWeight: 240,
        isotopes: ['Einsteinium-240', 'Einsteinium-241', 'Einsteinium-242', 'Einsteinium-243', 'Einsteinium-244', 'Einsteinium-245', 'Einsteinium-246', 'Einsteinium-247', 'Einsteinium-248', 'Einsteinium-249', 'Einsteinium-250', 'Einsteinium-251', 'Einsteinium-252', 'Einsteinium-253', 'Einsteinium-254', 'Einsteinium-255', 'Einsteinium-256', 'Einsteinium-257'],
        isotopeWeights: [240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257]
    },
    {
        initialWeight: 241,
        isotopes: ['Fermium-241', 'Fermium-242', 'Fermium-243', 'Fermium-244', 'Fermium-245', 'Fermium-246', 'Fermium-247', 'Fermium-248', 'Fermium-249', 'Fermium-250', 'Fermium-251', 'Fermium-252', 'Fermium-253', 'Fermium-254', 'Fermium-255', 'Fermium-256', 'Fermium-257', 'Fermium-258', 'Fermium-259'],
        isotopeWeights: [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259]
    },
    {
        initialWeight: 244,
        isotopes: ['Mendelevium-244', 'Mendelevium-245', 'Mendelevium-246', 'Mendelevium-247', 'Mendelevium-248', 'Mendelevium-249', 'Mendelevium-250', 'Mendelevium-251', 'Mendelevium-252', 'Mendelevium-253', 'Mendelevium-254', 'Mendelevium-255', 'Mendelevium-256', 'Mendelevium-257', 'Mendelevium-258', 'Mendelevium-259', 'Mendelevium-260'],
        isotopeWeights: [244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260]
    },
    {
        initialWeight: 248,
        isotopes: ['Nobelium-248', 'Nobelium-249', 'Nobelium-250', 'Nobelium-251', 'Nobelium-252', 'Nobelium-253', 'Nobelium-254', 'Nobelium-255', 'Nobelium-256', 'Nobelium-257', 'Nobelium-258', 'Nobelium-259', 'Nobelium-260', 'Nobelium-262'],
        isotopeWeights: [248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 262]
    },
    {
        initialWeight: 251,
        isotopes: ['Lawrencium-251', 'Lawrencium-252', 'Lawrencium-253', 'Lawrencium-254', 'Lawrencium-255', 'Lawrencium-256', 'Lawrencium-257', 'Lawrencium-258', 'Lawrencium-259', 'Lawrencium-260', 'Lawrencium-261', 'Lawrencium-262', 'Lawrencium-264', 'Lawrencium-266'],
        isotopeWeights: [251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 264, 266]
    },
    {
        initialWeight: 253,
        isotopes: ['Rutherfordium-253', 'Rutherfordium-254', 'Rutherfordium-255', 'Rutherfordium-256', 'Rutherfordium-257', 'Rutherfordium-258', 'Rutherfordium-259', 'Rutherfordium-260', 'Rutherfordium-261', 'Rutherfordium-262', 'Rutherfordium-263', 'Rutherfordium-265', 'Rutherfordium-266', 'Rutherfordium-267', 'Rutherfordium-268', 'Rutherfordium-270'],
        isotopeWeights: [253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 265, 266, 267, 268, 270]
    },
    {
        initialWeight: 255,
        isotopes: ['Dubnium-255', 'Dubnium-256', 'Dubnium-257', 'Dubnium-258', 'Dubnium-259', 'Dubnium-260', 'Dubnium-261', 'Dubnium-262', 'Dubnium-263', 'Dubnium-266', 'Dubnium-267', 'Dubnium-268', 'Dubnium-270'],
        isotopeWeights: [255, 256, 257, 258, 259, 260, 261, 262, 263, 266, 267, 268, 270]
    },
    {
        initialWeight: 258,
        isotopes: ['Seaborgium-258', 'Seaborgium-259', 'Seaborgium-260', 'Seaborgium-261', 'Seaborgium-262', 'Seaborgium-263', 'Seaborgium-264', 'Seaborgium-265', 'Seaborgium-266', 'Seaborgium-267', 'Seaborgium-268', 'Seaborgium-269', 'Seaborgium-271'],
        isotopeWeights: [258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 271]
    },
    {
        initialWeight: 260,
        isotopes: ['Bohrium-260', 'Bohrium-261', 'Bohrium-262', 'Bohrium-264', 'Bohrium-265', 'Bohrium-266', 'Bohrium-267', 'Bohrium-270', 'Bohrium-271', 'Bohrium-272', 'Bohrium-274', 'Bohrium-278'],
        isotopeWeights: [260, 261, 262, 264, 265, 266, 267, 270, 271, 272, 274, 278]
    },
    {
        initialWeight: 263,
        isotopes: ['Hassium-263', 'Hassium-264', 'Hassium-265', 'Hassium-266', 'Hassium-267', 'Hassium-268', 'Hassium-269', 'Hassium-270', 'Hassium-271', 'Hassium-272', 'Hassium-273', 'Hassium-275', 'Hassium-277', 'Hassium-278'],
        isotopeWeights: [263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 275, 277, 278]
    },
    {
        initialWeight: 266,
        isotopes: ['Meitnerium-266', 'Meitnerium-268', 'Meitnerium-270', 'Meitnerium-274', 'Meitnerium-275', 'Meitnerium-276', 'Meitnerium-277', 'Meitnerium-278', 'Meitnerium-282'],
        isotopeWeights: [266, 268, 270, 274, 275, 276, 277, 278, 282]
    },
    {
        initialWeight: 267,
        isotopes: ['Darmstadtium-267', 'Darmstadtium-269', 'Darmstadtium-270', 'Darmstadtium-271', 'Darmstadtium-273', 'Darmstadtium-275', 'Darmstadtium-276', 'Darmstadtium-277', 'Darmstadtium-279', 'Darmstadtium-280', 'Darmstadtium-281', 'Darmstadtium-282'],
        isotopeWeights: [267, 269, 270, 271, 273, 275, 276, 277, 279, 280, 281, 282]
    },
    {
        initialWeight: 272,
        isotopes: ['Roentgenium-272', 'Roentgenium-274', 'Roentgenium-278', 'Roentgenium-279', 'Roentgenium-280', 'Roentgenium-281', 'Roentgenium-282', 'Roentgenium-283', 'Roentgenium-286'],
        isotopeWeights: [272, 274, 278, 279, 280, 281, 282, 283, 286]
    },
    {
        initialWeight: 277,
        isotopes: ['Copernicium-277', 'Copernicium-281', 'Copernicium-282', 'Copernicium-283', 'Copernicium-284', 'Copernicium-285', 'Copernicium-286'],
        isotopeWeights: [277, 281, 282, 283, 284, 285, 286]
    },
    {
        initialWeight: 278,
        isotopes: ['Nihonium-278', 'Nihonium-282', 'Nihonium-283', 'Nihonium-284', 'Nihonium-285', 'Nihonium-286', 'Nihonium-287', 'Nihonium-290'],
        isotopeWeights: [278, 282, 283, 284, 285, 286, 287, 290]
    },
    {
        initialWeight: 284,
        isotopes: ['Flerovium-284', 'Flerovium-285', 'Flerovium-286', 'Flerovium-287', 'Flerovium-288', 'Flerovium-289', 'Flerovium-290'],
        isotopeWeights: [284, 285, 286, 287, 288, 289, 290]
    },
    {
        initialWeight: 286,
        isotopes: ['Moscovium-286', 'Moscovium-287', 'Moscovium-288', 'Moscovium-289', 'Moscovium-290'],
        isotopeWeights: [286, 287, 288, 289, 290]
    },
    {
        initialWeight: 288,
        isotopes: ['Livermorium-288', 'Livermorium-290', 'Livermorium-291', 'Livermorium-292', 'Livermorium-293', 'Livermorium-294'],
        isotopeWeights: [288, 290, 291, 292, 293, 294]
    },
    {
        initialWeight: 293,
        isotopes: ['Tennessine-293', 'Tennessine-294'],
        isotopeWeights: [293, 294]
    },
    {
        initialWeight: 294,
        isotopes: ['Oganesson-294'],
        isotopeWeights: [294]
    }
];
class Element {
    constructor({initialWeight, isotopes, isotopeWeights}) {
        this.startingWeight = initialWeight
        this.atomicWeight = initialWeight;
        this.tickTime = 1000;
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
        this.weight = document.createElement('span');
        this.productionPerSecond = document.createElement('span');
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
        this.container.appendChild(this.productionPerSecond);
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
        this.isotope_price.innerText = this.isotopeWeights[this.currentIsotope + 1] ? `AW: ${this.isotopePrice} [${this.currentIsotope}/${this.isotopeWeights.length - 1}]` : `Max Upgrade [${this.currentIsotope}/${this.isotopeWeights.length - 1}]`;
        if (this.nextUnlocked) this.next_element_price.innerText = 'Unlocked';
        else this.next_element_price.innerText = `AW: ${this.nextElementPrice}`;
        this.setProductionPerSecond();
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
            this.tick_time_button.disabled = this.tickTime <= 1 || atomicWeight < this.tickTimePrice;
            this.isotope_button.disabled = this.currentIsotope >= this.isotopes.length - 1 || atomicWeight < this.isotopePrice;
            this.next_element_button.disabled = this.nextUnlocked || atomicWeight < this.nextElementPrice;
        }, 0);
    }
    setProductionPerSecond() {
        let production = (1000 / this.tickTime) * this.atomicWeight;
        this.productionPerSecond.innerText = `+${production.toFixed(4)}/s`
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
    return Math.floor(baseWeight * Math.exp((Math.log(1000) / 999) * currentUpgrade));
}
function isotopePriceScaling(baseWeight, currentUpgrade, isotopeAmount) {
    return Math.floor(baseWeight * Math.exp(Math.log(baseWeight * Math.pow(isotopeAmount.length, 2)) / (isotopeAmount.length - 1.9) * currentUpgrade));
}