import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { ClassNames } from '@emotion/react';

function CatalogoCard({ 
    marca,
    modelo,
    descripcion,
    tipo,
    puertofxo,
    puertowan,
    upstream,
    downstream,
    puertoethernet,
    cantidad,
    videoip,
    multicast,
    wifi,
    cattv  })

    {

    return (
        <Card  className={ClassNames.item}>
            <CardActionArea>
                <CardMedia />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    { marca } { modelo }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Descripcion: { descripcion }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Tipo: { tipo }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Puerto fxo: { puertofxo }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Puerto Wan: { puertowan }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Upstream: { upstream }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Downstream: { downstream }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Puerto Ethernet: { puertoethernet }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cantidad: { cantidad }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Video IP: { videoip }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Multicast: { multicast }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        WIFI: { wifi }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cattv: { cattv }
                    </Typography>


                </CardContent>
            </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver mas
        </Button>
        <Button size="small" color="primary">
          Eliminar
        </Button>

      </CardActions>
    </Card>
    )
}

export default withStyles({
    item: {
        minWidth: "250px",
        margin: "1em",
        boxSizing: "border-box"
    },
    media:{
        minWidth: "100px",
        height: "200px",
        width: "200px"
    }
    }) (CatalogoCard);