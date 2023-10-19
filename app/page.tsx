import Audience from "@/components/audience";
import Main from "@/components/main";
import Stories from "@/components/stories";
import Users from "@/components/users";

export default function Home() {
  return (
    <div>
      <Main />
      <Audience />
      <Stories />
      <Users />
    </div>
  )
}