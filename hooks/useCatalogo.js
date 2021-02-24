import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import CatalogoCard from './CatalogoCard'

function useCatalogo(catalogos) {

    const Catalogo = () => (

        <Grid container  padding={4}>
                    { 
                        catalogos.map(catalogo => 
                            <CatalogoCard 
                                marca={catalogo.marca} 
                                modelo={catalogo.Modelo} 
                                descripcion={catalogo.Descripcion} 
                                tipo={catalogo.Tipo} 
                                puertofxo={catalogo.PuertoFXO} 
                                puertowan={catalogo.PuertoWAN} 
                                upstream={catalogo.Upstream} 
                                downstream={catalogo.Downstream} 
                                puertoethernet={catalogo.PuertoEthernet} 
                                cantidad={catalogo.Cantidad} 
                                videoip={catalogo.VideoIP} 
                                multicast={catalogo.Multicast} 
                                wifi={catalogo.Wifi} 
                                cattv={catalogo.CatTV} 
                            />
                    )}
            </Grid>

    )

  return { Catalogo }
    
}

export default useCatalogo;
