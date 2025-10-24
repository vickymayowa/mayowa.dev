export function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 animate-pulse">
      <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-slate-700 rounded w-full mb-3"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-4"></div>
      <div className="flex gap-2">
        <div className="h-8 bg-slate-700 rounded w-16"></div>
        <div className="h-8 bg-slate-700 rounded w-16"></div>
      </div>
    </div>
  )
}

export function SkeletonText() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-slate-700 rounded w-full"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6"></div>
      <div className="h-4 bg-slate-700 rounded w-4/6"></div>
    </div>
  )
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-slate-700 rounded animate-pulse ${className}`} />
}
