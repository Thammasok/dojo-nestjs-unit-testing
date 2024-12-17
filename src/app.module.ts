import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YutzeeController } from './yutzee/yutzee.controller';
import { YutzeeService } from './yutzee/yutzee.service';
import { YutzeeModule } from './yutzee/yutzee.module';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';

@Module({
  imports: [YutzeeModule],
  controllers: [AppController, YutzeeController],
  providers: [AppService, YutzeeService, FizzbuzzService],
})
export class AppModule {}
