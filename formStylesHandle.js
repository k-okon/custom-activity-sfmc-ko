let triggeredEmailRadio = document.getElementById('triggered_email');
let outputTestDiv = document.getElementById('output-test');

let i = 0;
function testDisplay() {
    outputTestDiv.innerText = ++i;

}
//triggeredEmailRadio.addEventListener('focus', hideNShow);
//triggeredEmailRadio.addEventListener('blur', hideNShow);

let triggeredEmailHiddenPart = document.getElementById('triggered-email-part');

// * użycie activeElement
/*
function hideNShow() {
    if (document.activeElement == triggeredEmailRadio) {
        triggeredEmailHiddenPart.classList.remove('hidden');
    } else {
        triggeredEmailHiddenPart.classList.add('hidden');
    }
}
*/

// ? Poniższe działa
let form = document.getElementsByTagName('form')[0];
form.addEventListener('click', function(event) {
    let target = event.target;
    if (target.name == "action_type") {
        let radiovalue = document.myForm.action_type.value;
        //outputTestDiv.innerText = radiovalue;
        if (radiovalue == triggeredEmailRadio.value) {
            triggeredEmailHiddenPart.classList.remove('hidden');
        } else {
            triggeredEmailHiddenPart.classList.add('hidden');
        }
    }
});

// ? ###################