// let select = document.querySelector("select");

// let array=["apple","banana","grapes"];

// array.forEach((a,i)=>{
//     // voiceSelect.options[i]=new Option(voice.name,i)
//     select.options[i]=new option(a,i);
// })

// voices.forEach((voice,i)=>(
//     voiceSelect.options[i]=new Option(voice.name,i)
// ))

const optionsData = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

// Get the select element
const dropdown = document.getElementById('dropdown');

// Map through the optionsData array and create option elements
optionsData.map(option => {
  const optionElement = document.createElement('option');
  optionElement.value = option; // Set the value attribute
  optionElement.textContent = option; // Set the text content
  dropdown.appendChild(optionElement);
//   return optionElement;
});

// Append the option elements to the select element
// optionElements.forEach(optionElement => {
//   dropdown.appendChild(optionElement);
// });