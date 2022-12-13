import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers";
//El queryString lo que puedo utilizar para extraer todo lo que se ensuentra en el query de la url.

export const SearchPage = () => {
  //Crando customhook
  //Ontenemos la navegación.
  const navigate = useNavigate();
  //Obtener la localización de donde nos encontramos. 
  const location = useLocation();
  //Simpre vamos recibir un string, por mas que contenga un numero. 
  const { q = ''} = queryString.parse( location.search ); 
  const heroes = getHeroesByName( q );

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const {searchText, onInputChange } = useForm({
    searchText: q
  });
  const onSearchSudmit = (event) => {
    //Cancela el evento si es cancelablonsole.log({searchText})e, lo que significa
    //que la acción predeterminada que pertenece al evento
    //no ocurrirá
    event.preventDefault();
    //if( searchText.trim().length <= 1) return;
    //Paso siguiente obtener el parametro de la url.
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Buscar Heroe</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={ onSearchSudmit }>
            <input 
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
             />
             <button className="btn btn-outline-primary mt-1">
              Buscar
             </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          {/*
            
            ( q === '')
              ? <div className="alert alert-primary">Buscar un heroe</div>
              : ( heroes.length === 0 )
                && <div className="alert alert-danger">No se encontro <b>{ q }</b></div>
          */}
          <div 
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{display:showSearch ? '' : 'none' }}
          >Buscar un heroe</div>

          <div 
          className="alert alert-danger animate__animated animate__fadeIn"
          style={{display: showError ? '' : 'none'}}
          >No se encontro <b>{ q }</b></div>



          {
            //Si es un arreglo vacio no se renderiza. showSearch
            heroes.map(hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))
          }
        </div>
      </div>
    </>
    

  )
}
