// 1. Usuario llega a teext.me/[username] y cogemos el parámetro [username]

// 2. Comprobamos si existe o no primero 
//    2.1 Si no existe: mostramos not found por ahora
//    2.2 Si existe devolvemos el user

// 3. Comprobamos sesión y comprobamos
//    3.1 Si tiene y es el dueño de la cuenta: mostramos el dashboard con los datos
//    3.2 Si no es el dueño, mostramos el formulario como siempre

// 4. Si no tiene sesión, mostramos el formulario

// Si no tiene sesión o no es él mismo, mostramos el componente normal

import { getSession } from '../lib/sessions/getSession';
import { getUserByUsername } from "../lib/actions/user";

import { getPublicDataFromUser } from '../lib/utils';

import UserNotFound from '../components/UserNotFound/UserNotFound';
import UserDashboard from "../components/UserDashboard/UserDashboard";
import SendMessageForm from "../components/SendMessageForm/SendMessageForm";

export default async function Page({ params }: { params: { username: string } }) {

  // Cogemos el username
  const { username } = params;

  // Vemos si existe o no
  const user = await getUserByUsername(username);
  if (!user) {
    return <UserNotFound username={username} />
  }

  // Obtenemos la sesión
  const session = await getSession();
  if (session?.username === params.username) {
    return <UserDashboard />;
  }

  // Solo mandamos los datos no sensibles
  const publicUserData = getPublicDataFromUser(user);

  return (
    <SendMessageForm user={publicUserData} />
  );
}
