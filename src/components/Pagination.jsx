import React from 'react';
import { Button } from "@/components/ui/button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          onClick={() => onPageChange(i + 1)}
          variant={currentPage === i + 1 ? "default" : "outline"}
          className="mx-1"
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;