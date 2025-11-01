'use client';

import { clsx } from 'clsx';
import type { PlaybookInsight } from '@/data/calls';

type Props = {
  items: PlaybookInsight[];
};

const statusStyles: Record<PlaybookInsight['status'], string> = {
  met: 'bg-success/15 text-success ring-1 ring-success/40',
  partial: 'bg-warning/20 text-warning ring-1 ring-warning/40',
  missed: 'bg-danger/20 text-danger ring-1 ring-danger/40'
};

export function PlaybookBoard({ items }: Props) {
  return (
    <section className="glass-pane p-6">
      <p className="section-title">Playbook Alignment</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map(item => (
          <article
            key={item.id}
            className="glass-outline flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{item.description}</p>
              </div>
              <span className={clsx('metric-badge', statusStyles[item.status])}>
                {item.status.toUpperCase()}
              </span>
            </div>
            <div className="glass-outline rounded-xl bg-gradient-to-r from-white/5 to-white/0 p-3 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next Move</p>
              <p className="mt-1 leading-relaxed text-white/90">{item.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
