export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Category;
  tags: Tag[];
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured: boolean;
  trending: boolean;
  views: number;
  likes: number;
  commentsCount: number;
  seoScore: number;
  status: "published" | "draft" | "scheduled";
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  bio: string;
  role: string;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  articlesCount: number;
  totalViews: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  articleCount: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  articleCount: number;
}

export interface Comment {
  id: string;
  articleId: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies: Comment[];
}

export interface DashboardMetric {
  label: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease" | "neutral";
  icon: string;
}

export interface AISuggestion {
  id: string;
  title: string;
  keyword: string;
  searchVolume: number;
  difficulty: number;
  estimatedTraffic: number;
  estimatedRevenue: number;
  trending: boolean;
  category: string;
  confidence: number;
}

export interface ContentCalendarItem {
  id: string;
  title: string;
  scheduledDate: string;
  status: "draft" | "review" | "scheduled" | "published";
  author: string;
  category: string;
}

export interface SEOHealthItem {
  articleId: string;
  title: string;
  score: number;
  readability: number;
  keywordDensity: number;
  schemaStatus: "complete" | "partial" | "missing";
  issues: string[];
}

export interface AdZonePerformance {
  zone: string;
  impressions: number;
  clicks: number;
  ctr: number;
  revenue: number;
  fillRate: number;
}

export interface AutoPublishItem {
  id: string;
  title: string;
  generatedAt: string;
  scheduledFor: string;
  status: "pending" | "approved" | "rejected" | "published";
  confidence: number;
  category: string;
  estimatedPerformance: number;
}

export interface ContentRefreshItem {
  articleId: string;
  title: string;
  lastUpdated: string;
  freshness: number;
  suggestedChanges: string[];
  priority: "high" | "medium" | "low";
  estimatedImpact: number;
}

export interface RankTrackerItem {
  keyword: string;
  position: number;
  previousPosition: number;
  url: string;
  featuredSnippet: boolean;
  voiceSearchReady: boolean;
  searchVolume: number;
}
