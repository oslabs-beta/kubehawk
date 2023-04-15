import '../styles/application.scss'

export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return <section>{children}</section>;
}