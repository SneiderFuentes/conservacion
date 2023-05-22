
import { useForm } from 'react-hook-form';
import { Avatar, Grid, IconButton, Tooltip } from '@mui/material';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import { type IObjMezcla, type IObjPreparacionMezcla, type IObjBienes } from "../interfaces/mezcla_preparacion";
import { set_mezclas, set_current_mezcla, set_current_preparacion, set_preparaciones, set_current_bien } from '../store/slice/produccionSlice';
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
return (
    <>
        <Grid
            container
            direction="row"
            padding={2}
            borderRadius={2}
        >
            <BuscarModelo
                set_current_model={set_current_bien}
                row_id={"id_bien"}
                columns_model={columns_bienes}
                models={bienes}
                get_filters_models={null}
                set_models={set_bienes}
                button_submit_label='Búsqueda de insumos'
                form_inputs={[
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_bien,
                        control_name: "codigo_bien",
                        default_value: "",
                        rules: { required_rule: { rule: true, message: "Codigo bien requerido" } },
                        label: "Codigo bien",
                        type: "text",
                        disabled: false,
                        helper_text: "",
                    },
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_bien,
                        control_name: "nombre_bien",
                        default_value: "",
                        rules: { required_rule: { rule: true, message: "Debe seleccionar un bien" } },
                        label: "Nombre",
                        type: "text",
                        disabled: true,
                        helper_text: ""
                    },
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_bien,
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
                        control_form: control_bien,
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
                        control_form: control_bien,
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
                form_inputs_list={[
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 2,
                        control_form: control_preparacion,
                        control_name: "cantidad_usada",
                        default_value: "",
                        rules: { required_rule: { rule: true, message: "Ingrese cantidad" } },
                        label: "Cantidad usada",
                        type: "number",
                        disabled: false,
                        helper_text: ""
                    },
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 2,
                        control_form: control_bien,
                        control_name: "unidad_disponible",
                        default_value: "",
                        rules: { required_rule: { rule: true, message: "Debe seleccionar bien" } },
                        label: "Unidad",
                        type: "text",
                        disabled: true,
                        helper_text: ""
                    },
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 5,
                        control_form: control_siembra,
                        control_name: "observaciones",
                        default_value: "",
                        rules: { required_rule: { rule: true, message: "Observación requerido" } },
                        label: "Observación",
                        type: "text",
                        multiline_text: true,
                        rows_text: 4,
                        disabled: false,
                        helper_text: ""
                    },

                ]}
                title_list='Bienes consumidos'
                list={aux_planting_goods}
                add_item_list={handle_submit_siembra(on_submit_siembra)}
                add_list_button_label={action}
                columns_list={columns_bienes_siembra}
                row_list_id={"id_consumo_siembra"}
                modal_select_model_title='Buscar bien'
                modal_form_filters={[
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_bien,
                        control_name: "codigo_bien",
                        default_value: "",
                        rules: {},
                        label: "Codigo bien",
                        type: "number",
                        disabled: false,
                        helper_text: "",
                    },
                    {
                        datum_type: "input_controller",
                        xs: 12,
                        md: 3,
                        control_form: control_bien,
                        control_name: "nombre_bien",
                        default_value: "",
                        rules: {},
                        label: "Nombre",
                        type: "text",
                        disabled: false,
                        helper_text: ""
                    },
                ]}
            />
            
        </Grid>
    </>
);
}
// eslint-disable-next-line no-restricted-syntax
export default SeleccionarBienPreparacion;