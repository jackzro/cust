import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CdrmonthService } from './cdrmonth.service';
import { CreateCdrmonthDto } from './dto/create-cdrmonth.dto';
import { UpdateCdrmonthDto } from './dto/update-cdrmonth.dto';

@Controller('cdrmonth')
export class CdrmonthController {
  constructor(private readonly cdrmonthService: CdrmonthService) {}

  @Post()
  create(@Body() createCdrmonthDto: CreateCdrmonthDto) {
    return this.cdrmonthService.create(createCdrmonthDto);
  }

  @Get()
  findAll() {
    return this.cdrmonthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cdrmonthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCdrmonthDto: UpdateCdrmonthDto) {
    return this.cdrmonthService.update(+id, updateCdrmonthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cdrmonthService.remove(+id);
  }
}
