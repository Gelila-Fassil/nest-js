import { CoffeesService } from './coffees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  // @Get()
  // findAll() {
  //   return 'this returns all the coffees';
  // }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `this returns all the coffees. Limits: ${limit}, offset: ${offset}`;

    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `this returns #${id} coffee`;
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    // return body;
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `this action updates #${id} coffee`;
    return this.coffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body) {
    // return `this actions removes #${id} coffee`;
    return this.coffeeService.remove(id);
  }
}
