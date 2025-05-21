import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';

export class SnakeCaseNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  tableName(targetName: string, userSpecifiedName: string | undefined): string {
    return userSpecifiedName ? userSpecifiedName : this.snakeCase(targetName);
  }

  columnName(propertyName: string): string {
    return this.snakeCase(propertyName);
  }

  relationName(propertyName: string): string {
    return this.snakeCase(propertyName);
  }

  snakeCase(name: string): string {
    return name.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
  }
}
