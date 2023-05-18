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
import SeleccionarCambio from "../componentes/SeleccionarCambio";
import SeleccionarMaterialVegetal from "../componentes/SeleccionarMaterialVegetal";
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { set_current_stage_change, set_current_nursery} from '../store/slice/mezcla_preparacionThunks';
import { useEffect, useState } from "react";
// import { add_siembra_service, edit_siembra_service,  get_germination_beds_id_service,  get_germination_beds_service, get_planting_goods_service } from "../store/thunks/produccionThunks";
import { type IObjNursery, type IObjChange, IObjMezcla } from "../interfaces/mezcla_preparacion";
import { useForm } from "react-hook-form";
import FormButton from "../../../../components/partials/form/FormButton";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import PersonaCambia from "../componentes/PersonaCambia";
import { add_stage_change_service } from "../store/thunks/mezcla_preparacionThunks";


export function PreparacionMezclaScreen(): JSX.Element {
 

    return (
      <>
      <h1>Preparación de mezclas</h1>
      </>
    );
  }
   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
   const on_submit = (data: IObjMezcla) => {
    const form_data:any = new FormData();
   
    // if (current_stage_change.id_siembra !== null && current_stage_change.id_siembra !== undefined) {
    //   set_action("editar")
    //   const data_edit = {
    //     ...data, distancia_entre_semillas: Number(data.distancia_entre_semillas)
    //   }
    //   const data_update = {
    //     data_siembra: data_edit,
    //     data_bienes_consumidos: planting_goods
    //   }
    //   console.log("editar")
    //   console.log(data_update)
    //     void dispatch(edit_siembra_service(data_update, current_stage_change.id_siembra));
    // } else {
      set_action("crear")
      console.log(data)
      const fecha = new Date(data.fecha_cambio??"").toISOString()

      form_data.append('id_bien_usado',Number (data.id_bien_usado));
      form_data.append('cantidad_usada', data.cantidad_usada);
      form_data.append('nro_posicion', data.nro_posicion);
      form_data.append('revisada_coord_viveros', data.revisada_coord_viveros);
      form_data.append('solicitud_abierta', data.solicitud_abierta);
      form_data.append('fecha_preparacion', fecha.slice(0,10) + " " + fecha.slice(11,19));
      form_data.append('fecha_registro', fecha.slice(0,10) + " " + fecha.slice(11,19));
      form_data.append('fecha_anulacion', fecha.slice(0,10) + " " + fecha.slice(11,19));
      form_data.append('cantidad_creada', data.cantidad_creada);
      form_data.append('justificacion_anulacion', data.justificacion_anulacion);
      form_data.append('preparacion_anulada', data.preparacion_anulada);
      form_data.append('detail', data.detail);
      form_data.append('id_observaciones', data.observaciones);
      form_data.append('id_vivero', data.id_vivero);
      form_data.append('id_mezcla', data.id_mezcla);
      form_data.append('id_persona_prepara', data.id_persona_prepara);
      form_data.append('id_persona_anula', data.id_persona_anula);
      void dispatch(add_stage_change_service(form_data));
    // }
  };