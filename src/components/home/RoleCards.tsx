import { User, Users, Home, MessagesSquare } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Stagger } from '@/components/ui/Stagger'
import { RoleCard } from '@/components/ui/RoleCard'

const ROLES = [
  { title: 'Agents', description: 'Win back your evenings and give clients a five-star experience, without hiring a coordinator.', href: '/agents', icon: User },
  { title: 'Brokers & Teams', description: 'Pipeline visibility across every deal, without micromanaging a single agent.', href: '/brokers-teams', icon: Users },
  { title: 'FSBO Sellers', description: 'Navigate the path from contract to close with professional structure and confidence.', href: '/fsbo', icon: Home },
  { title: 'Client Portal', description: 'Give buyers and sellers a calm, clear view of what is happening and what comes next.', href: '/client-portal', icon: MessagesSquare },
]

export function RoleCards() {
  return (
    <section className="bg-white px-6 py-section-sm md:py-section">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow className="mb-4">Built for your role</Eyebrow>
          <h2 className="font-serif text-title font-semibold text-ve-text-primary">One platform, the right view for everyone.</h2>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r) => (
            <RoleCard key={r.title} {...r} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}
