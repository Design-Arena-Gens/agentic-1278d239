'use client';

type Props = {
  wins: string[];
  focus: string[];
};

export function Spotlight({ wins, focus }: Props) {
  return (
    <section className="glass-pane p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-outline rounded-2xl border border-success/20 bg-gradient-to-br from-success/10 to-success/0 p-5">
          <p className="section-title text-success/80">Signals That Landed</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-100">
            {wins.map(point => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-success/80" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="glass-outline rounded-2xl border border-warning/20 bg-gradient-to-br from-warning/10 to-warning/0 p-5">
          <p className="section-title text-warning">Opportunities To Level Up</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-100">
            {focus.map(point => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-warning" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
