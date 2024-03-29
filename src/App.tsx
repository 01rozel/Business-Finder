import React, { useState } from 'react';
import './App.css';

interface Business {
  name: string;
  address: string;
  phone: string;
  rating: number;
  city: string;
}

const businesses: Business[] = [
  { "name": "EcoGreen Cluj", "address": "Str. Verde 1, Cluj-Napoca", "phone": "0722000101", "rating": 4.5, "city": "Cluj-Napoca" },
  { "name": "TechSolutions București", "address": "Bd. Tehnologiei 2, București", "phone": "0722000102", "rating": 4.7, "city": "București" },
  { "name": "DataDynamics Iași", "address": "Str. Digitală 3, Iași", "phone": "0722000103", "rating": 4.2, "city": "Iași" },
  { "name": "InnovateTech Timișoara", "address": "Bd. Inovației 4, Timișoara", "phone": "0722000104", "rating": 4.8, "city": "Timișoara" },
  { "name": "GreenTech Brașov", "address": "Str. Ecologică 5, Brașov", "phone": "0722000105", "rating": 4.3, "city": "Brașov" },
  { "name": "BioSolutions Constanța", "address": "Bd. Bio 6, Constanța", "phone": "0722000106", "rating": 4.9, "city": "Constanța" },
  { "name": "CleanTech Galați", "address": "Str. Curată 7, Galați", "phone": "0722000107", "rating": 4.6, "city": "Galați" },
  { "name": "EcoTech Sibiu", "address": "Bd. Ecologic 8, Sibiu", "phone": "0722000108", "rating": 4.4, "city": "Sibiu" },
  { "name": "BioInnovations Cluj", "address": "Str. Bio 9, Cluj-Napoca", "phone": "0722000109", "rating": 4.1, "city": "Cluj-Napoca" },
  { "name": "GreenSolutions București", "address": "Bd. Verde 10, București", "phone": "0722000110", "rating": 4.0, "city": "București" },
  { "name": "EcoFriendly Iași", "address": "Str. Prietenoasă 11, Iași", "phone": "0722000111", "rating": 4.3, "city": "Iași" },
  { "name": "TechInnovations Timișoara", "address": "Bd. Tehnic 12, Timișoara", "phone": "0722000112", "rating": 4.7, "city": "Timișoara" },
  { "name": "BioTech Brașov", "address": "Str. Biologică 13, Brașov", "phone": "0722000113", "rating": 4.2, "city": "Brașov" },
  { "name": "GreenLife Constanța", "address": "Bd. Vieții 14, Constanța", "phone": "0722000114", "rating": 4.5, "city": "Constanța" },
  { "name": "EcoInnovate Galați", "address": "Str. Inovativă 15, Galați", "phone": "0722000115", "rating": 4.6, "city": "Galați" },
  { "name": "TechSolutions Sibiu", "address": "Bd. Tehnologic 16, Sibiu", "phone": "0722000116", "rating": 4.8, "city": "Sibiu" },
  { "name": "BioInnovations Cluj-Napoca", "address": "Str. Bio 17, Cluj-Napoca", "phone": "0722000117", "rating": 4.4, "city": "Cluj-Napoca" },
  { "name": "GreenSolutions București", "address": "Bd. Verde 18, București", "phone": "0722000118", "rating": 4.9, "city": "București" },
  { "name": "EcoFriendly Iași", "address": "Str. Prietenoasă 19, Iași", "phone": "0722000119", "rating": 4.5, "city": "Iași" },
  { "name": "TechInnovations Timișoara", "address": "Bd. Tehnic 20, Timișoara", "phone": "0722000120", "rating": 4.3, "city": "Timișoara" },
  { "name": "BioTech Brașov", "address": "Str. Biologică 21, Brașov", "phone": "0722000121", "rating": 4.2, "city": "Brașov" },
  { "name": "GreenLife Constanța", "address": "Bd. Vieții 22, Constanța", "phone": "0722000122", "rating": 4.7, "city": "Constanța" },
  { "name": "EcoInnovate Galați", "address": "Str. Inovativă 23, Galați", "phone": "0722000123", "rating": 4.6, "city": "Galați" },
  { "name": "TechSolutions Sibiu", "address": "Bd. Tehnologic 24, Sibiu", "phone": "0722000124", "rating": 4.4, "city": "Sibiu" },
  { "name": "BioInnovations Cluj-Napoca", "address": "Str. Bio 25, Cluj-Napoca", "phone": "0722000125", "rating": 4.8, "city": "Cluj-Napoca" },
  { "name": "GreenSolutions București", "address": "Bd. Verde 26, București", "phone": "0722000126", "rating": 4.5, "city": "București" },
  { "name": "EcoFriendly Iași", "address": "Str. Prietenoasă 27, Iași", "phone": "0722000127", "rating": 4.3, "city": "Iași" },
  { "name": "TechInnovations Timișoara", "address": "Bd. Tehnic 28, Timișoara", "phone": "0722000128", "rating": 4.9, "city": "Timișoara" },
  { "name": "BioTech Brașov", "address": "Str. Biologică 29, Brașov", "phone": "0722000129", "rating": 4.4, "city": "Brașov" },
  { "name": "GreenLife Constanța", "address": "Bd. Vieții 30, Constanța", "phone": "0722000130", "rating": 4.6, "city": "Constanța" },
  { "name": "EcoInnovate Galați", "address": "Str. Inovativă 31, Galați", "phone": "0722000131", "rating": 4.2, "city": "Galați" },
  { "name": "TechSolutions Sibiu", "address": "Bd. Tehnologic 32, Sibiu", "phone": "0722000132", "rating": 4.7, "city": "Sibiu" },
  { "name": "BioInnovations Cluj-Napoca", "address": "Str. Bio 33, Cluj-Napoca", "phone": "0722000133", "rating": 4.5, "city": "Cluj-Napoca" },
  { "name": "GreenSolutions București", "address": "Bd. Verde 34, București", "phone": "0722000134", "rating": 4.8, "city": "București" },
  { "name": "EcoFriendly Iași", "address": "Str. Prietenoasă 35, Iași", "phone": "0722000135", "rating": 4.6, "city": "Iași" },
  { "name": "TechInnovations Timișoara", "address": "Bd. Tehnic 36, Timișoara", "phone": "0722000136", "rating": 4.3, "city": "Timișoara" },
  { "name": "BioTech Brașov", "address": "Str. Biologică 37, Brașov", "phone": "0722000137", "rating": 4.9, "city": "Brașov" },
  { "name": "GreenLife Constanța", "address": "Bd. Vieții 38, Constanța", "phone": "0722000138", "rating": 4.4, "city": "Constanța" },
  { "name": "EcoInnovate Galați", "address": "Str. Inovativă 39, Galați", "phone": "0722000139", "rating": 4.5, "city": "Galați" },
  { "name": "TechSolutions Sibiu", "address": "Bd. Tehnologic 40, Sibiu", "phone": "0722000140", "rating": 4.7, "city": "Sibiu" }
];

const BusinessTable: React.FC<{ businesses: Business[] }> = ({ businesses }) => {
  return (
    <table className='business-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Rating</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {businesses.map((business, index) => (
          <tr key={index}>
            <td>{business.name}</td>
            <td>{business.address}</td>
            <td>{business.phone}</td>
            <td>{business.rating}</td>
            <td>{business.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const App: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'city'>('name');

  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedBusinesses = filteredBusinesses.sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else {
      return a[sortBy].localeCompare(b[sortBy]);
    }
  });

  return (
    <div className="app-container">
      <input className="search-input"
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as 'name' | 'rating' | 'city')}
        className="sort-select"
      >
        <option value="name">Name</option>
        <option value="rating">Rating</option>
        <option value="city">City</option>
      </select>
      <BusinessTable businesses={sortedBusinesses} />
    </div>
  );
};

export default App;
