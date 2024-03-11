// javascript 

const getNewHadith = document.getElementById('hadis');
const getNewHadithBtn = document.getElementById('btn');
const getNaratorName = document.getElementById('narrator');
const soundOn = document.querySelector('.sound-on');
const soundOff = document.querySelector('.sound-off'); // Added period before 'sound-off'

let speech = null;

async function fetchRandomHadith() {
    try {
        getNewHadithBtn.innerHTML = "Loading...";
        const response = await fetch('https://random-hadith-generator.vercel.app/bukhari/');
        const data = await response.json();
        getNewHadith.innerText = data.data.hadith_english;
        getNaratorName.innerText = data.data.header;
        getNewHadithBtn.innerText = 'New Hadith';
    } catch (error) {
        getNewHadithBtn.innerText = 'Failed to load Hadith';
    }
}

soundOn.addEventListener("click", () => {
    if (speech === null) {
        speech = new SpeechSynthesisUtterance(getNewHadith.innerText);
        speech.onend = () => {
            
        };
        speechSynthesis.speak(speech);
    }
});

/*soundOff.addEventListener("click", () => {
    if (speech !== null) {
        speechSynthesis.cancel();
    }
});*/

getNewHadithBtn.addEventListener("click", fetchRandomHadith);
