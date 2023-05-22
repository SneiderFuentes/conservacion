// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // Componentes de Material UI
// import {
//   Grid,
//   Box,
//   Stack,
//   Button,
//   IconButton,
//   Avatar,
//   Chip,
// } from '@mui/material';
// // Icons de Material UI
// import AddIcon from '@mui/icons-material/Add';
// // import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import { DataGrid, type GridColDef } from '@mui/x-data-grid';
// // Componentes personalizados
// import { Title } from '../../../../components/Title';
// // Hooks
// import { useAppDispatch, useAppSelector } from '../../../../hooks';


// eslint-disable-next-line @typescript-eslint/naming-convention

import { Grid } from "@mui/material";
import { Title } from "../../../../components/Title";
import SeleccionarMezcla from "../componentes/SeleccionarMezcla";
import { useEffect, useState } from "react";
// import { add_siembra_service, edit_siembra_service,  get_germination_beds_id_service,  get_germination_beds_service, get_planting_goods_service } from "../store/thunks/produccionThunks";
import FormButton from "../../../../components/partials/form/FormButton";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';


export function PreparacionMezclaScreen(): JSX.Element {
 

    return (
      <>
      <Grid
      container
      sx={{
        position: 'relative',
        background: '#FAFAFA',
        borderRadius: '15px',
        p: '20px',
        mb: '20px',
        boxShadow: '0px 3px 6px #042F4A26',
      }}
    >
      <Grid item xs={12} marginY={2}>
        <Title title="Preparación Mezclas"></Title>
      </Grid>
      <SeleccionarMezcla/>

      <Grid
        container
        direction="row"
        padding={2}
        spacing={2}
      >
        <Grid item xs={12} md={3}>
          <FormButton
            variant_button="contained"
            on_click_function={null}
            icon_class={<SaveIcon />}
            label={""}
            type_button="button"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormButton
            variant_button="contained"
            on_click_function={null}
            icon_class={<CheckIcon />}
            label={"Confirmar distribucion"}
            type_button="button"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormButton
            variant_button="outlined"
            on_click_function={null}
            icon_class={<CloseIcon />}
            label={"Cancelar"}
            type_button="button"
          />
        </Grid>
      </Grid>
    </Grid>
  </>
    );
  }