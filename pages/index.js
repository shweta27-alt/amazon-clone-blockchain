import Sidebar from "../components/Sidebar";

const styles = {
  container: "h-full w-full flex bg-[afff]",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}
