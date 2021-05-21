import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

class StartEvent {
  id: number
  html: string
}

class ClickEvent {
  id: number
  screenX: number
  screenY: number
  clientX: number
  clientY: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/enqueue')
  create(@Body() event: ClickEvent) {
    console.log('id: ' + event.id)
  }

  @Post('start')
  start(@Body() event: StartEvent) {
    console.log('id: ' + event.id)
    console.log(event.html)
  }
}
