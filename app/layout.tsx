import './styles.module.css';

export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return <section>{children}</section>;
}