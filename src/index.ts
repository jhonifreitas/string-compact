import { StringCompress } from './interfaces/string-compress';
import neoproService from './neopro.service';

async function main() {
  console.log(`Application is running!`);

  const compressedStrings: StringCompress[] = [];

  for (let index = 0; index < 5; index++) {
    const string = await neoproService.getString();
    const compressedStr = neoproService.compressString(string);
    compressedStrings.push(compressedStr);
  }

  const uncompressStrings = compressedStrings.map((compressed) =>
    neoproService.uncompressString(compressed.compressedString),
  );

  console.log('### Strings compressed ###');
  console.log(compressedStrings);

  console.log('### Strings uncompressed ###');
  console.log(uncompressStrings);

  console.log(`Application is done!`);
}
main();
