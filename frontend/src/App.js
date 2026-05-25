import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [servers, setServers] = useState([]);

  const [formData, setFormData] = useState({
    serverName: "",
    ipAddress: "",
    status: ""
  });

  useEffect(() => {
    fetchServers();
  }, []);

  const fetchServers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/servers");
      setServers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addServer = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/servers", formData);

      fetchServers();

      setFormData({
        serverName: "",
        ipAddress: "",
        status: ""
      });

    } catch (error) {
      console.error(error);
    }
  };

  const deleteServer = async (id) => {

    try {
      await axios.delete(`http://localhost:8080/servers/${id}`);

      fetchServers();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

      <h1>Cloud Resource Management System</h1>

      <form onSubmit={addServer}>

        <input
          type="text"
          name="serverName"
          placeholder="Server Name"
          value={formData.serverName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="ipAddress"
          placeholder="IP Address"
          value={formData.ipAddress}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Server
        </button>

      </form>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Server Name</th>
            <th>IP Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {servers.map((server) => (
            <tr key={server.id}>
              <td>{server.id}</td>
              <td>{server.serverName}</td>
              <td>{server.ipAddress}</td>
              <td>{server.status}</td>
              <td>
                <button onClick={() => deleteServer(server.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;