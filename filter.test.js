import { test } from '@jest/globals';
import { ourFilter } from './filter.js';

test("is the number bigger than 5", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const predicateFn = element => element > 5;
    expect(ourFilter(numbers, predicateFn)).toEqual([6, 7, 8, 9, 10])
})

test("split string into indiviudal letters and then filters out lowercase", () => {
    const letters = "AbcDeFgHI";
    const predicateFn = char => char.toUpperCase() === char;
    expect(ourFilter(letters.split(""), predicateFn)).toEqual(["A", "D", "F", "H", "I"])
})

test("if object contains value then return", () => {
    const vehicles = [{type: "car", name: "Audi"},
        {type: "car", name: "Honda"},
        {type: "bicycle", name: "Supra"},
        {type: "car", name: "Mercedes"},
        {type: "motorbike", name: "Suzuki"},
        {type: "motorbike", name: "Ducartiti"},
        {type: "plane", name: "47"}
    ];
    const predicateFn = element => element.type === "car";
    expect(ourFilter(vehicles, predicateFn)).toEqual([{type: "car", name: "Audi"}, {type: "car", name: "Honda"}, {type: "car", name: "Mercedes"}])
})