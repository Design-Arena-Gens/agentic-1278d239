'use client';

type Props = {
  strength: string;
  blockers: string[];
  upgrades: string[];
  recommendedQuestions: string[];
};

export function ObjectionPanel({ strength, blockers, upgrades, recommendedQuestions }: Props) {
  return (
    <section className="glass-pane p-6">
      <div className="grid gap-5 lg:grid-cols-[1.2fr,1fr]">
        <article className="glass-outline rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-primary-500/0 p-5">
          <p className="section-title text-primary-300">Objection Handling</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">{strength}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-danger">Blockers</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-200">
                {blockers.map(item => (
                  <li key={item} className="glass-outline rounded-xl border border-danger/30 bg-danger/10 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-success">Upgrades</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-200">
                {upgrades.map(item => (
                  <li key={item} className="glass-outline rounded-xl border border-success/30 bg-success/10 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article className="glass-outline rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="section-title text-primary-200">Coach-The-Rep Prompts</p>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            {recommendedQuestions.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
