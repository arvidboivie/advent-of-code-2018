import { getInput } from '../input.reader';

(async function() {
  const input = await getInput();

  const total = input.reduce((tot, current) => {
    return tot + current;
  }, 0);

  console.log(total);
})();
