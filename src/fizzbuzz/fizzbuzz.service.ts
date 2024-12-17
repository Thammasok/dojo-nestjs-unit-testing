import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
  fizzbuzz(input: number): string {
    if (input < 1 || input > 104) {
      throw new Error('Input must be between 1 and 104');
    }

    if (input % 3 === 0 && input % 5 === 0) {
      return 'FizzBuzz';
    } else if (input % 3 === 0) {
      return 'Fizz';
    } else if (input % 5 === 0) {
      return 'Buzz';
    }

    return input.toString();
  }
}
