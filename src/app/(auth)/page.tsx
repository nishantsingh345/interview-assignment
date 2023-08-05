import HomeData from "@/components/Home";
import axios from "axios";

const getData = async () => {
  const { data } = await axios.get("https://panorbit.in/api/users.json");
  return data.users;
};
const Home = async () => {
  const data = await getData();
  return <HomeData data={data} />;
};

export default Home;
