import { Test, TestingModule } from '@nestjs/testing';
import { CdrmonthService } from './cdrmonth.service';

describe('CdrmonthService', () => {
  let service: CdrmonthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdrmonthService],
    }).compile();

    service = module.get<CdrmonthService>(CdrmonthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
