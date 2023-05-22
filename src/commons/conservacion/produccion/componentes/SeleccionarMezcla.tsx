
import { useForm } from 'react-hook-form';
import { Avatar, Grid, IconButton, Tooltip } from '@mui/material';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import { type IObjMezcla, type IObjPreparacionMezcla, type IObjBienes } from "../interfaces/mezcla_preparacion";
import { set_mezclas, set_current_mezcla, set_current_preparacion, set_preparaciones } from '../store/slice/produccionSlice';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// const initial_state_item: IObjPlantingGoods = {
//     id_item_despacho_entrante:  null,
//     id_siembra: null,
//     id_bien: null,
//     cantidad_entrante: null,
//     cantidad_distribuida: null,
//     codigo_bien: null,
//     nombre_bien: "",
//     cantidad_restante: null,
// }

// const initial_state_distribucion: IObjPlantingGoods = {
//     id_vivero: null,
//     cantidad_asignada: null,
// }

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/explicit-function-return-type
const SeleccionarBienSiembra = () => {


    const { control: control_preparacion, reset: reset_preparacion, getValues: get_values_preparacion} = useForm<IObjPreparacionMezcla>();
    // const { control: control_siembra, handleSubmit:handle_submit_siembra, reset: reset_siembra } = useForm<IObjPlantingGoods>();
   
    const [action, set_action] = useState<string>("agregar");

    const { preparaciones, nurseries, mezclas } = useAppSelector((state) => state.produccion);
    const dispatch = useAppDispatch();

    const columns_praparacion: GridColDef[] = [
        { field: 'id_bien', headerName: 'ID', width: 20 },
        {
            field: 'codigo_bien',
            headerName: 'Codigo',
            width: 200,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'nombre_bien',
            headerName: 'Nombre',
            width: 200,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'tipo_bien',
            headerName: 'Tipo',
            width: 200,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'cantidad_entrante',
            headerName: 'Cantidad entrante',
            width: 150,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'cantidad_disponible_bien',
            headerName: 'Cantidad disponible',
            width: 150,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'unidad_disponible',
            headerName: 'unidad',
            width: 150,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },

    ];

    

    return (
        <>
            <Grid
                container
                direction="row"
                padding={2}
                borderRadius={2}
            >
                <BuscarModelo
                    set_current_model={set_current_preparacion}
                    row_id={"id_preparacion_mezcla"}
                    columns_model={columns_preparacion}
                    models={preparaciones}
                    get_filters_models={null}
                    set_models={set_preparaciones}
                    button_submit_label='Buscar preparaciones'
                    form_inputs={[
                        {
                        datum_type: "select_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_preparacion,
                        control_name: "id_vivero",
                        default_value: "",
                        rules: { required_rule: { rule: true, message: "Vivero requerido" } },
                        label: "Vivero",
                        disabled: false,
                        helper_text: "Seleccione Vivero",
                        select_options: nurseries,
                        option_label: "nombre",
                        option_key: "id_vivero",
                        },
                        {
                            datum_type: "select_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "id_mezcla",
                            default_value: "",
                            rules: { required_rule: { rule: true, message: "Mezcla requerida" } },
                            label: "Mezcla",
                            disabled: false,
                            helper_text: "Seleccione Mezcla",
                            select_options: mezclas,
                            option_label: "nombre",
                            option_key: "id_mezcla",
                            },
                        {
                            datum_type: "input_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "consec_vivero_mezclas",
                            default_value: "",
                            rules: { required_rule: { rule: true, message: "Consecutivo mezcla requerido" } },
                            label: "Consecutivo mezcla en vivero",
                            type: "number",
                            disabled: false,
                            helper_text: "",
                        },
                        {
                            datum_type: "input_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "fecha_preparacion",
                            default_value: "",
                            rules: { required_rule: { rule: true, message: "Debe seleccionar fecha" } },
                            label: "Fecha de preparación",
                            type: "text",
                            disabled: true,
                            helper_text: ""
                        },
                        {
                            datum_type: "input_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "cantidad_creada",
                            default_value: "",
                            rules: { required_rule: { rule: true, message: "Debe seleccionar cantidad a crear" } },
                            label: "Cantidad creada",
                            type: "number",
                            disabled: true,
                            helper_text: ""
                        },
                        {
                            datum_type: "input_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "nombre_persona_prepara",
                            default_value: "",
                            rules: { required_rule: { rule: true, message: "Debe seleccionar la personas que la creó" } },
                            label: "Preparación realizada por",
                            type: "text",
                            disabled: true,
                            helper_text: ""
                        },
                        {
                            datum_type: "input_controller",
                            xs: 12,
                            md: 12,
                            control_form: control_preparacion,
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
                    ]}
                    modal_select_model_title='Buscar siembra'
                    modal_form_filters={[
                      {
                        datum_type: "select_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_preparacion,
                        control_name: "id_vivero",
                        default_value: "",
                        rules: {},
                        label: "Vivero",
                        disabled: false,
                        helper_text: "Seleccione Vivero",
                        select_options: nurseries,
                        option_label: "Id Vivero",
                        option_key: "id_vivero",
                        },
                        {
                            datum_type: "select_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "id_mezcla",
                            default_value: "",
                            rules: {},
                            label: "Mezcla",
                            disabled: false,
                            helper_text: "Seleccione Mezcla",
                            select_options: mezclas,
                            option_label: "Id mezcla",
                            option_key: "id_mezcla",
                        },
                        {
                            datum_type: "input_controller",
                            xs: 12,
                            md: 3,
                            control_form: control_preparacion,
                            control_name: "nombre_mezcla",
                            default_value: "",
                            rules: {},
                            label: "Nombre de la mezcla",
                            type: "text",
                            disabled: true,
                            helper_text: ""
                        },
                     ]}   
                />
            </Grid>
        </>
    );
}

// eslint-disable-next-line no-restricted-syntax
export default SeleccionarBienSiembra;