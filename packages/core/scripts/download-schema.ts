import * as fs from 'fs';
import axios from 'axios';
import {getIntrospectionQuery, buildClientSchema, printSchema} from 'graphql';

const SCHEMA_PATH = './src/services/graphql/schema.graphql';
function downloadSchema() {
  axios
    .post(
      'http://localhost:4000/graphql',
      {query: getIntrospectionQuery()},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(res => res.data)
    .then(res => {
      console.log(`Writing schema file in path: ${SCHEMA_PATH}`);
      fs.writeFileSync(SCHEMA_PATH, printSchema(buildClientSchema(res.data)));
      console.log('Schema written successfully');
    })
    .catch(error => console.log(`Failed to download schema \n${error}`));
}

downloadSchema();
