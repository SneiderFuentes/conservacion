import { useState } from 'react';
import { api } from '../../../../api/axios';
import { Chip, Grid } from '@mui/material';
import { type ToastContent, toast } from 'react-toastify';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import {  useAppDispatch } from '../../../../hooks';
import { set_viveristas, set_current_viverista, set_historicos_viveristas, set_current_historico_viverista, set_nuevos_viveristas, set_current_nuevo_viverista} from '../store/slice/viveroSlice';
import { type IDespacho } from "../interfaces/vivero";

interface IProps {
  control_viverista: any;
  get_values: any
}
// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/explicit-function-return-type
const SeleccionarViverista = ({
  control_viverista,
  get_values
}: IProps) => {
  const dispatch= useAppDispatch()

  
  const [despachos, set_despachos] = useState<IDespacho[]>([]);

  const columns_viveristas: GridColDef[] = [
    { field: 'id_despacho_entrante', headerName: 'ID', width: 20 },
    {
      field: 'numero_despacho_consumo',
      headerName: '# despacho',
      width: 200,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
          {params.value}
        </div>
      ),
    },
    {
      field: 'fecha_ingreso',
      headerName: 'Fecha ingreso',
      width: 200,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
          {new Date(params.value).toDateString()}
        </div>
      ),
    },
    {
      field: 'distribucion_confirmada',
      headerName: '¿Despacho distribuido?',
      width: 200,
      renderCell: (params) => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        return params.row.distribucion_confirmada ? (
          <Chip size="small" label="SI" color="success" variant="outlined" />
        ) : (
          <Chip size="small" label="NO" color="error" variant="outlined" />

        );
      },
    },
    {
      field: 'observacion_distribucion',
      headerName: 'Observación',
      width: 350,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
          {params.value}
        </div>
      ),
    },

  ];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const control_error = (message: ToastContent = 'Algo pasó, intente de nuevo') =>
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const control_success = (message: ToastContent) =>
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });

    const search_viverista: any = (async () => {
      const numero: string = get_values("numero_despacho_consumo")??""
      try {
        const { data } = await api.get(
          `conservacion/despachos/get-list/?numero_despacho=${numero??""}`
        );
        console.log(data)
        if ("data" in data) {
          if(data.data.length > 0){
          dispatch(set_current_viverista(data.data[0]))
          control_success("Se selecciono el viverista")
        } else{
          control_error(data.detail)
        }
  
        } else {
          control_error(data.detail)
        }
      } catch (err) {
        console.log(err);
      }
    })

  

  

  const get_viveristas: any = (async () => {
    try {
      const { data } = await api.get(
        `conservacion/despachos/get-list/`
      );
      console.log(data)
      if ("data" in data) {
        if (data.data.length > 0) {
          set_despachos(data.data)
          control_success("Se encontraron despachos")
        } else {
          control_error("No se encontraron despachos")
          set_despachos([])
        }
      }
    } catch (err) {
      console.log(err);
    }
  })

  return (
    <>
      <Grid
        container
        direction="row"
        padding={2}
        borderRadius={2}
      >
        <BuscarModelo
          set_current_model={set_current_viverista}
          row_id={"id_vivero"}
          columns_model={columns_viveristas}
          models={[]}
          get_filters_models={get_viveristas}
          set_models={set_viveristas}
          button_submit_label='Buscar Vivero'
          form_inputs={[
            {
              datum_type: "input_controller",
              xs: 12,
              md: 6,
              control_form: control_viverista,
              control_name: "tipo_documento",
              default_value: "",
              rules: {required_rule: { rule: true, message: "Debe seleccionar despacho" }},
              label: "Tipo de documento",
              type: "text",
              disabled: false,
              helper_text: "",
              on_blur_function: search_viverista
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 6,
              control_form: control_viverista,
              control_name: "numero_documento",
              default_value: "",
              rules: {required_rule: { rule: true, message: "Debe seleccionar despacho" }},
              label: "Número de identificación",
              type: "text",
              disabled: false,
              helper_text: "",
              on_blur_function: search_viverista
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 6,
              control_form: control_viverista,
              control_name: "nombre_viverista",
              default_value: "",
              rules: {required_rule: { rule: true, message: "Debe seleccionar despacho" }},
              label: "Nombre",
              type: "text",
              disabled: false,
              helper_text: "",
              on_blur_function: search_viverista
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 6,
              control_form: control_viverista,
              control_name: "fecha_inicio_periodo",
              default_value: "",
              rules: {},
              label: "Fecha de inicio",
              type: "text",
              disabled: true,
              helper_text: ""
            },

          ]}
          modal_select_model_title='Buscar despacho'
          modal_form_filters={[
            {
              datum_type: "input_controller",
              xs: 12,
              md: 2,
              control_form: control_viverista,
              control_name: "numero_despacho_consumo",
              default_value: "",
              rules: {},
              label: "Numero despacho",
              type: "number",
              disabled: false,
              helper_text: "",
            }
          ]}
        />
      </Grid>
    </>
  );
}

// eslint-disable-next-line no-restricted-syntax
export default SeleccionarViverista;