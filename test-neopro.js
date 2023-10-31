class NeoproService {
  hostApi = 'https://api.neopro.com.br/v1';

  async init() {
    console.log(`Application is running!`);

    const compressedStrings = [];

    for (let index = 0; index < 5; index++) {
      const string = await this.getString();
      const compressedStr = this.compressString(string);
      compressedStrings.push(compressedStr);
    }

    const uncompressStrings = compressedStrings.map((compressed) =>
      this.uncompressString(compressed.compressedString),
    );

    console.log('### Strings compressed ###');
    console.log(compressedStrings);

    console.log('### Strings uncompressed ###');
    console.log(uncompressStrings);

    console.log(`Application is done!`);
  }

  async getString() {
    const response = await fetch(`${this.hostApi}/test/compact`, {
      method: 'get',
    });
    const data = await response.json();
    return data.string;
  }

  compressString(string) {
    let compressedString = '';
    let charCount = 0;
    let currentChar = string.charAt(0);

    for (const char of string) {
      if (currentChar !== char) {
        compressedString += `${charCount}${currentChar}`;
        currentChar = char;
        charCount = 0;
      }

      charCount++;
    }
    compressedString += charCount + currentChar;

    const percentage = Math.floor(
      ((string.length - compressedString.length) / string.length) * 100,
    );

    return { compressedString, percentage };
  }

  uncompressString(compressed) {
    let string = '';
    let count = 0;

    for (const char of compressed) {
      const charCount = parseInt(char);

      if (!isNaN(charCount)) {
        const decimal = count * 10;
        count = decimal + charCount;
      } else {
        string += char.repeat(count);
        count = 0;
      }
    }

    return string;
  }
}
new NeoproService().init();
