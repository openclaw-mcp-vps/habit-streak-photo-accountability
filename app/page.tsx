export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Accountability
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Prove Your Habits.<br />
          <span className="text-[#58a6ff]">Every Single Day.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload a daily photo as proof. Our AI verifies completion, tracks your streak, and holds you accountable — no more self-reporting lies.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-200"
        >
          Start Your Streak — $6/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No commitment.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '94%', label: 'Streak retention rate' },
            { stat: '<3s', label: 'AI verification time' },
            { stat: '10k+', label: 'Habits verified daily' },
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{item.stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { step: '1', title: 'Set Your Habit', desc: 'Define what you want to build — gym, reading, meditation, anything.' },
            { step: '2', title: 'Snap & Submit', desc: 'Take a photo as proof each day. Upload it directly in the app.' },
            { step: '3', title: 'AI Verifies', desc: 'OpenAI Vision checks your photo and confirms completion instantly.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff]/20 text-[#58a6ff] font-bold flex items-center justify-center text-sm mb-3">{item.step}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-4xl font-extrabold text-white mb-1">$6<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything you need to stay accountable</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited habit tracking',
              'AI photo verification',
              'Streak counters & history',
              'Daily reminders',
              'Accountability dashboard',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does AI photo verification work?',
              a: 'We use OpenAI Vision API to analyze your submitted photo and confirm it matches your declared habit. The check takes under 3 seconds.',
            },
            {
              q: 'Can I track multiple habits?',
              a: 'Yes — your subscription covers unlimited habits. Track your gym sessions, reading, meditation, and more simultaneously.',
            },
            {
              q: 'What happens if I miss a day?',
              a: 'Your streak resets to zero, but your history is preserved. You can always start a new streak and see your longest runs over time.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} StreakSnap. All rights reserved.
      </footer>
    </main>
  )
}
