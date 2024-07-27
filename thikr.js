let position = 0;
let container;
let data;
let mainContainer = document.querySelector('.container');
// Load data and update section 1
async function getData_01() {
    let response = await fetch("thikr.json");
    data = await response.json();
    pushDataToHtml_01();
    console.log(data);
}

// Update section 1 with data
function pushDataToHtml_01() {
    container = document.getElementById('section1');
    container.innerHTML = "";
    data.forEach((element, index) => {
        container.innerHTML += `
        <div class="content">
            <p>${element.thikr}</p>
            <div onclick="decrease(this)" id="cnt" class="counter">
                <p class="nbr">${element.repitition.toString().padStart(2, '0')}</p>
                <button id="btn" onclick="reset(this, ${index})"><i class="bx bx-refresh"></i></button>
                <span class="initial-repitition" style="display:none;">${element.repitition}</span>
            </div>
        </div>
        `;
        position++;
    });
}

// Load data and update section 2
async function getData_02() {
    let response = await fetch("thikr02.json");
    data = await response.json();
    pushDataToHtml_02();
    console.log(data);
}

// Update section 2 with data
function pushDataToHtml_02() {
    container = document.getElementById('section2');
    container.innerHTML = "";
    data.forEach((element, index) => {
        container.innerHTML += `
        <div class="content">
            <p>${element.thikr}</p>
            <div onclick="decrease(this)" id="cnt" class="counter">
                <p class="nbr">${element.repitition.toString().padStart(2, '0')}</p>
                <button id="btn" onclick="reset(this, ${index})"><i class="bx bx-refresh"></i></button>
                <span class="initial-repitition" style="display:none;">${element.repitition}</span>
            </div>
        </div>
        `;
        position++;
    });
}

// Decrease counter
function decrease(counterDiv) {
    let counterP = counterDiv.querySelector('.nbr');
    let count = parseInt(counterP.innerHTML);
    if (count == 1) {
        mainContainer.scrollBy({
            top: 250,
            behavior: 'smooth'
        });
    }
    if (count == 0) {
        return;
    }
    counterP.innerHTML = (count - 1).toString().padStart(2, '0');
}

// Reset counter
function reset(button, index) {
    let counterDiv = button.parentElement;
    let initialValue = data[index].repitition + 1;
    let counterP = counterDiv.querySelector('.nbr');
    counterP.innerHTML = initialValue.toString().padStart(2, '0');
}

// Toggle between sections
function toggleSection() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const button = document.querySelector('.toggle-button');
    
    if (section1.classList.contains('active')) {
        section1.classList.remove('active');
        section2.classList.add('active');
        button.textContent = 'اذكار الصباح';
        console.log("you are in section 2");
        getData_02(); // Fetch data for section 2
    } else {
        section2.classList.remove('active');
        section1.classList.add('active');
        button.textContent = 'اذكار المساء';
        console.log("you are in section 1");
        getData_01(); // Fetch data for section 1
    }
}

// Initialize by showing section 1
getData_01();


// اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي. /  يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ / أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا. /  اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.  / أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.  /