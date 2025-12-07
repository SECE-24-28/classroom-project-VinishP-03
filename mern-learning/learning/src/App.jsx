import validate from "./validate";
export default function App() {
  return (
    <>
      <form>
        <table>
          <thead>
            <tr>
              <
                
                
                th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <label htmlFor="username">UserName:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Enter your user name"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                />
              </td>
            </tr>

            <tr>
              <td>
                <input type="checkbox" name="remember" id="remember" value="remember"></input>
                <label htmlFor="remember">Remember Me??</label>
              </td>
              <td>
                <button type="submit" onClick={validate}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
