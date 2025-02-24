const prompt = require("prompt-sync")({ sigint: true });

let list = [12, 3, 5, 7, 1, 22, 47, 100];

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
        }
    }
}

