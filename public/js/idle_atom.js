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