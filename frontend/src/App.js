import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetchServers();
  }, []);

  const fetchServers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/servers");
      setServers(response.data);
    } catch (error) {
      console.error("Error fetching servers", error);
    }
  };

  return (
    <div className="container">
      <h1>Cloud Resource Management System</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Server Name</th>
            <th>IP Address</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {servers.map((server) => (
            <tr key={server.id}>
              <td>{server.id}</td>
              <td>{server.serverName}</td>
              <td>{server.ipAddress}</td>
              <td>{server.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;