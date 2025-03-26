import { useState, useEffect } from 'react';
import axios from 'axios';

const AvailablePositions = () => {
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-positions'); 
        setPositions(response.data);
      } catch (error) {
        console.error('Error fetching positions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Laddar positioner...</p>
      ) : positions.length > 0 ? (
        <div>
          <h2>Tillgängliga Positioner</h2>
          <ul>
            {positions.map((position) => (
              <li key={position.id}>
                <h3>{position.title}</h3>
                <p>{position.department} - {position.location}</p>
                <p>{position.description}</p>
                <p>Ansökningsdeadline: {position.applicationDeadline}</p>
                <p>Salary: {position.salary} SEK</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Inga positioner tillgängliga just nu.</p>
      )}
    </div>
  );
};

export default AvailablePositions
