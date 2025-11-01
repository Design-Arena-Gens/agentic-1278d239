'use client';

import { clsx } from 'clsx';
import type { TechniqueScore } from '@/data/calls';

type Props = {
  data: TechniqueScore[];
};

const impactCopy: Record<TechniqueScore['impact'], string> = {
  high: 'Deal-shaping',
  medium: 'Momentum',
  low: 'Polish'
};

export function TechniqueMatrix({ data }: Props) {
  return (
    <section className="glass-pane p-6">
      <div className="flex items-center justify-between">
        <p className="section-title">Technique Breakdown</p>
        <span className="text-xs text-slate-400">Score vs. Team Benchmark</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {data.map(item => {
          const variance = item.score - item.benchmark;
          const varianceLabel = `${variance >= 0 ? '+' : ''}${variance}`;
          return (
            <article
              key={item.id}
              className="glass-outline group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-4 transition duration-200 hover:border-primary-400/60 hover:bg-primary-500/10"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{item.label}</h3>
                  <p className="text-[13px] text-slate-300">{item.summary}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-3xl font-semibold text-white">{item.score}</p>
                    <p className="text-xs text-slate-400">team {item.benchmark}</p>
                  </div>
                  <div
                    className={clsx('metric-badge text-white/90', {
                      'bg-success/20 text-success': variance >= 5,
                      'bg-warning/20 text-warning': variance > -5 && variance < 5,
                      'bg-danger/20 text-danger': variance <= -5
                    })}
                  >
                    {varianceLabel}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-[0.3em]">Impact</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-white/80">
                  {impactCopy[item.impact]}
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div
                  className={clsx('h-full rounded-full bg-gradient-to-r', {
                    'from-success/80 via-success to-success/60': item.score >= 85,
                    'from-primary-500/80 via-primary-500 to-primary-400': item.score < 85 && item.score >= 70,
                    'from-warning/80 via-warning to-warning/60': item.score < 70 && item.score >= 60,
                    'from-danger/80 via-danger to-danger/60': item.score < 60
                  })}
                  style={{ width: `${Math.min(item.score, 100)}%` }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
