import { getInput } from '../input.reader';

(async function() {
  const input = await getInput();

  let total = 0;
  const seen: any = {};

  whileLoop: while (true) {
    for (const current of input) {
      total = total + current;
      if (seen[total] === true) {
        console.log(total);
        break whileLoop;
      }
      seen[total] = true;
    }
  }
})();
