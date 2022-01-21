const target = document.getElementById("target");
let array = ["développeur", "streamer", "gameur"];
let worldIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[worldIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    }, 2800); //duré d'effacement du mot
};

const loop = () => {
    setTimeout(() => {
        if (worldIndex >= array.length) {
            worldIndex = 0;
            letterIndex = 0;
            loop();
        } else if (letterIndex < array[worldIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            worldIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800); //durée affichage du mot

        }
    }, 60); //vitesse d'ecriture des lettres
};
loop();
