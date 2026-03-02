'use client';
import { useState } from 'react';

// Sunrise Bail Bond Simulator
export function SunriseBailSimulator() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({ name: '', dob: '', charge: '', bail: '', relationship: '' });
    const [status, setStatus] = useState('');

    const steps = [
        {
            title: 'Client Intake Form',
            subtitle: 'Step 1 of 3 — Defendant Information',
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Defendant Full Name</label>
                            <input
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                placeholder="John Smith"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Date of Birth</label>
                            <input
                                type="date"
                                value={form.dob}
                                onChange={e => setForm({ ...form, dob: e.target.value })}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Charge Description</label>
                        <input
                            value={form.charge}
                            onChange={e => setForm({ ...form, charge: e.target.value })}
                            placeholder="e.g. DUI, Misdemeanor Assault..."
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Bail Amount ($)</label>
                            <input
                                value={form.bail}
                                onChange={e => setForm({ ...form, bail: e.target.value })}
                                placeholder="e.g. 25000"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Your Relationship</label>
                            <select
                                value={form.relationship}
                                onChange={e => setForm({ ...form, relationship: e.target.value })}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                            >
                                <option value="">Select...</option>
                                <option>Spouse</option>
                                <option>Parent</option>
                                <option>Sibling</option>
                                <option>Friend</option>
                                <option>Attorney</option>
                            </select>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Premium & Agreement',
            subtitle: 'Step 2 of 3 — Bond Details',
            content: (
                <div className="space-y-4">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                        <div className="text-amber-400 font-semibold mb-2">📋 Bond Summary</div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-gray-400">Defendant:</span><span className="text-white">{form.name || 'John Smith'}</span></div>
                            <div className="flex justify-between"><span className="text-gray-400">Bail Amount:</span><span className="text-white">${parseInt(form.bail || '25000').toLocaleString()}</span></div>
                            <div className="flex justify-between"><span className="text-gray-400">Premium (10%):</span><span className="text-amber-400 font-bold">${(parseInt(form.bail || '25000') * 0.1).toLocaleString()}</span></div>
                            <div className="flex justify-between"><span className="text-gray-400">Charge:</span><span className="text-white">{form.charge || 'DUI'}</span></div>
                        </div>
                    </div>
                    <div className="bg-gray-800/60 rounded-xl p-4 text-xs text-gray-400 h-24 overflow-y-auto">
                        By proceeding, you agree to the terms and conditions of the bail bond agreement. The premium paid is non-refundable. The defendant must appear at all court dates. Sunrise Bail Bonds, LLC is licensed and bonded in California...
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-600" defaultChecked />
                        <span className="text-sm text-gray-300">I agree to the bail bond terms and conditions</span>
                    </label>
                </div>
            ),
        },
        {
            title: 'Application Submitted!',
            subtitle: 'Tracking your bond status in real-time',
            content: (
                <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                        <div className="text-4xl mb-2">✅</div>
                        <div className="text-green-400 font-bold text-lg">Bond Application Received</div>
                        <div className="text-gray-400 text-sm mt-1">Case ID: SBB-2026-{Math.floor(Math.random() * 9000) + 1000}</div>
                    </div>
                    <div className="space-y-2">
                        {[
                            { label: 'Application Received', done: true, time: 'Just now' },
                            { label: 'Agent Review', done: status !== '', time: status !== '' ? '2 min ago' : 'Pending...' },
                            { label: 'Court Verification', done: false, time: 'Estimated 15 min' },
                            { label: 'Bond Issued', done: false, time: 'Estimated 30 min' },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center justify-between bg-gray-800/60 rounded-lg px-4 py-2">
                                <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${s.done ? 'bg-green-400' : 'bg-gray-600'}`} />
                                    <span className={`text-sm ${s.done ? 'text-white' : 'text-gray-500'}`}>{s.label}</span>
                                </div>
                                <span className="text-xs text-gray-500">{s.time}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setStatus('reviewed')} className="w-full py-2 rounded-lg text-sm text-amber-400 border border-amber-500/30 hover:bg-amber-500/10 transition-colors">
                        Simulate: Agent Reviews Application →
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-b border-gray-800 px-6 py-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                        <h3 className="text-white font-semibold">Sunrise Bail Bonds — Client Portal</h3>
                        <p className="text-amber-400/70 text-xs">Live Demo Simulator</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="mb-1 text-xs text-gray-500 uppercase tracking-wider">{steps[step].subtitle}</div>
                <h4 className="text-white font-bold text-xl mb-4">{steps[step].title}</h4>
                {steps[step].content}
                {step < 2 && (
                    <button
                        onClick={() => setStep(step + 1)}
                        className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        {step === 0 ? 'Continue to Bond Details →' : 'Submit Application →'}
                    </button>
                )}
                {step > 0 && step < 2 && (
                    <button onClick={() => setStep(step - 1)} className="mt-2 w-full py-2 rounded-xl text-gray-400 text-sm hover:text-white transition-colors">
                        ← Back
                    </button>
                )}
                {step === 2 && (
                    <button onClick={() => { setStep(0); setStatus(''); setForm({ name: '', dob: '', charge: '', bail: '', relationship: '' }); }} className="mt-4 w-full py-2 rounded-xl text-gray-400 text-sm hover:text-white transition-colors border border-gray-700">
                        Start New Demo →
                    </button>
                )}
            </div>
        </div>
    );
}

// Nancy Beauty Booking Simulator
export function NancyBeautySimulator() {
    const [lang, setLang] = useState<'en' | 'es' | 'ar'>('en');
    const [chatInput, setChatInput] = useState('');
    const [chatLog, setChatLog] = useState<{ role: 'user' | 'bot'; text: string }[]>([
        { role: 'bot', text: '👋 Welcome to Nancy Beauty! How can I help you today?' },
    ]);
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const t = {
        en: { greeting: 'Book Your Appointment', confirm: 'Confirm Booking', services: 'Services', chatPlaceholder: 'Ask me anything...', languages: ['English', 'Español', 'عربية'] },
        es: { greeting: 'Reserve Su Cita', confirm: 'Confirmar Reserva', services: 'Servicios', chatPlaceholder: 'Pregúntame algo...', languages: ['English', 'Español', 'عربية'] },
        ar: { greeting: 'احجزي موعدك', confirm: 'تأكيد الحجز', services: 'الخدمات', chatPlaceholder: 'اسأليني أي شيء...', languages: ['English', 'Español', 'عربية'] },
    };

    const faqAnswers: Record<string, Record<string, string>> = {
        en: {
            hours: 'We are open Monday–Saturday, 9AM to 7PM.',
            price: 'Services start at $35 for cuts and $65 for color.',
            location: 'We are located at 123 Main St, Los Angeles, CA.',
            parking: 'Free parking is available in our lot.',
        },
        es: {
            hours: 'Estamos abiertos de lunes a sábado, de 9AM a 7PM.',
            price: 'Los servicios comienzan en $35 para cortes y $65 para color.',
            location: 'Estamos ubicados en 123 Main St, Los Ángeles, CA.',
        },
        ar: {
            hours: 'نحن مفتوحون من الاثنين إلى السبت، من 9 صباحاً حتى 7 مساءً.',
            price: 'تبدأ الخدمات من 35$ للقص و65$ للصبغ.',
        },
    };

    const sendChat = () => {
        if (!chatInput.trim()) return;
        const q = chatInput.toLowerCase();
        let reply = "I'm here to help! Type 'hours', 'price', 'location', or 'parking' for quick answers.";
        if (q.includes('hour') || q.includes('open') || q.includes('hora') || q.includes('ساعة')) reply = faqAnswers[lang].hours || faqAnswers.en.hours;
        if (q.includes('price') || q.includes('cost') || q.includes('precio') || q.includes('سعر')) reply = faqAnswers[lang].price || faqAnswers.en.price;
        if (q.includes('location') || q.includes('address') || q.includes('donde') || q.includes('عنوان')) reply = faqAnswers[lang].location || faqAnswers.en.location;
        if (q.includes('park') || q.includes('parking') || q.includes('estacion')) reply = faqAnswers[lang].parking || faqAnswers.en.parking;
        setChatLog(prev => [...prev, { role: 'user', text: chatInput }, { role: 'bot', text: reply }]);
        setChatInput('');
    };

    const services = ['Brazilian Blowout — $120', 'Color & Highlights — $85+', 'Haircut & Style — $55', 'Keratin Treatment — $150', 'Balayage — $175'];

    return (
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500/20 to-rose-600/20 border-b border-gray-800 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">💄</span>
                        <div>
                            <h3 className="text-white font-semibold">Nancy Beauty Salon</h3>
                            <p className="text-pink-400/70 text-xs">Multilingual Booking Demo</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {(['en', 'es', 'ar'] as const).map((l, i) => (
                            <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded text-xs font-medium transition-all ${lang === l ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                                {t.en.languages[i]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Booking Panel */}
                <div className="p-5 border-r border-gray-800">
                    <h4 className="text-white font-bold mb-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{t[lang].greeting}</h4>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs text-gray-400 mb-1" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{t[lang].services}</label>
                            <select value={selectedService} onChange={e => setSelectedService(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                                <option value="">Select a service...</option>
                                {services.map(s => <option key={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Date & Time</label>
                            <input type="datetime-local" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" />
                        </div>
                        <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                            {t[lang].confirm} ✓
                        </button>
                    </div>
                </div>
                {/* Chatbot Panel */}
                <div className="p-5 flex flex-col h-64 md:h-auto">
                    <div className="text-xs text-gray-500 mb-2">💬 AI Chatbot ({lang.toUpperCase()})</div>
                    <div className="flex-1 overflow-y-auto space-y-2 mb-3">
                        {chatLog.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`px-3 py-2 rounded-lg text-xs max-w-[80%] ${m.role === 'user' ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            value={chatInput}
                            onChange={e => setChatInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && sendChat()}
                            placeholder={t[lang].chatPlaceholder}
                            dir={lang === 'ar' ? 'rtl' : 'ltr'}
                            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-pink-500"
                        />
                        <button onClick={sendChat} className="px-3 py-2 bg-pink-600 rounded-lg text-white text-xs hover:bg-pink-500">→</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Nursing AI Coach Simulator
export function NursingAISimulator() {
    const [quizState, setQuizState] = useState<'study' | 'quiz' | 'result'>('study');
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [qIndex, setQIndex] = useState(0);

    const questions = [
        {
            q: 'A patient with heart failure presents with crackles, dyspnea, and JVD. What is the priority nursing intervention?',
            a: ['Administer supplemental oxygen', 'Insert urinary catheter', 'Prepare for bronchoscopy', 'Encourage ambulation'],
            correct: 0,
            explanation: 'Supplemental oxygen is the priority to address hypoxemia from pulmonary edema — airway/breathing always comes first in the ABCs.'
        },
        {
            q: 'Which lab value indicates the greatest concern for a patient on digoxin therapy?',
            a: ['Sodium 138 mEq/L', 'Potassium 2.8 mEq/L', 'Calcium 9.2 mg/dL', 'Chloride 101 mEq/L'],
            correct: 1,
            explanation: 'Hypokalemia (K+ < 3.5) significantly increases digoxin toxicity risk. Always check potassium before administering digoxin.'
        },
        {
            q: 'A patient develops a temp of 38.9°C, purulent drainage, and redness at an IV site 48 hours post-insertion. The nurse should FIRST:',
            a: ['Increase IV flow rate', 'Discontinue the IV and document', 'Apply warm compresses and continue', 'Notify pharmacy'],
            correct: 1,
            explanation: 'Signs of IV site infection require immediate catheter removal. Document findings and restart IV at a new site.'
        },
    ];

    const q = questions[qIndex];

    const handleAnswer = (i: number) => {
        setSelected(i);
        if (i === q.correct) setScore(s => s + 1);
    };

    const nextQ = () => {
        if (qIndex < questions.length - 1) {
            setQIndex(qi => qi + 1);
            setSelected(null);
        } else {
            setQuizState('result');
        }
    };

    return (
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-600/20 border-b border-gray-800 px-6 py-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🏥</span>
                    <div>
                        <h3 className="text-white font-semibold">NursingStudySource — AI Coach</h3>
                        <p className="text-teal-400/70 text-xs">NCLEX Adaptive Quiz Demo</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                {quizState === 'study' && (
                    <div className="space-y-4">
                        <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4">
                            <div className="text-teal-400 font-semibold text-sm mb-2">🤖 AI Coach Analysis</div>
                            <p className="text-gray-300 text-sm">Based on your previous sessions, your weak areas are: <strong>Cardiac</strong> and <strong>Medication Safety</strong>. Today's adaptive quiz targets these domains with NCLEX Priority-style questions.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[{ label: 'Sessions', val: '24' }, { label: 'Avg Score', val: '78%' }, { label: 'Ready Score', val: '82%' }].map(s => (
                                <div key={s.label} className="bg-gray-800/60 rounded-xl p-3 text-center">
                                    <div className="text-teal-400 font-bold text-xl">{s.val}</div>
                                    <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setQuizState('quiz')} className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity">
                            Start Adaptive Quiz (3 Questions) →
                        </button>
                    </div>
                )}
                {quizState === 'quiz' && (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-500">Question {qIndex + 1} of {questions.length}</span>
                            <span className="text-xs text-teal-400 font-medium">NCLEX Priority</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
                            <div className="bg-teal-500 h-1.5 rounded-full transition-all" style={{ width: `${((qIndex) / questions.length) * 100}%` }} />
                        </div>
                        <p className="text-white text-sm font-medium leading-relaxed">{q.q}</p>
                        <div className="space-y-2">
                            {q.a.map((opt, i) => {
                                let cls = 'border-gray-700 text-gray-300 hover:border-gray-500';
                                if (selected !== null) {
                                    if (i === q.correct) cls = 'border-teal-500 bg-teal-500/10 text-teal-300';
                                    else if (i === selected && selected !== q.correct) cls = 'border-red-500 bg-red-500/10 text-red-300';
                                    else cls = 'border-gray-800 text-gray-500';
                                }
                                return (
                                    <button key={i} disabled={selected !== null} onClick={() => handleAnswer(i)}
                                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${cls}`}>
                                        <span className="font-mono text-xs mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                                    </button>
                                );
                            })}
                        </div>
                        {selected !== null && (
                            <div className={`rounded-xl p-3 text-xs ${selected === q.correct ? 'bg-teal-500/10 text-teal-300 border border-teal-500/30' : 'bg-red-500/10 text-red-300 border border-red-500/30'}`}>
                                <strong>{selected === q.correct ? '✅ Correct! ' : '❌ Incorrect. '}</strong>{q.explanation}
                            </div>
                        )}
                        {selected !== null && (
                            <button onClick={nextQ} className="w-full py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500">
                                {qIndex < questions.length - 1 ? 'Next Question →' : 'View Results →'}
                            </button>
                        )}
                    </div>
                )}
                {quizState === 'result' && (
                    <div className="text-center space-y-4">
                        <div className="text-5xl">{score === 3 ? '🏆' : score === 2 ? '⭐' : '📚'}</div>
                        <div>
                            <div className="text-3xl font-bold text-white">{score}/{questions.length}</div>
                            <div className="text-gray-400 text-sm mt-1">Score: {Math.round((score / questions.length) * 100)}%</div>
                        </div>
                        <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 text-sm text-teal-300">
                            🤖 AI Coach: {score === 3 ? 'Excellent performance! Your Cardiac domain is improving.' : 'Focus more on medication safety. I\'ve adjusted your next session.'}
                        </div>
                        <button onClick={() => { setQuizState('study'); setQIndex(0); setSelected(null); setScore(0); }}
                            className="w-full py-2.5 rounded-xl border border-gray-700 text-gray-300 text-sm hover:text-white transition-colors">
                            Restart Demo →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// Ocean Marine Status Board Simulator
export function OceanMarineSimulator() {
    const [alerts, setAlerts] = useState([
        { id: 1, vessel: 'MV Pacific Star', event: 'Departed Port of LA', time: '06:42', status: 'alert', color: 'amber' },
        { id: 2, vessel: 'MV Ocean Trader', event: 'Compliance Doc Expiring (7 days)', time: '05:15', status: 'warning', color: 'red' },
        { id: 3, vessel: 'MV Harbor King', event: 'Daily Report Generated & Sent', time: '06:00', status: 'ok', color: 'green' },
    ]);
    const [triggered, setTriggered] = useState(false);

    const triggerDemo = () => {
        setTriggered(true);
        setTimeout(() => {
            setAlerts(prev => [
                { id: 4, vessel: 'MV Sierra Voyager', event: 'Departure Detected — Webhook Triggered', time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), status: 'alert', color: 'blue' },
                ...prev
            ]);
        }, 1200);
    };

    return (
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-600/20 border-b border-gray-800 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🚢</span>
                        <div>
                            <h3 className="text-white font-semibold">Ocean Marine — Ops Dashboard</h3>
                            <p className="text-blue-400/70 text-xs">Live Automation Demo</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-gray-400">15 Workflows Active</span>
                    </div>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    {[{ v: '8', l: 'Vessels Tracked' }, { v: '15', l: 'Active Workflows' }, { v: '40h', l: 'Saved/Week' }].map(s => (
                        <div key={s.l} className="bg-gray-800/60 rounded-xl p-3 text-center">
                            <div className="text-blue-400 font-bold text-xl">{s.v}</div>
                            <div className="text-gray-500 text-xs mt-1">{s.l}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Live Event Feed</div>
                    <div className="space-y-2">
                        {alerts.map(a => (
                            <div key={a.id} className={`flex items-center justify-between bg-${a.color}-500/10 border border-${a.color}-500/30 rounded-xl px-4 py-3`}>
                                <div className="flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full bg-${a.color}-400`} />
                                    <div>
                                        <div className="text-white text-xs font-medium">{a.vessel}</div>
                                        <div className="text-gray-400 text-xs">{a.event}</div>
                                    </div>
                                </div>
                                <span className="text-gray-500 text-xs">{a.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={triggerDemo}
                    disabled={triggered}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {triggered ? '✅ Webhook Triggered — Event Added Above' : '🔗 Simulate: Vessel Departure Webhook →'}
                </button>
            </div>
        </div>
    );
}
