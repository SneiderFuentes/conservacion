
import { useForm } from 'react-hook-form';
import { Avatar, Grid, IconButton, Tooltip } from '@mui/material';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import { type IObjMezcla, type IObjPreparacionMezcla, type IObjBienes } from "../interfaces/mezcla_preparacion";
import { set_mezclas, set_current_mezcla, set_current_preparacion, set_preparaciones, set_current_bien, set_bienes } from '../store/slice/produccionSlice';
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
const SeleccionarBienPreparacion = () => {


    const { control: control_bien, reset: reset_bien, getValues: get_values_bien} = useForm<IObjBienes>();
    const { control: control_preparacion, handleSubmit:handle_submit_preparacion, reset: reset_preparacion } = useForm<IObjPreparacionMezcla>();
   
    const [action, set_action] = useState<string>("agregar");
    const [aux_insumos, set_aux_insumos] = useState<IObjBienes[]>([]);
    const { preparaciones, nurseries, mezclas, bienes } = useAppSelector((state) => state.produccion);
    const dispatch = useAppDispatch();

    const columns_bienes: GridColDef[] = [
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
            field: 'saldo_disponible',
            headerName: 'Saldo disponible',
            width: 200,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
    ];

    const columns_bienes_siembra: GridColDef[] = [
        { field: 'id_bien_consumido', headerName: 'ID', width: 20 },
        {
            field: 'codigo_bien',
            headerName: 'Codigo',
            width: 150,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'nombre_bien',
            headerName: 'Nombre',
            width: 150,
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
            field: 'cantidad',
            headerName: 'Cantidad',
            width: 140,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'observaciones',
            headerName: 'Observacion',
            width: 150,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'acciones',
            headerName: 'Acciones',
            width: 90,
            renderCell: (params) => (
                <>
                    
                        <Tooltip title="Editar">
                            <IconButton
                                onClick={() => {
                                    edit_bien_siembra(params.row)

                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        background: '#fff',
                                        border: '2px solid',
                                    }}
                                    variant="rounded"
                                >
                                    <EditIcon
                                        sx={{ color: 'primary.main', width: '18px', height: '18px' }}
                                    />

                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    
                        <Tooltip title="Borrar">
                            <IconButton
                                onClick={() => {
                                    delete_bien_siembra(params.row)
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        background: '#fff',
                                        border: '2px solid',
                                    }}
                                    variant="rounded"
                                >
                                    <DeleteIcon
                                        sx={{ color: 'primary.main', width: '18px', height: '18px' }}
                                    />

                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    
                </>
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
                   
                ]}
                form_inputs_list={[
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
                title_list='Insumos consumidos'
                list={aux_insumos}
                add_item_list={null}
                add_list_button_label={action}
                columns_list={columns_bienes}
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