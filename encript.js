const mappings = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  
  function encrypt(text) {
    return text.replace(/[eioua]/g, match => mappings[match]);
  }
  
  function decrypt(text) {
    for (let key in mappings) {
      if (Object.prototype.hasOwnProperty.call(mappings, key)) {
        text = text.replace(new RegExp(mappings[key], 'g'), key);
      }
    }
    return text;
  }
  
  // Event listener for the encrypt button
  document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText === '') {
      return;
    }
    const encryptedText = encrypt(inputText);
    const resultDiv = document.getElementById('result');
    if (encryptedText !== '') {
      resultDiv.textContent = encryptedText;
    } else {
      resultDiv.innerHTML = `
        <div class="no_message">
          <img src="no_message.png" />
          <p>Nenhuma mensagem encontrada</p>
          <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
      `;
    }
  });
  
  // Event listener for the decrypt button
  document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    if (inputText === '') {
      return;
    }
    const decryptedText = decrypt(inputText);
    document.getElementById('result').textContent = decryptedText;
  });
  
  // Event listener for input text changes
  document.getElementById('inputText').addEventListener('input', () => {
    const inputText = document.getElementById('inputText').value.trim();
    const resultDiv = document.getElementById('result');
    if (inputText === '') {
      resultDiv.innerHTML = `
        <div class="no_message">
          <img src="no_message.png" />
          <p>Nenhuma mensagem encontrada</p>
          <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
      `;
    }
  });
  