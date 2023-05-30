import { useEffect, useState } from 'react';
import { api } from '../../../../api/axios';
import { type Persona } from "../../../../interfaces/globalModels";
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import BuscarModelo from "../../../../components/partials/getModels/BuscarModelo";
import { type GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { type AuthSlice } from '../../../auth/interfaces';
import { set_nurseries, set_vegetal_materials, set_stage_changes, set_changing_person, set_persons,set_current_funcionario,set_current_solicitud,set_current_unidad,set_current_vivero,set_funcionarios,set_unidades,set_viveros,set_solicitudes } from '../store/slice/solicitudmaterialSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { get_person_document_service, get_person_id_service, get_persons_service } from '../store/thunks/solictudmaterialThunks';

interface IProps {
    control_solicitud_vivero: any;
    get_values: any
  }
  const SolicitudesViveros = ({
    control_solicitud_vivero,
    get_values
  }: IProps) => {

  const columns_solicitud_vivero: GridColDef[] = [
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
    const get_vegetal_materials: any = (async () => {
    const code_bien = get_values("codigo_bien")
    const nombre_bien = get_values("nombre")
    const cod_etapa_lote_origen = get_values("cod_etapa_lote")
    const agno_lote = get_values("agno_lote")
    if (current_nursery.id_vivero !== null) {
    void dispatch(get_vegetal_materials_service(current_nursery.id_vivero, code_bien, nombre_bien, cod_etapa_lote_origen, agno_lote ));
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
          set_current_model={set_current_vegetal_material}
          row_id={"id_inventario_vivero"}
          columns_model={columns_material_vegetal}
          models={vegetal_materials}
          get_filters_models={get_vegetal_materials}
          set_models={set_vegetal_materials}
          button_submit_label='Buscar material vegetal'
          form_inputs={[
            {
              datum_type: "input_controller",
              xs: 12,
              md: 3,
              control_form: control_material_vegetal,
              control_name: "codigo_bien",
              default_value: "",
              rules: { required_rule: { rule: false, message: "requerido" } },
              label: "Codigo material vegetal",
              type: "text",
              disabled: true,
              helper_text: ""
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 3,
              control_form: control_material_vegetal,
              control_name: "nombre",
              default_value: "",
              rules: { required_rule: { rule: false, message: "requerido" } },
              label: "Nombre material vegetal",
              type: "text",
              disabled: true,
              helper_text: ""
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 2,
              control_form: control_material_vegetal,
              control_name: "nro_lote",
              default_value: "",
              rules: { required_rule: { rule: true, message: "Cantidad requerida" } },
              label: "Numero lote",
              type: "number",
              disabled: true,
              helper_text: ""
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 2,
              control_form: control_material_vegetal,
              control_name: "agno_lote",
              default_value: "",
              rules: { required_rule: { rule: true, message: "Cantidad requerida" } },
              label: "Año lote",
              type: "number",
              disabled: true,
              helper_text: ""
            },
            {
              datum_type: "select_controller",
              xs: 12,
              md: 2,
              control_form: control_material_vegetal,
              control_name: "cod_etapa_lote",
              default_value: "",
              rules: { required_rule: { rule: true, message: "requerido" } },
              label: "Etapa de lote",
              disabled: true,
              select_options: [{label: "Germinación", value: "G"}, {label: "Producción", value: "P"}],
              option_label: "label",
              option_key: "value",
          },
          ]}
          modal_select_model_title='Buscar material vegetal'
          modal_form_filters={[
            {
              datum_type: "input_controller",
              xs: 12,
              md: 2,
              control_form: control_material_vegetal,
              control_name: "codigo_bien",
              default_value: "",
              rules: { required_rule: { rule: false, message: "requerido" } },
              label: "Codigo material vegetal",
              type: "text",
              disabled: false,
              helper_text: ""
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 3,
              control_form: control_material_vegetal,
              control_name: "nombre",
              default_value: "",
              rules: { required_rule: { rule: false, message: "requerido" } },
              label: "Nombre material vegetal",
              type: "text",
              disabled: false,
              helper_text: ""
            },
            {
              datum_type: "input_controller",
              xs: 12,
              md: 2,
              control_form: control_material_vegetal,
              control_name: "agno_lote",
              default_value: "",
              rules: { required_rule: { rule: true, message: "Cantidad requerida" } },
              label: "Año lote",
              type: "number",
              disabled: false,
              helper_text: ""
            },
            {
              datum_type: "select_controller",
              xs: 12,
              md: 2,
              control_form: control_material_vegetal,
              control_name: "cod_etapa_lote",
              default_value: "",
              rules: { required_rule: { rule: true, message: "requerido" } },
              label: "Etapa de lote",
              disabled: false,
              select_options: [{label: "Germinación", value: "G"}, {label: "Producción", value: "P"}],
              option_label: "label",
              option_key: "value",
          },
          ]}
        />

      </Grid>
    </>
  );
}

// eslint-disable-next-line no-restricted-syntax
export default SeleccionarMaterialVegetal;