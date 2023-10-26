import { Module } from '@nestjs/common';
import { WebSocketModule } from './app/modules/hello/hello.module';

@Module({
    imports: [WebSocketModule],
})
export class AppModule {}
