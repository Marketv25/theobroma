export function CacaoPod({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 180 260" className={className}>
      <path d="M91 8C36 31 11 79 20 144c8 59 46 105 71 108 26-4 63-50 70-108C169 78 144 31 91 8Z" fill="currentColor" stroke="var(--cacao)" strokeWidth="7" />
      <path d="M91 18v224M91 18C66 58 54 107 59 164c3 35 14 62 32 78M91 18c25 40 37 89 32 146-3 35-14 62-32 78" fill="none" stroke="var(--cacao)" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 9c7-8 30-8 38 0" fill="none" stroke="var(--leaf)" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export function LeafCluster({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 250 210" className={className}>
      <path d="M121 197C96 122 59 63 8 17M119 195c25-72 61-126 120-168M120 195c-2-69 1-129 7-183" fill="none" stroke="var(--leaf-dark)" strokeWidth="6" strokeLinecap="round" />
      <path d="M66 74C30 75 10 57 8 17c36 2 58 22 58 57ZM106 136c-39 2-64-17-68-57 39 0 64 18 68 57ZM163 91c30-2 60-20 76-64-42 4-71 25-76 64ZM129 76c31-16 39-41-2-64-25 27-24 49 2 64Z" fill="currentColor" stroke="var(--leaf-dark)" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
}

export function Hummingbird({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 210 130" className={className}>
      <path d="M91 78C53 83 31 66 9 30c42 2 72 15 91 39C74 41 80 19 99 5c22 25 25 45 12 65 15-8 37-9 49 3-17 18-34 23-54 14-7 28-31 38-54 30 18-9 30-20 39-39Z" fill="currentColor" stroke="var(--cacao)" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="145" cy="72" r="3.5" fill="var(--jungle-ink)" />
      <path d="m160 73 42-8" stroke="var(--cacao)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function PinkJaguar({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 250" className={className}>
      <path d="M61 67 38 22l52 23c17-11 39-17 63-17 25 0 49 6 68 19l49-25-19 51c11 19 17 42 15 66-4 60-54 101-116 101S37 199 34 139c-2-28 8-52 27-72Z" fill="currentColor" stroke="var(--cacao)" strokeWidth="7" strokeLinejoin="round" />
      <path d="M104 121c0 13-10 23-23 23s-23-10-23-23c17-12 31-12 46 0Zm140 0c0 13-10 23-23 23s-23-10-23-23c15-12 30-12 46 0Z" fill="var(--cream)" stroke="var(--cacao)" strokeWidth="5" />
      <ellipse cx="82" cy="123" rx="7" ry="12" fill="var(--jungle-ink)" /><ellipse cx="221" cy="123" rx="7" ry="12" fill="var(--jungle-ink)" />
      <path d="M133 157c8-7 27-7 35 0-3 14-10 19-18 19s-15-5-17-19Z" fill="var(--guava)" stroke="var(--cacao)" strokeWidth="4" />
      <path d="M150 176v15m0 0c-9 8-20 8-29 2m29-2c9 8 20 8 29 2" fill="none" stroke="var(--cacao)" strokeWidth="4" strokeLinecap="round" />
      {[[84,75],[126,62],[177,64],[218,79],[66,166],[103,183],[200,183],[235,160]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="8" fill="var(--cacao)" />)}
    </svg>
  );
}

export function Sparkles({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`font-display text-2xl tracking-normal ${className}`}>✦ · ✷ · ✦</div>;
}