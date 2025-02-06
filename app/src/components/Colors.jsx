export const colors = {
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  green: 'bg-green-600',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-600',
  pink: 'bg-pink-600',
  orange: 'bg-orange-500',
  teal: 'bg-teal-600',
  indigo: 'bg-indigo-600',
  rose: 'bg-rose-600',
  cyan: 'bg-cyan-600',
  emerald: 'bg-emerald-600',
  crimson: 'bg-red-700',
  navy: 'bg-blue-900',
  lime: 'bg-lime-500',
  amber: 'bg-amber-500',
  fuchsia: 'bg-fuchsia-600',
  violet: 'bg-violet-600',
  sky: 'bg-sky-500',
  coral: 'bg-orange-600',
  slate: 'bg-slate-600',
  jade: 'bg-emerald-700',
  maroon: 'bg-red-800',
  gold: 'bg-yellow-600',
  sapphire: 'bg-blue-700',
  mint: 'bg-green-400',
  plum: 'bg-purple-700',
  brick: 'bg-red-700',
  azure: 'bg-sky-600',
  chocolate: 'bg-amber-700',
  magenta: 'bg-pink-700',
  olive: 'bg-yellow-700',
  turquoise: 'bg-teal-400',
  burgundy: 'bg-red-900',
  cerulean: 'bg-blue-500',
  lavender: 'bg-purple-400',
  sienna: 'bg-orange-800',
  forest: 'bg-green-800',
  ruby: 'bg-rose-700',
  cobalt: 'bg-indigo-700',
  mauve: 'bg-purple-500',
  bronze: 'bg-amber-600'
};

export const getColorName = (bgClass) => {
  return bgClass
    .replace('bg-', '')
    .replace(/-(500|600)/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getRandomColors = () => {
  const colorEntries = Object.entries(colors);
  const shuffled = [...colorEntries].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);
  const targetIndex = Math.floor(Math.random() * 6);
  return {
    options: selected.map(([_, value]) => value),
    target: selected[targetIndex][1],
    targetName: getColorName(selected[targetIndex][1])
  };
};