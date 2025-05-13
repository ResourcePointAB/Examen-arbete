import { useState, useEffect } from 'react';
import axios from 'axios';

type AvailablePositionsProps = {
  onApplyClick:  (title: string) => void;
  className?: string;
};

function AvailablePositions({ onApplyClick, className = "" }: AvailablePositionsProps) {
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
    <div className={`positions-container ${className}`} style={{ padding: '2rem 0' }}>
    {loading ? (
      <p>Laddar positioner...</p>
    ) : positions.length > 0 ? (
      <div
        className="positions-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,  300px)',
          justifyContent: 'center',
          gap: '2rem',
          width: '100%',
          padding: '2rem',
          boxSizing: 'border-box',
          height: '100%',
        }}
      >
        {positions.map((position) => (
          <div
            className="position-box"
            key={position.id}
            style={{
              flex: '0 1 300px',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{position.title}</h3>
            <p><strong>{position.department}</strong> - {position.location}</p>
            <p>{position.description}</p>
            {/* <p><strong>Ansökningsdeadline:</strong> {position.applicationDeadline}</p> */}
            {/* <p><strong>Salary:</strong> {position.salary} SEK</p> */}
            <button className="apply-btn" onClick={() => onApplyClick(position.title)}>Apply Now</button>
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
