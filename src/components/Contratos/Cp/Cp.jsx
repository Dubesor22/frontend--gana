import React, { useState, useEffect } from "react";

const Cp = () => {
  const [postalCode, setPostalCode] = useState("");
  const [localidad, setLocalidad] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (postalCode.length === 5) {
      fetch(`http://localhost:8080/localidades/${postalCode}`)
        .then((response) => response.json())
        .then((data) => setLocalidad(data[0].municipio_nombre))
        .catch((error) => setError(error));
    }
  }, [postalCode]);

  return (
    <div>
      <label>Código Postal:</label>
      <input
        type="text"
        value={postalCode}
        onChange={(event) => setPostalCode(event.target.value)}
      />
      {localidad && <p>Localidad : {localidad}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Cp;
