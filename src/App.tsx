import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Beispiel-Lebensmittel
const testLebensmittel = [
  { name: 'Milch', nfcLinked: false },
  { name: 'Brot', nfcLinked: true },
  { name: 'Eier', nfcLinked: false },
  { name: 'Käse', nfcLinked: false },
  { name: 'Äpfel', nfcLinked: true },
];

function LebensmittelListe({ onNfcScan }: { onNfcScan: (name: string) => void }) {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">Lebensmittel & NFC-Verknüpfung</h1>
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr>
                        <th>Lebensmittel</th>
                        <th>NFC-Status</th>
                        <th>NFC-Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testLebensmittel.map((item) => (
                        <tr key={item.name}>
                          <td>{item.name}</td>
                          <td>
                            {item.nfcLinked ? (
                              <span className="badge bg-success">verknüpft</span>
                            ) : (
                              <span className="badge bg-danger">nicht verknüpft</span>
                            )}
                          </td>
                          <td>
                            <Link to={`/nfc/${encodeURIComponent(item.name.toLowerCase())}`} className="btn btn-outline-primary btn-sm">
                              Link generieren
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="alert alert-info mt-4">
                    <b>Hinweis:</b> Die generierten Links können mit Tasker/NFC aufgerufen werden, um ein Lebensmittel zu markieren.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NfcScanPage({ onNfcScan }: { onNfcScan: (name: string) => void }) {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (name) {
      onNfcScan(name);
    }
    // Nach 2 Sekunden zurück zur Hauptseite
    const timer = setTimeout(() => navigate('/'), 2000);
    return () => clearTimeout(timer);
  }, [name, onNfcScan, navigate]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="alert alert-success text-center">
        <h2>Lebensmittel per NFC aufgerufen:</h2>
        <div className="display-4 mb-3">{name}</div>
        <div>Du wirst gleich zur Übersicht zurückgeleitet ...</div>
      </div>
    </div>
  );
}

function App() {
  const [lastNfc, setLastNfc] = useState<string | null>(null);

  return (
    <Routes>
      <Route path="/" element={<LebensmittelListe onNfcScan={setLastNfc} />} />
      <Route path="/nfc/:name" element={<NfcScanPage onNfcScan={setLastNfc} />} />
    </Routes>
  );
}

export default App;
