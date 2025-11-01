'use client';

import { clsx } from 'clsx';
import type { CallRecord } from '@/data/calls';

type Props = {
  actionPlan: CallRecord['actionPlan'];
};

export function ActionPlan({ actionPlan }: Props) {
  return (
    <section className="glass-pane p-6">
      <div className="flex items-center justify-between">
        <p className="section-title">Action Plan</p>
        <span className="text-xs text-slate-400">Coach-ready recap</span>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {actionPlan.map((task, index) => (
          <article
            key={`${task.owner}-${task.title}-${index}`}
            className={clsx(
              'glass-outline flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-200',
              {
                'border-success/30 bg-success/10': task.owner === 'rep',
                'border-primary-500/30 bg-primary-500/10': task.owner === 'manager'
              }
            )}
          >
            <span className="metric-badge bg-white/15 text-white/80">
              {task.owner === 'rep' ? 'Rep' : 'Manager'}
            </span>
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            <p className="text-sm text-slate-200">{task.detail}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Due {task.due}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
