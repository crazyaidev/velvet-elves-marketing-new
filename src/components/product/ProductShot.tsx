import { cn } from '@/lib/utils'

interface ProductShotProps {
  src: string
  alt: string
  /** Show the browser-window chrome (traffic lights + url). */
  browser?: boolean
  /** Eager-load the hero shot; lazy-load the rest. */
  priority?: boolean
  className?: string
}

/**
 * Presents a REAL Velvet Elves product screen inside a polished browser frame.
 * The images in /public/screens are rendered from the product's own design
 * screens (sample data), not invented marketing mockups.
 */
export function ProductShot({ src, alt, browser = true, priority = false, className }: ProductShotProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-black/5 bg-white shadow-float ring-1 ring-black/5',
        className,
      )}
    >
      {browser && (
        <div className="flex items-center gap-2 border-b border-ve-border bg-ve-surface-2 px-3.5 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </span>
          <span className="ml-2 flex-1 truncate rounded-md border border-ve-border bg-white px-3 py-1 text-center text-[11px] text-ve-text-muted">
            app.velvetelves.com
          </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="block w-full"
      />
    </div>
  )
}
