'use client'
import { useState, useEffect } from 'react';
import Auth from '../components/Auth';

export default function Dashboard() {
  const [homes, setHomes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newHome, setNewHome] = useState({ title: '', description: '', price: '', location: '' });
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');

    if (token) {
      fetchHomes();
    }
  }, []);

  const fetchHomes = async () => {
    const response = await fetch('http://localhost:8000/api/home');
    const data = await response.json();
    setHomes(data);
  };

  const handleNewHomeSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    const formData = new FormData();
    formData.append('title', newHome.title);
    formData.append('description', newHome.description);
    formData.append('price', newHome.price);
    formData.append('location', newHome.location);
    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);

    try {
      const response = await fetch('http://localhost:8000/api/home', {
        method: 'POST',
        headers: {
          'x-auth-token': token,
        },
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Home created:', data);
        fetchHomes();
        setNewHome({ title: '', description: '', price: '', location: '' });
        setImage1(null);
        setImage2(null);
      } else {
        const errorData = await response.json();
        console.error('Failed to create home:', errorData);
        alert(`Failed to create new home listing: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error creating home:', error);
      alert('An error occurred while creating the home listing');
    }
  };

  if (!localStorage.getItem('token')) {
    return <Auth />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {isAdmin && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Create New Home Listing</h2>
          <form onSubmit={handleNewHomeSubmit} className="space-y-2">
            <input
              type="text"
              value={newHome.title}
              onChange={(e) => setNewHome({ ...newHome, title: e.target.value })}
              placeholder="Title"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              value={newHome.description}
              onChange={(e) => setNewHome({ ...newHome, description: e.target.value })}
              placeholder="Description"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              value={newHome.price}
              onChange={(e) => setNewHome({ ...newHome, price: e.target.value })}
              placeholder="Price"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              value={newHome.location}
              onChange={(e) => setNewHome({ ...newHome, location: e.target.value })}
              placeholder="Location"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="file"
              onChange={(e) => setImage1(e.target.files[0])}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="file"
              onChange={(e) => setImage2(e.target.files[0])}
              className="w-full p-2 border rounded"
              required
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Create Listing
            </button>
          </form>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold mb-2">Home Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homes.map((home) => (
            <div key={home._id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-bold">{home.title}</h3>
              <p className="text-gray-600">{home.description}</p>
              <p className="font-bold">Price: ${home.price}</p>
              <p>Location: {home.location}</p>
              <img src={`http://localhost:8000/${home.image1}`} alt="Home Image 1" className="w-full h-48 object-cover mt-2 rounded" />
              <img src={`http://localhost:8000/${home.image2}`} alt="Home Image 2" className="w-full h-48 object-cover mt-2 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}