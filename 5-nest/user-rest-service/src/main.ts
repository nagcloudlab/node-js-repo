import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationExceptionFilter } from './filters/validation-exception.filter';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { MyValidationPipe } from './pipes/my-validation.pipe';

async function bootstrap() {
  // const app = express();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new ValidationExceptionFilter())
  app.useGlobalPipes(new MyValidationPipe())
  app.useGlobalGuards(new AuthGuard())
  app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(3000);
}
bootstrap();
