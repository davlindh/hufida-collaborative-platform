import React from 'react';
import { Input } from "@/components/ui/input";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      type="text"
      placeholder="Search opportunities..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-6"
    />
  );
};

export default SearchBar;