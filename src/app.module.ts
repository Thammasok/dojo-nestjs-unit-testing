import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';
import { YahtzeeService } from './yahtzee/yahtzee.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FizzbuzzService, YahtzeeService],
})
export class AppModule {}
