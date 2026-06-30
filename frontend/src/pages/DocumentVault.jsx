import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../component/layout/Layout";

function DocumentVault() {

  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");

  const loadDocuments = () => {
    axios
      .get("http://127.0.0.1:5000/documents")
      .then((res) => {
        setDocuments(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const addDocument = () => {

    const name = prompt("Document Name");
    if (!name) return;

    const type = prompt("Document Type");
    if (!type) return;

    axios
      .post("http://127.0.0.1:5000/documents", {
        name,
        type,
        date: "Today",
      })
      .then(() => {
        alert("Document Added Successfully");
        loadDocuments();
      });
  };

  const deleteDocument = (id) => {

    if (!window.confirm("Delete this document?")) return;

    axios
      .delete(`http://127.0.0.1:5000/documents/${id}`)
      .then(() => {
        loadDocuments();
      });
  };

  return (
    <Layout>

      <div className="p-6">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Document Vault
          </h1>

          <button
            onClick={addDocument}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            + Upload Document
          </button>

        </div>

        <input
          type="text"
          placeholder="Search Documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        />

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Document</th>
                <th>Type</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {documents
                .filter((doc) =>
                  doc.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((doc) => (

                  <tr key={doc._id} className="border-t">

                    <td className="p-4">{doc.name}</td>

                    <td>{doc.type}</td>

                    <td>{doc.date}</td>

                    <td>

                      <button className="text-blue-600 mr-4">
                        View
                      </button>

                      <button
                        className="text-red-600"
                        onClick={() => deleteDocument(doc._id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>
  );
}

export default DocumentVault;