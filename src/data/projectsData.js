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
      { ...commonSections.about, content: "The Digital Literacy Program is a comprehensive initiative aimed at bridging the digital divide in African communities by providing essential digital skills training to underserved populations." },
      { ...commonSections.objectives, content: "Our key objectives include improving digital literacy rates, enhancing employability through tech skills, promoting online safety and responsible internet use, and fostering innovation and entrepreneurship in the digital economy." },
      { ...commonSections.approach, content: "We employ a multi-faceted approach, combining hands-on training sessions, online learning platforms, community tech hubs, and partnerships with local schools and businesses to deliver tailored digital education programs." },
      { ...commonSections.impact, content: "The program aims to empower individuals with the skills needed to participate fully in the digital world, opening up new opportunities for education, employment, and economic growth in African communities." },
      { ...commonSections.future, content: "Future plans include expanding our reach to rural areas, developing advanced courses in emerging technologies, and creating a mentorship network to support budding tech entrepreneurs." }
    ],
    features: [
      createFeature("Basic Computer Skills", "Foundational training in computer usage and software applications", ["Hardware basics", "Operating system navigation", "Word processing and spreadsheets", "Internet browsing and email"]),
      createFeature("Online Safety and Privacy", "Education on safe and responsible internet use", ["Cybersecurity awareness", "Social media privacy", "Identifying online scams", "Data protection practices"]),
      createFeature("Digital Communication Tools", "Training on various digital communication platforms", ["Email etiquette", "Video conferencing skills", "Collaborative work tools", "Professional networking platforms"]),
      createFeature("Mobile Technology", "Leveraging smartphones and tablets for productivity and learning", ["Mobile app usage", "Mobile banking and finance", "Educational apps and resources", "Mobile entrepreneurship"]),
      createFeature("Coding Fundamentals", "Introduction to basic programming concepts", ["HTML and CSS basics", "Simple app development", "Computational thinking", "Coding for problem-solving"]),
      createFeature("Digital Entrepreneurship", "Guidance on leveraging digital tools for business", ["E-commerce basics", "Digital marketing strategies", "Online business models", "Fintech and digital payments"])
    ],
    vision: "Our vision is to create a digitally empowered Africa where every individual has the skills and confidence to thrive in the digital age, driving innovation, economic growth, and social progress across the continent."
  },
  "clean-water-initiative": {
    title: "Clean Water Initiative",
    sections: [
      { ...commonSections.about, content: "The Clean Water Initiative is a comprehensive project aimed at providing sustainable access to clean and safe drinking water in rural African communities, addressing one of the most critical challenges facing the continent." },
      { ...commonSections.objectives, content: "Our key objectives include implementing sustainable water purification systems, developing local water management capabilities, promoting hygiene education, and creating long-term water infrastructure solutions." },
      { ...commonSections.approach, content: "We utilize a community-centered approach, combining innovative water purification technologies with local knowledge and resources. This includes drilling boreholes, installing solar-powered pumps, and implementing water treatment systems." },
      { ...commonSections.impact, content: "The initiative aims to significantly reduce water-borne diseases, improve overall community health, increase school attendance (especially for girls), and stimulate local economic activities by freeing up time previously spent on water collection." },
      { ...commonSections.future, content: "Future plans involve scaling the project to reach more communities, integrating smart water management systems, and developing a model for community-led water enterprises to ensure long-term sustainability." }
    ],
    features: [
      createFeature("Water Purification Systems", "Installation of efficient and sustainable water treatment solutions", ["Solar-powered purification units", "Reverse osmosis systems", "Bio-sand filters", "UV water disinfection"]),
      createFeature("Borehole Drilling", "Accessing groundwater sources in water-scarce areas", ["Geophysical surveys", "Sustainable yield testing", "Borehole construction", "Pump installation and maintenance"]),
      createFeature("Rainwater Harvesting", "Implementing systems to collect and store rainwater", ["Rooftop collection systems", "Community storage tanks", "Filtration and treatment processes", "Sustainable water management training"]),
      createFeature("Hygiene Education", "Community programs on water, sanitation, and hygiene (WASH)", ["Handwashing campaigns", "Safe water storage practices", "Sanitation awareness", "Community health worker training"]),
      createFeature("Water Quality Monitoring", "Regular testing and monitoring of water sources", ["Water quality test kits", "Community-based monitoring teams", "Data collection and analysis", "Early warning systems for contamination"]),
      createFeature("Sustainable Management", "Developing local capacity for long-term water resource management", ["Water committee formation", "Financial management training", "Maintenance and repair workshops", "Women's empowerment in water management"])
    ],
    vision: "We envision an Africa where every community has reliable access to clean, safe water, leading to improved health, enhanced livelihoods, and sustainable development across the continent."
  },
  "renewable-energy": {
    title: "Renewable Energy Solutions",
    sections: [
      { ...commonSections.about, content: "The Renewable Energy Solutions project focuses on implementing sustainable energy solutions in off-grid areas across Africa, promoting clean energy access and fostering economic development." },
      { ...commonSections.objectives, content: "Our key objectives include increasing access to clean and affordable energy, reducing reliance on fossil fuels, creating local jobs in the renewable energy sector, and supporting the development of energy-dependent small businesses." },
      { ...commonSections.approach, content: "We employ a multi-technology approach, tailoring solutions to local conditions and needs. This includes solar home systems, mini-grids, biogas digesters, and micro-hydro installations, combined with community engagement and capacity building." },
      { ...commonSections.impact, content: "The project aims to significantly improve quality of life by providing reliable electricity, reducing indoor air pollution, enabling extended study and work hours, and stimulating local economies through energy-enabled businesses." },
      { ...commonSections.future, content: "Future plans involve scaling up successful models, integrating smart grid technologies, exploring energy storage solutions, and developing vocational training programs in renewable energy technologies." }
    ],
    features: [
      createFeature("Solar Home Systems", "Providing individual households with solar power solutions", ["Photovoltaic panels", "Battery storage units", "LED lighting", "Mobile phone charging capabilities"]),
      createFeature("Community Mini-Grids", "Establishing localized power grids for villages and small towns", ["Hybrid solar-battery systems", "Smart metering", "Load management", "Scalable infrastructure"]),
      createFeature("Biogas Digesters", "Converting organic waste into usable energy", ["Anaerobic digestion technology", "Waste-to-energy systems", "Fertilizer by-product utilization", "Community waste management integration"]),
      createFeature("Micro-Hydro Power", "Harnessing local water resources for electricity generation", ["Run-of-river systems", "Turbine installation", "Power distribution networks", "Environmental impact assessments"]),
      createFeature("Energy Efficiency Programs", "Promoting efficient use of generated energy", ["Energy-efficient appliances distribution", "Community education on conservation", "Smart home technologies", "Energy audits and optimization"]),
      createFeature("Capacity Building", "Developing local skills in renewable energy technologies", ["Technical training workshops", "Entrepreneurship in energy services", "Operation and maintenance programs", "Women in energy initiatives"])
    ],
    vision: "We envision an Africa powered by clean, renewable energy, where sustainable power solutions drive economic growth, improve quality of life, and contribute to global climate change mitigation efforts."
  }
};