import { useState } from 'react';
import { api } from '../../../../api/axios';
import { Chip, Grid } from '@mui/material';
import { type ToastContent, toast } from 'react-toastify';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import {  useAppDispatch } from '../../../../hooks';
import { set_genera_bajas, set_current_genera_baja,set_bienes_bajas,set_current_bien_baja, set_viveristas, set_current_viverista, set_historicos_viveristas, set_current_historico_viverista, set_nuevos_viveristas, set_current_nuevo_viverista} from '../store/slice/viveroSlice';
import { IObjBienBaja } from '../interfaces/vivero';


interface IProps {
    control_bienes_bajas: any;
    get_values: any
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/explicit-function-return-type
  const BajasBienes = ({
    control_bienes_bajas,
    get_values
  }: IProps) => {
    const dispatch= useAppDispatch()
  
    
  
  
    const [bienes_bajas, set_current_bien_baja] = useState< IObjBienBaja []>([]);
  
    const columns_bienes: GridColDef[] = [
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
  
      const search_despacho: any = (async () => {
        const numero: string = get_values("numero_despacho_consumo")??""
        try {
          const { data } = await api.get(
            `conservacion/despachos/get-list/?numero_despacho=${numero??""}`
          );
          console.log(data)
          if ("data" in data) {
            if(data.data.length > 0){
            dispatch(set_current_genera_baja(data.data[0]))
            control_success("Se selecciono el despacho ")
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
  
        const get_despachos: any = (async () => {
      try {
        const { data } = await api.get(
          `conservacion/despachos/get-list/`
        );
        console.log(data)
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
            set_current_model={set_current_bien_baja}
            row_id={"id_vivero"}
            columns_model={columns_bienes}
            models={[]}
            get_filters_models={[]}
            set_models={set_genera_bajas}
            button_submit_label='Buscar despacho'
            form_inputs={[
              {
                datum_type: "title",
                title_label: "Seleccione bien"
            },
            {
                datum_type: "input_controller",
                xs: 12,
                md: 3,
                control_form: control_bienes_bajas,
                control_name: "codigo_bien",
                default_value: "",
                rules: {required_rule: { rule: true, message: "Codigo bien requerido" }},
                label: "Codigo bien",
                type: "number",
                disabled: true,
                helper_text: "",
            },
            {
                datum_type: "input_controller",
                xs: 12,
                md: 3,
                control_form: control_bienes_bajas,
                control_name: "nombre_bien",
                default_value: "",
                rules: {required_rule: { rule: true, message: "Debe seleccionar un bien" }},
                label: "Nombre",
                type: "text",
                disabled: true,
                helper_text: ""
            },
            {
                datum_type: "input_controller",
                xs: 12,
                md: 3,
                control_form: control_bienes_bajas,
                control_name: "cantidad_restante",
                default_value: "",
                rules: {required_rule: { rule: true, message: "Debe seleccionar un bien" }},
                label: "Cantidad restante",
                type: "text",
                disabled: true,
                helper_text: ""
            },
        ]}
        form_inputs_list={[
          {
            datum_type: "input_controller",
            xs: 12,
            md: 3,
            control_form: control_bienes_bajas,
            control_name: "cantidad_usada",
            default_value: "",
            rules: { required_rule: { rule: true, message: "Debe seleccionar un bien" } },
            label: "Cantidad Usada",
            type: "text",
            disabled: true,
            helper_text: ""
        },
        {
            datum_type: "input_controller",
            xs: 12,
            md: 3,
            control_form: control_bienes_bajas,
            control_name: "saldo_disponible",
            default_value: "",
            rules: { required_rule: { rule: true, message: "Debe seleccionar un bien" } },
            label: "Disponible",
            type: "text",
            disabled: true,
            helper_text: ""
        },
        {
            datum_type: "input_controller",
            xs: 12,
            md: 12,
            control_form: control_bienes_bajas,
            control_name: "observaciones",
            default_value: "",
            rules: { required_rule: { rule: true, message: "Observación requerida" } },
            label: "Observacion",
            type: "text",
            multiline_text: true,
            rows_text: 4,
            disabled: false,
            helper_text: ""
          },

            
            ]} modal_select_model_title={''} modal_form_filters={[]}                      />
        </Grid>
      </>
    );
  }
  
  // eslint-disable-next-line no-restricted-syntax
  export default BajasBienes;