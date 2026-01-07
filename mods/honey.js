elements.honey = {
    color: "#ffd30fff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 6000,
    reactions: {
        "water": {elem1:null, elem2: honey_water, chance:0.1},
        "salt_water": {elem1:null, elem2: honey_water, chance:0.1},
    }
}

elements.honey_water = {
    color: "#ffd30fff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 30000
}
