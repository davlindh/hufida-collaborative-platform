const createSection = (id, title, content, tooltip) => ({ id, title, content, tooltip });
const createFeature = (title, description, details) => ({ title, description, details });

const commonSections = {
  about: createSection("about", "About", "", "Learn about the project"),
  objectives: createSection("objectives", "Objectives", "", "Discover the project's main goals"),
  approach: createSection("approach", "Approach", "", "Explore how we're implementing the project"),
  impact: createSection("impact", "Impact", "", "Learn about the project's potential impact"),
  future: createSection("future", "Future Plans", "", "See what's next for the project")
};

export const projectsData = {
  faving: {
    title: "Faving: The Social Exchange Engine",
    sections: [
      { ...commonSections.about, content: "Faving is a groundbreaking digital platform designed to revolutionize social interactions, knowledge sharing, and collaboration. As the first Social Exchange Engine, Faving aims to empower communities and individuals to make informed decisions through collective intelligence." },
      { ...commonSections.objectives, content: "Our key objectives include creating a dynamic platform for community engagement, implementing advanced technologies, fostering collective intelligence, supporting global initiatives, and providing personalized user experiences." },
      { ...commonSections.approach, content: "We're developing Faving using cutting-edge technologies and user-centric design principles. The platform integrates features such as real-time collaboration tools, virtual simulations, and adaptive interfaces to create an immersive and effective user experience." },
      { ...commonSections.impact, content: "Faving aims to transform how communities collaborate, share knowledge, and take action on complex global issues, potentially reaching millions of users worldwide." },
      { ...commonSections.future, content: "We envision Faving becoming a global platform for collective action, supporting initiatives in areas such as climate change mitigation, community development, and global cooperation. Future plans include integrating AI-driven insights and expanding to support multiple languages and cultures." }
    ],
    features: [
      createFeature("User Profiles", "Create personalized profiles showcasing skills, interests, and project involvements.", ["Customizable avatars and backgrounds", "Skill tagging and endorsements", "Project portfolio showcase", "Integration with professional networks"]),
      createFeature("Collaboration Tools", "Suite of tools for initiating, managing, and contributing to collaborative projects.", ["Real-time document editing", "Task management and assignment", "Video conferencing integration", "Version control for project assets"]),
      createFeature("Knowledge Portals", "Curated spaces for sharing and discovering articles, tutorials, and resources.", ["AI-powered content recommendations", "User-generated content moderation", "Interactive learning paths", "Integration with academic databases"]),
      createFeature("Matching Algorithm", "Advanced system to connect users based on shared interests and project needs.", ["Machine learning-based compatibility scoring", "Cross-disciplinary collaboration suggestions", "Skill gap analysis for teams", "Dynamic network visualization"]),
      createFeature("Evaluation System", "Mechanisms for offering and receiving feedback on content and contributions.", ["Peer review process for projects", "Reputation scoring based on contributions", "Gamification elements for engagement", "Transparent impact metrics"]),
      createFeature("Data Visualization", "Interactive tools to visualize complex data and trends.", ["Customizable dashboards", "Real-time data streaming capabilities", "Integration with external data sources", "Collaborative annotation features"])
    ],
    vision: "Our vision for Faving is to create a global ecosystem where knowledge, skills, and resources are seamlessly exchanged to address the world's most pressing challenges. By harnessing the power of collective intelligence and advanced technologies, we aim to empower individuals and communities to drive positive change on a scale never before possible."
  },
  "sustainable-waste-management": {
    title: "Sustainable Waste Management in Bamenda",
    sections: [
      { ...commonSections.about, content: "A comprehensive plan to revolutionize waste management and composting operations in Bamenda, Cameroon, through the deployment of a mobile application integrated with Mappost's route optimization technology." },
      { ...commonSections.objectives, content: "Our key objectives include optimizing waste collection routes, increasing composting, educating the community, and utilizing real-time data for continuous improvement." },
      createSection("implementation", "Implementation", "Our implementation plan includes needs assessment, technology deployment, training, pilot testing, citywide expansion, and community engagement campaigns.", "Explore how we're putting the plan into action"),
      createSection("partnerships", "Partnerships", "We're collaborating with HYSACAM, Green Care West Africa, Bamenda City Council, and various environmental organizations to ensure the project's success.", "See who we're working with"),
      { ...commonSections.impact, content: "Expected outcomes include reduced logistics expenses, lower emissions, improved soil quality, and increased public involvement in waste management." }
    ],
    features: [
      createFeature("Route Optimization", "Utilize Mappost's technology to optimize waste collection routes", ["AI-powered route planning", "Real-time traffic integration", "Fuel consumption optimization", "Dynamic scheduling based on waste volume"]),
      createFeature("Mobile Application", "Deploy a user-friendly app for waste management operations", ["GPS-enabled waste pickup requests", "Educational content on waste segregation", "Gamification for community engagement", "Real-time updates on collection schedules"]),
      createFeature("Community Engagement", "Educate and involve the community in waste segregation and composting", ["Interactive workshops and seminars", "School outreach programs", "Community composting initiatives", "Local green ambassador program"]),
      createFeature("Real-time Data Analysis", "Use data for continuous improvement of waste management", ["Waste volume prediction models", "Environmental impact assessments", "Performance metrics dashboard", "Integration with city planning systems"]),
      createFeature("Composting Initiative", "Increase composting to enhance soil fertility and reduce landfill waste", ["Household composting starter kits", "Large-scale composting facility", "Compost quality monitoring system", "Distribution network for finished compost"]),
      createFeature("Partnerships", "Collaborate with local and international organizations for project success", ["Knowledge exchange programs", "Joint research initiatives", "Funding and resource pooling", "Technology transfer agreements"])
    ],
    vision: "Our vision is to transform Bamenda into a model city for sustainable waste management in Cameroon. By leveraging technology and community engagement, we aim to create a cleaner, healthier environment while also generating economic opportunities through improved waste management practices."
  },
  "sustainability-incubator-lab": {
    title: "The Sustainability Project Incubator LAB",
    sections: [
      { ...commonSections.about, content: "The Sustainability Project Incubator LAB is a national consultative firm with several projects at the local and national level. We have years of experience in advancing science, innovation and strategic leadership aimed at fostering a strong economy that thrives within nature's limits." },
      { ...commonSections.objectives, content: "Our key objectives include accelerating the transition to a sustainable society in Cameroon, transforming Cameroon into a work site for economic emergence, creating and distributing wealth fairly, and ensuring sustainable growth and enhanced food security." },
      { ...commonSections.approach, content: "We employ the Framework for Strategic Sustainable Development (FSSD), a science-based approach used successfully in hundreds of forward-thinking organizations worldwide. This framework helps organizations embed sustainability into their strategies, operations, products, services, and community plans." },
      { ...commonSections.impact, content: "Our work has led to significant improvements in sustainable practices across various sectors in Cameroon, including agriculture, energy, and urban development. We've helped numerous organizations reduce their environmental footprint while improving their economic performance." },
      { ...commonSections.future, content: "We aim to expand our reach to more regions in Cameroon and potentially other African countries. We're also developing new tools and methodologies to address emerging sustainability challenges, such as climate change adaptation and circular economy implementation." }
    ],
    features: [
      createFeature("Sustainability Assessment", "Comprehensive evaluation of organizational sustainability practices.", ["Carbon footprint analysis", "Supply chain sustainability audit", "Stakeholder engagement assessment", "Sustainability reporting guidance"]),
      createFeature("Strategic Planning", "Develop long-term sustainability strategies aligned with business goals.", ["Scenario planning workshops", "Sustainability goal setting", "Implementation roadmap development", "Performance indicator definition"]),
      createFeature("Innovation Workshops", "Facilitate sessions to generate sustainable solutions to complex problems.", ["Design thinking methodologies", "Circular economy ideation", "Biomimicry-inspired innovation", "Cross-sector collaboration forums"]),
      createFeature("Policy Advocacy", "Work with policymakers to promote sustainable development regulations.", ["Policy brief development", "Stakeholder consultation facilitation", "Impact assessment studies", "Legislative drafting support"]),
      createFeature("Capacity Building", "Train organizations and communities in sustainable practices.", ["Customized training programs", "E-learning platform development", "Sustainability leadership coaching", "Community-based learning initiatives"]),
      createFeature("Monitoring and Evaluation", "Track and report on sustainability progress and impact.", ["KPI development and tracking", "Impact measurement frameworks", "Real-time data collection systems", "Sustainability reporting to GRI standards"])
    ],
    vision: "We envision a Cameroon where sustainable development is at the core of all economic activities, where businesses thrive while preserving natural resources, and where communities prosper in harmony with their environment. Through our work, we aim to position Cameroon as a leader in sustainable development in Africa, showcasing how economic growth and environmental stewardship can go hand in hand."
  },
  "digital-literacy": {
    title: "Digital Literacy Program",
    sections: [
      { ...commonSections.about, content: "The Digital Literacy Program is an initiative aimed at empowering communities across Africa with essential digital skills for the 21st century. We focus on bridging the digital divide by providing accessible and comprehensive digital education." },
      { ...commonSections.objectives, content: "Our main objectives include improving digital literacy rates, enhancing employability through digital skills, promoting online safety and responsible internet use, and fostering innovation and entrepreneurship in the digital space." },
      { ...commonSections.approach, content: "We implement our program through a combination of in-person workshops, online courses, mobile learning applications, and partnerships with local schools and community centers. Our curriculum covers basic computer skills, internet usage, digital communication tools, and introductory coding concepts." },
      { ...commonSections.impact, content: "The program has reached over 10,000 individuals across 5 countries, with participants reporting improved job prospects, increased confidence in using digital tools, and better access to online resources and services." },
      { ...commonSections.future, content: "We plan to expand our reach to 10 more countries in the next 5 years, develop advanced courses in emerging technologies like AI and blockchain, and create a digital skills certification program recognized by employers across the continent." }
    ],
    features: [
      createFeature("Basic Digital Skills Training", "Foundational course covering essential computer and internet skills", ["Computer basics and operating systems", "Internet browsing and search techniques", "Email and digital communication", "Introduction to productivity software"]),
      createFeature("Online Safety and Security", "Educating users on safe and responsible internet use", ["Identifying online threats and scams", "Password management and account security", "Privacy settings on social media", "Safe online banking and shopping practices"]),
      createFeature("Mobile Learning App", "A smartphone application for on-the-go digital skills learning", ["Bite-sized lessons and quizzes", "Offline access to learning materials", "Progress tracking and achievements", "Community forum for peer support"]),
      createFeature("Coding Fundamentals", "Introduction to basic programming concepts", ["HTML and CSS for web design", "JavaScript basics", "Simple app development", "Computational thinking and problem-solving"]),
      createFeature("Digital Entrepreneurship", "Guidance on leveraging digital skills for business", ["E-commerce basics", "Digital marketing fundamentals", "Online freelancing opportunities", "Creating a digital business plan"]),
      createFeature("Train-the-Trainer Program", "Preparing local educators to teach digital literacy", ["Curriculum development workshops", "Pedagogical techniques for teaching tech", "Assessment and evaluation methods", "Ongoing support and resources for trainers"])
    ],
    vision: "Our vision is to create a digitally empowered Africa where every individual has the skills and confidence to participate fully in the digital economy and society. By democratizing access to digital education, we aim to unlock new opportunities for personal growth, economic development, and social progress across the continent."
  }
};
