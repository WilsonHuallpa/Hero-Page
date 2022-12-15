import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    //Authprvider nos va permiter compartir imformacion, 
    //con lo demas componentes que se encuentra dentro de nuestro provider.
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
