import React from 'react'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
    const [search, setSearch] = useState("");
  return (
    <div>
        <h1>Welcome to Home page</h1><br />
        <SearchBar />
    </div>
  )
}
export default Home;