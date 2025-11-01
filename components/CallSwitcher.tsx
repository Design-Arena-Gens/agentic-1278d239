'use client';

import { useMemo } from 'react';
import { clsx } from 'clsx';
import type { CallRecord } from '@/data/calls';

type Props = {
  calls: CallRecord[];
  activeCallId: string;
  onChange: (id: string) => void;
};

export function CallSwitcher({ calls, activeCallId, onChange }: Props) {
  const activeCall = useMemo(() => calls.find(call => call.id === activeCallId), [
    calls,
    activeCallId
  ]);

  return (
    <section className="glass-pane p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="section-title">Active Call Review</p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {activeCall?.rep ?? 'Select a call'}
            </h1>
            {activeCall && (
              <p className="text-sm text-slate-300">
                {activeCall.account} · {activeCall.stage} · {activeCall.date}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <label htmlFor="call" className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Switch Call
          </label>
          <select
            id="call"
            className="glass-outline w-full min-w-[220px] cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition hover:bg-white/10 md:w-auto"
            value={activeCallId}
            onChange={event => onChange(event.target.value)}
          >
            {calls.map(call => (
              <option className="text-slate-900" key={call.id} value={call.id}>
                {call.rep} · {call.account}
              </option>
            ))}
          </select>
        </div>
      </div>
      {activeCall && (
        <div className="mt-6 grid gap-4 md:grid-cols-[1.5fr,1fr]">
          <article className="glass-outline p-5">
            <p className="section-title mb-2 text-xs">Coach Narrative</p>
            <p className="text-sm leading-relaxed text-slate-200">{activeCall.elevatorPitch}</p>
          </article>
          <div className="glass-outline flex flex-col gap-3 p-5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Headline Score</span>
              <span className="text-3xl font-semibold text-white">{activeCall.headlineScore}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {activeCall.keyStats.map(stat => (
                <div key={stat.label} className="glass-outline flex flex-col gap-1 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      {stat.label}
                    </span>
                    {stat.trend && (
                      <span
                        className={clsx('metric-badge bg-white/10 text-xs text-white/90', {
                          'ring-1 ring-success/60 text-success': stat.trend === 'up',
                          'ring-1 ring-danger/60 text-danger': stat.trend === 'down'
                        })}
                      >
                        {stat.trend === 'up' ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                  <span className="text-base font-semibold text-white">{stat.value}</span>
                  <p className="text-[13px] leading-snug text-slate-400">{stat.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
