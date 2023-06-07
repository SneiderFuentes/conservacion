import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  type IObjNursery,
  type IObjVegetalMaterial,
  type IObjGerminationBed,
  type IObjPlantingGoods,
  type IObjGoods,
  type IObjPlanting,
  type IMaterialVegetal,
  IObjRegistrarMortalidad,
  IObjHistorialMortalidad,
  IObjActualizarMortalidad,
  IObjDatosMortalidad,
  IObjObtenerMaterialVegetal,
  IObjObtenerMortalidad,
  IObjObtenerViveroFiltro
} from '../../interfaces/materialvegetal';
import { type Persona } from "../../../../../interfaces/globalModels";



export const initial_state_planting: IObjPlanting = {
  id_siembra: null,
  nro_lote: null,
  fecha_siembra: (new Date().toString()),
  agno_lote: null,
  id_vivero: null,
  cama_germinacion: [],
  id_bien_sembrado: null,
  distancia_entre_semillas: null,
  id_persona_siembra: null,
  observaciones: "",
  ruta_archivo_soporte: ""
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

const initial_state_current_good: IObjGoods = {
  id_inventario_vivero: null,
  cantidad_entrante: null,
  id_vivero: null,
  id_bien: null,
  codigo_bien: "",
  nombre_bien: "",
  tipo_bien: null,
  cantidad_disponible_bien: null,
  unidad_disponible: null,
}

const initial_state_current_registro_mortalidad : IObjRegistrarMortalidad ={
  id_vivero: null,
  fecha_baja: "",
  motivo: "",
  id_item_baja_viveros: null,
  id_bien: null,
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote: "",
  consec_cuaren_por_lote_etapa: "",
  cantidad_baja: null,
  observaciones: "",
  nro_posicion: null,
}

const initial_state_current_actualizacion_mortalidad : IObjActualizarMortalidad = {
  id_item_baja_viveros:null,
  id_bien: null,
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote: "",
  consec_cuaren_por_lote_etapa: "",
  cantidad_baja: null,
  observaciones: "",
  nro_posicion: null,
  justificacion_anulacion: "",

}

const initial_state_current_filtro_vivero : IObjObtenerViveroFiltro = {
  id_vivero: null,
  nombre: "",
  cod_municipio: "",
  direccion: "",
  area_mt2: null,
  area_propagacion_mt2: null,
  tiene_area_produccion: true,
  tiene_areas_pep_sustrato: true,
  tiene_area_embolsado: true,
  cod_tipo_vivero: "",
  fecha_inicio_viverista_actual: "",
  cod_origen_recursos_vivero: "",
  fecha_creacion: "",
  en_funcionamiento: true,
  fecha_ultima_apertura: "",
  justificacion_apertura: "",
  fecha_cierre_actual: "",
  justificacion_cierre: "",
  vivero_en_cuarentena: "",
  fecha_inicio_cuarentena: "",
  justificacion_cuarentena: "",
  ruta_archivo_creacion: "",
  activo: true,
  item_ya_usado: true,
  id_viverista_actual: null,
  id_persona_crea: null,
  id_persona_abre: null,
  id_persona_cierra: null,
  id_persona_cuarentena: null,
}

const initial_state_current_obtener_material_vegetal : IObjObtenerMaterialVegetal = {
  id_inventario_vivero: null,
  id_bien: null,
  codigo_bien: "",
  nombre_bien: "",
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote: "",
  desc_etapa_lote: "",
  saldo_disponible: null,
  unidad_medida: "",
  registros_cuarentena: "",
}

const initial_state_current_obtener_mortalidad : IObjObtenerMortalidad = {
  id_baja: null,
  tipo_baja: "",
  nro_baja_por_tipo: null,
  fecha_baja: "",
  fecha_registro: "",
  motivo: "",
  baja_anulado:true,
  justificacion_anulacion: "",
  fecha_anulacion: "",
  ruta_archivo_soporte: "",
  id_vivero: null,
  nombre_vivero: "",
  id_persona_baja:  null,
  persona_baja: "",
  id_persona_anula: null,
  persona_anula: "",
  items_mortalidad: "",
}

const initial_state_current_datos_mortalidad : IObjDatosMortalidad = {
  id_item_baja_viveros: null,
  codigo_bien: "",
  nombre_bien: "",
  unidad_medida: "",
  desc_etapa_lote: "",
  agno_lote: null,
  nro_lote: null,
  cod_etapa_lote: "",
  consec_cuaren_por_lote_etapa: "",
  cantidad_baja: null,
  observaciones: "",
  nro_posicion: null,
  id_baja: null,
  id_bien: null,
}

const initial_state_current_historial_mortalidad : IObjHistorialMortalidad = {
  id_item_baja_viveros: null,
  consecutivo_mortalidad: null,
  fecha_mortalidad: "",
  cantidad_mortalidad: null,
  observaciones: "",
  realizado_por: "",
}

const initial_state: IMaterialVegetal = {
  nurseries: [],
  current_nursery: initial_state_current_nursery,
  vegetal_materials: [],
  germination_beds: [],
  current_germination_beds: [],
  planting_goods: [],
  goods: [],
  current_good: initial_state_current_good,
  plantings: [],
  current_planting: initial_state_planting,
  persons: [],
  planting_person: initial_state_person,
  registros_mortalidad : [],
  current_registro_mortalidad:initial_state_current_registro_mortalidad,
  actualizaciones_mortalidad:[],
  current_actualizacion_mortalidad:initial_state_current_actualizacion_mortalidad,
  filtros_viveros: [],
  current_filtro_vivero:initial_state_current_filtro_vivero,
  obtener_material_vegetal: [],
  current_obtener_material_vegetal: initial_state_current_obtener_material_vegetal,
  obtener_mortalidad: [],
  current_obtener_mortalidad: initial_state_current_obtener_mortalidad,
  datos_mortalidad: [],
  current_datos_mortalidad: initial_state_current_datos_mortalidad,
  historial_mortalidad: [],
  current_historial_mortalidad: initial_state_current_historial_mortalidad,
}



export const material_vegetal_slice = createSlice({
  name: 'material_vegetal',
  initialState: initial_state,
  reducers: {
    set_nurseries: (state: IMaterialVegetal, action: PayloadAction<IObjNursery[]>) => {
      state.nurseries = action.payload;
    },
    set_current_nursery: (state: IMaterialVegetal, action: PayloadAction<IObjNursery>) => {
      state.current_nursery = action.payload;
    },
    set_vegetal_materials: (state: IMaterialVegetal, action: PayloadAction<IObjVegetalMaterial[]>) => {
      state.vegetal_materials = action.payload;
    },

    set_germination_beds: (state: IMaterialVegetal, action: PayloadAction<IObjGerminationBed[]>) => {
      state.germination_beds = action.payload;
    },

    set_current_germination_beds: (state: IMaterialVegetal, action: PayloadAction<IObjGerminationBed[]>) => {
      state.current_germination_beds = action.payload;
    },

    set_planting_goods: (state: IMaterialVegetal, action: PayloadAction<IObjPlantingGoods[]>) => {
      state.planting_goods = action.payload;
    },

    set_goods: (state: IMaterialVegetal, action: PayloadAction<IObjGoods[]>) => {
      state.goods = action.payload;
    },

    set_current_good: (state: IMaterialVegetal, action: PayloadAction<IObjGoods>) => {
      state.current_good = action.payload;
    },

    set_plantings: (state: IMaterialVegetal, action: PayloadAction<IObjPlanting[]>) => {
      state.plantings = action.payload;
    },

    set_current_planting: (state: IMaterialVegetal, action: PayloadAction<IObjPlanting>) => {
      state.current_planting = action.payload;
    },
    set_persons: (state: IMaterialVegetal, action: PayloadAction<Persona[]>) => {
      state.persons = action.payload;
    },

    set_planting_person: (state: IMaterialVegetal, action: PayloadAction<Persona>) => {
      state.planting_person = action.payload;
    },
    set_registros_mortalidad : (state: IMaterialVegetal, action: PayloadAction<IObjRegistrarMortalidad[]>) => {
      state.registros_mortalidad  = action.payload;
    },

    set_current_registro_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjRegistrarMortalidad>) => {
      state.current_registro_mortalidad = action.payload;
    },
    set_actualizaciones_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjActualizarMortalidad[]>) => {
      state.actualizaciones_mortalidad = action.payload;
    },

    set_current_actualizacion_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjActualizarMortalidad>) => {
      state.current_actualizacion_mortalidad = action.payload;
    },
    set_filtros_viveros: (state: IMaterialVegetal, action: PayloadAction<IObjObtenerViveroFiltro[]>) => {
      state.filtros_viveros = action.payload;
    },

    set_current_filtro_vivero: (state: IMaterialVegetal, action: PayloadAction<IObjObtenerViveroFiltro>) => {
      state.current_filtro_vivero = action.payload;
    },
    set_obtener_material_vegetal: (state: IMaterialVegetal, action: PayloadAction<IObjObtenerMaterialVegetal[]>) => {
      state.obtener_material_vegetal = action.payload;
    },

    set_current_obtener_material_vegetal: (state: IMaterialVegetal, action: PayloadAction<IObjObtenerMaterialVegetal>) => {
      state.current_obtener_material_vegetal = action.payload;
    },
    set_obtener_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjObtenerMortalidad[]>) => {
      state.obtener_mortalidad = action.payload;
    },

    set_current_obtener_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjObtenerMortalidad>) => {
      state.current_obtener_mortalidad = action.payload;
    },
    set_datos_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjDatosMortalidad[]>) => {
      state.datos_mortalidad = action.payload;
    },

    set_current_datos_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjDatosMortalidad>) => {
      state.current_datos_mortalidad = action.payload;
    },
    set_historial_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjHistorialMortalidad[]>) => {
      state.historial_mortalidad = action.payload;
    },

    set_current_historial_mortalidad: (state: IMaterialVegetal, action: PayloadAction<IObjHistorialMortalidad>) => {
      state.current_historial_mortalidad = action.payload;
    },
  },
});
export const { set_actualizaciones_mortalidad, set_current_actualizacion_mortalidad, set_current_datos_mortalidad, set_current_filtro_vivero, set_current_historial_mortalidad,set_current_obtener_material_vegetal, set_current_obtener_mortalidad, set_current_registro_mortalidad, set_datos_mortalidad, set_filtros_viveros, set_historial_mortalidad, set_obtener_material_vegetal, set_obtener_mortalidad,set_registros_mortalidad,set_persons, set_current_good, set_goods, set_planting_person, set_current_nursery, set_nurseries, set_vegetal_materials, set_germination_beds, set_current_germination_beds, set_planting_goods, set_plantings, set_current_planting } = material_vegetal_slice.actions;
