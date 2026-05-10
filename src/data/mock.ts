import {
  Article, Author, Category, Tag, Comment,
  DashboardMetric, AISuggestion, ContentCalendarItem,
  SEOHealthItem, AdZonePerformance, AutoPublishItem,
  ContentRefreshItem, RankTrackerItem,
} from "@/types";

/* ── Authors ─────────────────────────────────────── */
export const authors: Author[] = [
  {
    id: "a1", name: "Alex Rivera", slug: "alex-rivera",
    avatar: "/images/avatars/alex.jpg",
    bio: "Senior tech writer covering AI, web development, and emerging technologies. Previously at TechCrunch.",
    role: "Editor in Chief",
    socials: { twitter: "alexrivera", github: "arivera", linkedin: "alexrivera" },
    articlesCount: 142, totalViews: 2_400_000,
  },
  {
    id: "a2", name: "Samira Chen", slug: "samira-chen",
    avatar: "/images/avatars/samira.jpg",
    bio: "Full-stack developer and open-source advocate. Writing about React, Next.js, and system design.",
    role: "Senior Writer",
    socials: { twitter: "samirachen", github: "schen", website: "samirachen.dev" },
    articlesCount: 98, totalViews: 1_800_000,
  },
  {
    id: "a3", name: "Marcus Johnson", slug: "marcus-johnson",
    avatar: "/images/avatars/marcus.jpg",
    bio: "DevOps engineer turned writer. Covering cloud architecture, containers, and CI/CD pipelines.",
    role: "Staff Writer",
    socials: { twitter: "marcusj", github: "mjohnson", linkedin: "marcusjohnson" },
    articlesCount: 76, totalViews: 980_000,
  },
];

/* ── Categories ──────────────────────────────────── */
export const categories: Category[] = [
  { id: "c1", name: "Artificial Intelligence", slug: "ai", description: "Latest in AI, machine learning, and deep learning", color: "#6c5ce7", articleCount: 45 },
  { id: "c2", name: "Web Development", slug: "web-dev", description: "Frontend, backend, and full-stack web technologies", color: "#00b894", articleCount: 62 },
  { id: "c3", name: "Cloud & DevOps", slug: "cloud-devops", description: "Cloud platforms, containers, and deployment strategies", color: "#fd79a8", articleCount: 38 },
  { id: "c4", name: "Cybersecurity", slug: "cybersecurity", description: "Security best practices, threats, and defence strategies", color: "#e17055", articleCount: 29 },
  { id: "c5", name: "Data Science", slug: "data-science", description: "Data analysis, visualisation, and statistical modelling", color: "#74b9ff", articleCount: 34 },
  { id: "c6", name: "Product Design", slug: "product-design", description: "UX/UI design, design systems, and user research", color: "#fdcb6e", articleCount: 27 },
];

/* ── Tags ────────────────────────────────────────── */
export const tags: Tag[] = [
  { id: "t1", name: "React", slug: "react", articleCount: 34 },
  { id: "t2", name: "Next.js", slug: "nextjs", articleCount: 28 },
  { id: "t3", name: "TypeScript", slug: "typescript", articleCount: 41 },
  { id: "t4", name: "Python", slug: "python", articleCount: 25 },
  { id: "t5", name: "Docker", slug: "docker", articleCount: 19 },
  { id: "t6", name: "GPT", slug: "gpt", articleCount: 22 },
  { id: "t7", name: "AWS", slug: "aws", articleCount: 16 },
  { id: "t8", name: "Kubernetes", slug: "kubernetes", articleCount: 14 },
  { id: "t9", name: "GraphQL", slug: "graphql", articleCount: 12 },
  { id: "t10", name: "Tailwind", slug: "tailwind", articleCount: 18 },
];

/* ── Articles ────────────────────────────────────── */
export const articles: Article[] = [
  {
    id: "art1", slug: "future-of-ai-agents-autonomous-systems",
    title: "The Future of AI Agents: Building Autonomous Systems That Think",
    excerpt: "Explore how AI agents are evolving from simple chatbots to autonomous systems capable of complex reasoning, planning, and real-world interaction.",
    content: `<p>Artificial intelligence is undergoing a paradigm shift. We are moving from static models to dynamic agents that can reason, plan, and take action in the real world.</p><h2>What Are AI Agents?</h2><p>AI agents are systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional AI models that respond to single prompts, agents maintain state, use tools, and chain together multiple reasoning steps.</p><h2>The Architecture of Modern AI Agents</h2><p>Modern AI agents typically consist of several key components: a language model for reasoning, a memory system for maintaining context, a tool-use framework for interacting with external services, and a planning module for breaking down complex tasks.</p><h2>Real-World Applications</h2><p>From automated customer service to code generation, AI agents are finding applications across industries. Companies like Google, Microsoft, and numerous startups are racing to build more capable agent frameworks.</p><h2>Challenges and Considerations</h2><p>Despite the promise, AI agents face significant challenges including reliability, safety alignment, and the need for robust error handling. The field is actively working on solutions to these problems.</p>`,
    coverImage: "/images/articles/ai-agents.jpg",
    category: categories[0], tags: [tags[5], tags[3]], author: authors[0],
    publishedAt: "2025-01-15T10:00:00Z", updatedAt: "2025-01-20T14:30:00Z",
    readTime: 12, featured: true, trending: true, views: 45_200, likes: 1_230, commentsCount: 89,
    seoScore: 92, status: "published",
  },
  {
    id: "art2", slug: "nextjs-14-app-router-complete-guide",
    title: "Next.js 14 App Router: The Complete Developer Guide",
    excerpt: "Master the Next.js App Router with server components, streaming, parallel routes, and the latest patterns for building production-ready applications.",
    content: `<p>Next.js 14 represents a major leap forward in React-based web development. The App Router, now stable, introduces powerful patterns that change how we build web applications.</p><h2>Server Components by Default</h2><p>React Server Components are the default in the App Router. This means less JavaScript shipped to the client, faster page loads, and better SEO out of the box.</p><h2>Streaming and Suspense</h2><p>The App Router leverages React Suspense for streaming HTML from the server. This allows you to show loading states for parts of the page while other parts are still being rendered.</p><h2>Data Fetching Patterns</h2><p>Gone are getServerSideProps and getStaticProps. Instead, you fetch data directly in your components using async/await, with built-in caching and revalidation.</p>`,
    coverImage: "/images/articles/nextjs-guide.jpg",
    category: categories[1], tags: [tags[1], tags[0], tags[2]], author: authors[1],
    publishedAt: "2025-01-12T08:00:00Z", updatedAt: "2025-01-18T11:00:00Z",
    readTime: 18, featured: true, trending: true, views: 38_400, likes: 980, commentsCount: 67,
    seoScore: 95, status: "published",
  },
  {
    id: "art3", slug: "kubernetes-production-best-practices-2025",
    title: "Kubernetes in Production: Best Practices for 2025",
    excerpt: "Battle-tested strategies for running Kubernetes at scale — from cluster architecture to security hardening and cost optimisation.",
    content: `<p>Running Kubernetes in production requires careful planning and adherence to best practices. This guide covers everything from cluster setup to day-two operations.</p><h2>Cluster Architecture</h2><p>Start with a multi-zone setup for high availability. Use managed Kubernetes services (EKS, GKE, AKS) unless you have specific reasons to run self-managed clusters.</p>`,
    coverImage: "/images/articles/kubernetes.jpg",
    category: categories[2], tags: [tags[7], tags[4], tags[6]], author: authors[2],
    publishedAt: "2025-01-10T09:00:00Z", updatedAt: "2025-01-10T09:00:00Z",
    readTime: 15, featured: false, trending: true, views: 22_100, likes: 540, commentsCount: 43,
    seoScore: 88, status: "published",
  },
  {
    id: "art4", slug: "zero-trust-security-modern-applications",
    title: "Zero Trust Security for Modern Applications",
    excerpt: "Implementing zero trust architecture from the ground up — identity verification, micro-segmentation, and continuous monitoring strategies.",
    content: `<p>The traditional perimeter-based security model is no longer sufficient. Zero trust security assumes that no user or system should be automatically trusted.</p>`,
    coverImage: "/images/articles/security.jpg",
    category: categories[3], tags: [tags[6]], author: authors[0],
    publishedAt: "2025-01-08T12:00:00Z", updatedAt: "2025-01-08T12:00:00Z",
    readTime: 10, featured: false, trending: false, views: 15_300, likes: 320, commentsCount: 28,
    seoScore: 85, status: "published",
  },
  {
    id: "art5", slug: "building-real-time-data-pipelines-kafka-flink",
    title: "Building Real-Time Data Pipelines with Kafka and Flink",
    excerpt: "Design and implement streaming data pipelines that process millions of events per second with Apache Kafka and Apache Flink.",
    content: `<p>Real-time data processing is essential for modern applications. This article walks through building a production-grade streaming pipeline.</p>`,
    coverImage: "/images/articles/data-pipeline.jpg",
    category: categories[4], tags: [tags[3], tags[6]], author: authors[1],
    publishedAt: "2025-01-05T14:00:00Z", updatedAt: "2025-01-05T14:00:00Z",
    readTime: 14, featured: true, trending: false, views: 18_900, likes: 450, commentsCount: 35,
    seoScore: 90, status: "published",
  },
  {
    id: "art6", slug: "design-systems-scale-enterprise",
    title: "Design Systems at Scale: Lessons from Enterprise",
    excerpt: "How to build, maintain, and evolve a design system that serves hundreds of developers and millions of users.",
    content: `<p>A design system is more than a component library. It is a shared language, a set of principles, and a living product that evolves with your organisation.</p>`,
    coverImage: "/images/articles/design-system.jpg",
    category: categories[5], tags: [tags[0], tags[9]], author: authors[2],
    publishedAt: "2025-01-03T11:00:00Z", updatedAt: "2025-01-03T11:00:00Z",
    readTime: 11, featured: false, trending: false, views: 12_700, likes: 290, commentsCount: 22,
    seoScore: 82, status: "published",
  },
  {
    id: "art7", slug: "typescript-advanced-patterns-2025",
    title: "Advanced TypeScript Patterns Every Developer Should Know",
    excerpt: "Level up your TypeScript skills with advanced type-level programming, conditional types, template literals, and real-world design patterns.",
    content: `<p>TypeScript's type system is one of the most powerful in the programming world. Let us explore advanced patterns that will make your code more robust and expressive.</p>`,
    coverImage: "/images/articles/typescript.jpg",
    category: categories[1], tags: [tags[2], tags[0]], author: authors[1],
    publishedAt: "2025-01-01T10:00:00Z", updatedAt: "2025-01-01T10:00:00Z",
    readTime: 16, featured: false, trending: true, views: 31_500, likes: 870, commentsCount: 56,
    seoScore: 91, status: "published",
  },
  {
    id: "art8", slug: "graphql-federation-microservices",
    title: "GraphQL Federation: Unifying Microservices APIs",
    excerpt: "Learn how to use Apollo Federation to create a unified GraphQL API from multiple microservices without sacrificing team autonomy.",
    content: `<p>As organisations grow, managing a single monolithic GraphQL schema becomes impractical. Federation allows teams to own their parts of the graph independently.</p>`,
    coverImage: "/images/articles/graphql.jpg",
    category: categories[1], tags: [tags[8], tags[2]], author: authors[0],
    publishedAt: "2024-12-28T09:00:00Z", updatedAt: "2024-12-28T09:00:00Z",
    readTime: 13, featured: false, trending: false, views: 14_200, likes: 310, commentsCount: 19,
    seoScore: 87, status: "published",
  },
];

/* ── Comments ────────────────────────────────────── */
export const comments: Comment[] = [
  {
    id: "cm1", articleId: "art1",
    author: { name: "Jordan Lee", avatar: "/images/avatars/jordan.jpg" },
    content: "This is an incredible deep dive into AI agents. The architecture breakdown was especially helpful for understanding how to build my own agent system.",
    createdAt: "2025-01-16T14:30:00Z", likes: 24,
    replies: [
      {
        id: "cm1r1", articleId: "art1",
        author: { name: "Alex Rivera", avatar: "/images/avatars/alex.jpg" },
        content: "Thanks Jordan! Glad you found the architecture section useful. I am working on a follow-up that goes deeper into the planning module.",
        createdAt: "2025-01-16T15:45:00Z", likes: 12, replies: [],
      },
    ],
  },
  {
    id: "cm2", articleId: "art1",
    author: { name: "Priya Patel", avatar: "/images/avatars/priya.jpg" },
    content: "We have been implementing something similar at our company. The biggest challenge is definitely reliability — agents sometimes go off-track. Would love to see more on error recovery strategies.",
    createdAt: "2025-01-17T09:15:00Z", likes: 18, replies: [],
  },
  {
    id: "cm3", articleId: "art2",
    author: { name: "Dev Kumar", avatar: "/images/avatars/dev.jpg" },
    content: "Finally a comprehensive guide that covers all the new App Router patterns! The streaming section was exactly what I needed.",
    createdAt: "2025-01-13T11:20:00Z", likes: 31, replies: [],
  },
];

/* ── Dashboard Metrics ───────────────────────────── */
export const dashboardMetrics: DashboardMetric[] = [
  { label: "Total Views", value: "2.4M", change: 12.5, changeType: "increase", icon: "eye" },
  { label: "Monthly Revenue", value: "$18,420", change: 8.3, changeType: "increase", icon: "dollar" },
  { label: "Avg. CTR", value: "3.8%", change: -0.4, changeType: "decrease", icon: "cursor" },
  { label: "Bounce Rate", value: "42.1%", change: -2.1, changeType: "increase", icon: "activity" },
  { label: "Newsletter Subs", value: "45.2K", change: 5.7, changeType: "increase", icon: "mail" },
  { label: "Avg. Read Time", value: "4m 32s", change: 0.8, changeType: "increase", icon: "clock" },
];

/* ── AI Suggestions ──────────────────────────────── */
export const aiSuggestions: AISuggestion[] = [
  { id: "s1", title: "How to Build AI Agents with LangChain in 2025", keyword: "langchain ai agents", searchVolume: 12400, difficulty: 45, estimatedTraffic: 8200, estimatedRevenue: 420, trending: true, category: "AI", confidence: 94 },
  { id: "s2", title: "React Server Components vs Client Components: When to Use Each", keyword: "react server components", searchVolume: 9800, difficulty: 38, estimatedTraffic: 6500, estimatedRevenue: 340, trending: true, category: "Web Development", confidence: 91 },
  { id: "s3", title: "Complete Guide to AWS Lambda Cold Starts and Optimisation", keyword: "aws lambda cold start", searchVolume: 7600, difficulty: 52, estimatedTraffic: 4200, estimatedRevenue: 280, trending: false, category: "Cloud & DevOps", confidence: 87 },
  { id: "s4", title: "Building Type-Safe APIs with tRPC and Next.js", keyword: "trpc nextjs", searchVolume: 5400, difficulty: 35, estimatedTraffic: 3800, estimatedRevenue: 210, trending: true, category: "Web Development", confidence: 89 },
  { id: "s5", title: "Docker Compose for Production: A Complete Setup Guide", keyword: "docker compose production", searchVolume: 8200, difficulty: 41, estimatedTraffic: 5100, estimatedRevenue: 290, trending: false, category: "Cloud & DevOps", confidence: 85 },
  { id: "s6", title: "Implementing RAG Systems: From Theory to Production", keyword: "rag implementation guide", searchVolume: 15200, difficulty: 48, estimatedTraffic: 9800, estimatedRevenue: 520, trending: true, category: "AI", confidence: 96 },
];

/* ── Content Calendar ────────────────────────────── */
export const contentCalendar: ContentCalendarItem[] = [
  { id: "cc1", title: "WebAssembly Beyond the Browser", scheduledDate: "2025-02-01T10:00:00Z", status: "scheduled", author: "Alex Rivera", category: "Web Development" },
  { id: "cc2", title: "The Rise of Edge Computing", scheduledDate: "2025-02-03T10:00:00Z", status: "review", author: "Marcus Johnson", category: "Cloud & DevOps" },
  { id: "cc3", title: "Prompt Engineering Best Practices", scheduledDate: "2025-02-05T10:00:00Z", status: "draft", author: "Samira Chen", category: "AI" },
  { id: "cc4", title: "CSS Container Queries Deep Dive", scheduledDate: "2025-02-07T10:00:00Z", status: "draft", author: "Alex Rivera", category: "Web Development" },
  { id: "cc5", title: "Securing GraphQL APIs", scheduledDate: "2025-02-10T10:00:00Z", status: "scheduled", author: "Samira Chen", category: "Cybersecurity" },
  { id: "cc6", title: "Building ML Pipelines with MLflow", scheduledDate: "2025-02-12T10:00:00Z", status: "review", author: "Marcus Johnson", category: "Data Science" },
];

/* ── SEO Health ───────────────────────────────────── */
export const seoHealthData: SEOHealthItem[] = [
  { articleId: "art1", title: "The Future of AI Agents", score: 92, readability: 88, keywordDensity: 2.1, schemaStatus: "complete", issues: [] },
  { articleId: "art2", title: "Next.js 14 App Router Guide", score: 95, readability: 91, keywordDensity: 1.8, schemaStatus: "complete", issues: [] },
  { articleId: "art3", title: "Kubernetes Best Practices", score: 88, readability: 85, keywordDensity: 2.4, schemaStatus: "partial", issues: ["Missing FAQ schema", "Alt text missing on 2 images"] },
  { articleId: "art4", title: "Zero Trust Security", score: 85, readability: 82, keywordDensity: 1.5, schemaStatus: "complete", issues: ["Keyword density below target"] },
  { articleId: "art5", title: "Real-Time Data Pipelines", score: 90, readability: 87, keywordDensity: 2.0, schemaStatus: "partial", issues: ["Missing BreadcrumbList schema"] },
  { articleId: "art6", title: "Design Systems at Scale", score: 82, readability: 79, keywordDensity: 1.3, schemaStatus: "missing", issues: ["No schema markup", "Meta description too short", "Low keyword density"] },
];

/* ── Ad Zone Performance ─────────────────────────── */
export const adZonePerformance: AdZonePerformance[] = [
  { zone: "Header Leaderboard (728×90)", impressions: 1_240_000, clicks: 18_600, ctr: 1.5, revenue: 4_820, fillRate: 98.2 },
  { zone: "Sidebar Rectangle (300×250)", impressions: 980_000, clicks: 24_500, ctr: 2.5, revenue: 6_370, fillRate: 95.8 },
  { zone: "In-Content Native", impressions: 860_000, clicks: 34_400, ctr: 4.0, revenue: 8_940, fillRate: 92.1 },
  { zone: "Sticky Footer (320×50)", impressions: 1_100_000, clicks: 11_000, ctr: 1.0, revenue: 2_860, fillRate: 99.1 },
  { zone: "Article End (300×600)", impressions: 720_000, clicks: 15_120, ctr: 2.1, revenue: 3_930, fillRate: 88.5 },
  { zone: "Interstitial", impressions: 340_000, clicks: 8_500, ctr: 2.5, revenue: 3_400, fillRate: 78.3 },
];

/* ── Auto-Publish Queue ──────────────────────────── */
export const autoPublishQueue: AutoPublishItem[] = [
  { id: "ap1", title: "10 VS Code Extensions Every Developer Needs in 2025", generatedAt: "2025-01-20T08:00:00Z", scheduledFor: "2025-01-22T10:00:00Z", status: "approved", confidence: 92, category: "Web Development", estimatedPerformance: 85 },
  { id: "ap2", title: "Understanding Transformer Architecture: A Visual Guide", generatedAt: "2025-01-20T09:30:00Z", scheduledFor: "2025-01-23T10:00:00Z", status: "pending", confidence: 88, category: "AI", estimatedPerformance: 78 },
  { id: "ap3", title: "Terraform vs Pulumi: Infrastructure as Code Compared", generatedAt: "2025-01-20T11:00:00Z", scheduledFor: "2025-01-24T10:00:00Z", status: "pending", confidence: 85, category: "Cloud & DevOps", estimatedPerformance: 72 },
  { id: "ap4", title: "OAuth 2.0 Security Best Practices for SPAs", generatedAt: "2025-01-19T14:00:00Z", scheduledFor: "2025-01-25T10:00:00Z", status: "rejected", confidence: 76, category: "Cybersecurity", estimatedPerformance: 65 },
  { id: "ap5", title: "Building Accessible React Components", generatedAt: "2025-01-20T12:00:00Z", scheduledFor: "2025-01-26T10:00:00Z", status: "published", confidence: 94, category: "Web Development", estimatedPerformance: 90 },
];

/* ── Content Refresh ─────────────────────────────── */
export const contentRefreshData: ContentRefreshItem[] = [
  { articleId: "art6", title: "Design Systems at Scale", lastUpdated: "2025-01-03T11:00:00Z", freshness: 45, suggestedChanges: ["Update component library references", "Add Figma tokens section", "Refresh statistics"], priority: "high", estimatedImpact: 35 },
  { articleId: "art8", title: "GraphQL Federation", lastUpdated: "2024-12-28T09:00:00Z", freshness: 38, suggestedChanges: ["Update Apollo Federation v2 examples", "Add performance benchmarks", "Include error handling patterns"], priority: "high", estimatedImpact: 42 },
  { articleId: "art4", title: "Zero Trust Security", lastUpdated: "2025-01-08T12:00:00Z", freshness: 62, suggestedChanges: ["Add SASE section", "Update compliance frameworks"], priority: "medium", estimatedImpact: 25 },
];

/* ── Rank Tracker ────────────────────────────────── */
export const rankTrackerData: RankTrackerItem[] = [
  { keyword: "ai agents tutorial", position: 3, previousPosition: 7, url: "/article/future-of-ai-agents", featuredSnippet: true, voiceSearchReady: true, searchVolume: 14800 },
  { keyword: "nextjs app router guide", position: 2, previousPosition: 2, url: "/article/nextjs-14-app-router", featuredSnippet: true, voiceSearchReady: true, searchVolume: 12200 },
  { keyword: "kubernetes production best practices", position: 5, previousPosition: 4, url: "/article/kubernetes-production", featuredSnippet: false, voiceSearchReady: false, searchVolume: 8900 },
  { keyword: "zero trust security implementation", position: 8, previousPosition: 12, url: "/article/zero-trust-security", featuredSnippet: false, voiceSearchReady: true, searchVolume: 6700 },
  { keyword: "typescript advanced patterns", position: 4, previousPosition: 6, url: "/article/typescript-advanced", featuredSnippet: true, voiceSearchReady: true, searchVolume: 9400 },
  { keyword: "graphql federation microservices", position: 6, previousPosition: 5, url: "/article/graphql-federation", featuredSnippet: false, voiceSearchReady: false, searchVolume: 5200 },
  { keyword: "react server components", position: 11, previousPosition: 15, url: "/article/nextjs-14-app-router", featuredSnippet: false, voiceSearchReady: true, searchVolume: 18500 },
  { keyword: "design system enterprise", position: 9, previousPosition: 8, url: "/article/design-systems-scale", featuredSnippet: false, voiceSearchReady: false, searchVolume: 4300 },
];
