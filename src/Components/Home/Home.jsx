import { useContext } from "react";
import { Auth } from "../../Context/AuthProvider";
import HomeTable from "../../Pages/Tabs/HomeTable";
import useLocaldataLoad from "../../Hooks/LocalDataLoad/useLocaldataLoad";

const Home = () => {
  const { user } = useContext(Auth);
  const [data, refetch, isPending] = useLocaldataLoad();

  // console.log(data);
  return (
    <div>
      <HomeTable></HomeTable>
    </div>
  );
};

export default Home;
