import { createInterface } from 'readline';
import { createReadStream } from 'fs';

export async function getInput(): Promise<number[]> {
  const rl = createInterface({
    input: createReadStream('input'),
    crlfDelay: Infinity,
  });

  const input = await new Promise<number[]>((resolve, reject) => {
    const lines: number[] = [];
    rl.on('line', line => {
      lines.push(parseInt(line, 10));
    });
    rl.on('close', function() {
      resolve(lines);
    });
  });

  return input;
}
