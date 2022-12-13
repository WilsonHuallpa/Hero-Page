import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRouter = () => {
  return (
    <>  
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="dc" element={ <DcPage/> } />
                <Route path="marvel" element={ <MarvelPage/> } />
                <Route path="search" element={ <SearchPage/> } />
                {/*Agregamos un comodin*/}
                <Route path="hero/:id" element={ <HeroPage/> } />
             
                {/**Search, heroe by id */}
                <Route path="/" element={ <Navigate to="/marvel"/> }/>
            </Routes>
        </div>
    </>
  )
}
