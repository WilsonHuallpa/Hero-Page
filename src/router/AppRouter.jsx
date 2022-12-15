import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRouter } from "../heroes"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {
  return (
    <>
        <Routes>

          <Route path="/login" element={
            <PublicRouter>
              <LoginPage/>
            </PublicRouter>
          } />

            {/**esta ruta es la que vamos a proteger. */}
            <Route path="/*" element={
              <PrivateRouter>
                <HeroesRouter/>
              </PrivateRouter>
            }/>
       
        </Routes>
    </>
  )
}
