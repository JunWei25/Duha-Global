import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const HomeCalendar: React.FC = () => {
  // Define the dates you want to highlight
  const highlightedDates: Date[] = [
    new Date(2024, 5, 10), // June 10, 2024
    new Date(2024, 5, 15), // June 15, 2024
    new Date(2024, 5, 20), // June 20, 2024
  ];

  // Define the modifiers
  const modifiers = {
    highlighted: highlightedDates,
  };

  // Define the styles for the modifiers
  const modifiersStyles = {
    highlighted: {
      backgroundColor: '#ffc107',
      color: '#fff',
    },
  };

  return (
    <div style={{ maxHeight: "100px" }}>
    <DayPicker
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
    />
    </div>
  );
};

export default HomeCalendar;
