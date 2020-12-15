import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const packageJson = require('../package.json')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('Todo App')
    .setDescription('Todo App API')
    .setVersion(packageJson.version)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(3000)
}
bootstrap()
