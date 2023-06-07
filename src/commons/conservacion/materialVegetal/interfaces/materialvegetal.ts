import { type Persona } from '../../../../interfaces/globalModels';

export interface IMaterialVegetal {
  nurseries: IObjNursery[];
  current_nursery: IObjNursery;
  vegetal_materials: IObjVegetalMaterial[];
  germination_beds: IObjGerminationBed[];
  current_germination_beds: IObjGerminationBed[];
  planting_goods: IObjPlantingGoods[];
  goods: IObjGoods[];
  current_good: IObjGoods;
  plantings: IObjPlanting[];
  current_planting: IObjPlanting;
  persons: Persona[];
  planting_person: Persona;
  registros_mortalidad : IObjRegistrarMortalidad[];
  current_registro_mortalidad:IObjRegistrarMortalidad;
  actualizaciones_mortalidad: IObjActualizarMortalidad[];
  current_actualizacion_mortalidad:IObjActualizarMortalidad;
  filtros_viveros: IObjObtenerViveroFiltro[];
  current_filtro_vivero:IObjObtenerViveroFiltro;
  obtener_material_vegetal: IObjObtenerMaterialVegetal[];
  current_obtener_material_vegetal: IObjObtenerMaterialVegetal;
  obtener_mortalidad: IObjObtenerMortalidad[];
  current_obtener_mortalidad: IObjObtenerMortalidad;
  
}


export interface IObjPlantingGoods {
  id_consumo_siembra: number|null;
  id_siembra: number|null;
  id_bien_consumido: number|null;
  cantidad: number|null;
  observaciones: string|null;
  id_mezcla_consumida: number|null;
  codigo_bien: string|null;
  nombre_bien: string|null;
  tipo_bien: string|null;
}

export interface IObjPlanting {
  id_siembra: number | null;
  nro_lote: number | null;
  fecha_siembra: string | null;
  agno_lote: number | null;
  id_vivero: number | null;
  cama_germinacion: number[] | null;
  id_bien_sembrado: number | null;
  distancia_entre_semillas: number | null;
  id_persona_siembra: string | number | null;
  observaciones: string | null;
  ruta_archivo_soporte: string | null;
}

export interface IObjGoods {
  id_inventario_vivero: number | null;
  cantidad_entrante: number | null;
  id_vivero: number | null;
  id_bien: number | null;
  codigo_bien: string | null;
  nombre_bien: string | null;
  tipo_bien: string | null;
  cantidad_disponible_bien: number | null;
  unidad_disponible?: string | null;
}

export interface IObjGerminationBed {
  id_cama_germinacion_vivero: number | null;
  nombre: string;
  nro_de_orden: number | null;
  observacion: string;
  item_activo: boolean | null;
  item_ya_usado: boolean | null;
  id_vivero: number | null;
}

export interface IObjVegetalMaterial {
  id_bien?: number | null;
  codigo_bien: string | null;
  nro_elemento_bien: number | null;
  nombre: string;
  cod_tipo_bien?: string | null;
  cod_tipo_activo: string | null;
  nivel_jerarquico: number | null;
  nombre_cientifico: string | null;
  descripcion: string;
  doc_identificador_nro: string | null;
  cod_metodo_valoracion: number | null;
  cod_tipo_depreciacion: number | null;
  cantidad_vida_util: number | null;
  valor_residual: number | null;
  stock_minimo: number | null;
  stock_maximo: number | null;
  solicitable_vivero: boolean;
  tiene_hoja_vida: boolean;
  maneja_hoja_vida: boolean;
  visible_solicitudes: boolean;
  id_marca?: number | null;
  id_unidad_medida?: number | null;
  id_porcentaje_iva?: number | null;
  id_unidad_medida_vida_util?: number | null;
  id_bien_padre?: number | null;
  nombre_padre?: string | null;
}

export interface IObjNursery {
  id_vivero: number | null;
  nombre: string ;
  cod_municipio: string | null;
  direccion: string | null;
  area_mt2: number | null;
  area_propagacion_mt2: number | null;
  tiene_area_produccion: boolean | null;
  tiene_areas_pep_sustrato: boolean | null;
  tiene_area_embolsado: boolean | null;
  cod_tipo_vivero: string | null;
  fecha_inicio_viverista_actual: string | null;
  cod_origen_recursos_vivero: string | null;
  fecha_creacion: string | Date | null;
  en_funcionamiento: boolean | null;
  fecha_ultima_apertura: string | Date | null;
  justificacion_apertura: string | null;
  fecha_cierre_actual: string | Date | null;
  justificacion_cierre: string | null;
  vivero_en_cuarentena: boolean | null;
  fecha_inicio_cuarentena: string | Date | null;
  justificacion_cuarentena: string | null;
  ruta_archivo_creacion: string | null;
  activo: boolean | null;
  item_ya_usado: boolean | null;
  id_viverista_actual: number | null;
  id_persona_crea: number | null;
  id_persona_abre: number | null;
  id_persona_cierra: number | null;
  id_persona_cuarentena: number | null;
}


export interface IObjRegistrarMortalidad {
  id_vivero: number | null;
	fecha_baja: string | Date | null;
	motivo: string | null;
  id_item_baja_viveros: number | null;
  id_bien: number | null;
  agno_lote: number | null;
  nro_lote: number | null;
  cod_etapa_lote: string | null;
  consec_cuaren_por_lote_etapa: string | null;
  cantidad_baja: number | null;
  observaciones: string | null;
  nro_posicion: number | null;
}

export interface IObjActualizarMortalidad {
  id_item_baja_viveros:number | null;
  id_bien: number | null;
  agno_lote: number | null;
  nro_lote: number | null;
  cod_etapa_lote: string | null;
  consec_cuaren_por_lote_etapa: string | null;
  cantidad_baja: number | null;
  observaciones: string | null;
  nro_posicion: number | null;
  justificacion_anulacion?: string | null;
}

export interface IObjObtenerViveroFiltro {
  id_vivero: number | null;
  nombre: string | null;
  cod_municipio: string | null;
  direccion: string | null;
  area_mt2: number | null;
  area_propagacion_mt2: number | null;
  tiene_area_produccion: boolean | null;
  tiene_areas_pep_sustrato: boolean | null;
  tiene_area_embolsado: boolean | null;
  cod_tipo_vivero: string | null;
  fecha_inicio_viverista_actual: string | Date | null;
  cod_origen_recursos_vivero: string | null;
  fecha_creacion: string | Date | null;
  en_funcionamiento: boolean | null;
  fecha_ultima_apertura: string | Date | null;
  justificacion_apertura: string | null;
  fecha_cierre_actual: string | Date | null;
  justificacion_cierre: string | null;
  vivero_en_cuarentena: string | null;
  fecha_inicio_cuarentena: string | Date | null;
  justificacion_cuarentena: string | null;
  ruta_archivo_creacion: string | null;
  activo: boolean | null;
  item_ya_usado: boolean | null;
  id_viverista_actual: number | null;
  id_persona_crea: number | null;
  id_persona_abre: number | null;
  id_persona_cierra: number | null;
  id_persona_cuarentena: number | null;
}

export interface IObjObtenerMaterialVegetal {
  id_inventario_vivero: number | null;
  id_bien: number | null;
  codigo_bien: string | null;
  nombre_bien: string | null;
  agno_lote: number | null;
  nro_lote: number | null;
  cod_etapa_lote: string | null;
  desc_etapa_lote: string | null;
  saldo_disponible: number | null;
  unidad_medida: string | null;
  registros_cuarentena: string | null;
}

export interface IObjObtenerMortalidad {
  id_baja: number | null;
  tipo_baja: string | null;
  nro_baja_por_tipo: number | null;
  fecha_baja: string | Date | null;
  fecha_registro: string | Date | null;
  motivo: string | null;
  baja_anulado:boolean | null;
  justificacion_anulacion: string | null;
  fecha_anulacion: string | Date | null;
  ruta_archivo_soporte: string | null;
  id_vivero: number | null;
  nombre_vivero: string | null;
  id_persona_baja: number | null;
  persona_baja: string | null;
  id_persona_anula: number | null;
  persona_anula: string | null;
  items_mortalidad: string | null;
}

export interface IObjDatosMortalidad {
  id_item_baja_viveros: number | null;
  codigo_bien: string | null;
  nombre_bien: string | null;
  unidad_medida: string | null;
  desc_etapa_lote: string | null;
  agno_lote: number | null;
  nro_lote: number | null;
  cod_etapa_lote: string | null;
  consec_cuaren_por_lote_etapa: string | null;
  cantidad_baja: number | null;
  observaciones: string | null;
  nro_posicion: number | null;
  id_baja: number | null;
  id_bien: number | null;
}

export interface IObjHistorialMortalidad {
  id_item_baja_viveros: number | null;
  consecutivo_mortalidad: number | null;
  fecha_mortalidad: string |Date | null;
  cantidad_mortalidad: number | null;
  observaciones: string | null;
  realizado_por: string | null;
}