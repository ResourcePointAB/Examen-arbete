import { useState, useEffect } from 'react';
import axios from 'axios';

function AvailablePositions(){
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/positions');
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
    <div className="positions-container">
      {loading ? (
        <p>Laddar positioner...</p>
      ) : positions.length > 0 ? (
        <div className="positions-grid">
          {positions.map((position) => (
            <div className="position-box" key={position.id}>
              <h3>{position.title}</h3>
              <p><strong>{position.department}</strong> - {position.location}</p>
              <p>{position.description}</p>
              <p><strong>Ansökningsdeadline:</strong> {position.applicationDeadline}</p>
              <p><strong>Salary:</strong> {position.salary} SEK</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Inga positioner tillgängliga just nu.</p>
      )}
    </div>
  );
};

export default AvailablePositions;
