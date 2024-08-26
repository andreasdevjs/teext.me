import { getSession } from "@/app/lib/sessions/getSession"

export default async function UserDashboard() {
  const session = await getSession();
  return (
    <div>
      User Dashboard {session?.username}
    </div>
  )
}