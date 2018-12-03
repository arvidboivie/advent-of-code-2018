import { getInput } from '../input.reader';

(async function() {
  const input = await getInput();

  let total = 0;
  const seen: number[] = [];

  whileLoop: while (true) {
    for (const current of input) {
      total = total + current;
      if (seen.indexOf(total) !== -1) {
        console.log(total);
        break whileLoop;
      }
      seen.push(total);
    }
  }
})();
