// Config
let Config = []
Config = {
    ["نسبه"]: {
        Text: `
            سلمان بن الملك عبد العزيز بن الإمام عبد الرحمن بن الإمام فيصل بن الإمام تركي بن الأمير عبد الله بن الإمام محمد بن الأمير سعود الأوّل
        `,
    },
    ["نشأته"]: {
        Text: `
            ولد سلمان في 31 ديسمبر 1935م الموافق 5 شوال 1354 هـ. تلقى تعليمه في مدرسة الأمراء بالرياض التي كان يديرها عبد الله خياط إمام وخطيب المسجد الحرام. ختم القرآن كاملاً وهو في سن العاشرة. كان أحد الأمراء المقربين لوالده الملك المؤسس.
        `
    },
}
// [[ Config ]]
function Sections() {
    let Html = ""
    for (const [k, v] of Object.entries(Config)) {
        Html = Html + `
    <div class="Section">
        <h2 class="Name-Section">${k}</h2>
        <p class="Des-Section">
            ${v.Text}
        </p>
    </div>
    <hr>
`
    }
    document.querySelector(".Sections").innerHTML = Html
}
document.addEventListener("DOMContentLoaded", () => {
    Sections()
})

console.log("pRX")