'use client';

import { clsx } from 'clsx';
import type { ConversationMoment } from '@/data/calls';

type Props = {
  moments: ConversationMoment[];
};

export function ConversationTimeline({ moments }: Props) {
  const sentimentColor: Record<ConversationMoment['sentiment'], string> = {
    positive: 'bg-success/80 shadow-success/40',
    negative: 'bg-danger/80 shadow-danger/40',
    neutral: 'bg-primary-500/60 shadow-primary-500/40'
  };

  return (
    <section className="glass-pane p-6">
      <p className="section-title">Conversation Timeline</p>
      <div className="mt-6 grid gap-4">
        {moments.map(moment => (
          <article
            key={moment.id}
            className="glass-outline relative grid gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 sm:grid-cols-[120px,1fr]"
          >
            <div className="flex flex-col gap-1 text-sm text-slate-300">
              <span className="font-semibold text-white/90">{moment.timestamp}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {moment.title}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <span
                  className={clsx(
                    'metric-badge shadow-lg shadow-black/40 text-white/90',
                    sentimentColor[moment.sentiment]
                  )}
                >
                  {moment.sentiment.toUpperCase()}
                </span>
                <p className="text-left text-slate-200">“{moment.snippet}”</p>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-300">
                <span className="font-semibold text-white/80">Coach Cue:</span> {moment.coachCue}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
