import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';


export class DBConfig {
    public dbDev: TypeOrmModuleOptions = {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "mywallet",
        synchronize: true,
        entities: [User]
    }
}