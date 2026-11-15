export const config = {
    developer: {
        name: "Riya",
        fullName: "Riya Maurya",
        title: "Software Engineer | Open-Source Contributor",
        description: "Computer Science student at ABES Engineering College (2024–2028) and open-source contributor (GSSoC'26, OSCG'25). Building full-stack web and mobile apps, real-time platforms, and AI/ML solutions."
    },
    social: {
        github: "riyaax07",
        email: "riyamaurya1214@gmail.com",
        location: "Sec-62A, Noida, India"
    },
    about: {
        title: "About Me",
        description: "I'm a Computer Science student at ABES Engineering College (2024–2028) based in Noida, India, actively contributing to open source through GSSoC'26 and OSCG'25. I build across the full stack with React, TypeScript, Flutter, FastAPI, and Supabase Realtime, and engineer computer vision solutions using Python, OpenCV, and TensorFlow."
    },
    experiences: [
        {
            position: "Open-Source Contributor",
            company: "GirlScript Summer of Code (GSSoC'26)",
            period: "2026",
            location: "Remote",
            description: "Diagnosed the root cause of 7+ issues and shipped the fix for a high-severity timezone race-condition bug affecting reading-streak data for all active users. Authored and merged 7 Pull Requests across 6+ open-source repositories, enhancing UI accessibility and core functionality.",
            responsibilities: [
                "Diagnosed root causes and resolved 7+ issues including timezone race conditions",
                "Authored and merged 7 PRs across 6+ repositories",
                "Enhanced UI accessibility and core application functionality",
                "Collaborated with open-source maintainers via GitHub code reviews"
            ],
            technologies: ["React", "TypeScript", "JavaScript", "Git", "GitHub"]
        },
        {
            position: "National-Level Hackathon",
            company: "Industrython, IIIT Delhi",
            period: "2026",
            location: "New Delhi, India",
            description: "Cleared Round 1 by engineering a scalable technical solution and pitching architectural feasibility to industry judges.",
            responsibilities: [
                "Engineered scalable technical architecture for complex problem statements",
                "Pitched technical feasibility and design rationale to industry judges",
                "Qualified through Round 1 in competitive national hackathon"
            ],
            technologies: ["System Design", "Scalability", "Architecture", "Python"]
        },
        {
            position: "National-Level Hackathon",
            company: "CodeFusion",
            period: "2026",
            location: "Remote",
            description: "Collaborated within a 5-member cross-functional team to design Defensys, an automated server-side intrusion detection system. Engineered real-time threat-filtering algorithms achieving an 84% detection accuracy rate on target network logs.",
            responsibilities: [
                "Collaborated with 5-member cross-functional team to design Defensys intrusion detection system",
                "Engineered real-time threat-filtering algorithms to identify and block cyberattacks",
                "Achieved an 84% detection accuracy rate on target network logs"
            ],
            technologies: ["Python", "Intrusion Detection", "Algorithms", "Cybersecurity", "Network Logs"]
        },
        {
            position: "Open-Source Contributor",
            company: "Open Source Connect Global (OSCG'25)",
            period: "2025",
            location: "Remote",
            description: "Merged 3+ production PRs across 2 open-source codebases, refactoring UI components and resolving application logic bugs.",
            responsibilities: [
                "Merged 3+ production PRs across 2 open-source repositories",
                "Refactored UI components for improved usability and performance",
                "Resolved core application logic bugs"
            ],
            technologies: ["React", "JavaScript", "Git", "GitHub", "UI Refactoring"]
        },
        {
            position: "National Hackathon",
            company: "Smart India Hackathon (SIH)",
            period: "2025",
            location: "India",
            description: "Cleared the internal/college-level round of SIH 2025 by designing an innovative mobile application.",
            responsibilities: [
                "Designed and prototyped mobile application architecture",
                "Cleared competitive internal college round for SIH 2025",
                "Addressed real-world problem statement with intuitive UX"
            ],
            technologies: ["Flutter", "Mobile Development", "UI/UX", "Problem Solving"]
        },
        {
            position: "Job Simulation",
            company: "Walmart",
            period: "2025",
            location: "Remote",
            description: "Analyzed keyword-level ad performance data to identify 3 underperforming campaigns and recommend strategic budget reallocation.",
            responsibilities: [
                "Analyzed ad performance data across keyword metrics",
                "Identified underperforming campaigns to reduce ad spend waste",
                "Formulated strategic budget reallocation recommendations"
            ],
            technologies: ["Data Analytics", "Performance Optimization", "Business Strategy"]
        },
        {
            position: "Job Simulation",
            company: "Deloitte Australia",
            period: "2025",
            location: "Remote",
            description: "Built a data dashboard and forecast model from a sample dataset to surface multiple actionable business insights for a client.",
            responsibilities: [
                "Developed interactive data dashboards for client analytics",
                "Created forecast models to predict trends from datasets",
                "Extracted and presented actionable business insights"
            ],
            technologies: ["Data Dashboard", "Forecast Modeling", "Analytics"]
        },
        {
            position: "Young Innovator Internship Challenge",
            company: "Scaler School of Technology",
            period: "2024",
            location: "Remote",
            description: "Applied more than 5 AI tools and marketing strategies in close collaboration with a cross-functional team to develop solutions for industry problem statements.",
            responsibilities: [
                "Applied 5+ AI tools to accelerate development and research",
                "Collaborated with cross-functional team on industry challenge problems",
                "Synthesized marketing strategies and technical solutions"
            ],
            technologies: ["AI Tools", "Marketing Strategies", "Cross-Functional Collaboration"]
        }
    ],
    projects: [
        { 
            id: 1, 
            title: "CmdBuddy", 
            category: "Developer Tools / AI", 
            technologies: "Python, AI, PowerShell", 
            image: "/images/project-1.webp", 
            description: "AI-powered PowerShell assistant that understands project context, explains terminal errors, and suggests safe commands for developers." 
        },
        { 
            id: 2, 
            title: "SlothAudit", 
            category: "Fintech / Audit Tool", 
            technologies: "Python, FastAPI, React", 
            image: "/images/project-2.webp", 
            description: "Transaction auditing tool that detects duplicate charges, hidden subscriptions, unusual spending patterns, and billing discrepancies." 
        },
        { 
            id: 3, 
            title: "AegisFraud", 
            category: "Machine Learning / Security", 
            technologies: "Python, Machine Learning, Streamlit", 
            image: "/images/project-3.webp", 
            description: "Machine learning-based credit card fraud detection system that identifies suspicious transactions and provides insights through an interactive dashboard." 
        },
        { 
            id: 4, 
            title: "HumSafar", 
            category: "Family Care / Full Stack", 
            technologies: "React, Firebase", 
            image: "/images/humsafar.png", 
            description: "Family care platform connecting people with their elderly parents through medicine reminders, health updates, and simplified video calling." 
        },
        { 
            id: 5, 
            title: "Safeguard – Parent Dashboard", 
            category: "Parental Safety / Dashboard", 
            technologies: "React, Supabase", 
            image: "/images/safeguard.png", 
            description: "A parental safety dashboard designed to help parents manage children's digital safety and protective controls." 
        }
    ],
    contact: {
        email: "riyamaurya1214@gmail.com",
        github: "https://github.com/riyaax07",
        linkedin: "https://www.linkedin.com/in/riya-maurya07",
        instagram: "https://www.instagram.com/clover.7k"
    },
    skills: {
        develop: {
            title: "FULL-STACK & MOBILE",
            description: "Building scalable web & mobile apps and open-source contributions",
            details: "React, TypeScript, JavaScript, Flutter, FastAPI, Supabase (Realtime, RLS), MongoDB, and SQL. Actively contributing to production open-source codebases.",
            tools: ["React", "TypeScript", "JavaScript", "Flutter", "FastAPI", "Supabase", "MongoDB", "SQL", "Git", "GitHub"]
        },
        design: {
            title: "AI, ML & 3D GRAPHICS",
            description: "Computer vision models and interactive 3D web applications",
            details: "Computer vision and machine learning with Python, OpenCV, and TensorFlow. Immersive 3D interactive web experiences using Three.js and GSAP with Google Cloud Platform (GCP).",
            tools: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "Three.js", "GSAP", "Google Cloud (GCP)", "REST APIs", "Chrome Extensions"]
        }
    }
};
