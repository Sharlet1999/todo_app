import './App.css';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

function App() {
  async function mainMsg(){
    
    let ListTodoQuery = `query MyQuery {
      listTodos {
        items {
          id
          name
          description
        }
      }
    }`;
    let response = await API.graphql({
        query: ListTodoQuery
    });
    console.log(response);
  }
  return (
    <div>\
      <h1> Here we back </h1>
      <button onClick={mainMsg}>Add messege</button>
    </div>
  );
}

export default App;
