'use client';

import type { CallRecord } from '@/data/calls';

type Props = {
  call: CallRecord;
};

export function ManagerBrief({ call }: Props) {
  const conversionReadiness = call.techniqueScores
    .filter(score => score.impact === 'high')
    .reduce((acc, item) => acc + item.score, 0) /
    Math.max(call.techniqueScores.filter(score => score.impact === 'high').length, 1);

  return (
    <section className="glass-pane p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-title">Leader Snapshot</p>
          <h2 className="text-xl font-semibold text-white">
            Deal health for {call.account} · {call.stage}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="glass-outline rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Coach Priority</p>
            <p className="mt-1 font-semibold text-white">{call.spotlight.focus[0]}</p>
          </div>
          <div className="glass-outline rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Conversion Readiness</p>
            <p className="mt-1 text-2xl font-semibold text-white">{Math.round(conversionReadiness)}%</p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[2fr,1fr]">
        <article className="glass-outline rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="section-title">Manager Talking Points</p>
          <ul className="mt-3 space-y-3 text-sm text-white/90">
            {call.spotlight.wins.map(item => (
              <li key={`win-${item}`} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-success" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
            {call.spotlight.focus.map(item => (
              <li key={`focus-${item}`} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-warning" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="glass-outline flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
          <p className="section-title">Deal Sheet</p>
          <div className="grid gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Champion</p>
              <p className="text-white/90">{call.keyStats[2]?.hint ?? 'Identify champion'}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next Milestone</p>
              <p className="text-white/90">{call.keyStats[1]?.hint ?? 'Define next step'}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Deal Size</p>
              <p className="text-white/90">{call.value}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
