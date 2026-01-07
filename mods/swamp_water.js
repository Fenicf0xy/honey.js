elements.swamp_water = {
    color: "#9e6a00ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 120000,
    reactions: {
        "water": {elem1:null, elem2: swamp_water, chance:0.1},
        "salt_water": {elem1:null, elem2: swamp_water, chance:0.1},
    }
}
