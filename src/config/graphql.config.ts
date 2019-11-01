import { GqlModuleOptions } from "@nestjs/graphql";


export class GraphQLConfig {
    
    public gqlConfig: GqlModuleOptions = {
        typePaths: ['./**/*.graphql'],
        debug: true,
    }
}