import React from 'react';

const BootstrapStarRating = ({ rating = 0, maxStars = 5, size = '18px' }) => {
    const stars = [];
    
    for (let i = 1; i <= maxStars; i++) {
        if (i <= rating) {
            stars.push(
                <i 
                    key={i} 
                    className="bi bi-star-fill text-warning" 
                    style={{ fontSize: size }}
                ></i>
            );
        } else {
            stars.push(
                <i 
                    key={i} 
                    className="bi bi-star text-warning" 
                    style={{ fontSize: size }}
                ></i>
            );
        }
    }
    
    return <div className="d-flex gap-1 align-items-center">{stars}</div>;
};

export default BootstrapStarRating;
