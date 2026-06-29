import type { RouteRecord } from 'vite-react-ssg'
import { MarketingLayout } from '@/layouts/MarketingLayout'
import HomePage from '@/pages/HomePage'
import AgentsPage from '@/pages/AgentsPage'
import BrokersTeamsPage from '@/pages/BrokersTeamsPage'
import AttorneysPage from '@/pages/AttorneysPage'
import ClientPortalPage from '@/pages/ClientPortalPage'
import FsboPage from '@/pages/FsboPage'
import ProductPage from '@/pages/ProductPage'
import FeaturesPage from '@/pages/FeaturesPage'
import HowItWorksPage from '@/pages/HowItWorksPage'
import DemoPage from '@/pages/DemoPage'
import CreateAccountPage from '@/pages/CreateAccountPage'
import FaqPage from '@/pages/FaqPage'
import GuideContractToClosePage from '@/pages/GuideContractToClosePage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import LegalPage from '@/pages/LegalPage'
import NotFoundPage from '@/pages/NotFoundPage'

// Static route table. vite-react-ssg prerenders every path here to HTML.
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <MarketingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'demo', element: <DemoPage /> },
      { path: 'create-account', element: <CreateAccountPage /> },
      { path: 'agents', element: <AgentsPage /> },
      { path: 'brokers-teams', element: <BrokersTeamsPage /> },
      { path: 'attorneys', element: <AttorneysPage /> },
      { path: 'client-portal', element: <ClientPortalPage /> },
      { path: 'fsbo', element: <FsboPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'guides/contract-to-close', element: <GuideContractToClosePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'legal', element: <LegalPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
