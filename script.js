
document.addEventListener('DOMContentLoaded', () => {
    const studentData = {
    "cse2": [
        {
            "name": "ABBINENI NIKHITHA",
            "roll": "25EU04067"
        },
        {
            "name": "A.MOHAN BABU",
            "roll": "25EU04068"
        },
        {
            "name": "ALLU VYSHNAVI PHANI SRI",
            "roll": "25EU04069"
        },
        {
            "name": "B.VAARSHIK KRISHNA",
            "roll": "25EU04070"
        },
        {
            "name": "BATTULA CHETHANA",
            "roll": "25EU04071"
        },
        {
            "name": "VIHARIKA BOBBA",
            "roll": "25EU04072"
        },
        {
            "name": "B.KAMAL MISRA",
            "roll": "25EU04073"
        },
        {
            "name": "SHYAM ANIMESH",
            "roll": "25EU04074"
        },
        {
            "name": "CHINTA LAKSHMI DEEKSHITHA",
            "roll": "25EU04075"
        },
        {
            "name": "SAI JAHNASRI",
            "roll": "25EU04076"
        },
        {
            "name": "DLAKSHMIPRAVALLIKA",
            "roll": "25EU04077"
        },
        {
            "name": "DEVIREDDY RATHWIKA REDDY",
            "roll": "25EU04078"
        },
        {
            "name": "SAI RAGHU RAM GADDE",
            "roll": "25EU04079"
        },
        {
            "name": "GANAPAVARAPU TEJASWI",
            "roll": "25EU04080"
        },
        {
            "name": "GARAPATI NAGA NISHITHA",
            "roll": "25EU04081"
        },
        {
            "name": "GOWRISETTI NAGA PHANI RAM",
            "roll": "25EU04082"
        },
        {
            "name": "GUMMADI BHUPAL CHOWDARY",
            "roll": "25EU04083"
        },
        {
            "name": "GUNTI RASAGNA",
            "roll": "25EU04084"
        },
        {
            "name": "ILLA CHITRA SAIPRIYA",
            "roll": "25EU04085"
        },
        {
            "name": "JAGARLAMUDI ROHITH",
            "roll": "25EU04086"
        },
        {
            "name": "KAKARLA NAGA SAI KEERTHANA",
            "roll": "25EU04087"
        },
        {
            "name": "KANAMARLAPUDI PRUDHVI",
            "roll": "25EU04088"
        },
        {
            "name": "KANCHARLA VENKATA GAYATHRI",
            "roll": "25EU04089"
        },
        {
            "name": "KATRAGADDA RATNEESH",
            "roll": "25EU04090"
        },
        {
            "name": "KATTA SANJANA",
            "roll": "25EU04091"
        },
        {
            "name": "K.ADITYA VARDHAN",
            "roll": "25EU04092"
        },
        {
            "name": "KODE MOHANA ANVITHA CHOWDARY",
            "roll": "25EU04093"
        },
        {
            "name": "KOLUSU NAGA SREEJA",
            "roll": "25EU04094"
        },
        {
            "name": "KOMMANDURI DINESH PAVAN KUMAR",
            "roll": "25EU04095"
        },
        {
            "name": "KS PRADHEET",
            "roll": "25EU04096"
        },
        {
            "name": "KOTA DEVI SRI CHARITHA",
            "roll": "25EU04097"
        },
        {
            "name": "KOTAGIRI PURIJAGADESHWAR",
            "roll": "25EU04098"
        },
        {
            "name": "KOTARU VATSAV SRI KARTHIKEYA",
            "roll": "25EU04099"
        },
        {
            "name": "K JOSHITHA",
            "roll": "25EU04100"
        },
        {
            "name": "KUMMARAGUNTA VIBHAV",
            "roll": "25EU04101"
        },
        {
            "name": "MANASWINI",
            "roll": "25EU04102"
        },
        {
            "name": "MADDINENI GEETHIKA",
            "roll": "25EU04103"
        },
        {
            "name": "KRISHNA PRASANTH MANDALAPU",
            "roll": "25EU04104"
        },
        {
            "name": "HEMA NANDINI MATTAPARTHI",
            "roll": "25EU04105"
        },
        {
            "name": "LALITHA MATURI",
            "roll": "25EU04106"
        },
        {
            "name": "KIMAYA MEDANDRAVU",
            "roll": "25EU04107"
        },
        {
            "name": "MUPPIDI SAI HASINI",
            "roll": "25EU04108"
        },
        {
            "name": "NALLANI HARI SRIRAM",
            "roll": "25EU04109"
        },
        {
            "name": "ESHA MANVITHA NARRA",
            "roll": "25EU04110"
        },
        {
            "name": "NELLORE HASINI SINGH",
            "roll": "25EU04111"
        },
        {
            "name": "BHANU ANISH",
            "roll": "25EU04112"
        },
        {
            "name": "PARSHA ROHINI",
            "roll": "25EU04113"
        },
        {
            "name": "PEDDU RAMAKRISHNA CHOWDARY",
            "roll": "25EU04114"
        },
        {
            "name": "PENDYALA HEMANTH CHOUDARI",
            "roll": "25EU04115"
        },
        {
            "name": "P. TEJASVI SAI",
            "roll": "25EU04116"
        },
        {
            "name": "P.SAM",
            "roll": "25EU04117"
        },
        {
            "name": "SABBINENI SARANYA",
            "roll": "25EU04118"
        },
        {
            "name": "SAPPA SHANMUKHA MANIDHAR",
            "roll": "25EU04119"
        },
        {
            "name": "SARIPELLA LOKESH SRI SAI VARMA",
            "roll": "25EU04120"
        },
        {
            "name": "SATYA KAMESWARI SREE LASYA K",
            "roll": "25EU04121"
        },
        {
            "name": "SUMANTH",
            "roll": "25EU04122"
        },
        {
            "name": "SHAIK. AFEEFAH SADHIYA",
            "roll": "25EU04123"
        },
        {
            "name": "SHAIK MOHAMMED TAMEEM",
            "roll": "25EU04124"
        },
        {
            "name": "MANOJ SUGGALA",
            "roll": "25EU04125"
        },
        {
            "name": "SYED LATHEEF AHMAD",
            "roll": "25EU04126"
        },
        {
            "name": "SYED SUMAIYA",
            "roll": "25EU04127"
        },
        {
            "name": "TUMALA MANOJU",
            "roll": "25EU04128"
        },
        {
            "name": "HARSHA VARDHAN UNGARALA",
            "roll": "25EU04129"
        },
        {
            "name": "MANOGNA VELUGULA",
            "roll": "25EU04130"
        },
        {
            "name": "VUDDANTI BHAGIRADH NATH",
            "roll": "25EU04131"
        },
        {
            "name": "YEKAMBARAM YAMENI GANGA",
            "roll": "25EU04132"
        },
        {
            "name": "BOOTHAPATI RATNARAJ",
            "roll": "LECS003"
        },
        {
            "name": "CHALAMASETTI LAKSHMI CHAITANYA",
            "roll": "LECS004"
        },
        {
            "name": "DASARI MYTHILI DIVYA",
            "roll": "LECS006"
        }
    ],
    "cse3": [
        {
            "name": "ABDUL ADAL",
            "roll": "25EU04133"
        },
        {
            "name": "ABDUL SANIA",
            "roll": "25EU04134"
        },
        {
            "name": "CH.AKSHAYA",
            "roll": "25EU04135"
        },
        {
            "name": "A.HANSITHA",
            "roll": "25EU04136"
        },
        {
            "name": "A.TEJESWAR",
            "roll": "25EU04137"
        },
        {
            "name": "A.HEMA SRINIVAS",
            "roll": "25EU04138"
        },
        {
            "name": "AYMAN SALEEM",
            "roll": "25EU04139"
        },
        {
            "name": "B. VEDHIK",
            "roll": "25EU04140"
        },
        {
            "name": "B.MEGHANA",
            "roll": "25EU04141"
        },
        {
            "name": "B.TEJASPHOORTHI",
            "roll": "25EU04142"
        },
        {
            "name": "B.BRAHMANI",
            "roll": "25EU04143"
        },
        {
            "name": "B.GAYATRI DEVI",
            "roll": "25EU04144"
        },
        {
            "name": "CHALLA.PARDHASARADHI",
            "roll": "25EU04145"
        },
        {
            "name": "CH.RAGHUVEER",
            "roll": "25EU04146"
        },
        {
            "name": "D. ABHIRAM",
            "roll": "25EU04147"
        },
        {
            "name": "D.LAKSHMI SAHASRA",
            "roll": "25EU04148"
        },
        {
            "name": "D.DHAATRI SARANYA",
            "roll": "25EU04149"
        },
        {
            "name": "D. JENITHA",
            "roll": "25EU04150"
        },
        {
            "name": "G.VIVEK",
            "roll": "25EU04151"
        },
        {
            "name": "G. BINDU",
            "roll": "25EU04152"
        },
        {
            "name": "GOSHRITHA.RAVULAPALLI",
            "roll": "25EU04153"
        },
        {
            "name": "G.VINAY SAI PAVAN",
            "roll": "25EU04154"
        },
        {
            "name": "J.LIKHIT VENKATA SAI VASUDEV",
            "roll": "25EU04155"
        },
        {
            "name": "J SRI DIVYA",
            "roll": "25EU04156"
        },
        {
            "name": "YOGESH RAJ",
            "roll": "25EU04157"
        },
        {
            "name": "K.SRI RUSHMA",
            "roll": "25EU04158"
        },
        {
            "name": "K.SATISH CHANDRA",
            "roll": "25EU04159"
        },
        {
            "name": "K.ROHIN RAM",
            "roll": "25EU04160"
        },
        {
            "name": "K.MEDHA",
            "roll": "25EU04161"
        },
        {
            "name": "K.VARNIKA",
            "roll": "25EU04162"
        },
        {
            "name": "EESHITHA",
            "roll": "25EU04163"
        },
        {
            "name": "K.YASASWI",
            "roll": "25EU04164"
        },
        {
            "name": "K.DOONDI",
            "roll": "25EU04165"
        },
        {
            "name": "K.DHARTHI",
            "roll": "25EU04166"
        },
        {
            "name": "L.VEDA SRI",
            "roll": "25EU04167"
        },
        {
            "name": "M. VEERA VENKATA ABHIRAM",
            "roll": "25EU04168"
        },
        {
            "name": "M.DHANA ISWARYA",
            "roll": "25EU04169"
        },
        {
            "name": "M.MANOGNA",
            "roll": "25EU04170"
        },
        {
            "name": "M.YOSHITHA",
            "roll": "25EU04171"
        },
        {
            "name": "MD.IQBAL",
            "roll": "25EU04172"
        },
        {
            "name": "MD.SALEEMUNNISA",
            "roll": "25EU04173"
        },
        {
            "name": "MD.SHAZIA",
            "roll": "25EU04174"
        },
        {
            "name": "MD.SAFEENA THARUNNAM",
            "roll": "25EU04175"
        },
        {
            "name": "JASWANTH REDDY.M",
            "roll": "25EU04176"
        },
        {
            "name": "N.D ABHIRAM",
            "roll": "25EU04177"
        },
        {
            "name": "N. JASWANTH",
            "roll": "25EU04178"
        },
        {
            "name": "N.RAM PRANEETH",
            "roll": "25EU04179"
        },
        {
            "name": "P. REVANTH SAI",
            "roll": "25EU04180"
        },
        {
            "name": "P.LAKSHMI SAI PRATHYUSHA",
            "roll": "25EU04181"
        },
        {
            "name": "R.ABHINAV CHOWDARY",
            "roll": "25EU04182"
        },
        {
            "name": "R.MONIKA TARA",
            "roll": "25EU04183"
        },
        {
            "name": "S.THANISHKA",
            "roll": "25EU04184"
        },
        {
            "name": "SK ASHRAF AHMED",
            "roll": "25EU04185"
        },
        {
            "name": "SK. SIDDIQ AHMAD",
            "roll": "25EU04186"
        },
        {
            "name": "AMRUTHA SAHITHYA",
            "roll": "25EU04187"
        },
        {
            "name": "T. SHANMUKHA VENKATA SAI",
            "roll": "25EU04188"
        },
        {
            "name": "T DHARMA TEJA",
            "roll": "25EU04189"
        },
        {
            "name": "T.GEETHIKA",
            "roll": "25EU04190"
        },
        {
            "name": "T.KRISHNA SASANK",
            "roll": "25EU04191"
        },
        {
            "name": "T.LAKSHMI BHAVANI",
            "roll": "25EU04192"
        },
        {
            "name": "V.SPOORTHY",
            "roll": "25EU04193"
        },
        {
            "name": "V INDHIRA REDDY",
            "roll": "25EU04194"
        },
        {
            "name": "VENTRAPRAGADA VAISHNAVI",
            "roll": "25EU04195"
        },
        {
            "name": "YANNAM YOGITHA",
            "roll": "25EU04196"
        },
        {
            "name": "Y.SUPRIYA",
            "roll": "25EU04197"
        },
        {
            "name": "Y.HIMAJA",
            "roll": "25EU04198"
        },
        {
            "name": "DUADAKA NAGA DURGA PAVANI",
            "roll": "LECS007"
        },
        {
            "name": "KATARI LAHARI",
            "roll": "LECS008"
        },
        {
            "name": "KUMMARI BHUVANESWARI",
            "roll": "LECS011"
        },
        {
            "name": "VALAPULA SHALINI",
            "roll": "LECS016"
        },
        {
            "name": "NOORJAHANMD",
            "roll": ""
        }
    ],
    "cse4": [
        {
            "name": "AKULA AJAY KUMAR",
            "roll": "25EU04199"
        },
        {
            "name": "A. NAGA DANESWARI HASINI",
            "roll": "25EU04200"
        },
        {
            "name": "AMREEN SAMEERA BEGUM",
            "roll": "25EU04201"
        },
        {
            "name": "RUTHVIK ANNE",
            "roll": "25EU04202"
        },
        {
            "name": "BANTU MEGHANA",
            "roll": "25EU04203"
        },
        {
            "name": "BATHINI VENKATA KALYAN",
            "roll": "25EU04204"
        },
        {
            "name": "BOLLIPALLI VARSHITHA",
            "roll": "25EU04205"
        },
        {
            "name": "BOMMAREDDY VAMSI NAGA KRISHNA REDDY",
            "roll": "25EU04206"
        },
        {
            "name": "BUSIREDDY ARCHANA",
            "roll": "25EU04207"
        },
        {
            "name": "CHEPURI PUSHKALA",
            "roll": "25EU04208"
        },
        {
            "name": "CHERUKURI NAGA SAI HARSHINI",
            "roll": "25EU04209"
        },
        {
            "name": "CHODA.RAMCHARAN",
            "roll": "25EU04210"
        },
        {
            "name": "DAMARLA THANDAVA KRISHNA",
            "roll": "25EU04211"
        },
        {
            "name": "D.V.S.SUSHMA SREYA",
            "roll": "25EU04212"
        },
        {
            "name": "G K HASITH KUMAR",
            "roll": "25EU04213"
        },
        {
            "name": "GARIKIPATI VENKATA KRISHNA BALAJI",
            "roll": "25EU04214"
        },
        {
            "name": "GUDI TULASI NEERAJ",
            "roll": "25EU04215"
        },
        {
            "name": "HARINI GUNDLA",
            "roll": "25EU04216"
        },
        {
            "name": "MAHIMA KAKARALA",
            "roll": "25EU04217"
        },
        {
            "name": "K. JYOTHSNA PRIYA",
            "roll": "25EU04218"
        },
        {
            "name": "K.SUNANDA",
            "roll": "25EU04219"
        },
        {
            "name": "K. VIKRAM DEVAN",
            "roll": "25EU04220"
        },
        {
            "name": "KATTA VENKATA NAGA SAI KARTHIK",
            "roll": "25EU04221"
        },
        {
            "name": "KNS PRANISHKA",
            "roll": "25EU04222"
        },
        {
            "name": "RISHYANDHAR KOTHA",
            "roll": "25EU04223"
        },
        {
            "name": "KUNAM SATHWIKA REDDY",
            "roll": "25EU04224"
        },
        {
            "name": "MAGANTI MANJU RAM",
            "roll": "25EU04225"
        },
        {
            "name": "MAJJI.NIHARIKA",
            "roll": "25EU04226"
        },
        {
            "name": "M.SINDHU",
            "roll": "25EU04227"
        },
        {
            "name": "MALLELA HANSIKA",
            "roll": "25EU04228"
        },
        {
            "name": "NAGA TEJA",
            "roll": "25EU04229"
        },
        {
            "name": "M.BHUVANA KRUTHI",
            "roll": "25EU04230"
        },
        {
            "name": "MEDASANI TEJO RAVI RAM",
            "roll": "25EU04231"
        },
        {
            "name": "MEESALA JASWANTH",
            "roll": "25EU04232"
        },
        {
            "name": "MENDU MOHAN PRAMODH",
            "roll": "25EU04233"
        },
        {
            "name": "MOHAMMAD ARIF",
            "roll": "25EU04234"
        },
        {
            "name": "MOHAMMED AFIFA AMIRA",
            "roll": "25EU04235"
        },
        {
            "name": "M.NAVYA SRI",
            "roll": "25EU04236"
        },
        {
            "name": "MUHAMMED AYESHA SIDDIQA",
            "roll": "25EU04237"
        },
        {
            "name": "MULPURI HIMANI SAI",
            "roll": "25EU04238"
        },
        {
            "name": "N.VISHNU VARDHAN",
            "roll": "25EU04239"
        },
        {
            "name": "N.TANMAYI MEGHANA",
            "roll": "25EU04240"
        },
        {
            "name": "O.MOHANA PRIYA",
            "roll": "25EU04241"
        },
        {
            "name": "PADAMATI CHARAN CHAITANYA",
            "roll": "25EU04242"
        },
        {
            "name": "P.RAGA SRUTHI",
            "roll": "25EU04243"
        },
        {
            "name": "P.DURGA SAI GANESH",
            "roll": "25EU04244"
        },
        {
            "name": "P.PRABHU CHARAN",
            "roll": "25EU04245"
        },
        {
            "name": "PRADEEP CHALLAGULLA",
            "roll": "25EU04246"
        },
        {
            "name": "P.DEEPESH",
            "roll": "25EU04247"
        },
        {
            "name": "REPALLE MONI TANMAI",
            "roll": "25EU04248"
        },
        {
            "name": "SHAIK AASIFA",
            "roll": "25EU04249"
        },
        {
            "name": "SHAIK JAWAHAR AMEEN",
            "roll": "25EU04250"
        },
        {
            "name": "SINGAMSETTY BHARATH SAI RAM",
            "roll": "25EU04251"
        },
        {
            "name": "S.SAHITHI",
            "roll": "25EU04252"
        },
        {
            "name": "SUPREETHI SUNKARA",
            "roll": "25EU04253"
        },
        {
            "name": "S.BHANU VARSHITHA",
            "roll": "25EU04254"
        },
        {
            "name": "SYED KHAZA MOHINUDDIN",
            "roll": "25EU04255"
        },
        {
            "name": "T.GOWTHAMI",
            "roll": "25EU04256"
        },
        {
            "name": "TUMMA VAMSI KRISHNA",
            "roll": "25EU04257"
        },
        {
            "name": "TUMMALA SAI SAMHITHA",
            "roll": "25EU04258"
        },
        {
            "name": "VARSHINI UDDAGIRI",
            "roll": "25EU04259"
        },
        {
            "name": "U.DHEERAJSAI",
            "roll": "25EU04260"
        },
        {
            "name": "MAITREYA VEDANTAM",
            "roll": "25EU04261"
        },
        {
            "name": "VEDASRI NAARISETTI",
            "roll": "25EU04262"
        },
        {
            "name": "VINNAKOTA CHANDAN ABHISHEK",
            "roll": "25EU04263"
        },
        {
            "name": "YALAMARTHI PRASANTHI",
            "roll": "25EU04264"
        },
        {
            "name": "KOLLURU SASIVADAN",
            "roll": "LECS009"
        },
        {
            "name": "KONDA SIVA KRISHNA",
            "roll": "LECS010"
        },
        {
            "name": "GUDDAPPA GOVINDAPPA GARI TEJASWINI",
            "roll": "LECS017"
        }
    ]
};
    
    const sectionTitles = {
        "cse2": "CSE II",
        "cse3": "CSE III",
        "cse4": "CSE IV"
    };

    let currentSection = null;
    let currentStudents = [];
    const absentRollNumbers = new Set();
    
    // Elements
    const sectionSelectView = document.getElementById('section-select-view');
    const attendanceView = document.getElementById('attendance-view');
    const sectionTitleEl = document.getElementById('current-section-title');
    const studentListEl = document.getElementById('student-list');
    const absentCountEl = document.getElementById('absent-count');
    const totalCountEl = document.getElementById('total-count');
    const generateBtn = document.getElementById('generate-btn');
    const backBtn = document.getElementById('back-btn');
    const modal = document.getElementById('report-modal');
    const closeBtn = document.getElementById('close-btn');
    const copyBtn = document.getElementById('copy-btn');
    const reportOutput = document.getElementById('report-output');

    // Section Selection
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', () => {
            const sec = card.getAttribute('data-section');
            openSection(sec);
        });
    });

    backBtn.addEventListener('click', () => {
        attendanceView.classList.add('hidden');
        sectionSelectView.classList.remove('hidden');
    });

    function openSection(sec) {
        currentSection = sec;
        currentStudents = studentData[sec];
        sectionTitleEl.textContent = sectionTitles[sec];
        totalCountEl.textContent = currentStudents.length;
        absentRollNumbers.clear();
        updateCounts();
        renderStudents();
        
        sectionSelectView.classList.add('hidden');
        attendanceView.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function renderStudents() {
        studentListEl.innerHTML = '';
        
        currentStudents.forEach((student, index) => {
            const card = document.createElement('div');
            card.className = `student-card ${absentRollNumbers.has(student.roll) ? 'absent' : ''}`;
            card.style.animationDelay = `${(index % 15) * 0.03}s`;
            
            card.innerHTML = `
                <div class="student-info">
                    <span class="student-roll">${student.roll}</span>
                    <span class="student-name">${student.name}</span>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" ${absentRollNumbers.has(student.roll) ? 'checked' : ''} tabindex="-1">
                    <span class="checkmark"></span>
                </div>
            `;

            card.addEventListener('click', () => toggleAttendance(student.roll, card));
            studentListEl.appendChild(card);
        });
    }

    function toggleAttendance(roll, cardElement) {
        if (absentRollNumbers.has(roll)) {
            absentRollNumbers.delete(roll);
            cardElement.classList.remove('absent');
            cardElement.querySelector('input').checked = false;
        } else {
            absentRollNumbers.add(roll);
            cardElement.classList.add('absent');
            cardElement.querySelector('input').checked = true;
        }
        updateCounts();
    }

    function updateCounts() {
        absentCountEl.textContent = absentRollNumbers.size;
    }

    function generateReport() {
        let report = "";
        const title = sectionTitles[currentSection];
        
        if (absentRollNumbers.size === 0) {
            report = `${title} - ALL PRESENT`;
        } else {
            report = `${title} - absentees:\n`;
            const sortedAbsent = Array.from(absentRollNumbers).sort((a, b) => {
                const idxA = currentStudents.findIndex(s => s.roll === a);
                const idxB = currentStudents.findIndex(s => s.roll === b);
                return idxA - idxB;
            });
            report += sortedAbsent.join("\n");
        }
        
        reportOutput.value = report;
        modal.classList.remove('hidden');
    }

    function copyToClipboard() {
        reportOutput.select();
        document.execCommand('copy');
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        copyBtn.style.background = "var(--success)";
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = ""; 
        }, 2000);
    }

    generateBtn.addEventListener('click', generateReport);
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    copyBtn.addEventListener('click', copyToClipboard);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
