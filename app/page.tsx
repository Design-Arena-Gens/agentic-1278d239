'use client';

import { useMemo, useState } from 'react';
import { CallSwitcher } from '@/components/CallSwitcher';
import { TechniqueMatrix } from '@/components/TechniqueMatrix';
import { ConversationTimeline } from '@/components/ConversationTimeline';
import { PlaybookBoard } from '@/components/PlaybookBoard';
import { Spotlight } from '@/components/Spotlight';
import { ObjectionPanel } from '@/components/ObjectionPanel';
import { ActionPlan } from '@/components/ActionPlan';
import { ManagerBrief } from '@/components/ManagerBrief';
import { callRecords } from '@/data/calls';
import { clsx } from 'clsx';

const viewModes = [
  { id: 'rep', label: 'Rep Coaching Mode' },
  { id: 'leader', label: 'Manager Briefing Mode' }
] as const;

type ViewMode = (typeof viewModes)[number]['id'];

export default function HomePage() {
  const [selectedCallId, setSelectedCallId] = useState(callRecords[0]?.id ?? '');
  const [mode, setMode] = useState<ViewMode>('rep');

  const activeCall = useMemo(
    () => callRecords.find(call => call.id === selectedCallId) ?? callRecords[0],
    [selectedCallId]
  );

  if (!activeCall) {
    return null;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-6 p-6 md:p-10">
      <header className="glass-pane flex flex-col gap-4 rounded-3xl p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-title text-primary-200">Call Coach HQ</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Operate a consistent coaching system in minutes
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Blend AI call insights with your playbooks. Toggle between rep coaching mode and
            manager-ready storyline with one tap.
          </p>
        </div>
        <div className="glass-outline flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 text-sm text-slate-200">
          {viewModes.map(view => (
            <button
              key={view.id}
              className={clsx(
                'rounded-xl px-4 py-2 transition duration-150 hover:bg-white/10',
                mode === view.id && 'bg-primary-500 text-white shadow-inner shadow-primary-800'
              )}
              onClick={() => setMode(view.id)}
            >
              {view.label}
            </button>
          ))}
        </div>
      </header>

      <CallSwitcher calls={callRecords} activeCallId={activeCall.id} onChange={setSelectedCallId} />

      {mode === 'rep' ? (
        <div className="space-y-6">
          <Spotlight wins={activeCall.spotlight.wins} focus={activeCall.spotlight.focus} />
          <div className="grid gap-6 xl:grid-cols-[1.2fr,1fr]">
            <TechniqueMatrix data={activeCall.techniqueScores} />
            <ObjectionPanel
              strength={activeCall.objectionHandling.strength}
              blockers={activeCall.objectionHandling.blockers}
              upgrades={activeCall.objectionHandling.upgrades}
              recommendedQuestions={activeCall.objectionHandling.recommendedQuestions}
            />
          </div>
          <ConversationTimeline moments={activeCall.conversationMoments} />
          <PlaybookBoard items={activeCall.playbookInsights} />
          <ActionPlan actionPlan={activeCall.actionPlan} />
        </div>
      ) : (
        <div className="space-y-6">
          <ManagerBrief call={activeCall} />
          <div className="grid gap-6 xl:grid-cols-[1.1fr,1fr]">
            <TechniqueMatrix data={activeCall.techniqueScores} />
            <PlaybookBoard items={activeCall.playbookInsights} />
          </div>
          <ActionPlan actionPlan={activeCall.actionPlan} />
        </div>
      )}
    </main>
  );
}
