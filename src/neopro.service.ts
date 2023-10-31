import axios from 'axios';
import { CompactResponse } from './interfaces/compact-response';
import { StringCompress } from './interfaces/string-compress';

class NeoproService {
  private hostApi = 'https://api.neopro.com.br/v1';

  async getString(): Promise<string> {
    const response = await axios.get<CompactResponse>(
      `${this.hostApi}/test/compact`,
    );
    return response.data.string;
  }

  compressString(string: string): StringCompress {
    let compressedString = '';
    let charCount = 0;
    let currentChar = string[0];

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

  uncompressString(compressed: string): string {
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
export default new NeoproService();
