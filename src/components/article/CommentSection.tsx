"use client";

import type { Comment } from "@/types";
import { useState } from "react";

interface Props {
  comments: Comment[];
  articleId: string;
}

function CommentItem({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className={`${depth > 0 ? "ml-8 pl-4 border-l border-glass-border" : ""}`}>
      <div className="py-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary/50 to-accent-secondary/50" />
          <div>
            <p className="text-sm font-medium text-text-primary">{comment.author.name}</p>
            <p className="text-xs text-text-muted">
              {new Date(comment.createdAt).toLocaleDateString("en-US", {
                month: "short", day: "numeric", year: "numeric",
              })}
            </p>
          </div>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-3">{comment.content}</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-secondary transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.723 2.621H5.904a1.5 1.5 0 0 1-1.5-1.5V10.167a1.5 1.5 0 0 1 1.5-1.5h1.33" />
            </svg>
            {comment.likes}
          </button>
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="text-xs text-text-muted hover:text-accent-secondary transition-colors"
          >
            Reply
          </button>
        </div>

        {showReplyForm && (
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Write a reply…"
              className="input-field text-sm flex-1"
            />
            <button className="btn-primary text-sm py-2 px-4">Post</button>
          </div>
        )}
      </div>

      {comment.replies.map((reply) => (
        <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function CommentSection({ comments }: Props) {
  return (
    <section className="mt-12" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="text-xl font-bold text-text-primary mb-6">
        Comments ({comments.length})
      </h2>

      {/* Comment form */}
      <div className="glass-card p-5 mb-8">
        <textarea
          placeholder="Share your thoughts…"
          rows={3}
          className="input-field resize-none mb-3"
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-text-muted">Be respectful and constructive.</p>
          <button className="btn-primary text-sm py-2 px-5">Post Comment</button>
        </div>
      </div>

      {/* Comments List */}
      <div className="divide-y divide-glass-border">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
