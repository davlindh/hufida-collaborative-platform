import { useState, useEffect, useCallback } from 'react';
import { projectsData } from '../data/projectsData';

const PROJECTS_PER_PAGE = 6;

export const useProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadProjects = useCallback(() => {
    const filteredProjects = Object.values(projectsData).filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (page - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const newProjects = filteredProjects.slice(0, endIndex);

    setProjects(newProjects);
    setHasMore(endIndex < filteredProjects.length);
  }, [searchTerm, page]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  useEffect(() => {
    setPage(1);
    setProjects([]);
  }, [searchTerm]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return {
    searchTerm,
    setSearchTerm,
    projects,
    hasMore,
    loadMore
  };
};
