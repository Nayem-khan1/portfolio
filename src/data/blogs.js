export const blogData = [
  {
    title: "Building Multi-role Dashboards with React and Tailwind",
    slug: "multi-role-dashboard-react-tailwind",
    image: "/image/blogs/2.png",
    excerpt:
      "A practical breakdown of building Member, Merchant, and Admin dashboards with scalable UI architecture and clear role boundaries.",
    date: "January 12, 2026",
    content: {
      paragraphs: [
        "In multi-role products, the same design system should serve different permissions and workflows without duplicating code.",
        "I focus on reusable layout shells, route-level guards, and modular feature components so each role can evolve independently.",
        "At FinoBytes, this approach helped keep onboarding, transaction, and reporting interfaces consistent across Member, Merchant, and Admin views.",
      ],
      highlights: [
        "Shared dashboard foundation with role-based feature toggles",
        "Reusable table, form, and stats components",
        "Tailwind-driven responsive design for desktop and mobile",
      ],
    },
  },
  {
    title: "JWT Auth and Role-based Routing in MERN Apps",
    slug: "jwt-auth-role-based-routing-mern",
    image: "/image/blogs/1.png",
    excerpt:
      "How I structure secure frontend route protection and token-aware UX for SaaS and e-commerce products.",
    date: "December 3, 2025",
    content: {
      paragraphs: [
        "JWT authentication is not only about login; it affects route flow, API handling, and session-aware rendering across the app.",
        "I combine protected routes with role checks to prevent invalid UI states and keep business-critical pages restricted.",
        "This pattern was essential for merchant/admin dashboards, where access level directly controls visible actions and data scope.",
      ],
      highlights: [
        "Role guards at route and component levels",
        "Secure token handling with API intercept patterns",
        "Clear fallback UX for unauthorized states",
      ],
    },
  },
  {
    title: "Scaling Frontend Architecture with Reusable Components",
    slug: "scaling-frontend-architecture-reusable-components",
    image: "/image/blogs/3.png",
    excerpt:
      "Lessons from building fast, maintainable React interfaces with reusable components and API-driven UI patterns.",
    date: "October 18, 2025",
    content: {
      paragraphs: [
        "As projects grow, consistency and maintainability matter more than one-off UI speed.",
        "I organize UI into reusable cards, layout wrappers, and form primitives so features ship quickly without sacrificing quality.",
        "This keeps development predictable, improves collaboration with backend teams, and reduces regression risk.",
      ],
      highlights: [
        "Component-first design for repeated workflows",
        "Predictable folder structure and naming",
        "Performance-focused rendering and asset handling",
      ],
    },
  },
];
