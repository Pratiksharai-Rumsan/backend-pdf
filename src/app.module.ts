import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PdfMakeModule } from './pdfmake/pdf.module';

@Module({
  imports: [ PdfMakeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
