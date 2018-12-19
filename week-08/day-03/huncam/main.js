const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
function isVowel(character) {
  let lowerCaseChar = character.toLowerCase();
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === lowerCaseChar);
}
const translate = (hungarian) => {
  let teve = hungarian;
  let length = teve.length;
  let checkedVowels = [];

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c) && checkedVowels.indexOf(c) === -1) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
      checkedVowels.push(c);
    }
  }
  return teve;
}
app.post('/translate', (req, res) => {
  const { lang, text } = req.body;
  if (lang === 'hu') {
    res.json({
      "translated": translate(text)
    })
  } else {
    res.json({ "error": "I cant translate that!" })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});