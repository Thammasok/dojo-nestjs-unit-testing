import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  describe('the number is divisible by 3 and 5', () => {
    it('should return FizzBuzz when the number is divisible by 3 and 5', () => {
      const input = 15;
      const expected = 'FizzBuzz';

      const result = service.fizzbuzz(input);

      expect(result).toBe(expected);
    });

    it('should return Fizz when the number is divisible by 3', () => {
      const input = 3;
      const expected = 'Fizz';

      const result = service.fizzbuzz(input);

      expect(result).toBe(expected);
    });

    it('should return Buzz when the number is divisible by 5', () => {
      const input = 5;
      const expected = 'Buzz';

      const result = service.fizzbuzz(input);

      expect(result).toBe(expected);
    });
  });

  describe('the number is not divisible by 3 or 5', () => {
    it('should return the number when the number is not divisible by 3 or 5', () => {
      const input = 1;
      const expected = '1';

      const result = service.fizzbuzz(input);

      expect(result).toBe(expected);
    });

    it('should return the number when the number is not divisible by 3 or 5', () => {
      const input = 7;
      const expected = '7';

      const result = service.fizzbuzz(input);

      expect(result).toBe(expected);
    });
  });

  describe('error handling', () => {
    it('should throw an error when the number is less than 1', () => {
      const input = 0;
      const expected = 'Input must be between 1 and 104';

      expect(() => service.fizzbuzz(input)).toThrow(expected);
    });

    it('should throw an error when the number is greater than 104', () => {
      const input = 105;
      const expected = 'Input must be between 1 and 104';

      expect(() => service.fizzbuzz(input)).toThrow(expected);
    });
  });
});
