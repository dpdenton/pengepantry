import * as GraphQLModels from 'services/graphql/models'

export class Recipe {
  public id: string
  public name: string
  public url: string

  constructor() {
    this.id = ''
    this.name = ''
    this.url = ''
  }

  public static fromGraphQL(json: GraphQLModels.Recipe): Recipe {
    const entity = new this()
    entity.id = json.id
    entity.name = json.name
    return entity
  }
}
