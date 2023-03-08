import { useParams } from "react-router-dom";
import { useGetOneUnistoryApiQuery } from "../../redux";

import Form from "../reuseble/Form/Form";
import Planet from "../mainPage/components/Planet";
export default function ProfilePage() {
  const params = useParams();
  const { data, isLoading } = useGetOneUnistoryApiQuery(params.profileID);

  return (
    <div className="text-[white] h-[100vh] mt-[60px] relative pt-10  w-[1640px] px-[164px] my-0 mx-auto">
      <h1 className="text-[white] text-[48px] leading-[58px] font-['Bebas_Neue'] mt-10">
        PERSONAL DATA
      </h1>
      <Form text={data?.username} name="name" loged={true} />
      <Form text={data?.email} name="email" loged={true} />
      <Form text={data?.address} name="wallet" loged={true} />
      <div className="absolute top-0 right-[-400px]">
        <Planet hover={false} />
      </div>
    </div>
  );
}
