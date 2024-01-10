
import CardUser from "./components/CardUser";
import { getUsers } from "./components/apiUsers";

type UserProps = {
  nombre?: string,
  apellido?: string,
  pais?: string,
  ciudad?: string,
  edad?: number,
  nie?: string,
}

export default async function Page() {
  const datos:UserProps[] = await getUsers()

  return (
    <>
    <div  className="flex flex-col items-center gap-2 py-4">

      {datos?.map((item:UserProps,index) => 
        <CardUser numUser={index} users={item} />
      )}
    </div>
    </>
  );
}
