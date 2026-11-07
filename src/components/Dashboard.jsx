
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";
import { usePosts} from "./PostContext";

function Dashboard() {
  const {posts, onAddPost} = usePosts()
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Dashboard
