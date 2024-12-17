import { Test, TestingModule } from '@nestjs/testing';
import { YahtzeeService } from './yahtzee.service';

describe('YahtzeeService', () => {
  let service: YahtzeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YahtzeeService],
    }).compile();

    service = module.get<YahtzeeService>(YahtzeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
