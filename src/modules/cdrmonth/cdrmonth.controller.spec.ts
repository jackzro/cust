import { Test, TestingModule } from '@nestjs/testing';
import { CdrmonthController } from './cdrmonth.controller';
import { CdrmonthService } from './cdrmonth.service';

describe('CdrmonthController', () => {
  let controller: CdrmonthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdrmonthController],
      providers: [CdrmonthService],
    }).compile();

    controller = module.get<CdrmonthController>(CdrmonthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
