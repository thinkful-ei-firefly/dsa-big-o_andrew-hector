'use strict';

let obj = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: ['Steve', 'Kyle', 'Andra'],
            Zhao: ['Richie', 'Sofia','Jen']
        },
        Schrage: {
            VanDyck: ['Sabrina', 'Michelle', 'Josh'],
            Swain: ['Blanch', 'Tom', 'Joe']

        },
        Sandberg: {
            Goler:['Eddie', 'Julie', 'Annie'],
            Hernandez: ['Rowi', 'Inga', 'Morgan'],
            Moissinac: ['Amy', 'Chuck', 'Vinni'],
            Kelley: ['Eric', 'Ana', 'Wes']
        }
    }
};

function orgChart(obj, step=0) {
    console.log(obj.key[0]);
}

orgChart(obj);
