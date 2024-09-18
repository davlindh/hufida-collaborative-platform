import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';
import { Input } from "@/components/ui/input";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { neuInputStyles } from '../utils/styleUtils';

const Projects = () => {
  const { searchTerm, setSearchTerm, projects, loadMore, hasMore } = useProjects();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore, loadMore]);

  return (
    <>
      <Helmet>
        <title>Our Projects | HUFIDA</title>
        <meta name="description" content="Explore HUFIDA's ongoing projects and initiatives." />
      </Helmet>
      <div className="container mx-auto mt-8 px-4">
        <motion.h1 
          className="text-4xl font-bold mb-6 text-deepGreen-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h1>
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={neuInputStyles()}
          />
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        {hasMore && (
          <div ref={ref} className="flex justify-center mt-8">
            <div className="w-8 h-8 border-t-2 border-deepGreen-600 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
