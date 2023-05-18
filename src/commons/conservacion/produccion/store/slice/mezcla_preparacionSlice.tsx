import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  type IObjNursery,
  type IObjVegetalMaterial,
  type IObjChange,
  type IProduccion,
  type IObjMezcla
} from '../../interfaces/mezcla_preparacion';
import { type Persona } from "../../../../../interfaces/globalModels";



export const initial_state_change: IObjChange = {
  id_cambio_de_etapa: null,
  id_bien: null,
  id_vivero: null,
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote_origen: "",
  fecha_cambio: (new Date().toString()),
  cantidad_disponible_al_crear: null,
  cantidad_movida: null,
  altura_lote_en_cms: null,
  observaciones: "",
  id_persona_cambia: null,
  ruta_archivo_soporte: ""
}
export const initial_state_current_mezcla: IObjMezcla = {
  id_vivero: null,
  cantidad_usada: null,
  nro_posicion: null,
  nombre: "",
  id_mezcla: null,
  item_activo: true,
  item_ya_usado: false,
  id_unidad_medida: null,
  fecha_preparacion: (new Date().toString()),
  observaciones: "",
  cantidad_creada: null,
  id_bien_usado: null,
  succes: true,
  detail: "",
  id_preparacion_mezcla: null,
  consec_vivero_mezclas : null,
  fecha_registro: (new Date().toString()),
  preparacion_anulada: false,
  justificacion_anulacion: "",
  fecha_anulacion: (new Date().toString()),
  id_persona_prepara: null,
  id_persona_anula:  null,
  id_bien: null,
  unidad_medida: "",
  saldo_disponible: null,
  codigo_bien :  null,
  id_item_preparacion_mezcla: null,
}

export const initial_statate_current_vegetal_material: IObjVegetalMaterial = {
  id_inventario_vivero: null,
  id_bien: null,
  codigo_bien: "",
  nombre: "",
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote: null,
  etapa_lote: "",
  cantidad_disponible: null,
}

const initial_state_current_nursery = {
  id_vivero: null,
  nombre: '',
  cod_municipio: '',
  direccion: '',
  area_mt2: null,
  area_propagacion_mt2: null,
  tiene_area_produccion: false,
  tiene_areas_pep_sustrato: false,
  tiene_area_embolsado: false,
  cod_tipo_vivero: null,
  fecha_inicio_viverista_actual: null,
  cod_origen_recursos_vivero: null,
  fecha_creacion: null,
  en_funcionamiento: true,
  fecha_ultima_apertura: null,
  justificacion_apertura: '',
  fecha_cierre_actual: null,
  justificacion_cierre: null,
  vivero_en_cuarentena: false,
  fecha_inicio_cuarentena: null,
  justificacion_cuarentena: null,
  ruta_archivo_creacion: null,
  activo: true,
  item_ya_usado: true,
  id_viverista_actual: null,
  id_persona_crea: null,
  id_persona_abre: null,
  id_persona_cierra: null,
  id_persona_cuarentena: null,
};
const initial_state_person: Persona = {
  id_persona: null,
  tipo_persona: "",
  tipo_documento: "",
  numero_documento: "",
  primer_nombre: "",
  segundo_nombre: "",
  primer_apellido: "",
  segundo_apellido: "",
  nombre_completo: "",
  razon_social: "",
  nombre_comercial: "",
  tiene_usuario: true,
}


const initial_state: IProduccion = {
  nurseries: [],
  current_nursery: initial_state_current_nursery,
  vegetal_materials: [],
  current_vegetal_material: initial_statate_current_vegetal_material,
  stage_changes: [],
  current_stage_change: initial_state_change,
  persons: [],
  changing_person: initial_state_person,
  mezclas: [],
  current_mezcla: initial_state_current_mezcla
}

export const mezcla_preparacionSlice = createSlice({
  name: 'mezcla_preparacion',
  initialState: initial_state,
  reducers: {
    set_nurseries: (state: IProduccion, action: PayloadAction<IObjNursery[]>) => {
      state.nurseries = action.payload;
    },
    set_current_nursery: (state: IProduccion, action: PayloadAction<IObjNursery>) => {
      state.current_nursery = action.payload;
    },
    set_vegetal_materials: (state: IProduccion, action: PayloadAction<IObjVegetalMaterial[]>) => {
      state.vegetal_materials = action.payload;
    },
    set_current_vegetal_material: (state: IProduccion, action: PayloadAction<IObjVegetalMaterial>) => {
      state.current_vegetal_material = action.payload;
    },

    set_stage_changes: (state: IProduccion, action: PayloadAction<IObjChange[]>) => {
      state.stage_changes = action.payload;
    },
    set_current_stage_change: (state: IProduccion, action: PayloadAction<IObjChange>) => {
      state.current_stage_change = action.payload;
    },
    set_persons: (state: IProduccion, action: PayloadAction<Persona[]>) => {
      state.persons = action.payload;
    },

    set_changing_person: (state: IProduccion, action: PayloadAction<Persona>) => {
      state.changing_person = action.payload;
    },
    set_mezclas: (state: IProduccion,action:PayloadAction <IObjMezcla[]>)=> {
      state.mezclas = action.payload;
    },
    set_current_mezcla: (state:IProduccion, action:PayloadAction <IObjMezcla> )=> {
      state.current_mezcla = action.payload;
    },
  },
});
export const { set_changing_person, set_persons, set_current_nursery, set_nurseries, set_vegetal_materials, set_stage_changes, set_current_stage_change, set_current_vegetal_material, set_mezclas, set_current_mezcla } = mezcla_preparacionSlice.actions;