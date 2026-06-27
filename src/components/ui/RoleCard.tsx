import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RoleCardProps {
  title: string
  description: string
  href: string
  icon?: LucideIcon
  className?: string
}

/** A calm, scannable role/destination card (whole card is one link). */
export function RoleCard({ title, description, href, icon: Icon, className }: RoleCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group flex flex-col gap-3 rounded-2xl border border-ve-border bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ve-orange-border hover:shadow-card-hover',
        className,
      )}
    >
      {Icon && (
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ve-orange-light text-ve-orange-dark">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      )}
      <h3 className="font-serif text-[20px] font-semibold text-ve-text-primary">{title}</h3>
      <p className="text-[14px] leading-relaxed text-ve-text-secondary">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[13.5px] font-semibold text-ve-orange-dark">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
