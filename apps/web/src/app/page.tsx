
import Link from "next/link";
import Button from "./components/Button";
import CardUser from "./components/CardUser";
import { getUsers } from "./services/axios";
import { UsersProps } from "./types/type";


export default async function Page() {
  const datos: UsersProps[] = await getUsers()
  const navOptions = [
    { title: 'Crear', route: '/new' },
    { title: 'Actualizar', route: '/change' },
  ]
  return (
    <>
      <main className="w-full flex flex-col items-center gap-5 py-4">
        <nav className="w-[90%] md:w-[70%] flex justify-center items-center gap-4">
          No apareces aqui?
          <Link href={'/new'}><Button text='Crear'/></Link>
        </nav>
        <section className="px-2 flex flex-wrap gap-4">
          {datos?.map((item, index) =>
            <CardUser numUser={index} users={item} />
          )}
        </section>
      </main>
    </>
  );
}
